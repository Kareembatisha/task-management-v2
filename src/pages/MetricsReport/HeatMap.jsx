import React from "react";
import { Box, Grid, Typography } from "@mui/material";

const heatmapData = [
  ["sat", 58, 41, 28, 58, 22, 6, 49, 167, 159, 71, 77],
  ["sun", 89, 85, 85, 69, 40, 20, 70, 101, 165, 78, 115],
  ["mon", 84, 46, 56, 72, 34, 22, 93, 138, 119, 69, 97],
  ["tue", 70, 97, 82, 50, 76, 37, 104, 124, 82, 61, 58],
  ["wed", 166, 147, 108, 59, 68, 29, 118, 148, 111, 127, 502],
  ["thu", 207, 205, 160, 72, 93, 46, 101, 75, 51, 52, 41],
  ["fri", 220, 85, 54, 58, 45, 19, 84, 151, 77, 80, 87],
  ["", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11"],
];

const getColorForValue = (value) => {
  if (value > 500) return "#cd0000"; // Red for high values
  if (value > 200) return "#b9b900"; // Yellow for mid-high values
  if (value > 100) return "#00b700"; // Green for mid-low values
  return "#00a3a3"; // Blue for low values
};

const HeatMap = () => {
  return (
    <Box
      mt={4} // MarginTop (theme.spacing(4))
      mb={7} // MarginBottom (theme.spacing(7))
      sx={{
        border: "1px solid", // Solid border
        borderColor: "divider", // Border color
        boxShadow: 5, // Shadow depth
        borderRadius: 1, // Optional: Rounded corners
        padding: 3,
      }}
    >
      <Typography variant="h6">People distribution Heat Map</Typography>
      <Typography variant="subtitle1">
        This heat map shows the typical expected usage for a given hour across
        the days of the week.
      </Typography>

      <Grid container spacing={1} sx={{ mt: 2 }}>
        {heatmapData.map((row, rowIndex) => (
          <Grid container item spacing={1} key={rowIndex}>
            {row.map((value, colIndex) => (
              <Grid item xs={1} key={colIndex}>
                <Box
                  sx={{
                    width: "100%",
                    height: 40,
                    backgroundColor:
                      colIndex === 0 || rowIndex === heatmapData.length - 1
                        ? "#ffffff"
                        : getColorForValue(value),
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color:
                      colIndex === 0 || rowIndex === heatmapData.length - 1
                        ? "#000000"
                        : "#ffffff",
                  }}
                >
                  {value}
                </Box>
              </Grid>
            ))}
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default HeatMap;
