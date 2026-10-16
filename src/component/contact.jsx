"use client";
export default function Contact({ darkMode }) {
  return (
    <div
      className={`flex flex-col w-full max-w-full h-auto  min-h-[50vh] px-[10px] mt-[20px] gap-6`}
    >
      <div className="flex items-start w-full py-2">
        <div className="w-1/4">
          <p>BUSINESS</p>
        </div>

        <div className="flex flex-col w-1/4 px-2">
          <p>Laurentius Adityas Tino</p>
          <p>+62 ...</p>
        </div>
      </div>

      <div className="flex items-start w-full py-2">
        <div className="w-1/4">
          <p>SOCIAL</p>
        </div>

        <div className="flex flex-col w-1/4 px-2">
          <p>→ <a href="">LINKEDIN</a></p>
          <p>→ <a href="">INSTAGRAM</a></p>
          <p>→ <a href="">THREADS</a></p>
        </div>
      </div>

      {/* <div className="flex items-start w-full py-2">
        <div className="w-1/4">
          <p>CLIENTS</p>
        </div>

        <div className="flex flex-col w-1/4 px-2">
          {firstColClient.map((dt) => (
            <p>{dt}</p>
          ))}
        </div>

        <div className="flex flex-col w-1/4 px-2">
          {secondColClient.map((dt) => (
            <p>{dt}</p>
          ))}
        </div>
      </div> */}
    </div>
  )
}