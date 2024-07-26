import React, { useState, useEffect } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useParams, useNavigate, useLocation } from "react-router-dom";

const UpdateProjectForm = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  console.log("location",location)

  const [formData, setFormData] = useState({
    projectName: "",
    startDate: "",
    note: "",
    projectTitle: "",
    location: {
      formattedAddress: "",
      coordinate: {
        lat: "",
        long: "",
      },
    },
    pricePerTree: "",
    areas: [],
    assignedTo: "",
    treeType: "",
    attachments: [],
    images: [],
    video: [],
    aboutTheProject: "",
    hectareRestored: "",
    rainObserved: "",
    mainInterventions: "",
    airQuality: "",
    targetTrees: "",
    co2Storage: "",
    co2Removal: "",
    projectStatus: "",
  });

  useEffect(() => {
    fetchProjectDetails();
  }, []);

  const fetchProjectDetails = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/api/project/${projectId}`
      );
      const projectData = response.data; // Assuming API response matches formData structure
      setFormData(projectData);
    } catch (error) {
      console.error("Error fetching project details:", error);
      alert("Failed to fetch project details. Please try again.");
    }
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleLocationChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      location: {
        ...formData.location,
        [name]: value,
      },
    });
  };

  const handleCoordinateChange = (event, index) => {
    const { name, value } = event.target;
    const newAreas = [...formData.areas];
    newAreas[index] = {
      ...newAreas[index],
      coordinate: {
        ...newAreas[index].coordinate,
        [name]: value,
      },
    };
    setFormData({
      ...formData,
      areas: newAreas,
    });
  };

  const handleFileChange = (event, fileType) => {
    const files = event.target.files;
    const fileArray = Array.from(files).map((file) =>
      URL.createObjectURL(file)
    );
    setFormData({
      ...formData,
      [fileType]: fileArray,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.put(
        `http://localhost:8000/api/project/${projectId}`,
        formData
      );
      alert("Project updated successfully!");
      navigate("/project"); // Redirect to project list page or wherever needed
    } catch (error) {
      console.error("Error updating project:", error);
      alert("Failed to update project. Please try again.");
    }
  };

  const addArea = () => {
    setFormData({
      ...formData,
      areas: [...formData.areas, { coordinate: { lat: "", long: "" } }],
    });
  };

  const removeArea = (index) => {
    const newAreas = formData.areas.filter((area, idx) => idx !== index);
    setFormData({
      ...formData,
      areas: newAreas,
    });
  };

  const handleCancel = () => {
    navigate("/project"); // Redirect to project list page or wherever needed
  };

  return <></>
  return (
    <Box sx={{ maxWidth: 800, margin: "auto", padding: 2 }}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          {/* Project Details */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Project Name"
              name="projectName"
              value={formData.projectName}
              onChange={handleInputChange}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Start Date"
              name="startDate"
              type="date"
              value={formData.startDate}
              onChange={handleInputChange}
              variant="outlined"
              required
              InputLabelProps={{
                shrink: true,
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Note"
              name="note"
              value={formData.note}
              onChange={handleInputChange}
              variant="outlined"
              multiline
              rows={3}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Project Title"
              name="projectTitle"
              value={formData.projectTitle}
              onChange={handleInputChange}
              variant="outlined"
              required
            />
          </Grid>
          {/* Location */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Location"
              name="formattedAddress"
              value={formData.location.formattedAddress}
              onChange={handleLocationChange}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              label="Latitude"
              name="lat"
              value={formData.location.coordinate.lat}
              onChange={(e) => handleCoordinateChange(e, 0)}
              variant="outlined"
              required
            />
          </Grid>
          <Grid item xs={12} sm={3}>
            <TextField
              fullWidth
              label="Longitude"
              name="long"
              value={formData.location.coordinate.long}
              onChange={(e) => handleCoordinateChange(e, 0)}
              variant="outlined"
              required
            />
          </Grid>
          {/* Price Per Tree */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="Price Per Tree"
              name="pricePerTree"
              value={formData.pricePerTree}
              onChange={handleInputChange}
              variant="outlined"
              required
            />
          </Grid>
          {/* Areas */}
          <Grid item xs={6}>
            <Typography variant="h6" gutterBottom>
              Areas
            </Typography>
            {formData.areas.map((area, index) => (
              <Grid container spacing={2} key={index}>
                <Grid item xs={12} sm={3}>
                  <TextField
                    fullWidth
                    label={`Area ${index + 1} Latitude`}
                    name="lat"
                    value={area.coordinate.lat}
                    onChange={(e) => handleCoordinateChange(e, index)}
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={3}>
                  <TextField
                    fullWidth
                    label={`Area ${index + 1} Longitude`}
                    name="long"
                    value={area.coordinate.long}
                    onChange={(e) => handleCoordinateChange(e, index)}
                    variant="outlined"
                    required
                  />
                </Grid>
                <Grid item xs={12} sm={2}>
                  <Button
                    variant="outlined"
                    color="secondary"
                    onClick={() => removeArea(index)}
                  >
                    Remove
                  </Button>
                </Grid>
              </Grid>
            ))}
            <Button
              variant="outlined"
              color="primary"
              onClick={addArea}
              sx={{ marginTop: 1 }}
            >
              Add Area
            </Button>
          </Grid>
          <Grid item xs={6}>
            <MapContainer
              center={[51.505, -0.09]}
              zoom={13}
              style={{ height: "200px", width: "100%" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={[51.505, -0.09]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          </Grid>

          {/* Assigned To */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Assigned To"
              name="assignedTo"
              value={formData.assignedTo}
              onChange={handleInputChange}
              variant="outlined"
            />
          </Grid>
          {/* Tree Type */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Tree Type"
              name="treeType"
              value={formData.treeType}
              onChange={handleInputChange}
              variant="outlined"
            />
          </Grid>
          {/* Attachments */}
          <Grid item xs={12}>
            <input
              type="file"
              accept=".pdf,.docx"
              onChange={(e) => handleFileChange(e, "attachments")}
              multiple
            />
            {formData.attachments.map((attachment, index) => (
              <Typography key={index}>{attachment.name}</Typography>
            ))}
          </Grid>
          {/* Images */}
          <Grid item xs={12}>
            <input
              type="file"
              accept=".jpg,.png"
              onChange={(e) => handleFileChange(e, "images")}
              multiple
            />
            {formData.images.map((image, index) => (
              <Typography key={index}>{image.name}</Typography>
            ))}
          </Grid>
          {/* Videos */}
          <Grid item xs={12}>
            <input
              type="file"
              accept=".mp4,.mov"
              onChange={(e) => handleFileChange(e, "video")}
              multiple
            />
            {formData.video.map((video, index) => (
              <Typography key={index}>{video.name}</Typography>
            ))}
          </Grid>
          {/* About the Project */}
          <Grid item xs={12}>
            <TextField
              fullWidth
              label="About the Project"
              name="aboutTheProject"
              value={formData.aboutTheProject}
              onChange={handleInputChange}
              variant="outlined"
              multiline
              rows={3}
            />
          </Grid>
          {/* Hectare Restored */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Hectare Restored"
              name="hectareRestored"
              value={formData.hectareRestored}
              onChange={handleInputChange}
              variant="outlined"
            />
          </Grid>
          {/* Rain Observed */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Rain Observed"
              name="rainObserved"
              value={formData.rainObserved}
              onChange={handleInputChange}
              variant="outlined"
            />
          </Grid>
          {/* Main Interventions */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Main Interventions"
              name="mainInterventions"
              value={formData.mainInterventions}
              onChange={handleInputChange}
              variant="outlined"
            />
          </Grid>
          {/* Air Quality */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Air Quality"
              name="airQuality"
              value={formData.airQuality}
              onChange={handleInputChange}
              variant="outlined"
            />
          </Grid>
          {/* Target Trees */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Target Trees"
              name="targetTrees"
              value={formData.targetTrees}
              onChange={handleInputChange}
              variant="outlined"
            />
          </Grid>
          {/* CO2 Storage */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="CO2 Storage"
              name="co2Storage"
              value={formData.co2Storage}
              onChange={handleInputChange}
              variant="outlined"
            />
          </Grid>
          {/* CO2 Removal */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="CO2 Removal"
              name="co2Removal"
              value={formData.co2Removal}
              onChange={handleInputChange}
              variant="outlined"
            />
          </Grid>
          {/* Project Status */}
          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Project Status"
              name="projectStatus"
              value={formData.projectStatus}
              onChange={handleInputChange}
              variant="outlined"
              disabled
            />
          </Grid>
          {/* Submit Button */}
          <Grid item xs={12}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ marginRight: 2 }}
            >
              Update Project
            </Button>
            <Button
              type="button"
              variant="contained"
              color="secondary"
              onClick={handleCancel}
            >
              Cancel
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};

export default UpdateProjectForm;
