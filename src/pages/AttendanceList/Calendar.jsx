import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const data = [
  {
    name: "Ruhelda Nuruddin",
    status: [
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
    ],
  },
  {
    name: "Nemesio Manuel",
    status: [
      "P",
      "P",
      ".",
      "A",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
    ],
  },
  {
    name: "Laila Lungay",
    status: [
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
    ],
  },
  {
    name: "MD JAMIL AKHTAR",
    status: [
      "P",
      ".",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
    ],
  },
  {
    name: "Chrislianne Mnadapat",
    status: [
      "P",
      ".",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "A",
      "P",
      "P",
      "A",
      "P",
      "P",
      "P",
      "A",
      "P",
      "P",
      "P",
      "P",
    ],
  },
  {
    name: "Charmine Romera",
    status: [
      "P",
      "P",
      "P",
      "A",
      "P",
      "P",
      "P",
      "A",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
    ],
  },
  {
    name: "ALBANIE MACAPAYAG",
    status: [
      "P",
      "A",
      "A",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
    ],
  },
  {
    name: "Jhaylord Macellones",
    status: [
      "P",
      ".",
      "A",
      "P",
      "P",
      "P",
      "P",
      "P",
      "A",
      "P",
      "P",
      "P",
      "P",
      "P",
      "A",
      "P",
      "P",
      "P",
      "P",
      "P",
    ],
  },
  {
    name: "ERUEL VER FONTANILLA",
    status: [
      "P",
      "P",
      ".",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
    ],
  },
  {
    name: "RHEGIE DELA REA",
    status: [
      "A",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
    ],
  },
  {
    name: "Heria Hasim",
    status: [
      "A",
      "A",
      "A",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
      "P",
    ],
  },
  // Add more employees if needed...
];

const Calendar = () => {
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Employee</TableCell>
            {[
              "Aug 9",
              "Aug 3",
              "Aug 4",
              "Aug 5",
              "Aug 6",
              "Aug 7",
              "Aug 8",
              "Aug 9",
              "Aug 10",
              "Aug 11",
              "Aug 12",
              "Aug 13",
              "Aug 14",
              "Aug 15",
              "Aug 16",
              "Aug 17",
              "Aug 18",
              "Aug 19",
              "Aug 20",
              "Aug 21",
            ].map((date, index) => (
              <TableCell key={index}>{date}</TableCell>
            ))}
          </TableRow>
          <TableRow>
            <TableCell></TableCell>
            {[
              "Thu",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tue",
              "Wed",
              "Thu",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tue",
              "Wed",
              "Thu",
              "Fri",
              "Sat",
              "Sun",
              "Mon",
              "Tue",
            ].map((day, index) => (
              <TableCell key={index}>{day}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((employee, index) => (
            <TableRow key={index}>
              <TableCell>{employee.name}</TableCell>
              {employee.status.map((status, index) => (
                <TableCell
                  key={index}
                  style={{
                    color:
                      status === "A"
                        ? "red"
                        : status === "P"
                        ? "green"
                        : "black",
                    textAlign: "center",
                  }}
                >
                  {status}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Calendar;
