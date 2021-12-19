import Option from "./Option";
import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";

function HeaderOptions() {
  return (
    <div className="flex w-full text-sm text-gray-700 border-b justify-evenly lg:text-base lg:justify-start lg:space-x-36 lg:pl-52">
      {/* Left */}
      <div className="flex space-x-6">
        <Option Icon={SearchIcon} title="All" selected />
        <Option Icon={PhotographIcon} title="Images" />
        <Option Icon={PlayIcon} title="Videos" />
        <Option Icon={NewspaperIcon} title="News" />
        <Option Icon={MapIcon} title="Maps" />
        <Option Icon={DotsVerticalIcon} title="More" />
      </div>

      {/* Right */}
      <div className="flex space-x-4">
        <p className="link">Settings</p>
        <p className="link">Tools</p>
      </div>
    </div>
  );
}

export default HeaderOptions;
