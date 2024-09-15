import React, { useState, useMemo } from "react";
import {
  Button,
  Modal,
  Box,
  TextField,
  Typography,
  Grid,
  Paper,
  Card,
  CardContent,
  CardHeader,
} from "@mui/material";
import TableContainer from "../../Components/Common/TableContainerReactTable";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import { Pie, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  PointElement,
  LineElement,
} from "chart.js";

// Register required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const MySwal = withReactContent(Swal);

const generateColors = (numColors) => {
  const colors = [];
  for (let i = 0; i < numColors; i++) {
    const hue = (i * 360) / numColors;
    colors.push(`hsl(${hue}, 70%, 30%)`); // Darker color
  }
  return colors;
};

function ZoneTable() {
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    designation: "",
    company: "",
    location: "",
  });
  const [data, setData] = useState([
    {
      id: "10",
      name: "Tyrone",
      email: "23",
      designation: "35",
      company: "2",
      location: "Qatar",
    },
    {
      id: "09",
      name: "Cathy",
      email: "23",
      designation: "35",
      company: "2",
      location: "Mexico",
    },
    // Add more initial data if needed
  ]);
  const [currentPage, setCurrentPage] = useState(0);

  const handleOpen = (id = null) => {
    if (id) {
      // Edit mode
      const itemToEdit = data.find((item) => item.id === id);
      setFormData(itemToEdit);
      setEditId(id);
      setEditMode(true);
    } else {
      // Add mode
      setFormData({
        name: "",
        email: "",
        designation: "",
        company: "",
        location: "",
      });
      setEditMode(false);
    }
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    const { name, email, designation, company, location } = formData;
    const locationStr = location.toString();

    if (
      name.trim() !== "" &&
      email.trim() !== "" &&
      designation.trim() !== "" &&
      company.trim() !== "" &&
      locationStr.trim() !== ""
    ) {
      if (editMode) {
        setData(
          data.map((item) =>
            item.id === editId
              ? { ...item, ...formData, company: Number(company) }
              : item
          )
        );
        await MySwal.fire({
          title: "Success!",
          text: "Zone updated successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        const newId = (data.length + 1).toString().padStart(2, "0");
        const newEntry = { id: newId, ...formData };
        setData([...data, newEntry]);
        await MySwal.fire({
          title: "Success!",
          text: "New zone added successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
      handleClose();
      setCurrentPage(0);
    } else {
      await MySwal.fire({
        title: "Error!",
        text: "Please fill in all fields.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  const handleDelete = async (id) => {
    const result = await MySwal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      setData(data.filter((item) => item.id !== id));
      await MySwal.fire({
        title: "Deleted!",
        text: "Zone has been deleted.",
        icon: "success",
        confirmButtonText: "OK",
      });
    }
  };

  const columns = useMemo(
    () => [
      { header: "ID", accessorKey: "id" },
      { header: "Name", accessorKey: "name" },
      { header: "Areas ID", accessorKey: "email" },
      { header: "Building", accessorKey: "designation" },
      { header: "Floor", accessorKey: "company" },
      { header: "Location", accessorKey: "location" },
      {
        header: "Actions",
        accessorKey: "actions",
        cell: ({ row }) => (
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 1,
            }}
          >
            <Button
              onClick={() => handleOpen(row.original.id)}
              variant="contained"
              color="primary"
              size="small"
              sx={{ mb: { xs: 1, sm: 0 } }}
            >
              Edit
            </Button>
            <Button
              onClick={() => handleDelete(row.original.id)}
              variant="contained"
              color="error"
              size="small"
            >
              Delete
            </Button>
          </Box>
        ),
      },
    ],
    [data]
  );

  // Data aggregation for chart
  const locationCounts = data.reduce((acc, item) => {
    acc[item.location] = (acc[item.location] || 0) + 1;
    return acc;
  }, {});

  // Generate unique colors for each location
  const colors = generateColors(Object.keys(locationCounts).length);

  const chartData = {
    labels: Object.keys(locationCounts),
    datasets: [
      {
        label: "Zone Count by Location",
        data: Object.values(locationCounts),
        backgroundColor: colors,
        borderColor: colors.map((color) => `${color}80`), // Slightly transparent border colors
        borderWidth: 1,
      },
    ],
  };

  const summaryData = {
    totalZones: data.length,
    locations: [...new Set(data.map((item) => item.location))].length,
    averageFloor: (
      data.reduce((acc, item) => acc + Number(item.company), 0) / data.length
    ).toFixed(2),
  };

  return (
    <Box sx={{ padding: "36px 20px", marginTop: "60px" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
        Zones List
      </Typography>

      {/* Add New Zone Button */}
      <Box sx={{ mb: 2 }}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => handleOpen()}
          sx={{
            backgroundColor: "#1976d2",
            "&:hover": {
              backgroundColor: "#115293",
            },
            color: "white",
            fontWeight: "bold",
            padding: "8px 16px",
            borderRadius: "8px",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
            transition: "transform 0.2s",
            "&:hover": {
              transform: "scale(1.05)",
            },
          }}
        >
          Add New Zone
        </Button>
      </Box>

      <TableContainer
        columns={columns}
        data={data}
        customPageSize={10}
        isGlobalFilter={true}
        SearchPlaceholder="Search..."
        tableClass="table table-striped table-bordered"
        theadClass="thead-dark"
        trClass="table-row"
        thClass="table-header"
        divClass="table-responsive"
        currentPage={currentPage} // Pass current page to the table component
        onPageChange={setCurrentPage} // Handle page change
      />

      {/* Overview Report and Charts */}
      <Typography variant="h5" component="h3" gutterBottom mt={4}>
        Overview Report
      </Typography>

      <Grid
        container
        display={"flex"}
        alignContent={"center"}
        justifyContent={"center"}
        mb={4}
      >
        <Grid item xs={12} sm={4}>
          <Paper
            elevation={3}
            sx={{
              padding: "16px",
              textAlign: "center",
              backgroundColor: "#4d609d",
              width: "400px",
            }}
          >
            <Typography
              variant="h6"
              component="h3"
              gutterBottom
              color={"white"}
            >
              Total Zones
            </Typography>
            <Typography variant="h4" component="p" sx={{ color: "#fff" }}>
              {summaryData.totalZones}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper
            elevation={3}
            sx={{
              padding: "16px",
              textAlign: "center",
              backgroundColor: "#67b173",
              width: "400px",
            }}
          >
            <Typography
              variant="h6"
              component="h3"
              gutterBottom
              color={"white"}
            >
              Unique Locations
            </Typography>
            <Typography variant="h4" component="p" sx={{ color: "#fff" }}>
              {summaryData.locations}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper
            elevation={3}
            sx={{
              padding: "16px",
              textAlign: "center",
              backgroundColor: "#3d78e3",
              width: "400px",
            }}
          >
            <Typography
              variant="h6"
              component="h3"
              gutterBottom
              color={"white"}
            >
              Average Floor
            </Typography>
            <Typography variant="h4" component="p" sx={{ color: "#fff" }}>
              {summaryData.averageFloor}
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card sx={{ height: "500px" }}>
            <CardHeader title="Zone Distribution by Location" />
            <CardContent
              sx={{
                height: "80%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <Pie data={chartData} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card sx={{ height: "500px" }}>
            <CardHeader title="Zone Count by Location" />
            <CardContent
              sx={{ height: "90%", display: "flex", flexDirection: "column" }}
            >
              <Bar data={chartData} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Modal */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="add-zone-modal"
        aria-describedby="add-zone-form"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            p: 4,
            maxWidth: "90vw", // Adjust maxWidth for responsiveness
            width: "600px", // Ensure it doesn't exceed this width
            bgcolor: "background.paper",
            borderRadius: "8px",
            boxShadow: 24,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontSize: "20px",
              fontWeight: "600",
              mb: 3,
              color: "text.primary",
            }}
          >
            {editMode ? "Edit Zone" : "Add New Zone"}
          </Typography>
          <form noValidate autoComplete="off">
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              label="Areas ID"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              label="Building"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              label="Floor"
              name="company"
              value={formData.company}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              label="Location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                justifyContent: "flex-end",
                gap: 2,
                mt: 2,
              }}
            >
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                sx={{
                  backgroundColor: "#1976d2",
                  "&:hover": {
                    backgroundColor: "#115293",
                  },
                  color: "white",
                  fontWeight: "bold",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                {editMode ? "Update" : "Add"}
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={handleClose}
                sx={{
                  color: "#616161",
                  borderColor: "#bdbdbd",
                  "&:hover": {
                    backgroundColor: "#f5f5f5",
                  },
                  padding: "8px 16px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                Cancel
              </Button>
            </Box>
          </form>
        </Box>
      </Modal>
    </Box>
  );
}

export default ZoneTable;
