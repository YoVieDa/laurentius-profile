export default function Navbar({ darkMode, setDarkMode, setCurrentPage }) {
  return (
    <div className="max-w-screen h-auto fixed z-10 w-full top-0 left-1/2 -translate-x-1/2">
      <nav className={`backdrop-blur-[5px] ${darkMode ? "bg-[#141414]" : "bg-[#fafafa]"} max-w-full w-full opacity-100 grid grid-rows-[repeat(1,minmax(0,1fr))] grid-cols-[repeat(4,minmax(50px,1fr))] auto-rows-[minmax(0,1fr)] justify-center gap-y-0 gap-x-[10px] w-full max-w-screen h-min px-[10px] relative overflow-visible`}>
        <a className="h-min w-fit flex-row flex-none place-content-left items-center gap-[10px] pt-[10px] pr-[10px] pb-[8px] pl-0 no-underline flex relative overflow-visible" href="./">
          <div className="flex flex-col justify-start outline-none shrink-0 whitespace-pre flex-none w-auto h-auto relative">
            <p>Laurentius Adityas Tino</p>
          </div>
        </a>
        <div 
          className="place-content-left items-center max-w-full h-auto relative"
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage("index");
          }}
        >
          <a className={`h-min w-fit flex-row flex-none place-content-left items-center gap-[10px] pt-[10px] pr-[10px] pb-[8px] pl-0 no-underline flex relative overflow-visible ${darkMode ? "hover:text-[#6e6e6e]" : "hover:text-[#ffa09e]"}`} href="./">
            <div className="flex flex-col justify-start outline-none shrink-0 whitespace-pre flex-none w-auto h-auto relative">
              <p>INDEX</p>
            </div>
          </a>
        </div>
        <div 
          className="place-content-left items-center max-w-full h-auto relative"
          onClick={(e) => {
            e.preventDefault();
            setCurrentPage("info");
          }}
        >
          <a className={`h-min w-fit flex-row flex-none place-content-left items-center gap-[10px] pt-[10px] pr-[10px] pb-[8px] pl-0 no-underline flex relative overflow-visible ${darkMode ? "hover:text-[#6e6e6e]" : "hover:text-[#ffa09e]"}`} href="./">
            <div className="flex flex-col justify-start outline-none shrink-0 whitespace-pre flex-none w-auto h-auto relative">
              <p>INFO</p>
            </div>
          </a>
        </div>
        <div className="flex-row justify-between self-start items-center w-full h-min p-0 flex relative overflow-visible">
          <div 
            className="flex-none w-auto h-auto relative"
            onClick={(e) => {
              e.preventDefault();
              setCurrentPage("contact");
            }}
          >
            <a className={`h-min w-fit flex-row flex-none place-content-left items-center gap-[10px] pt-[10px] pr-[10px] pb-[8px] pl-0 no-underline flex relative overflow-visible ${darkMode ? "hover:text-[#6e6e6e]" : "hover:text-[#ffa09e]"}`} href="./">
              <div className="flex flex-col justify-start outline-none shrink-0 whitespace-pre flex-none h-auto relative">
                <p>CONTACT</p>
              </div>
            </a>
          </div>
          <div className="flex-none w-[106px] h-auto relative">
            <div className="flex flex-row gap-0 items-center justify-center w-full h-full">
              <button 
                className={`font-medium font-[Cousine] tracking-[0.5px] uppercase p-[4px_8px] cursor-pointer transition-transform duration-200 select-none bg-transparent border-0 outline-none flex items-right justify-center rounded-[6px] 
                            ${darkMode ? "text-[#6e6e6e]" : "text-[#eb1313]"}
                  `}
                onClick={() => setDarkMode(false)}
              >LIGHT</button>
              <button 
                className={`font-medium font-[Cousine] tracking-[0.5px] uppercase p-[4px_8px] cursor-pointer transition-transform duration-200 select-none bg-transparent border-0 outline-none flex items-right justify-center rounded-[6px] 
                            ${darkMode ? "text-[#c2c2c2]" : "text-[#ffa09e]"}
                          `}
                onClick={() => setDarkMode(true)}
              >DARK</button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}