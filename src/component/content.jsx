"use client";
import projects from "@/db/Projects";

export default function Content({ darkMode, idxContent, setIdxContent }) {
  const project = projects.filter((data) => data.id === idxContent);
  const currentIndex = projects.findIndex((data) => data.id === idxContent);

  function renderProjectDetail(rowName, rowValue, url = "") {
    return (
      <div className="flex items-start w-full"> {/* ini row */}
        <div className="w-1/4">{rowName}</div>
        <div className="w-1/4">{rowValue}</div>
        {url !== "" ? <div className="w-1/4">Visit site</div> : null}
      </div>
    );
  }

  return (
    <>
      {/* Detail di bagian atas */}
      <div className="flex flex-col items-start w-full px-[10px]"> 
        {project[0].projectName !== null ? renderProjectDetail("Project", project[0].projectName) : null}
        {project[0].projectClient !== null ? renderProjectDetail("Client", project[0].projectClient) : null}
        {project[0].projectCategory !== null ? renderProjectDetail("Category", project[0].projectCategory) : null}
        {project[0].projectDate !== null ? renderProjectDetail("Year", project[0].projectDate) : null}
      </div>

      {/* Kumpulan gambar dan deskripsi panjang */}
      <div className="flex items-start w-full py-2 gap-4 px-[10px]">
        <div className="flex flex-col w-3/4">
          {project[0].imagePath?.length > 0 &&
            project[0].imagePath.map((img, index) => (
              <img
                key={index}
                src={`${process.env.NODE_ENV === "production" ? "/laurentius-profile" : ""}${img}`}
                alt={`${project.projectName} ${index + 1}`}
                className="w-full h-auto my-4"
              />
            ))
          }
        </div>
        <div className="w-1/4 self-stretch">
          <p className="sticky top-[40px]">
            {project[0].projectDescription}
          </p>
        </div>
      </div>

      {/* bagian akhir */}
      <div className="flex items-start w-full py-2 gap-4">
        <div className="flex flex-col w-1/4">
          <p>Credits</p>
        </div>
        <div className="flex flex-col w-1/4 gap-4">
          {project[0].projectCredit !== null ? <p>{project[0].projectCredit}</p> : null}
        </div>
      </div>

      {/* Next Previous */}
      <div className="flex items-start w-full py-2 gap-4 my-8">
        <div className="flex flex-col w-1/4"></div>
        <div className="flex w-1/4 gap-4">
          {project[0].id === projects[0].id ? null : 
            <p 
              className={`${darkMode ? "hover:text-[#6e6e6e]" : "hover:text-[#ffa09e]"}`}
              onClick={() => setIdxContent(projects[currentIndex - 1].id)}
            >
              {"< previous"}
            </p>
          }
          {project[0].id === projects[projects.length - 1].id ? null : 
            <p 
              className={`${darkMode ? "hover:text-[#6e6e6e]" : "hover:text-[#ffa09e]"}`}
              onClick={() => setIdxContent(projects[currentIndex + 1].id)}
            >
              {"next >"}
            </p>
          }
        </div>
      </div>
    </>
  )
}