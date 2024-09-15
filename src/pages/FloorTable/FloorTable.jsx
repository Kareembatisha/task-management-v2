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
} from "chart.js";

// Register required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

const MySwal = withReactContent(Swal);

function FloorTable() {
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
      email: "Ahmed",
      designation: "010000000",
      company: "Raynor, Rolfson and Daugherty",
      location: "2",
    },
    {
      id: "09",
      name: "Cathy",
      email: "Ahmed",
      designation: "010000000",
      company: "Ebert, Schamberger and Johnston",
      location: "1",
    },
    {
      id: "08",
      name: "Patsy",
      email: "Ahmed",
      designation: "010000000",
      company: "Streich Group",
      location: "3",
    },
    {
      id: "07",
      name: "Kerry",
      email: "Ahmed",
      designation: "010000000",
      company: "Feeney, Langworth and Tremblay",
      location: "2",
    },
    {
      id: "06",
      name: "Traci",
      email: "Ahmed",
      designation: "010000000",
      company: "Koelpin - Goldner",
      location: "2",
    },
    {
      id: "05",
      name: "Noel",
      email: "Ahmed",
      designation: "010000000",
      company: "Howell - Rippin",
      location: "2",
    },
    {
      id: "04",
      name: "Robert",
      email: "Ahmed",
      designation: "010000000",
      company: "Hoeger",
      location: "5",
    },
    {
      id: "03",
      name: "Shannon",
      email: "Ahmed",
      designation: "010000000",
      company: "Zemlak Group",
      location: "4",
    },
    {
      id: "02",
      name: "Harold",
      email: "Ahmed",
      designation: "010000000",
      company: "Metz Inc",
      location: "3",
    },
    {
      id: "01",
      name: "Jonathan",
      email: "Ahmed",
      designation: "010000000",
      company: "Hauck Inc",
      location: "3",
    },
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
    if (
      name.trim() !== "" &&
      email.trim() !== "" &&
      designation.trim() !== "" &&
      company.trim() !== "" &&
      location.trim() !== ""
    ) {
      if (editMode) {
        setData(
          data.map((item) =>
            item.id === editId ? { ...item, ...formData } : item
          )
        );
        await MySwal.fire({
          title: "Success!",
          text: "Floor updated successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        const newId = (data.length + 1).toString().padStart(2, "0");
        const newEntry = { id: newId, ...formData };
        setData([...data, newEntry]);
        await MySwal.fire({
          title: "Success!",
          text: "New floor added successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
      handleClose();
      setCurrentPage(0); // Optionally reset to page 1 after adding a new entry
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
        text: "Floor has been deleted.",
        icon: "success",
        confirmButtonText: "OK",
      });
    }
  };

  const columns = useMemo(
    () => [
      { header: "ID", accessorKey: "id", enableSorting: true },
      { header: "Name", accessorKey: "name", enableSorting: true },
      { header: "Supervisor", accessorKey: "email", enableSorting: true },
      { header: "Number", accessorKey: "designation", enableSorting: true },
      { header: "Area", accessorKey: "company", enableSorting: true },
      { header: "Building", accessorKey: "location", enableSorting: true },
      {
        header: "Actions",
        accessorKey: "actions",
        cell: ({ row }) => (
          <div>
            <Button
              onClick={() => handleOpen(row.original.id)}
              variant="contained"
              color="primary"
              size="small"
              sx={{ mr: 1 }}
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
          </div>
        ),
      },
    ],
    [data]
  );

  // Data aggregation for charts
  const locationCounts = data.reduce((acc, item) => {
    acc[item.location] = (acc[item.location] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(locationCounts),
    datasets: [
      {
        label: "Floor Count by Building",
        data: Object.values(locationCounts),
        backgroundColor: "rgba(75, 192, 192, 0.8)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const summaryData = {
    totalFloors: data.length,
    uniqueBuildings: [...new Set(data.map((item) => item.location))].length,
    averageNumber: (
      data.reduce((acc, item) => acc + Number(item.designation), 0) /
      data.length
    ).toFixed(2),
  };

  return (
    <div style={{ padding: "36px 20px", marginTop: "60px" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
        Floor List
      </Typography>

      {/* Add New Floor Button */}
      <div style={{ marginBottom: "16px" }}>
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
          Add New Floor
        </Button>
      </div>

      <TableContainer
        columns={columns}
        data={data}
        customPageSize={10}
        isGlobalFilter={false}
        tableClass="table table-striped table-bordered"
        theadClass="thead-dark"
        trClass="table-row"
        thClass="table-header"
        divClass="table-responsive"
        currentPage={currentPage}
        onPageChange={setCurrentPage}
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
        <Grid item xs={9} sm={4}>
          <Paper
            elevation={3}
            style={{
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
              Total Floors
            </Typography>
            <Typography variant="h4" component="p" style={{ color: "#fff" }}>
              {summaryData.totalFloors}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={9} sm={4}>
          <Paper
            elevation={3}
            style={{
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
              Unique Buildings
            </Typography>
            <Typography variant="h4" component="p" style={{ color: "#fff" }}>
              {summaryData.uniqueBuildings}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={9} sm={4}>
          <Paper
            elevation={3}
            style={{
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
              Average Number
            </Typography>
            <Typography variant="h4" component="p" style={{ color: "#fff" }}>
              {summaryData.averageNumber}
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card sx={{ height: "500px" }}>
            <CardHeader title="Floor Distribution by Building" />
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
            <CardHeader title="Floor Count by Building" />
            <CardContent
              sx={{
                height: "80%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
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
        aria-labelledby="add-floor-modal"
        aria-describedby="add-floor-form"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            p: 4,
            maxWidth: "600px",
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
            {editMode ? "Edit Floor" : "Add New Floor"}
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
              label="Supervisor"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              label="Number"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              label="Area"
              name="company"
              value={formData.company}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              label="Building"
              name="location"
              value={formData.location}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                gap: "16px",
                marginTop: "24px",
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
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default FloorTable;
