import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import {
  FiUsers,
  FiClipboard,
  FiDollarSign,
  FiShoppingBag,
  FiDatabase,
} from "react-icons/fi"; // Import icons from react-icons/fi
import { Link } from "react-router-dom";

const Home = () => {
  const DetailsData = [
    { title: "No of users", icon: FiUsers },
    { title: "Total team members", icon: FiUsers },
    { title: "Total Managers", icon: FiUsers },
    { title: "Total sponsors", icon: FiUsers },
    { title: "Total team Members", icon: FiUsers },
    { title: "Total ambassadors", icon: FiUsers },
    { title: "Total projects", icon: FiClipboard },
    { title: "Total tree types", icon: FiDatabase },
    { title: "total Tree planted", icon: FiShoppingBag },
    { title: "Total OMR donated", icon: FiDollarSign },
    { title: "Total CO2 saved", icon: FiDollarSign },
    { title: "Total Planted hectare", icon: FiShoppingBag },
    { title: "Total New Requests", icon: FiClipboard },
  ];

  const PlatformAnalyticsData = [
    { title: "Total trees donated", icon: FiShoppingBag },
    { title: "Total orders", icon: FiClipboard },
    { title: "Total sponsors", icon: FiUsers },
    { title: "Total collected amount", icon: FiDollarSign },
  ];

  return (
    <div>
      {/* Header Section */}
      <header className=" bg-white p-10 rounded-[20px]">
        <h1 className="text-4xl font-bold text-gray-900">
          Welcome to Admin Panel{" "}
        </h1>
        <p className="text-lg text-gray-600 mb-5">
          Manage your platform efficiently with powerful tools. 👋
        </p>
        <MapContainer
          center={[51.505, -0.09]}
          zoom={13}
          className="h-96 rounded-lg shadow-md rounded-[20px]"
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
      </header>

      {/* Map Section */}

      {/* DetailsData Section */}
      <section className="my-5 rounded-[20px] p-10 bg-white">
        <h2 className="text-2xl font-bold mb-4">Details Overview</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {DetailsData.map((item, index) => (
            <div key={index} className=" rounded-lg bg-gray-100 p-6">
              <p className="text-5xl text-gray-800 text-center">70</p>
              <div className="flex items-center justify-center">
                <item.icon className=" text-blue-500 mr-2" />
                <h3 className=" text-blue-500 text-center">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Platform Analytics Section */}
      <section className="my-5 rounded-[20px] p-10 bg-white">
        <h2 className="text-2xl font-bold mb-4">Platform Analytics</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PlatformAnalyticsData.map((item, index) => (
            <div key={index} className=" rounded-lg bg-gray-100 p-6">
              <p className="text-5xl text-gray-800 text-center">70</p>
              <div className="flex items-center justify-center">
                <item.icon className=" text-blue-500 mr-2" />
                <h3 className=" text-blue-500 text-center">
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
