export default function Radio({ name, label, checked, onChange, darkMode, }) {
  return (
    <label className="flex items-center gap-[8px] cursor-pointer">
      <input
        type="radio"
        name={name}
        checked={checked}
        onChange={onChange}
        className="sr-only"
      />

      <div
        className={`w-[8px] h-[8px] rounded-full border border-[${darkMode ? "#fafafa" : "#eb1313"}] ${
          checked ? (darkMode ? "bg-[#fafafa]" : "bg-[#eb1313]") : "bg-transparent"
        }`}
      />
      <p
        className={`text-[12px] 
          ${darkMode ? "text-[#fafafa]" : "text-[#eb1313]"}
        `}
      >
        {label}
      </p>
    </label>
  )
}