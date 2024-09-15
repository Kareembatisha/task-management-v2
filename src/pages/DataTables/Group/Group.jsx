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
import "./style.css"; // Import your global CSS file

const MySwal = withReactContent(Swal);

function Group() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    groupId: "",
    name: "",
    createdAt: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [data, setData] = useState([
    {
      groupId: "G01",
      name: "Admin",
      createdAt: "2024-01-15",
    },
    {
      groupId: "G02",
      name: "User",
      createdAt: "2024-02-22",
    },
    // Add more group data if needed
  ]);
  const [currentPage, setCurrentPage] = useState(0);

  const handleOpen = (id = null) => {
    setEditMode(!!id);
    setEditId(id);
    if (id) {
      const group = data.find((d) => d.groupId === id);
      setFormData({ ...group });
    } else {
      setFormData({
        groupId: "",
        name: "",
        createdAt: "",
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
    const { groupId, name, createdAt } = formData;

    if (groupId.trim() !== "" && name.trim() !== "" && createdAt.trim() !== "") {
      if (editMode) {
        setData(
          data.map((item) =>
            item.groupId === editId
              ? { ...item, ...formData }
              : item
          )
        );
        await MySwal.fire({
          title: "Success!",
          text: "Group details updated successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        setData([...data, formData]);
        await MySwal.fire({
          title: "Success!",
          text: "New group added successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
      setFormData({
        groupId: "",
        name: "",
        createdAt: "",
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
      setData(data.filter((item) => item.groupId !== id));
      await MySwal.fire("Deleted!", "Group has been deleted.", "success");
    }
  };

  const columns = useMemo(
    () => [
      { header: "Group ID", accessorKey: "groupId" },
      { header: "Name", accessorKey: "name" },
      { header: "Created At", accessorKey: "createdAt" },
      {
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
              onClick={() => handleOpen(info.row.original.groupId)}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              color="error"
              onClick={() => handleDelete(info.row.original.groupId)}
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
        Group Management
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={() => handleOpen()}
        sx={{ mb: 2 }}
      >
        Add New Group
      </Button>

      <Typography variant="h5" component="h3" gutterBottom>
        Group List
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
        aria-labelledby="add-group-modal"
        aria-describedby="add-group-form"
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
            {editMode ? "Edit Group" : "Add New Group"}
          </Typography>
          <form noValidate autoComplete="off">
            <TextField
              label="Group ID"
              name="groupId"
              value={formData.groupId}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{ mb: 2 }}
              disabled={editMode} // Group ID should not be editable if in edit mode
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
              label="Created At"
              name="createdAt"
              value={formData.createdAt}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{ mb: 2 }}
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              fullWidth
              sx={{ mt: 2 }}
            >
              {editMode ? "Update Group" : "Add Group"}
            </Button>
          </form>
        </Box>
      </Modal>
    </Box>
  );
}

export default Group;
