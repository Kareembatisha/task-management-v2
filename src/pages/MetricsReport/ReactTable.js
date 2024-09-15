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

export { SearchTable, SearchTable2 };
