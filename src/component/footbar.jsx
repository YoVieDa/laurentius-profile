export default function Footbar({ darkMode }) {
  return (
    <div className={`w-full pt-6 px-[10px] mt-auto
      ${darkMode ? "bg-[#c2c2c2] text-[#141414]" : "bg-[#eb1313] text-[#fafafa]"} 
    `}>
      <div className="grid grid-cols-4 items-start gap-x-2">
        <div>
          <p>Laurentius Adityas Tino</p>
        </div>

        <div className="flex flex-col gap-6 pb-8 min-w-0">
          <p className="ml-[15px]">
            Creating visual narratives at the intersection of art, design, and
            technology, always driven by curiosity, culture, and the pursuit of
            timeless creativity.
          </p>

          <div className="grid grid-cols-2 gap-2 ml-[15px]">
            <div className="flex flex-col">
              <p>→ <a href="" className={`${darkMode ? "hover:text-[#6e6e6e]" : "hover:text-[#ffa09e]"}`}>LINKEDIN</a></p>
              <p>→ <a href="" className={`${darkMode ? "hover:text-[#6e6e6e]" : "hover:text-[#ffa09e]"}`}>INSTAGRAM</a></p>
              <p>→ <a href="" className={`${darkMode ? "hover:text-[#6e6e6e]" : "hover:text-[#ffa09e]"}`}>THREADS</a></p>
            </div>

            <div className="flex flex-col">
              <p>→ <a href="" className={`${darkMode ? "hover:text-[#6e6e6e]" : "hover:text-[#ffa09e]"}`}>CONTACT</a></p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 pb-8 min-w-0"></div>

        <div className="min-w-0 grid-cols-12 text-right">
          <p className="break-words">
            Zürich, CH 11:06 AM
          </p>
        </div>
      </div>

      <div className={`flex w-full my-2 ${darkMode ? "text-[#141414]" : "text-[#ffa09e]"}`}>
        <div className="flex flex-col w-1/2">
          <p>© Copyright 2026</p>
        </div>
        <div className="flex flex-col w-1/2 text-right">
          <p>Website by Yohanes Vianneydani</p>
        </div>
      </div>
    </div>
  )
}