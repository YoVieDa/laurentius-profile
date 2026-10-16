
"use client";

import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "@/component/navbar";
import CustomCursor from "@/component/customCursor";
import Index from "@/component/index";
import Info from "@/component/info";
import Contact from "@/component/contact";
import Content from "@/component/content";
import Footbar from "@/component/footbar";

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);
  const [currentPage, setCurrentPage] = useState("index");
  const [idxContent, setIdxContent] = useState(0);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant",
    });
  }, [currentPage, idxContent]);

  return (
    <>
      <CustomCursor darkMode={darkMode}/>
      <Navbar
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        setCurrentPage={setCurrentPage}
      />

      <div className="grid">
        <AnimatePresence initial={false} mode="sync">
          <motion.div
            key={`${currentPage}-${currentPage === "content" ? idxContent : ""}`}
            className={`col-start-1 row-start-1 flex flex-col w-full ${
              darkMode ? "bg-[#11100e]" : "bg-[#fafafa]"
            }`}
            style={{ zIndex: 1 }}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{
              duration: 1,
              ease: [0.76, 0, 0.24, 1],
            }}
          >
            <div className="flex-1 pt-[36px]">
              {currentPage === "index" && (
                <Index darkMode={darkMode} setIdxContent={setIdxContent} setCurrentPage={setCurrentPage}/>
              )}

              {currentPage === "info" && (
                <Info darkMode={darkMode} />
              )}

              {currentPage === "contact" && (
                <Contact darkMode={darkMode} />
              )}

              {currentPage === "content" && (
                <Content darkMode={darkMode} idxContent={idxContent} setIdxContent={setIdxContent}/>
              )}
            </div>

            <Footbar darkMode={darkMode} />
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
}
