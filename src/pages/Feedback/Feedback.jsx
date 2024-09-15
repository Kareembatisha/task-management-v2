import * as React from "react";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import SentimentDissatisfiedIcon from "@mui/icons-material/SentimentDissatisfied";
import SentimentSatisfiedIcon from "@mui/icons-material/SentimentSatisfied";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAltOutlined";
import SentimentVerySatisfiedIcon from "@mui/icons-material/SentimentVerySatisfied";
import {
  Modal,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField,
  Typography,
  Container,
  CssBaseline,
} from "@mui/material";
import Swal from "sweetalert2";
import aiLogo from "../../assets/images/ai-cloud-logo.svg";
import { useNavigate } from "react-router-dom";

const iconSize = "60px"; // Default icon size

const StyledRating = styled(Rating)(({ theme }) => ({
  "& .MuiRating-icon": {
    fontSize: iconSize, // Set the size for the icons
    transition: "transform 0.3s ease", // Add transition for animation
  },
  "& .MuiRating-iconFilled": {
    color: "#ffb400", // Color for filled icons
  },
  "& .MuiRating-iconEmpty": {
    color: "#e0e0e0", // Color for empty icons
  },
  "& .MuiRating-iconHover": {
    transform: "scale(1.2)", // Scale up on hover
  },
}));

const customIcons = {
  1: {
    icon: <SentimentVeryDissatisfiedIcon fontSize="inherit" color="error" />,
    label: "Very Dissatisfied",
  },
  2: {
    icon: <SentimentDissatisfiedIcon fontSize="inherit" color="error" />,
    label: "Dissatisfied",
  },
  3: {
    icon: <SentimentSatisfiedIcon fontSize="inherit" color="warning" />,
    label: "Neutral",
  },
  4: {
    icon: <SentimentSatisfiedAltIcon fontSize="inherit" color="success" />,
    label: "Satisfied",
  },
  5: {
    icon: <SentimentVerySatisfiedIcon fontSize="inherit" color="success" />,
    label: "Very Satisfied",
  },
};

function IconContainer(props) {
  const { value, ...other } = props;
  return <span {...other}>{customIcons[value].icon}</span>;
}

IconContainer.propTypes = {
  value: PropTypes.number.isRequired,
};

export default function Feedback() {
  const [selectedRating, setSelectedRating] = React.useState(null);
  const [formOpen, setFormOpen] = React.useState(false);
  const [formData, setFormData] = React.useState({
    zone: "",
    floor: "",
    description: "",
  });
  const navigate = useNavigate();

  const handleRatingChange = (event, newValue) => {
    if (newValue === null) return; // Ignore when rating is cleared

    setSelectedRating(newValue);

    if (newValue <= 3) {
      setFormOpen(true);
    } else {
      Swal.fire({
        title: "Thank You!",
        text: "Thank you for your feedback!",
        icon: "success",
        confirmButtonText: "Close",
        background: "#ffffff",
        color: "#333333",
        confirmButtonColor: "#1e88e5",
        customClass: {
          title: "swal-title",
          text: "swal-text",
          confirmButton: "swal-confirm-button",
        },
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/dashboard");
        }
      });
    }
  };

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmitForm = () => {
    console.log("Form Data:", formData);

    // Reset form data
    setFormData({
      level: "",
      floor: "",
      description: "",
    });

    setFormOpen(false);
    Swal.fire({
      title: "Thank You!",
      text: "Your feedback is appreciated.",
      icon: "success",
      confirmButtonText: "Close",
      background: "#ffffff",
      color: "#333333",
      confirmButtonColor: "#1e88e5",
      customClass: {
        title: "swal-title",
        text: "swal-text",
        confirmButton: "swal-confirm-button",
      },
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/dashboard");
      }
    });
  };

  return (
    <Container
      component="main"
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        padding: { xs: 2, sm: 4 }, // Responsive padding
        background: "linear-gradient(135deg, #e0f7fa, #b9fbc0, #f0e6f6)", // Light pastel gradient background
        backgroundSize: "400% 400%", // To create an animated gradient effect
        animation: "gradientAnimation 15s ease infinite", // Gradient animation
        position: "relative",
        overflow: "hidden",
      }}
    >
      <CssBaseline />

      {/* Large Logo */}
      <img
        src={aiLogo}
        alt="AI Cloud Logo"
        style={{
          width: "150px", // Responsive width
          height: "auto",
          marginBottom: "20px", // Adjust margin for spacing
        }}
      />

      <Typography
        variant="h3"
        align="center"
        gutterBottom
        sx={{
          mb: 4,
          color: "#333333",
          fontWeight: 700,
          textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)", // Subtle text shadow
          animation: "fadeIn 1s ease-out", // Fade-in animation
          fontSize: { xs: "h4.fontSize", sm: "h3.fontSize" }, // Responsive font size
        }}
      >
        Need Your Feedback
      </Typography>

      <StyledRating
        name="highlight-selected-only"
        defaultValue={2}
        IconContainerComponent={IconContainer}
        getLabelText={(value) => customIcons[value].label}
        highlightSelectedOnly
        onChange={handleRatingChange}
        sx={{ mb: 4 }} // Margin bottom for spacing
      />

      {/* Feedback Form Modal */}
      <Modal open={formOpen} onClose={() => setFormOpen(false)}>
        <div
          style={{
            width: "90%",
            maxWidth: "500px",
            margin: "auto",
            marginTop: "10%",
            padding: "20px",
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            boxShadow: "0 8",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.3)",
            animation: "fadeIn 0.5s ease-out", // Fade-in animation
          }}
        >
          <Typography
            variant="h5"
            gutterBottom
            sx={{ color: "#1e88e5", fontWeight: 500 }}
          >
            We Value Your Feedback
          </Typography>
          <div style={{ marginTop: "16px" }}>
            <FormControl fullWidth style={{ marginBottom: "16px" }}>
              <InputLabel>What is the Zone?</InputLabel>
              <Select
                name="level"
                value={formData.level}
                onChange={handleFormChange}
              >
                <MenuItem value="level1">zone 1</MenuItem>
                <MenuItem value="level2">zone 2</MenuItem>
                <MenuItem value="level3">zone 3</MenuItem>
                <MenuItem value="level4">zone 4</MenuItem>
                <MenuItem value="level5">zone 5</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth style={{ marginBottom: "16px" }}>
              <InputLabel>What is the Floor?</InputLabel>
              <Select
                name="floor"
                value={formData.floor}
                onChange={handleFormChange}
              >
                <MenuItem value="floor1">Floor 1</MenuItem>
                <MenuItem value="floor2">Floor 2</MenuItem>
                <MenuItem value="floor3">Floor 3</MenuItem>
                <MenuItem value="floor4">Floor 4</MenuItem>
                <MenuItem value="floor5">Floor 5</MenuItem>
              </Select>
            </FormControl>
            <TextField
              name="description"
              label="Description"
              multiline
              rows={4}
              value={formData.description}
              onChange={handleFormChange}
              fullWidth
              style={{ marginBottom: "16px" }}
            />
          </div>
          <Button
            onClick={handleSubmitForm}
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            style={{
              backgroundColor: "#1e88e5", // Button color
              color: "#ffffff", // Text color
              transition: "background-color 0.3s ease",
              borderRadius: "8px",
              fontWeight: 500,
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)", // Button shadow
            }}
          >
            Submit
          </Button>
        </div>
      </Modal>
    </Container>
  );
}
