import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  InputBase,
  Drawer,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Pagination,
  Button,
  Box,
  Select,
  MenuItem,
  useMediaQuery,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const members = [
  { name: "test1...", avatar: "https://via.placeholder.com/40" },
  { name: "test2", avatar: "https://via.placeholder.com/40" },
  { name: "test3", avatar: "https://via.placeholder.com/40" },
  { name: "test4", avatar: "https://via.placeholder.com/40" }, // New member
  { name: "test5", avatar: "https://via.placeholder.com/40" }, // New member
  // Add more members...
];

const rows = [
  {
    member: "test1...",
    date: "Thu 01-Aug-2024",
    zone: "Male Public Washroom",
    shift: "03:00 PM to 11:00 PM",
    checkIn: "02:49 PM to 11:04 PM",
    duration: "08:14",
    source: "App",
    request: "TimeSheet",
    status: "Pending",
  },
  {
    member: "test2",
    date: "Fri 02-Aug-2024",
    zone: "Female Public Washroom",
    shift: "08:00 AM to 04:00 PM",
    checkIn: "07:58 AM to 04:01 PM",
    duration: "08:03",
    source: "Web",
    request: "TimeSheet",
    status: "Approved",
  },
  {
    member: "test3",
    date: "Sat 03-Aug-2024",
    zone: "Admin Office",
    shift: "09:00 AM to 05:00 PM",
    checkIn: "08:59 AM to 05:00 PM",
    duration: "08:00",
    source: "App",
    request: "TimeSheet",
    status: "Rejected",
  },
  // Add more rows...
];

const theme = createTheme({
  palette: {
    primary: {
      main: "#1976d2", // Blue for the AppBar
    },
    secondary: {
      main: "#d32f2f", // Red for buttons and highlights
    },
    background: {
      default: "#e3f2fd", // Light blue for background
    },
    text: {
      primary: "#212121", // Dark text color
      secondary: "#616161", // Medium gray for secondary text
    },
    divider: "#1976d2", // Blue for dividers
    action: {
      hover: "#bbdefb", // Light blue for hover effects
    },
    warning: {
      main: "#ffa000", // Amber for warning status
    },
    success: {
      main: "#388e3c", // Green for success status
    },
  },
});

