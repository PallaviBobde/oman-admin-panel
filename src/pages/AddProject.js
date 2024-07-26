import React, { useState } from "react";
import axios from "axios";
import { AiOutlineDelete, AiOutlineEye, AiOutlinePlus, AiOutlineEdit } from 'react-icons/ai';
import { useNavigate } from "react-router-dom";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const CreateProjectForm = () => {
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
    projectStatus: "PENDING",
  });

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if (name.startsWith("coordinate")) {
      const [field, index] = name.split("-");
      const newAreas = [...formData.areas];
      newAreas[index][field] = value;
      setFormData({ ...formData, areas: newAreas });
    } else if (name.startsWith("location")) {
      const [field, subfield] = name.split("-");
      setFormData({
        ...formData,
        location: {
          ...formData.location,
          [subfield]: value,
        },
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleFileChange = (event, fileType) => {
    const files = Array.from(event.target.files);
    const fileArray = files.map((file) => URL.createObjectURL(file));
    setFormData({
      ...formData,
      [fileType]: fileArray,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("http://localhost:8000/api/project/create", formData);
      alert("Project created successfully!");
      navigate("/project");
    } catch (error) {
      console.error("Error creating project:", error);
      alert("Failed to create project. Please try again.");
    }
  };

  const addArea = () => {
    setFormData({
      ...formData,
      areas: [...formData.areas, { lat: "", long: "" }],
    });
  };

  const removeArea = (index) => {
    const newAreas = [...formData.areas];
    newAreas.splice(index, 1);
    setFormData({
      ...formData,
      areas: newAreas,
    });
  };

  const handleCancel = () => {
    navigate("/project");
  };

  return (
    <div className="w-full bg-white rounded-[20px] p-10">
      <h2 className="text-xl mb-5 bg-gray-100 py-2 text-center max-w-3xl mx-auto rounded-[20px] text-gray-400 uppercase font-[14px]">Add Project</h2>
      <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
        {/* Project Details */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div className="col-span-2">
            <label className="block mb-1">Project Name</label>
            <input
              type="text"
              name="projectName"
              value={formData.projectName}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="col-span-2">
            <label className="block mb-1">Start Date</label>
            <input
              type="date"
              name="startDate"
              value={formData.startDate}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="col-span-2">
            <label className="block mb-1">Note</label>
            <textarea
              name="note"
              value={formData.note}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-500"
              rows="3"
            ></textarea>
          </div>
          <div>
            <label className="block mb-1">Project Title</label>
            <input
              type="text"
              name="projectTitle"
              value={formData.projectTitle}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          {/* Location */}
          <div>
            <label className="block mb-1">Location</label>
            <input
              type="text"
              name="location-formattedAddress"
              value={formData.location.formattedAddress}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div>
            <label className="block mb-1">Latitude</label>
            <input
              type="text"
              name="location-coordinate-lat"
              value={formData.location.coordinate.lat}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1">Longitude</label>
            <input
              type="text"
              name="location-coordinate-long"
              value={formData.location.coordinate.long}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          {/* Price Per Tree */}
          <div>
            <label className="block mb-1">Price Per Tree</label>
            <input
              type="text"
              name="pricePerTree"
              value={formData.pricePerTree}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          {/* Areas */}
          <div className="col-span-2">
            <div className="mb-2">
              <span className="text-lg font-semibold">Areas</span>
              <button
                type="button"
                className="ml-2 text-blue-500 hover:text-blue-600"
                onClick={addArea}
              >
                <AiOutlinePlus className="h-5 w-5" />
              </button>
            </div>
            {formData?.areas?.map((area, index) => (
              <div key={index} className="grid grid-cols-3 gap-4">
                <input
                  type="text"
                  name={`coordinate-lat-${index}`}
                  value={area.lat}
                  onChange={handleInputChange}
                  placeholder={`Area ${index + 1} Latitude`}
                  className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-500"
                  required
                />
                <input
                  type="text"
                  name={`coordinate-long-${index}`}
                  value={area.long}
                  onChange={handleInputChange}
                  placeholder={`Area ${index + 1} Longitude`}
                  className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-500"
                  required
                />
                <button
                  type="button"
                  className="text-red-500 hover:text-red-600"
                  onClick={() => removeArea(index)}
                >
                  <AiOutlineDelete className="h-5 w-5" />
                </button>
              </div>
            ))}
          </div>
          {/* File Inputs */}
          <div className="col-span-2">
            <div className="mb-2">
              <span className="text-lg font-semibold">Attachments</span>
              <input
                type="file"
                accept=".pdf,.docx"
                onChange={(e) => handleFileChange(e, "attachments")}
                multiple
                className="ml-2"
              />
              {formData.attachments.map((attachment, index) => (
                <div key={index}>{attachment.name}</div>
              ))}
            </div>
            <div className="mb-2">
              <span className="text-lg font-semibold">Images</span>
              <input
                type="file"
                accept=".jpg,.png"
                onChange={(e) => handleFileChange(e, "images")}
                multiple
                className="ml-2"
              />
              {formData.images.map((image, index) => (
                <div key={index}>{image.name}</div>
              ))}
            </div>
            <div className="mb-2">
              <span className="text-lg font-semibold">Videos</span>
              <input
                type="file"
                accept=".mp4,.mov"
                onChange={(e) => handleFileChange(e, "video")}
                multiple
                className="ml-2"
              />
              {formData.video.map((video, index) => (
                <div key={index}>{video.name}</div>
              ))}
            </div>
          </div>
          {/* Additional Fields */}
          <div className="col-span-2">
            <label className="block mb-1">About the Project</label>
            <textarea
              name="aboutTheProject"
              value={formData.aboutTheProject}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-500"
              rows="3"
            ></textarea>
          </div>
          <div>
            <label className="block mb-1">Hectare Restored</label>
            <input
              type="text"
              name="hectareRestored"
              value={formData.hectareRestored}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1">Rain Observed</label>
            <input
              type="text"
              name="rainObserved"
              value={formData.rainObserved}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1">Main Interventions</label>
            <input
              type="text"
              name="mainInterventions"
              value={formData.mainInterventions}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1">Air Quality</label>
            <input
              type="text"
              name="airQuality"
              value={formData.airQuality}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1">Target Trees</label>
            <input
              type="text"
              name="targetTrees"
              value={formData.targetTrees}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1">CO2 Storage</label>
            <input
              type="text"
              name="co2Storage"
              value={formData.co2Storage}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          <div>
            <label className="block mb-1">CO2 Removal</label>
            <input
              type="text"
              name="co2Removal"
              value={formData.co2Removal}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-500"
            />
          </div>
          {/* Project Status */}
          <div>
            <label className="block mb-1">Project Status</label>
            <input
              type="text"
              name="projectStatus"
              value={formData.projectStatus}
              onChange={handleInputChange}
              className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-500"
              disabled
            />
          </div>
          {/* Buttons */}
          <div className="col-span-2">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md mr-2"
            >
              Add Project
            </button>
            <button
              type="button"
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
              onClick={handleCancel}
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
      {/* Map */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="sm:col-span-2">
          <MapContainer
            center={[51.505, -0.09]}
            zoom={13}
            style={{ height: "400px", width: "100%" }}
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
        </div>
      </div>
    </div>
  );
};

export default CreateProjectForm;
