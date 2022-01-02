import Head from "next/head";
import {
  MicrophoneIcon,
  SearchIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import Image from "next/image";
import searchPic from "../public/logo.png";
import Footer from "../components/Footer";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import Avatar from "../components/Avatar";

export default function Home() {
  const router = useRouter();
  const [warningMessage, setWarningMessage] = useState("");
  const searchInputRef = useRef(null);
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
    <div className="flex flex-col items-center justify-center h-screen">
      <Head>
        <title>Magezi Web</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <div className="flex justify-between w-screen p-5 space-x-4 text-sm text-gray-700">
        {/* Left */}
        <div className="flex items-center space-x-4">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        {/* Right */}
        <div className="flex items-center space-x-4">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          {/* Icon */}
          <ViewGridIcon className="w-10 h-10 p-2 rounded-full cursor-pointer hover:bg-gray-100" />

          {/* Avatar */}
          <Avatar url="https://avatars.githubusercontent.com/u/30309553?v=4" />
        </div>
      </div>

      {/* Body */}
      <form className="flex flex-col items-center flex-grow w-4/5 mt-20">
        <Image height={200} width={300} src={searchPic} />
        <div className="flex items-center w-full max-w-md px-5 py-3 mt-5 border border-gray-200 rounded-lg hover:shadow-lg focus-within:shadow-lg sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className="h-5 mr-3 text-gray-500" />
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none"
          />
          <MicrophoneIcon className="h-5 mr-3 text-gray-500" />
        </div>

        {warningMessage && (
          <div class="w-full text-center mx-auto py-5 text-red-500 text-sm">
            <p>{warningMessage}</p>
          </div>
        )}
        <div className="flex flex-col justify-center w-1/2 mt-3 space-y-2 sm:space-y-0 sm:flex-row sm:space-x-4">
          <button onClick={search} className="btn">
            Google Search
          </button>
          <button onClick={search} className="btn">
            I'm Feeling Lucky
          </button>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  );
}