const TimeSheet = () => {
  const [selectedMember, setSelectedMember] = useState("");
  const isSmallScreen = useMediaQuery("(max-width: 600px)");

  const handleMemberClick = (event) => {
    setSelectedMember(event.target.value);
  };

  const filteredRows = selectedMember
    ? rows.filter((row) => row.member === selectedMember)
    : rows;

  return (
    <ThemeProvider theme={theme}>
      <div
        className="page-content"
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          padding: isSmallScreen ? "8px" : "16px",
          marginTop: "60px",
          backgroundColor: theme.palette.background.default,
        }}
      >
        {/* App Bar */}
        <AppBar position="static" color="primary">
          <Toolbar
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexDirection: isSmallScreen ? "column" : "row",
              alignItems: isSmallScreen ? "flex-start" : "center",
            }}
          >
            <Typography color="white" variant="h6">
              Time Sheet
            </Typography>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                flexDirection: isSmallScreen ? "column" : "row",
              }}
            >
              <input
                type="date"
                style={{
                  marginRight: isSmallScreen ? "0" : "8px",
                  marginBottom: isSmallScreen ? "8px" : "0",
                  border: `1px solid ${theme.palette.primary.main}`,
                  borderRadius: "4px",
                  padding: "6px 12px",
                }}
              />
              <input
                type="date"
                style={{
                  marginRight: isSmallScreen ? "0" : "8px",
                  marginBottom: isSmallScreen ? "8px" : "0",
                  border: `1px solid ${theme.palette.primary.main}`,
                  borderRadius: "4px",
                  padding: "6px 12px",
                }}
              />
              <div
                style={{
                  position: "relative",
                  marginRight: isSmallScreen ? "0" : "16px",
                  marginBottom: isSmallScreen ? "8px" : "0",
                  color: "#fff",
                }}
              >
                <SearchIcon
                  style={{
                    position: "absolute",
                    left: "8px",
                    top: "50%",
                    transform: "translateY(-50%)",
                    color: theme.palette.text.light,
                  }}
                />
                <InputBase
                  placeholder="Search Member"
                  style={{
                    paddingLeft: "32px",
                    border: `1px solid ${theme.palette.primary.light}`,
                    borderRadius: "4px",
                    padding: "6px 12px",
                    color: "#fff",
                  }}
                />
              </div>
              <Button
                variant="contained"
                color="secondary"
                style={{
                  marginBottom: isSmallScreen ? "8px" : "0",
                  width: isSmallScreen ? "100%" : "auto",
                }}
              >
                Approve All
              </Button>
            </div>
          </Toolbar>
        </AppBar>

        {/* Main Content */}
        <div
          style={{
            display: "flex",
            flexGrow: 1,
            flexDirection: isSmallScreen ? "column" : "row",
          }}
        >
          {/* Drawer or Dropdown */}
          {isSmallScreen ? (
            <Select
              value={selectedMember}
              onChange={handleMemberClick}
              displayEmpty
              fullWidth
              style={{ marginBottom: "16px" }}
            >
              <MenuItem value="">
                <em>Select a Member</em>
              </MenuItem>
              {members.map((member, index) => (
                <MenuItem key={index} value={member.name}>
                  <ListItemAvatar>
                    <Avatar src={member.avatar} />
                  </ListItemAvatar>
                  {member.name}
                </MenuItem>
              ))}
            </Select>
          ) : (
            <Box
              variant="permanent"
              style={{
                width: "240px",
                flexShrink: 0,
                maxHeight: "550px",
                overflowY: "auto",
                borderRight: `1px solid ${theme.palette.divider}`,
                backgroundColor: theme.palette.primary.main, // Blue background
              }}
            >
              <List>
                {members.map((member, index) => (
                  <ListItem
                    button
                    key={index}
                    onClick={() => setSelectedMember(member.name)}
                    style={{
                      cursor: "pointer",
                      backgroundColor:
                        selectedMember === member.name
                          ? theme.palette.action.hover
                          : "inherit",
                    }}
                  >
                    <ListItemAvatar>
                      <Avatar src={member.avatar} />
                    </ListItemAvatar>
                    <ListItemText
                      primary={member.name}
                      style={{ color: "#ffffff" }}
                    />
                  </ListItem>
                ))}
              </List>
            </Box>
          )}

          {/* Table */}
          <div style={{ flexGrow: 1 }}>
            <TableContainer component={Paper} style={{ marginTop: "16px" }}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Zone</TableCell>
                    <TableCell>Scheduled Shift</TableCell>
                    <TableCell>Check In / Check Out</TableCell>
                    <TableCell>Work Duration</TableCell>
                    <TableCell>Source</TableCell>
                    <TableCell>Request</TableCell>
                    <TableCell>Status</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {filteredRows.map((row, index) => (
                    <TableRow key={index}>
                      <TableCell>{row.date}</TableCell>
                      <TableCell>{row.zone}</TableCell>
                      <TableCell>{row.shift}</TableCell>
                      <TableCell>{row.checkIn}</TableCell>
                      <TableCell>{row.duration}</TableCell>
                      <TableCell>{row.source}</TableCell>
                      <TableCell>{row.request}</TableCell>
                      <TableCell>
                        <Button
                          variant="contained"
                          color={
                            row.status === "Pending" ? "warning" : "success"
                          }
                          size="small"
                        >
                          {row.status}
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>

            {/* Pagination */}
            <Pagination
              count={3}
              color="primary"
              style={{ marginTop: "16px", float: "right" }}
            />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default TimeSheet;
