import React from "react";
import {
  Container,
  Grid,
  Paper,
  Typography,
  Select,
  MenuItem,
  Box,
} from "@mui/material";
import BreadCrumb from "../../Components/Common/BreadCrumb";

const data = [
  {
    reason: "Wet/Dirty Floor",
    female: 2,
    male: 12,
    colorFemale: "#00a8b5",
    colorMale: "#ff9800",
  },
  {
    reason: "Dirty Basin",
    female: 2,
    male: 15,
    colorFemale: "#00a8b5",
    colorMale: "#f44336",
  },
  {
    reason: "Dirty Cubicle",
    female: 1,
    male: 20,
    colorFemale: "#00a8b5",
    colorMale: "#d32f2f",
  },
  {
    reason: "Odour",
    female: 4,
    male: 10,
    colorFemale: "#00796b",
    colorMale: "#ffeb3b",
  },
  {
    reason: "Dirty Mirror",
    female: 2,
    male: 7,
    colorFemale: "#00a8b5",
    colorMale: "#8bc34a",
  },
  {
    reason: "Bin Full",
    female: 1,
    male: 4,
    colorFemale: "#00a8b5",
    colorMale: "#4caf50",
  },
  {
    reason: "No Soap",
    female: 1,
    male: 12,
    colorFemale: "#00a8b5",
    colorMale: "#ff9800",
  },
  {
    reason: "",
    female: "Female Public Washroom",
    male: "Male Public Washroom",
    colorFemale: "#fff",
    colorMale: "#fff",
    txtcolor: "black",
  },
];

const ChartTable = () => {
  return (
    <Container  maxWidth="xl">
      <Paper sx={{ padding: 4 }}>
      
        <Grid container direction="column" spacing={1}>
          {data.map((row, index) => (
            <Grid item key={index}>
              {/* <Typography variant="body2">{row.reason}</Typography> */}
              <Grid container>
                <Grid xs={2}>
                  <Box
                    sx={{
                      backgroundColor: "#fff",
                      color: "black",
                      padding: 0,
                      textAlign: "start",
                    }}
                  >
                    {row.reason}
                  </Box>
                </Grid>
                <Grid xs={5}>
                  <Box
                    sx={{
                      backgroundColor: row.colorFemale,
                      color: row.txtcolor ? "black" : "white",
                      padding: 1,
                      textAlign: "center",
                    }}
                  >
                    {row.female}
                  </Box>
                </Grid>
                <Grid xs={5}>
                  <Box
                    sx={{
                      backgroundColor: row.colorMale,
                      color: row.txtcolor ? "black" : "white",
                      padding: 1,
                      textAlign: "center",
                    }}
                  >
                    {row.male}
                  </Box>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Paper>
    </Container>
  );
};

export default ChartTable;
