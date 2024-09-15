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

function Supervisor() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    supervisorId: "",
    name: "",
    email: "",
    department: "",
    phoneNumber: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [data, setData] = useState([
    {
      supervisorId: "S01",
      name: "Alice Brown",
      email: "alice.brown@example.com",
      department: "HR",
      phoneNumber: "123-456-7890",
    },
    {
      supervisorId: "S02",
      name: "Bob Smith",
      email: "bob.smith@example.com",
      department: "IT",
      phoneNumber: "987-654-3210",
    },
    // Add more supervisor data if needed
  ]);
  const [currentPage, setCurrentPage] = useState(0);

  const handleOpen = (id = null) => {
    setEditMode(!!id);
    setEditId(id);
    if (id) {
      const supervisor = data.find((d) => d.supervisorId === id);
      setFormData({ ...supervisor });
    } else {
      setFormData({
        supervisorId: "",
        name: "",
        email: "",
        department: "",
        phoneNumber: "",
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
    const { supervisorId, name, email, department, phoneNumber } = formData;

    if (supervisorId.trim() !== "" && name.trim() !== "" && email.trim() !== "" && department.trim() !== "" && phoneNumber.trim() !== "") {
      if (editMode) {
        setData(
          data.map((item) =>
            item.supervisorId === editId
              ? { ...item, ...formData }
              : item
          )
        );
        await MySwal.fire({
          title: "Success!",
          text: "Supervisor details updated successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        setData([...data, formData]);
        await MySwal.fire({
          title: "Success!",
          text: "New supervisor added successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
      setFormData({
        supervisorId: "",
        name: "",
        email: "",
        department: "",
        phoneNumber: "",
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
      setData(data.filter((item) => item.supervisorId !== id));
      await MySwal.fire("Deleted!", "Supervisor has been deleted.", "success");
    }
  };

  const columns = useMemo(
    () => [
      { header: "Supervisor ID", accessorKey: "supervisorId" },
      { header: "Name", accessorKey: "name" },
      { header: "Email", accessorKey: "email" },
      { header: "Department", accessorKey: "department" },
      { header: "Phone Number", accessorKey: "phoneNumber" },
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
              onClick={() => handleOpen(info.row.original.supervisorId)}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              color="error"
              onClick={() => handleDelete(info.row.original.supervisorId)}
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
        Supervisor Management
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={() => handleOpen()}
        sx={{ mb: 2 }}
      >
        Add New Supervisor
      </Button>

      <Typography variant="h5" component="h3" gutterBottom>
        Supervisor List
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
        aria-labelledby="add-supervisor-modal"
        aria-describedby="add-supervisor-form"
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
            {editMode ? "Edit Supervisor" : "Add New Supervisor"}
          </Typography>
          <form noValidate autoComplete="off">
            <TextField
              label="Supervisor ID"
              name="supervisorId"
              value={formData.supervisorId}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{ mb: 2 }}
              disabled={editMode} // Supervisor ID should not be editable if in edit mode
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
              label="Email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              label="Department"
              name="department"
              value={formData.department}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              label="Phone Number"
              name="phoneNumber"
              value={formData.phoneNumber}
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
              {editMode ? "Update Supervisor" : "Add Supervisor"}
            </Button>
          </form>
        </Box>
      </Modal>
    </Box>
  );
}

export default Supervisor;
