import React, { useMemo } from "react";
import TableContainer from "../../Components/Common/TableContainerReactTable";
import { Paper, Box } from "@mui/material";

const SearchTable = () => {
  const teamMangement = [
    {
      Member: "Kareem",
      MemberType: "Full time",
      AccessType: "Manager",
      EmployeeID: "kar112",
      MemberId: "112",
      NotificationMeduim: "--",
      PIN: "--",
      Status: "Active",
      Actions: "----",
    },
    {
      Member: "Ahmed",
      MemberType: "Full time",
      AccessType: "sales",
      EmployeeID: "kar112",
      MemberId: "112",
      NotificationMeduim: "--",
      PIN: "--",
      Status: "Active",
      Actions: "----",
    },
    {
      Member: "Kareem",
      MemberType: "Full time",
      AccessType: "Manager",
      EmployeeID: "kar112",
      MemberId: "112",
      NotificationMeduim: "--",
      PIN: "--",
      Status: "Pending",
      Actions: "----",
    },
    {
      Member: "Kareem",
      MemberType: "Full time",
      AccessType: "Manager",
      EmployeeID: "kar112",
      MemberId: "112",
      NotificationMeduim: "--",
      PIN: "--",
      Status: "Active",
      Actions: "----",
    },
    {
      Member: "Kareem",
      MemberType: "Full time",
      AccessType: "Manager",
      EmployeeID: "kar112",
      MemberId: "112",
      NotificationMeduim: "--",
      PIN: "--",
      Status: "Active",
      Actions: "----",
    },
    {
      Member: "Kareem",
      MemberType: "Full time",
      AccessType: "Manager",
      EmployeeID: "kar112",
      MemberId: "112",
      NotificationMeduim: "--",
      PIN: "--",
      Status: "Active",
      Actions: "----",
    },
    {
      Member: "Kareem",
      MemberType: "Full time",
      AccessType: "Manager",
      EmployeeID: "kar112",
      MemberId: "112",
      NotificationMeduim: "--",
      PIN: "--",
      Status: "Active",
      Actions: "----",
    },
    {
      Member: "Kareem",
      MemberType: "Full time",
      AccessType: "Manager",
      EmployeeID: "kar112",
      MemberId: "112",
      NotificationMeduim: "--",
      PIN: "--",
      Status: "Active",
      Actions: "----",
    },
    {
      Member: "Kareem",
      MemberType: "Full time",
      AccessType: "Manager",
      EmployeeID: "kar112",
      MemberId: "112",
      NotificationMeduim: "--",
      PIN: "--",
      Status: "Active",
      Actions: "----",
    },
    {
      Member: "Kareem",
      MemberType: "Full time",
      AccessType: "Manager",
      EmployeeID: "kar112",
      MemberId: "112",
      NotificationMeduim: "--",
      PIN: "--",
      Status: "Active",
      Actions: "----",
    },
    {
      Member: "Kareem",
      MemberType: "Full time",
      AccessType: "Manager",
      EmployeeID: "kar112",
      MemberId: "112",
      NotificationMeduim: "--",
      PIN: "--",
      Status: "Active",
      Actions: "----",
    },
    {
      Member: "Kareem",
      MemberType: "Full time",
      AccessType: "Manager",
      EmployeeID: "kar112",
      MemberId: "112",
      NotificationMeduim: "--",
      PIN: "--",
      Status: "Active",
      Actions: "----",
    },
    {
      Member: "Kareem",
      MemberType: "Full time",
      AccessType: "Manager",
      EmployeeID: "kar112",
      MemberId: "112",
      NotificationMeduim: "--",
      PIN: "--",
      Status: "Active",
      Actions: "----",
    },
    {
      Member: "Kareem",
      MemberType: "Full time",
      AccessType: "Manager",
      EmployeeID: "kar112",
      MemberId: "112",
      NotificationMeduim: "--",
      PIN: "--",
      Status: "Active",
      Actions: "----",
    },
    {
      Member: "Kareem",
      MemberType: "Full time",
      AccessType: "Manager",
      EmployeeID: "kar112",
      MemberId: "112",
      NotificationMeduim: "--",
      PIN: "--",
      Status: "Active",
      Actions: "----",
    },
    {
      Member: "Kareem",
      MemberType: "Full time",
      AccessType: "Manager",
      EmployeeID: "kar112",
      MemberId: "112",
      NotificationMeduim: "--",
      PIN: "--",
      Status: "Active",
      Actions: "----",
    },

    // Add more rows as needed
  ];

  const columns = useMemo(
    () => [
      {
        header: "Member",
        accessorKey: "Member",
        cell: ({ getValue }) => (
          <span className="fw-semibold">{getValue()}</span>
        ),
        enableColumnFilter: false,
      },
      {
        header: "Member Type",
        accessorKey: "MemberType",
        enableColumnFilter: false,
      },
      {
        header: "Access Type",
        accessorKey: "AccessType",
        enableColumnFilter: false,
      },
      {
        header: "Employee ID",
        accessorKey: "EmployeeID",
        enableColumnFilter: false,
      },
      {
        header: "MemberId",
        accessorKey: "MemberId",
        enableColumnFilter: false,
      },
      {
        header: "Notification Medium",
        accessorKey: "NotificationMeduim",
        enableColumnFilter: false,
      },
      {
        header: "PIN",
        accessorKey: "PIN",
        enableColumnFilter: false,
      },
      {
        header: "Status",
        accessorKey: "Status",
        cell: ({ getValue }) => {
          const status = getValue();
          return (
            <Box
              sx={{
                backgroundColor: status === "Active" ? "green" : "gray",
                color: "white",
                padding: "4px 8px",
                borderRadius: "4px",
                textAlign: "center",
              }}
            >
              {status}
            </Box>
          );
        },
        enableColumnFilter: false,
      },
      {
        header: "Actions",
        accessorKey: "Actions",
        enableColumnFilter: false,
      },
    ],
    []
  );

  return (
    <Paper sx={{ padding: 2 }}>
      <TableContainer
        columns={columns}
        data={teamMangement}
        isGlobalFilter={true}
        customPageSize={15}
        SearchPlaceholder="Search..."
      />
    </Paper>
  );
};

export { SearchTable };
