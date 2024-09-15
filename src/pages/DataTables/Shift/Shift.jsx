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

function Shift() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    shiftId: "",
    name: "",
    startTime: "",
    endTime: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [data, setData] = useState([
    {
      shiftId: "S01",
      name: "Morning Shift",
      startTime: "08:00",
      endTime: "16:00",
    },
    {
      shiftId: "S02",
      name: "Evening Shift",
      startTime: "16:00",
      endTime: "00:00",
    },
    // Add more shift data if needed
  ]);
  const [currentPage, setCurrentPage] = useState(0);

  const handleOpen = (id = null) => {
    setEditMode(!!id);
    setEditId(id);
    if (id) {
      const shift = data.find((d) => d.shiftId === id);
      setFormData({ ...shift });
    } else {
      setFormData({
        shiftId: "",
        name: "",
        startTime: "",
        endTime: "",
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
    const { shiftId, name, startTime, endTime } = formData;

    if (shiftId.trim() !== "" && name.trim() !== "" && startTime.trim() !== "" && endTime.trim() !== "") {
      if (editMode) {
        setData(
          data.map((item) =>
            item.shiftId === editId
              ? { ...item, ...formData }
              : item
          )
        );
        await MySwal.fire({
          title: "Success!",
          text: "Shift details updated successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        setData([...data, formData]);
        await MySwal.fire({
          title: "Success!",
          text: "New shift added successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
      setFormData({
        shiftId: "",
        name: "",
        startTime: "",
        endTime: "",
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
      setData(data.filter((item) => item.shiftId !== id));
      await MySwal.fire("Deleted!", "Shift has been deleted.", "success");
    }
  };

  const columns = useMemo(
    () => [
      { header: "Shift ID", accessorKey: "shiftId" },
      { header: "Name", accessorKey: "name" },
      { header: "Start Time", accessorKey: "startTime" },
      { header: "End Time", accessorKey: "endTime" },
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
              onClick={() => handleOpen(info.row.original.shiftId)}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              color="error"
              onClick={() => handleDelete(info.row.original.shiftId)}
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
        Shift Management
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={() => handleOpen()}
        sx={{ mb: 2 }}
      >
        Add New Shift
      </Button>

      <Typography variant="h5" component="h3" gutterBottom>
        Shift List
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
        aria-labelledby="add-shift-modal"
        aria-describedby="add-shift-form"
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
            {editMode ? "Edit Shift" : "Add New Shift"}
          </Typography>
          <form noValidate autoComplete="off">
            <TextField
              label="Shift ID"
              name="shiftId"
              value={formData.shiftId}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{ mb: 2 }}
              disabled={editMode} // Shift ID should not be editable if in edit mode
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
              label="Start Time"
              name="startTime"
              value={formData.startTime}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{ mb: 2 }}
              type="time"
            />
            <TextField
              label="End Time"
              name="endTime"
              value={formData.endTime}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{ mb: 2 }}
              type="time"
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSubmit}
              fullWidth
              sx={{ mt: 2 }}
            >
              {editMode ? "Update Shift" : "Add Shift"}
            </Button>
          </form>
        </Box>
      </Modal>
    </Box>
  );
}

export default Shift;
