import React from "react";
import "./destinations.css";
import {
  CloudUploadIcon,
  DatabaseIcon,
  PaperAirplaneIcon,
  ServerIcon,
} from "@heroicons/react/solid";

import Europe1 from "../../assets2/Europe1.jpg";
import Europe2 from "../../assets2/Europe2.jpg";
import Europe3 from "../../assets2/Europe3.jpg";
import Europe4 from "../../assets2/Europe4.jpg";
import Europe5 from "../../assets2/Europe5.jpg";
import Europe6 from "../../assets2/Europe6.jpg";

import SelectsImg from "../SelectsImg/SelectsImg";

function Destinations() {
  return (
    <div name="destinations" className="destinations">
      <div className="text-4xl text-center">
        <h1 className="py-3 text-5xl md:text-7xl font-bold">
          Plan your next Travel with ETT
        </h1>
        <p>Recomended to you : Here is the Europe's Best Places</p>
        {/* <div className="container">
          <p>
            <span className="bold">All</span>
          </p>
          <p>Commercial</p>
          <p>Residential</p>
          <p>Agricultural</p>
        </div> */}
        <div className="img-container">
          <img className="span-3 image-grid-row-2" src={Europe1} alt="/" />
          <SelectsImg bgImg={Europe2} text="Europe 2" />
          <SelectsImg bgImg={Europe3} text="Europe 3" />
          <SelectsImg bgImg={Europe4} text="Europe 4" />
          <SelectsImg bgImg={Europe5} text="Europe 5" />
          <SelectsImg bgImg={Europe6} text="Europe 6" />
        </div>
        <button className="btn">View All</button>
        {/* <div className="flex justify-between flex-wrap px-4">
            <p className="flex px-4 py-2 text-slate-500">
                <CloudUploadIcon className="h-6 text-indigo-600" /> App Security
            </p>
            <p className="flex px-4 py-2 text-slate-500">
                <DatabaseIcon className="h-6 text-indigo-600" /> Dashboard Design
            </p>
            <p className="flex px-4 py-2 text-slate-500">
                <ServerIcon className="h-6 text-indigo-600" /> Cloud Data
            </p>
            <p className="flex px-4 py-2 text-slate-500">
                <PaperAirplaneIcon className="h-6 text-indigo-600" /> API
            </p>
        </div> */}
        
      </div>
    </div>
  );
}

export default Destinations;
