import React from 'react';
import { data } from './data';
import { Card, Grid, Typography, Box, useTheme } from '@mui/material';
import { keyframes } from '@emotion/react';
import { useNavigate } from 'react-router-dom';

// Keyframes for card hover animation
const hoverAnimation = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
`;

const SystemBoard = () => {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <div className='page-content'>
    <Box
      sx={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #f0f4f8, #e2e6ea)', // Gradient background
        padding: 4,
        position: 'relative',
        overflow: 'hidden',
      }}
      
    >
      {/* Optional overlay for background texture */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'url(/path/to/your/subtle-pattern.png) repeat', // Subtle pattern overlay
          opacity: 0.1,
        }}
      />
      <Box>

        <Box
          sx={{
           
            padding: 4,
            position: 'relative',
            zIndex: 1,
          }}
        >
          <Grid container spacing={4}>
            {data.map((item, index) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                key={index}
              >
                <Card
                  onClick={() => navigate(item.path)}
                  sx={{
                    borderRadius: 2,
                    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
                    boxShadow: theme.shadows[4],
                    cursor: 'pointer',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    height: '100%',
                    maxHeight: 350, // Fixed height for uniformity
                    '&:hover': {
                      animation: `${hoverAnimation} 0.5s ease-in-out`,
                      boxShadow: theme.shadows[8],
                      backgroundColor: theme.palette.primary.light, // Light primary color on hover
                      color: theme.palette.primary.contrastText,
                    },
                  }}
                >
                  <Box
                    sx={{
                      position: 'relative',
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: 120, // Fixed height for the image container
                      overflow: 'hidden',
                      backgroundColor: theme.palette.grey[100],
                    }}
                  >
                    <img
                      src={item.icon}
                      alt={item.title}
                      style={{
                        width: '80px',
                        height: '80px',
                        objectFit: 'contain',
                        transition: 'transform 0.3s ease-in-out',
                      }}
                    />
                  </Box>
                  <Box
                    p={2}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      flexGrow: 1,
                      justifyContent: 'space-between',
                    }}
                  >
                    <Typography
                      variant="h6"
                      align="center"
                      sx={{
                        mb: 1,
                        color: theme.palette.text.primary,
                        transition: 'color 0.3s ease',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                        '&:hover': {
                          color: theme.palette.primary.main,
                        },
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      align="center"
                      sx={{
                        color: theme.palette.text.secondary,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitBoxOrient: 'vertical',
                        WebkitLineClamp: 2, // Limits text to 2 lines
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Box>
    </div>
  );
};

export default SystemBoard;
