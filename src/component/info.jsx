"use client";
import services from "@/db/Services";
import clients from "@/db/Clients";

export default function Info({ darkMode }) {
  const middleServiceCount = Math.ceil(services.length / 2);
  const firstColService = services.slice(0, middleServiceCount);
  const secondColService = services.slice(middleServiceCount);
  const middleClientCount = Math.ceil(clients.length / 2);
  const firstColClient = services.slice(0, middleClientCount);
  const secondColClient = services.slice(middleClientCount);

  return (
    <div
      className={`flex flex-col w-full max-w-full h-auto px-[10px] mt-[20px] `}
    >
      <div className="flex items-start w-full py-2">
        <div className="w-1/4">
          <p>ABOUT</p>
        </div>

        <div className="flex flex-col w-1/4 gap-4 px-2">
          <p>Multidisciplinary creative blending art, design, and technology into distinctive visual narratives. Skilled at guiding ideas from concept to completion, always aiming for work that feels fresh yet timeless.</p>
          <p>Inspired by culture and experimentation, embraces new tools and perspectives to push creative boundaries. Believes in the power of thoughtful design to connect, inspire, and resonate.</p>
        </div>
      </div>

      <div className="flex items-start w-full py-2">
        <div className="w-1/4">
          <p>SERVICES</p>
        </div>

        <div className="flex flex-col w-1/4 px-2">
          {firstColService.map((dt) => (
            <p>{dt}</p>
          ))}
        </div>

        <div className="flex flex-col w-1/4 px-2">
          {secondColService.map((dt) => (
            <p>{dt}</p>
          ))}
        </div>
      </div>

      <div className="flex items-start w-full py-2">
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
      </div>

      <div className="flex items-start w-full py-2">
        <div className="w-1/4">
          <p>Recognition</p>
        </div>

        <div className="flex flex-col w-1/4 px-2">
          <p><a href="">Aesthetica Visual Awards </a> – Shortlisted, 2023</p>
          <p><a href="">Design Futures Festival </a> – Speaker, 2024</p>
          <p><a href="">FrameLab International </a> – Best Interactive Concept, 2022</p>
          <p><a href="">Lens & Light Magazine </a> – Featured Artist, Issue 18</p>
        </div>
      </div>
    </div>
  )
}