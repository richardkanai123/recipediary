import { FaSearch } from "react-icons/fa";

export default function Home() {
  return (
    <div className="w-full">
      <form className="w-full flex items-center align-middle justify-center p-1">
        <input type="text" className="px-4 py-3 ring-0 rounded-2xl sm:w-[90%] md:w-[600px] text-sky-950 outline-none bg-emerald-300 font-semibold text-xl text-center" />
        <button type="submit">  <FaSearch className="ml-4 cursor-pointer left-[90%]" /></button>
      </form>
    </div>
  );
}
