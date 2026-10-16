"use client";
import { useState, useEffect } from "react";
import Radio from "@/component/radioButton";

import projects from "@/db/Projects";

export default function Index({ darkMode, setIdxContent, setCurrentPage }) {
  const [showModel, setShowModel] = useState(0);
  const [category, setCategory] = useState("All");

  const categories = ["Graphic", "Art", "Interior"];

  const projectFilter = category === "All" ? projects : projects.filter(
          (project) => project.projectCategory.split(",").map((item) => item.trim()).includes(category)
        );

  return (
    <div className="flex-col w-full max-w-full h-auto">
      <div className="flex px-[10px] mb-[50px] flex-col justify-start outline-none shrink-0 whitespace-pre flex-none w-auto h-auto relative">
        <p>VISUAL DESIGNER & ART DIRECTOR</p>
      </div>

      {/* View Model & Filter Project */}
      <div 
        className={`mx-[10px] px-[10px] py-[5px] flex-col justify-start outline-none shrink-0 whitespace-pre flex-none w-fit h-auto relative rounded
                    ${darkMode ? "bg-[#6e6e6e]" : "bg-[#ffeded]"}
      `}>
        <div className="flex gap-[16px]">
          <Radio
            name="show-model"
            label="Grid"
            checked={showModel === 0}
            onChange={() => setShowModel(0)}
            darkMode={darkMode}
          />

          <Radio
            name="show-model"
            label="List"
            checked={showModel === 1}
            onChange={() => setShowModel(1)}
            darkMode={darkMode}
          />
        </div>
        <div className="flex gap-[16px]">
          <Radio
            name="category"
            label="ALL"
            checked={category === "All"}
            onChange={() => setCategory("All")}
            darkMode={darkMode}
          />
          
          {categories.map((data) => (
            <Radio
              key={data}
              name="category"
              label={data}
              checked={category === data}
              onChange={() => setCategory(data)}
              darkMode={darkMode}
            />
          ))}
        </div>
      </div>

      {/* Projects Show */}
      {/* Grid Model */}
      <div className="w-full max-w-screen h-auto px-[10px] mt-[20px]">
        <div
          className={`grid grid-cols-2 gap-4 w-full h-auto ${
            showModel === 0 ? "" : "hidden"
          }`}
        >
          {projectFilter.map((data) => (
            <div
              key={data.projectName}
              className="w-full h-auto"
              onClick={() => {setIdxContent(data.id); setCurrentPage("content");}}
            >
              <img
                src={`${process.env.NODE_ENV === "production" ? "/laurentius-profile" : ""}${data.imageTitlePath}`}
                alt={data.projectName}
                className="w-full h-auto"
              />
              <p className="py-[5px]">{data.id}</p>
              <p>{data.projectClient}</p>
              <p>{data.projectName}</p>
              <p>{data.projectCategory}</p>
              <p>{data.projectDate}</p>
            </div>
          ))}
        </div>
      </div>
      {/* List Model */}
      <div
        className={`flex flex-col w-full max-w-full h-auto px-[10px] mt-[20px] ${
          showModel === 1 ? "" : "hidden"
        }`}
      >
        {projectFilter.map((data) => (
          <div
            key={data.projectName}
            className="flex items-center w-full py-2 border-t border-gray-400"
          >
            {/* Item */}
            <div className="w-1/4">
              <p>{data.projectName}</p>
            </div>

            {/* Deskripsi */}
            <div className="w-2/4 px-4">
              <p>{data.projectDescription}</p>
            </div>

            {/* Tanggal */}
            <div className="w-1/4 text-right">
              <p>{data.projectDate}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ABOUT dawah */}
      <div className="flex items-start w-full px-[10px] pt-20 mb-10">
        <div className="w-1/4">
          <p>ABOUT</p>
        </div>
        
        <div className="flex flex-col w-2/4 px-4 gap-6">
          <p>Multidisciplinary creative blending art, design, and technology into distinctive visual narratives. Skilled at guiding ideas from concept to completion, always aiming for work that feels fresh yet timeless.</p>
          <a className={`underline hover:no-underline ${darkMode ? "hover:text-[#6e6e6e]" : "hover:text-[#ffa09e]"}`}>LEARN MORE</a>
        </div>
      </div>
    </div>
  )
}