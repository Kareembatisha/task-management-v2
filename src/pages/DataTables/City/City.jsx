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

function City() {
  const [open, setOpen] = useState(false);
  const [formData, setFormData] = useState({
    cityId: "",
    name: "",
    state: "",
    country: "",
  });
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [data, setData] = useState([
    {
      cityId: "C01",
      name: "New York",
      state: "NY",
      country: "USA",
    },
    {
      cityId: "C02",
      name: "London",
      state: "",
      country: "UK",
    },
    // Add more city data if needed
  ]);
  const [currentPage, setCurrentPage] = useState(0);

  const handleOpen = (id = null) => {
    setEditMode(!!id);
    setEditId(id);
    if (id) {
      const city = data.find((d) => d.cityId === id);
      setFormData({ ...city });
    } else {
      setFormData({
        cityId: "",
        name: "",
        state: "",
        country: "",
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
    const { cityId, name, state, country } = formData;

    if (cityId.trim() !== "" && name.trim() !== "" && state.trim() !== "" && country.trim() !== "") {
      if (editMode) {
        setData(
          data.map((item) =>
            item.cityId === editId
              ? { ...item, ...formData }
              : item
          )
        );
        await MySwal.fire({
          title: "Success!",
          text: "City details updated successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        setData([...data, formData]);
        await MySwal.fire({
          title: "Success!",
          text: "New city added successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
      setFormData({
        cityId: "",
        name: "",
        state: "",
        country: "",
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
      setData(data.filter((item) => item.cityId !== id));
      await MySwal.fire("Deleted!", "City has been deleted.", "success");
    }
  };

  const columns = useMemo(
    () => [
      { header: "City ID", accessorKey: "cityId" },
      { header: "Name", accessorKey: "name" },
      { header: "State", accessorKey: "state" },
      { header: "Country", accessorKey: "country" },
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
              onClick={() => handleOpen(info.row.original.cityId)}
            >
              <EditIcon />
            </IconButton>
            <IconButton
              color="error"
              onClick={() => handleDelete(info.row.original.cityId)}
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
        City Management
      </Typography>

      <Button
        variant="contained"
        color="primary"
        onClick={() => handleOpen()}
        sx={{ mb: 2 }}
      >
        Add New City
      </Button>

      <Typography variant="h5" component="h3" gutterBottom>
        City List
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
        aria-labelledby="add-city-modal"
        aria-describedby="add-city-form"
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
            {editMode ? "Edit City" : "Add New City"}
          </Typography>
          <form noValidate autoComplete="off">
            <TextField
              label="City ID"
              name="cityId"
              value={formData.cityId}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{ mb: 2 }}
              disabled={editMode} // City ID should not be editable if in edit mode
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
              label="State"
              name="state"
              value={formData.state}
              onChange={handleChange}
              fullWidth
              margin="normal"
              variant="outlined"
              sx={{ mb: 2 }}
            />
            <TextField
              label="Country"
              name="country"
              value={formData.country}
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
              {editMode ? "Update City" : "Add City"}
            </Button>
          </form>
        </Box>
      </Modal>
    </Box>
  );
}

export default City;
