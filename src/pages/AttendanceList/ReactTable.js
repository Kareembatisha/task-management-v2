import React, { useEffect, useMemo, useState } from "react";
import TableContainer from "../../Components/Common/TableContainerReactTable";
import {
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";

const SearchTable = () => {
  const searchTable = [
    {
      Zone: "Female Public Washroom",
      Level: "Ground floor",
      Totalvisitor: "14",
    },
    {
      Zone: "Male Public Washroom",
      Level: "Ground floor",
      Totalvisitor: "9",
    },
  ];

  const columns = useMemo(
    () => [
      {
        header: "Zone",
        cell: (cell) => {
          return <span className="fw-semibold">{cell.getValue()}</span>;
        },
        accessorKey: "Zone",
        enableColumnFilter: false,
      },

      {
        header: "Level",
        accessorKey: "Level",
        enableColumnFilter: false,
      },
      {
        header: "Total visitor",
        accessorKey: "Totalvisitor",
        enableColumnFilter: false,
      },
    ],
    []
  );

  return (
    <React.Fragment>
      <TableContainer
        columns={columns || []}
        data={searchTable || []}
        isGlobalFilter={true}
        customPageSize={5}
        SearchPlaceholder="Search..."
      />
    </React.Fragment>
  );
};
const SearchTable2 = () => {
  const searchTable = [
    {
      Zone: "Female Public Washroom",
      Level: "Ground floor",
      Totalvisitor: "14",
      PeakHours: "1)07-8",
      PeakDayOfWeek: "sun",
    },
    {
      Zone: "Male Public Washroom",
      Level: "Ground floor",
      Totalvisitor: "9",
      PeakHours: "1)07-8",
      PeakDayOfWeek: "sun",
    },
  ];

  const columns = useMemo(
    () => [
      {
        header: "Zone",
        cell: (cell) => {
          return <span className="fw-semibold">{cell.getValue()}</span>;
        },
        accessorKey: "Zone",
        enableColumnFilter: false,
      },

      {
        header: "Level",
        accessorKey: "Level",
        enableColumnFilter: false,
      },
      {
        header: "Total visitor",
        accessorKey: "Totalvisitor",
        enableColumnFilter: false,
      },
      {
        header: "Peak Hours",
        accessorKey: "PeakHours",
        enableColumnFilter: false,
      },
      {
        header: "Peak Day Of Week",
        accessorKey: "PeakDayOfWeek",
        enableColumnFilter: false,
      },
    ],
    []
  );

  return (
    <React.Fragment>
      <TableContainer
        columns={columns || []}
        data={searchTable || []}
        isGlobalFilter={true}
        customPageSize={5}
        SearchPlaceholder="Search..."
      />
    </React.Fragment>
  );
};
const AttendanceArrival = () => {
  const searchTable = [
    {
      date:"01-08-2024",
      employeeId:"kk12",
      employeeName:"mohammed",
      building:"KING ABDULLAH",
      userGroup:"HouseKeeping",
      clockIn:"06:30 AM",
      clockOut:"06:30 PM",
      workDuration:"8 H",
      Status:"present"
    },
    {
      date:"01-08-2024",
      employeeId:"kk12",
      employeeName:"mohammed",
      building:"KING ABDULLAH",
      userGroup:"HouseKeeping",
      clockIn:"06:30 AM",
      clockOut:"06:30 PM",
      workDuration:"8 H",
      Status:"present"
    },
  
    
  ];

  const columns = useMemo(
    () => [
      {
        header: "Date",
        cell: (cell) => {
          return <span className="fw-semibold">{cell.getValue()}</span>;
        },
        accessorKey: "date",
        enableColumnFilter: false,
      },

      {
        header: "Employee Id",
        accessorKey: "employeeId",
        enableColumnFilter: false,
      },
      {
        header: "Employee Name",
        accessorKey: "employeeName",
        enableColumnFilter: false,
      },
      {
        header: "Building",
        accessorKey: "building",
        enableColumnFilter: false,
      },
      {
        header: "User Group",
        accessorKey: "userGroup",
        enableColumnFilter: false,
      },
      {
        header: "Clock In",
        accessorKey: "clockIn",
        enableColumnFilter: false,
      },
      {
        header: "Clock Out",
        accessorKey: "clockOut",
        enableColumnFilter: false,
      },
      {
        header: "Work Duration",
        accessorKey: "workDuration",
        enableColumnFilter: false,
      },
      {
        header: "Status",
        accessorKey: "Status",
        enableColumnFilter: false,
      },

    ],
    []
  );

  return (
    <React.Fragment>
      <TableContainer
        columns={columns || []}
        data={searchTable || []}
        isGlobalFilter={true}
        customPageSize={5}
        SearchPlaceholder="Search..."
      />
    </React.Fragment>
  );
};
const AttendanceSummary = () => {
  const searchTable = [
    {
      
      Id:"kk12",
      employeeName:"mohammed",
      building:"KING ABDULLAH",
      expectworkingDay:"20",
      actualWorkDay:"15"
    },
  
    {
      
      Id:"kk12",
      employeeName:"mohammed",
      building:"KING ABDULLAH",
      expectworkingDay:"20",
      actualWorkDay:"15"
    },
  
  
    
  ];

  const columns = useMemo(
    () => [
      {
        header: "ID",
        cell: (cell) => {
          return <span className="fw-semibold">{cell.getValue()}</span>;
        },
        accessorKey: "Id",
        enableColumnFilter: false,
      },

      {
        header: "Employee Name",
        accessorKey: "employeeName",
        enableColumnFilter: false,
      },
      {
        header: "Building",
        accessorKey: "building",
        enableColumnFilter: false,
      },
      {
        header: "expect Working Day",
        accessorKey: "expectworkingDay",
        enableColumnFilter: false,
      },
      {
        header: "Actual Work Day",
        accessorKey: "actualWorkDay",
        enableColumnFilter: false,
      },
      
    ],
    []
  );

  return (
    <React.Fragment>
      <TableContainer
        columns={columns || []}
        data={searchTable || []}
        isGlobalFilter={true}
        customPageSize={5}
        SearchPlaceholder="Search..."
      />
    </React.Fragment>
  );
};

export { SearchTable, SearchTable2, AttendanceArrival, AttendanceSummary };
