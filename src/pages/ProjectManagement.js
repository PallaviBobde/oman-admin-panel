import React, { useEffect, useState } from "react";
import DropdownComponent from "../components/Dropdown";
import { axiosInstance } from "../api";
import { useNavigate } from "react-router-dom";
import {
  AiOutlineSearch,
  AiOutlinePlus,
  AiOutlineEdit,
  AiOutlineDelete,
  AiOutlineEye,
} from "react-icons/ai";

const Project = () => {
  const [projects, setProjects] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const { data } = await axiosInstance.get("/project", {
        params: { search: searchTerm },
      });
      console.log("Data",data?.result)
      setProjects(data?.result?.[0]?.filteredResult || []);
    } catch (error) {
      console.error("Error fetching projects:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleAddProjectClick = () => {
    navigate("/add-project");
  };

  return (
    <div className="container mx-auto bg-white p-5 h-[85vh] overflow-scroll rounded-[20px]">
      <div className="flex justify-between items-center mb-4">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            className="border border-gray-300 rounded-md py-2 px-4 w-full focus:outline-none focus:border-blue-500"
            placeholder="Search..."
            onChange={handleSearchChange}
          />
          <AiOutlineSearch
            className="absolute right-3 top-3 h-5 w-5 text-gray-400"
            onClick={fetchData}
          />
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md flex items-center"
          onClick={handleAddProjectClick}
        >
          <AiOutlinePlus className="h-5 w-5 mr-2" /> Add Project
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Project
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Established Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Location
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Targeted trees
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Current trees
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Lost trees
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Total OMR
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Created by
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Operated by
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Last update
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {projects.map((row, index) => (
              <tr
                key={index}
                className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}
              >
                <td className="px-6 py-4 whitespace-nowrap">
                  {row.projectName}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{row.startDate}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {row.location.formattedAddress}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{row.treeType}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {row.targetTrees}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {row.currentTrees}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{row.lostTrees}</td>
                <td className="px-6 py-4 whitespace-nowrap">{row.totalOMR}</td>
                <td className="px-6 py-4 whitespace-nowrap">{row.createdBy}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {row.operatedBy}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {row.lastUpdate}
                </td>
                <td className="px-6 py-4 whitespace-nowrap min-w-[200px]">
                  <DropdownComponent />
                </td>
                <td className="px-6 py-4 whitespace-nowrap min-w-[200px]">
                  <button
                    className="text-blue-500 hover:text-blue-600 mx-1"
                    onClick={() =>
                      navigate(`/update-project/${row._id}`, { state: { row } })
                    }
                  >
                    <AiOutlineEdit className="h-5 w-5" />
                  </button>
                  <button className="text-red-500 hover:text-red-600 mx-1">
                    <AiOutlineDelete className="h-5 w-5" />
                  </button>
                  <button className="text-gray-500 hover:text-gray-600 mx-1">
                    <AiOutlineEye className="h-5 w-5" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Project;
