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

function IncedentTable() {
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    designation: "",
    company: "",
    location: "",
    duration: "",
    status: "",
  });
  const [data, setData] = useState([
    {
      id: "10",
      name: "Tyrone",
      email: "tyrone@example.com",
      designation: "morning",
      company: "10:00 AM",
      location: "6:00 PM",
      duration: "8 H",
      status: "present",
    },
    {
      id: "09",
      name: "Cathy",
      email: "cathy@example.com",
      designation: "morning",
      company: "10:00 AM",
      location: "6:00 PM",
      duration: "8 H",
      status: "present",
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
        duration: "",
        status: "",
      });
      setEditId(null);
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
    const { name, email, designation, company, location, duration, status } =
      formData;
    if (
      name.trim() !== "" &&
      email.trim() !== "" &&
      designation.trim() !== "" &&
      company.trim() !== "" &&
      location.trim() !== "" &&
      duration.trim() !== "" &&
      status.trim() !== ""
    ) {
      if (editMode) {
        setData(
          data.map((item) =>
            item.id === editId ? { ...item, ...formData } : item
          )
        );
        await MySwal.fire({
          title: "Success!",
          text: "Incident updated successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        const newId = (data.length + 1).toString().padStart(2, "0");
        const newEntry = { id: newId, ...formData };
        setData([...data, newEntry]);
        await MySwal.fire({
          title: "Success!",
          text: "New incident added successfully.",
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
        text: "Incident has been deleted.",
        icon: "success",
        confirmButtonText: "OK",
      });
    }
  };

  const columns = useMemo(
    () => [
      { header: "ID", accessorKey: "id", enableSorting: true },
      { header: "Name", accessorKey: "name", enableSorting: true },
      { header: "Group", accessorKey: "email", enableSorting: true },
      { header: "Shift", accessorKey: "designation", enableSorting: true },
      { header: "Check in", accessorKey: "company", enableSorting: true },
      { header: "Check out", accessorKey: "location", enableSorting: true },
      { header: "Time Duration", accessorKey: "duration", enableSorting: true },
      { header: "Status", accessorKey: "status", enableSorting: true },
      {
        header: "Actions",
        accessorKey: "actions",
        cell: ({ row }) => (
          <Box
            sx={{
              display: "flex",
              gap: 1,
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: { xs: "center", sm: "flex-start" },
            }}
          >
            <Button
              onClick={() => handleOpen(row.original.id)}
              variant="contained"
              color="primary"
              size="small"
              sx={{
                mb: { xs: 1, sm: 0 }, // Margin bottom on smaller screens
                whiteSpace: "nowrap",
              }}
            >
              Edit
            </Button>
            <Button
              onClick={() => handleDelete(row.original.id)}
              variant="contained"
              color="error"
              size="small"
              sx={{
                mb: { xs: 1, sm: 0 }, // Margin bottom on smaller screens
                whiteSpace: "nowrap",
              }}
            >
              Delete
            </Button>
          </Box>
        ),
      },
    ],
    [data]
  );

  // Data aggregation for charts
  const statusCounts = data.reduce((acc, item) => {
    acc[item.status] = (acc[item.status] || 0) + 1;
    return acc;
  }, {});

  const chartData = {
    labels: Object.keys(statusCounts),
    datasets: [
      {
        label: "Incident Status Distribution",
        data: Object.values(statusCounts),
        backgroundColor: "rgba(75, 192, 192, 0.8)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const summaryData = {
    totalIncidents: data.length,
    uniqueGroups: [...new Set(data.map((item) => item.email))].length,
    averageDuration: (
      data.reduce((acc, item) => acc + Number(item.duration.split(" ")[0]), 0) /
      data.length
    ).toFixed(2),
  };

  return (
    <Box sx={{ padding: 4, mt: 8 }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
        Incidents List
      </Typography>

      {/* Add New Incident Button */}
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
          Add New Incident
        </Button>
      </Box>

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
        <Grid item xs={12} sm={4}>
          <Paper
            elevation={3}
            sx={{
              padding: 2,
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
              Total Incidents
            </Typography>
            <Typography variant="h4" sx={{ color: "#fff" }}>
              {summaryData.totalIncidents}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper
            elevation={3}
            sx={{
              padding: 2,
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
              Unique Groups
            </Typography>
            <Typography variant="h4" sx={{ color: "#fff" }}>
              {summaryData.uniqueGroups}
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper
            elevation={3}
            sx={{
              padding: 2,
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
              Average Duration
            </Typography>
            <Typography variant="h4" sx={{ color: "#fff" }}>
              {summaryData.averageDuration} H
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card sx={{ height: "500px" }}>
            <CardHeader title="Incident Status Distribution" />
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
            <CardHeader title="Incident Status Count" />
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
        aria-labelledby="add-incident-modal"
        aria-describedby="add-incident-form"
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
          <Typography variant="h6" component="h2" gutterBottom>
            {editMode ? "Edit Incident" : "Add New Incident"}
          </Typography>
          <Grid container spacing={2}>
            {Object.keys(formData).map((key) => (
              <Grid item xs={12} sm={6} key={key}>
                <TextField
                  fullWidth
                  name={key}
                  label={key.charAt(0).toUpperCase() + key.slice(1)}
                  variant="outlined"
                  value={formData[key]}
                  onChange={handleChange}
                />
              </Grid>
            ))}
          </Grid>
          <Box sx={{ mt: 2, display: "flex", flexDirection: "column", gap: 2 }}>
            <Box sx={{ display: "flex", gap: 2 }}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                sx={{
                  flex: 1,
                  whiteSpace: "nowrap",
                }}
              >
                {editMode ? "Update" : "Add Incident"}
              </Button>
              <Button
                variant="outlined"
                color="error"
                onClick={handleClose}
                sx={{
                  flex: 1,
                  whiteSpace: "nowrap",
                }}
              >
                Cancel
              </Button>
            </Box>
          </Box>
        </Box>
      </Modal>
    </Box>
  );
}

export default IncedentTable;
