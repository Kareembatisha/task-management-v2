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
import ChartComponent from "./ChartComponent"; // Ensure this component exists and handles different chart types
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

function MainComponent() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    designation: "",
    location: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [data, setData] = useState([
    {
      id: "01",
      name: "Building A",
      email: "001",
      designation: "High-rise",
      company: "Company X",
      location: 3000,
    },
    {
      id: "02",
      name: "Building B",
      email: "002",
      designation: "Low-rise",
      company: "Company Y",
      location: 1500,
    },
    // Add more unique initial data if needed
  ]);
  const [currentPage, setCurrentPage] = useState(0);

  const handleOpen = (id = null) => {
    setEditMode(!!id);
    setEditId(id);
    if (id) {
      const building = data.find((d) => d.id === id);
      setFormData({ ...building });
    } else {
      setFormData({
        name: "",
        email: "",
        designation: "",
        location: "",
      });
    }
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async () => {
    const { name, email, designation, location } = formData;
    const locationStr = location.toString();

    if (
      name.trim() !== "" &&
      email.trim() !== "" &&
      designation.trim() !== "" &&
      locationStr.trim() !== ""
    ) {
      if (editMode) {
        setData(
          data.map((item) =>
            item.id === editId
              ? { ...item, ...formData, location: Number(location) }
              : item
          )
        );
        await MySwal.fire({
          title: "Success!",
          text: "Building updated successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        const newId = (data.length + 1).toString().padStart(2, "0");
        const newEntry = {
          id: newId,
          ...formData,
          company: "N/A",
          location: Number(location),
        };
        setData([...data, newEntry]);
        await MySwal.fire({
          title: "Success!",
          text: "New building added successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
      setFormData({
        name: "",
        email: "",
        designation: "",
        location: "",
      });
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
      await MySwal.fire("Deleted!", "Your file has been deleted.", "success");
    }
  };

  const columns = useMemo(
    () => [
      { header: "ID", accessorKey: "id" },
      { header: "Name", accessorKey: "name" },
      { header: "Areas ID", accessorKey: "email" },
      { header: "Designation", accessorKey: "designation" },
      { header: "Company", accessorKey: "company" },
      { header: "Location (sq ft)", accessorKey: "location" },
      {
        header: "Actions",
        accessorKey: "actions",
        cell: (info) => (
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 1,
            }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleOpen(info.row.original.id)}
              sx={{ mb: { xs: 1, sm: 0 } }}
            >
              Edit
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => handleDelete(info.row.original.id)}
            >
              Delete
            </Button>
          </Box>
        ),
      },
    ],
    [data]
  );

  return (
    <Box sx={{ padding: "20px", marginTop: "60px" }}>
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Dashboard
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={() => handleOpen()}
        sx={{ mb: 2 }}
      >
        Add New Building
      </Button>

      <Typography variant="h5" component="h3" gutterBottom>
        Building List
      </Typography>

      <Box sx={{ overflowX: "auto" }}>
        <TableContainer
          columns={columns}
          data={data}
          customPageSize={10}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
      </Box>

      <Typography variant="h5" component="h3" gutterBottom mt={4}>
        Overview
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
              Total Buildings
            </Typography>
            <Typography variant="h4" component="p" sx={{ color: "#fff" }}>
              {data.length}
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
              Total Area (sq ft)
            </Typography>
            <Typography variant="h4" component="p" sx={{ color: "#fff" }}>
              {data.reduce((acc, building) => acc + building.location, 0)}
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
              Average Area (sq ft)
            </Typography>
            <Typography variant="h4" component="p" sx={{ color: "#fff" }}>
              {(
                data.reduce((acc, building) => acc + building.location, 0) /
                data.length
              ).toFixed(2)}
            </Typography>
          </Paper>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Card sx={{ height: "500px" }}>
            <CardHeader title="Building Areas Distribution" />
            <CardContent
              sx={{
                height: "80%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <ChartComponent type="pie" data={data} />
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Card sx={{ height: "500px" }}>
            <CardHeader title="Area Comparison by Building" />
            <CardContent
              sx={{ height: "90%", display: "flex", flexDirection: "column" }}
            >
              <ChartComponent type="bar" data={data} />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="add-building-modal"
        aria-describedby="add-building-form"
      >
        <Box
          sx={{
            p: 4,
            maxWidth: "600px",
            mx: "auto",
            bgcolor: "background.paper",
            borderRadius: "8px",
            boxShadow: 24,
            mt: 10,
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
            {editMode ? "Edit Building" : "Add New Building"}
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
              label="Designation"
              name="designation"
              value={formData.designation}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              label="Location (sq ft)"
              name="location"
              type="number"
              value={formData.location}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              fullWidth
              sx={{ mt: 2 }}
            >
              {editMode ? "Update Building" : "Add Building"}
            </Button>
          </form>
        </Box>
      </Modal>
    </Box>
  );
}

export default MainComponent;
