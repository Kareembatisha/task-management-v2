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
      AverageRating: "2.75",
      IssuesReported: "14",
      reportedIssue: "No Toilet paper/paper Towel",
    },
    {
      Zone: "Male Public Washroom",
      AverageRating: "2.68",
      IssuesReported: "9",
      reportedIssue: "No Toilet paper/paper Towel",
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
        header: "Average Rating",
        accessorKey: "AverageRating",
        enableColumnFilter: false,
      },
      {
        header: "No. Of Issues Reported",
        accessorKey: "IssuesReported",
        enableColumnFilter: false,
      },
      {
        header: "Most reported Issue",
        accessorKey: "reportedIssue",
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

export { SearchTable };
