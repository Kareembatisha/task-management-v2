import React, { useState, useMemo } from "react";
import {
  Button,
  Box,
  TextField,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
  Paper,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from "@mui/material";
import TableContainerComponent from "./TableContainerReactTable";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

// Register required Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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

function RolePage() {
  const [open, setOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [editId, setEditId] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    type: "",
    permissions: {},
  });
  const [data, setData] = useState([
    {
      id: "01",
      name: "Admin",
      type: "Full Access",
      permissions: {
        "Create-Admin": true,
        "Read-Admins": true,
        "Update-Admin": true,
        "Delete-Admin": true,
      },
    },
    {
      id: "02",
      name: "User",
      type: "Limited Access",
      permissions: {
        "Create-Admin": false,
        "Read-Admins": true,
        "Update-Admin": false,
        "Delete-Admin": false,
      },
    },
  ]);
  const [currentPage, setCurrentPage] = useState(0);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handleOpen = (id = null) => {
    if (id) {
      const itemToEdit = data.find((item) => item.id === id);
      setFormData(itemToEdit);
      setEditId(id);
      setEditMode(true);
    } else {
      setFormData({
        name: "",
        type: "",
        permissions: {
          "Create-Admin": false,
          "Read-Admins": false,
          "Update-Admin": false,
          "Delete-Admin": false,
        },
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
    const { name, type, permissions } = formData;

    if (name.trim() !== "" && type.trim() !== "") {
      setOpen(false);

      await new Promise((resolve) => setTimeout(resolve, 300));

      if (editMode) {
        setData(
          data.map((item) =>
            item.id === editId ? { ...item, name, type, permissions } : item
          )
        );
        await MySwal.fire({
          title: "Success!",
          text: "Role updated successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
      } else {
        const newId = (data.length + 1).toString().padStart(2, "0");
        const newEntry = { id: newId, name, type, permissions };
        setData([...data, newEntry]);
        await MySwal.fire({
          title: "Success!",
          text: "New role added successfully.",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
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
      await new Promise((resolve) => setTimeout(resolve, 300));
      await MySwal.fire({
        title: "Deleted!",
        text: "Role has been deleted.",
        icon: "success",
        confirmButtonText: "OK",
      });
    }
  };

  const handleViewDetails = (id) => {
    const person = data.find((item) => item.id === id);
    if (person) {
      setSelectedPerson(person);
    }
  };

  const handleCheckboxChange = (permission) => {
    if (selectedPerson) {
      const updatedPermissions = {
        ...selectedPerson.permissions,
        [permission]: !selectedPerson.permissions[permission],
      };
      setSelectedPerson({
        ...selectedPerson,
        permissions: updatedPermissions,
      });
    }
  };

  const columns = useMemo(
    () => [
      { header: "ID", accessorKey: "id" },
      { header: "Name", accessorKey: "name" },
      { header: "Type", accessorKey: "type" },
      {
        header: "Count Permission",
        accessorKey: "permissions",
        cell: ({ row }) => (
          <Typography>
            {Object.keys(row.original.permissions).length}
          </Typography>
        ),
      },
      {
        header: "Actions",
        accessorKey: "actions",
        cell: ({ row }) => (
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 1,
              alignItems:"center",
              justifyContent:"center"
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
            <Button
              onClick={() => handleViewDetails(row.original.id)}
              variant="contained"
              color="info"
              size="small"
            >
              View 
            </Button>
          </Box>
        ),
      },
    ],
    [data, selectedPerson]
  );

  const typeCounts = data.reduce((acc, item) => {
    acc[item.type] = (acc[item.type] || 0) + 1;
    return acc;
  }, {});

  const colors = generateColors(Object.keys(typeCounts).length);

  const chartData = {
    labels: Object.keys(typeCounts),
    datasets: [
      {
        label: "Role Count by Type",
        data: Object.values(typeCounts),
        backgroundColor: colors,
        borderColor: colors.map((color) => `${color}80`),
        borderWidth: 1,
      },
    ],
  };

  const summaryData = {
    totalRoles: data.length,
    types: [...new Set(data.map((item) => item.type))].length,
    averagePermissions: (
      data.reduce(
        (acc, item) => acc + Object.keys(item.permissions).length,
        0
      ) / data.length
    ).toFixed(2),
  };

  const permissionOptions = [
    "Create-Admin",
    "Read-Admins",
    "Update-Admin",
    "Delete-Admin",
  ];

  return (
    <Box sx={{ padding: "36px 20px", marginTop: "60px" }}>
      <Typography variant="h4" sx={{ fontWeight: "bold", mb: 2 }}>
        Roles List
      </Typography>

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
          Add New Role
        </Button>
      </Box>

      <TableContainerComponent
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
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />

      {/* Modal for editing/adding roles */}
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogTitle>{editMode ? "Edit Role" : "Add New Role"}</DialogTitle>
        <DialogContent>
          <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
            <TextField
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
            <TextField
              label="Type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              fullWidth
              variant="outlined"
            />
            <Box>
              <Typography variant="h6">Permissions</Typography>
              {permissionOptions.map((permission) => (
                <Box
                  key={permission}
                  sx={{ display: "flex", alignItems: "center", gap: 1 }}
                >
                  <Checkbox
                    checked={formData.permissions[permission] || false}
                    onChange={() =>
                      setFormData({
                        ...formData,
                        permissions: {
                          ...formData.permissions,
                          [permission]: !formData.permissions[permission],
                        },
                      })
                    }
                  />
                  <Typography>{permission}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button onClick={handleSubmit} color="primary">
            {editMode ? "Update" : "Add"}
          </Button>
        </DialogActions>
      </Dialog>

      {/* Modal for viewing details */}
      <Dialog
        open={!!selectedPerson}
        onClose={() => setSelectedPerson(null)}
        maxWidth="md"
        fullWidth
      >
        <DialogTitle>Details for {selectedPerson?.name}</DialogTitle>
        <DialogContent>
          {selectedPerson ? (
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Settings</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {permissionOptions.map((permission) => (
                    <TableRow key={permission}>
                      <TableCell>{permission}</TableCell>
                      <TableCell>admin</TableCell>
                      <TableCell>
                        <Checkbox
                          checked={
                            selectedPerson.permissions[permission] || false
                          }
                          onChange={() => handleCheckboxChange(permission)}
                        />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          ) : (
            <Typography>No details available</Typography>
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setSelectedPerson(null)} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default RolePage;
