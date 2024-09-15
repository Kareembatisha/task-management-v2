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

function User() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    userId: "",
    name: "",
    email: "",
    role: "",
    status: "Active",
  });
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [data, setData] = useState([
    {
      userId: "U01",
      name: "David White",
      email: "david.white@example.com",
      role: "User",
      status: "Active",
    },
    {
      userId: "U02",
      name: "Linda Green",
      email: "linda.green@example.com",
      role: "Admin",
      status: "Inactive",
    },
    // Add more user data if needed
  ]);
  const [currentPage, setCurrentPage] = useState(0);

  const handleOpen = (id = null) => {
    setEditMode(!!id);
    setEditId(id);
    if (id) {
      const user = data.find((d) => d.userId === id);
      setFormData({ ...user });
    } else {
      setFormData({
        userId: "",
        name: "",
        email: "",
        role: "",
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
    const { userId, name, email, role, status } = formData;

    if (userId.trim() !== "" && name.trim() !== "" && email.trim() !== "" && role.trim() !== "") {
      if (editMode) {
        setData(
          data.map((item) =>
            item.userId === editId
              ? { ...item, ...formData }
              : item
          )
        );
        await MySwal.fire({
          title: "Success!",
          text: "User details updated successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        setData([...data, formData]);
        await MySwal.fire({
          title: "Success!",
          text: "New user added successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
      setFormData({
        userId: "",
        name: "",
        email: "",
        role: "",
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
      setData(data.filter((item) => item.userId !== id));
      await MySwal.fire("Deleted!", "User has been deleted.", "success");
    }
  };

  const columns = useMemo(
    () => [
      { header: "User ID", accessorKey: "userId" },
      { header: "Name", accessorKey: "name" },
      { header: "Email", accessorKey: "email" },
      { header: "Role", accessorKey: "role" },
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
              onClick={() => handleOpen(info.row.original.userId)}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              color="error"
              onClick={() => handleDelete(info.row.original.userId)}
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
        User Management
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={() => handleOpen()}
        sx={{ mb: 2 }}
      >
        Add New User
      </Button>

      <Typography variant="h5" component="h3" gutterBottom>
        User List
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
        aria-labelledby="add-user-modal"
        aria-describedby="add-user-form"
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
            {editMode ? "Edit User" : "Add New User"}
          </Typography>
          <form noValidate autoComplete="off">
            <TextField
              label="User ID"
              name="userId"
              value={formData.userId}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{ mb: 2 }}
              disabled={editMode} // User ID should not be editable if in edit mode
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
              label="Role"
              name="role"
              value={formData.role}
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
              select
              SelectProps={{ native: true }}
            >
              <option value="Active">Active</option>
              <option value="Inactive">Inactive</option>
            </TextField>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              fullWidth
              sx={{ mt: 2 }}
            >
              {editMode ? "Update User" : "Add User"}
            </Button>
          </form>
        </Box>
      </Modal>
    </Box>
  );
}

export default User;
