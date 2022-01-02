import {
  InboxIcon,
  MicrophoneIcon,
  SearchIcon,
  ViewGridIcon,
  XIcon,
} from "@heroicons/react/solid";
import Avatar from "./Avatar";
import logoPic from "../public/logo.png";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import HeaderOptions from "./HeaderOptions";

function Navbar() {
  const router = useRouter();
  const searchInputRef = useRef(null);
  const [warningMessage, setWarningMessage] = useState("");

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term) return;

    var words = term.trim().split(/\s+/);
    var num_words = words.length;
    if (num_words > 1) {
      setWarningMessage("Search term can only be one word.");
      return;
    } else {
      setWarningMessage("");
      router.push(`/search?term=${term}`);
    }
  };
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex justify-between w-full p-6">
        {/* Left */}
        <div className="flex items-center w-full space-x-4">
          <Image
            onClick={() => router.push("/")}
            height={100}
            width={150}
            src={logoPic}
          />
          <form className="flex items-center flex-grow max-w-3xl px-6 py-3 ml-10 mr-5 border border-gray-200 rounded-full shadow-lg">
            <input
              ref={searchInputRef}
              type="text"
              className="flex-grow w-full focus:outline-none"
            />
            <XIcon
              onClick={() => (searchInputRef.current.value = "")}
              className="transition duration-100 transform cursor-pointer h-7 hover:scale-125 sm:mr-3"
            />
            <MicrophoneIcon className="hidden h-6 pl-4 mr-3 text-blue-500 border-l-2 border-gray-300 sm:inline-flex" />
            <SearchIcon className="hidden h-6 text-blue-500 sm:inline-flex" />
            <button onClick={search} hidden type="submit">
              Search
            </button>
          </form>
        </div>
        {/* Right */}
        <div className="flex items-center space-x-4">
          <InboxIcon className="w-12 h-12 p-2 rounded-full cursor-pointer hover:bg-gray-100" />
          {/* Icon */}
          <ViewGridIcon className="w-12 h-12 p-2 rounded-full cursor-pointer hover:bg-gray-100" />

          {/* Avatar */}
          <Avatar url="https://avatars.githubusercontent.com/u/30309553?v=4" />
        </div>
      </div>
      {warningMessage && (
        <div class="w-full text-left mx-auto lg:pl-52 pb-3  text-red-500 text-sm">
          <p>{warningMessage}</p>
        </div>
      )}
      <HeaderOptions />
    </header>
  );
}

export default Navbar;
