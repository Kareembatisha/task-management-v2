import React, { useState, useMemo } from "react";
import {
  Button,
  Modal,
  Box,
  TextField,
  Typography,
  IconButton,
} from "@mui/material";
import TableContainer from "../../../Components/Common/TableContainerReactTable";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const MySwal = withReactContent(Swal);

function Area() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    areaId: "",
    name: "",
    location: "",
    capacity: "",
    status: "Active",
  });
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [data, setData] = useState([
    {
      areaId: "A01",
      name: "Conference Room A",
      location: "1st Floor",
      capacity: "50",
      status: "Active",
    },
    {
      areaId: "A02",
      name: "Meeting Room B",
      location: "2nd Floor",
      capacity: "20",
      status: "Inactive",
    },
    {
      areaId: "A03",
      name: "Open Workspace C",
      location: "3rd Floor",
      capacity: "100",
      status: "Active",
    },
    {
      areaId: "A04",
      name: "Cafeteria",
      location: "Ground Floor",
      capacity: "200",
      status: "Active",
    },
    // Add more area data if needed
  ]);
  const [currentPage, setCurrentPage] = useState(0);

  const handleOpen = (id = null) => {
    setEditMode(!!id);
    setEditId(id);
    if (id) {
      const area = data.find((d) => d.areaId === id);
      setFormData({ ...area });
    } else {
      setFormData({
        areaId: "",
        name: "",
        location: "",
        capacity: "",
        status: "Active",
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
    const { areaId, name, location, capacity, status } = formData;

    if (areaId.trim() !== "" && name.trim() !== "" && location.trim() !== "" && capacity.trim() !== "") {
      if (editMode) {
        setData(
          data.map((item) =>
            item.areaId === editId
              ? { ...item, ...formData }
              : item
          )
        );
        await MySwal.fire({
          title: "Success!",
          text: "Area details updated successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        setData([...data, formData]);
        await MySwal.fire({
          title: "Success!",
          text: "New area added successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
      setFormData({
        areaId: "",
        name: "",
        location: "",
        capacity: "",
        status: "Active",
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
      setData(data.filter((item) => item.areaId !== id));
      await MySwal.fire("Deleted!", "Area has been deleted.", "success");
    }
  };

  const columns = useMemo(
    () => [
      { header: "Area ID", accessorKey: "areaId" },
      { header: "Name", accessorKey: "name" },
      { header: "Location", accessorKey: "location" },
      { header: "Capacity", accessorKey: "capacity" },
      { header: "Status", accessorKey: "status" },
      {
        // No header, but we keep the cell rendering for Edit and Delete
        accessorKey: "actions",
        cell: (info) => (
          <Box
            sx={{
              display: "flex",
              gap: 1,
            }}
          >
            <IconButton
              color="primary"
              onClick={() => handleOpen(info.row.original.areaId)}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              color="error"
              onClick={() => handleDelete(info.row.original.areaId)}
            >
              <DeleteIcon />
            </IconButton>
          </Box>
        ),
      },
    ],
    [data]
  );

  return (
    <Box sx={{ padding: "20px", marginTop: "60px" }}>
      <Typography variant="h4" component="h2" gutterBottom align="center">
        Area Management
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={() => handleOpen()}
        sx={{ mb: 2 }}
      >
        Add New Area
      </Button>

      <Typography variant="h5" component="h3" gutterBottom>
        Area List
      </Typography>

      <Box sx={{ flexGrow: 1, overflow: "auto", height: "calc(100% - 140px)" }}> {/* Adjust this value based on header and footer sizes */}
        <TableContainer
          columns={columns}
          data={data}
          customPageSize={10}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
          sx={{ height: "100%", overflowY: "auto" }} // Adjust table height
        />
      </Box>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="add-area-modal"
        aria-describedby="add-area-form"
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
            {editMode ? "Edit Area" : "Add New Area"}
          </Typography>
          <form noValidate autoComplete="off">
            <TextField
              label="Area ID"
              name="areaId"
              value={formData.areaId}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{ mb: 2 }}
              disabled={editMode} // Area ID should not be editable if in edit mode
            />
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
              label="Location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              label="Capacity"
              name="capacity"
              value={formData.capacity}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              label="Status"
              name="status"
              value={formData.status}
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
              {editMode ? "Update Area" : "Add Area"}
            </Button>
          </form>
        </Box>
      </Modal>
    </Box>
  );
}

export default Area;
