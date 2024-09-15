const getChartColorsArray = (colors) => {
    try {
      // Parse JSON string to array
      colors = JSON.parse(colors);
      
      // Map over the color array
      return colors.map(value => {
        // Remove spaces from the color value
        const newValue = value.replace(/\s+/g, '');
  
        // If the value doesn't contain a comma, assume it's a named color
        if (newValue.indexOf(",") === -1) {
          let color = getComputedStyle(document.documentElement).getPropertyValue(newValue);
          color = color ? color.trim() : newValue;
  
          // Return the resolved color or fallback to the original value
          return color.startsWith("#") ? color : newValue;
        } else {
          // Handle RGBA values
          const val = newValue.split(',');
          if (val.length === 2) {
            let rgbaColor = getComputedStyle(document.documentElement).getPropertyValue(val[0]);
            rgbaColor = rgbaColor ? rgbaColor.trim() : '';
            return rgbaColor ? `rgba(${rgbaColor}, ${val[1]})` : newValue;
          } else {
            // If not valid RGBA format, return as-is
            return newValue;
          }
        }
      });
    } catch (error) {
      console.error('Error processing colors:', error);
      // Return a default set of colors or handle as needed
      return ['#2565d5']; // Fallback color
    }
  };
  
  export default getChartColorsArray;
  