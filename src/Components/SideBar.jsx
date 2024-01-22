import Tranding from "../assets/icons/trending.svg";
import NewRelease from "../assets/icons/newRelease.svg";
import CommingSoon from "../assets/icons/commingSoon.svg";
import Favorites from "../assets/icons/favourite.svg";
import WatchLater from "../assets/icons/watchLater.svg";

export default function SideBar() {
  return (
    <aside>
      <ul className="space-y-2">
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg bg-primary text-black dark:text-white"
            href="#"
          >
            <img src={Tranding} width="24" height="24" alt="" />
            <span>Trending</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg  text-black dark:text-white"
            href="#"
          >
            <img src={NewRelease} width="24" height="24" alt="New Release" />
            <span>New Releases</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg  text-black dark:text-white"
            href="#"
          >
            <img src={CommingSoon} width="24" height="24" alt="CommingSoon" />
            <span>Comming Soon</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg  text-black dark:text-white"
            href="#"
          >
            <img src={Favorites} width="24" height="24" alt="Favorites" />
            <span>Favorites</span>
          </a>
        </li>
        <li>
          <a
            className="flex items-center space-x-2 px-5 py-3.5 rounded-lg  text-black dark:text-white"
            href="#"
          >
            <img src={WatchLater} width="24" height="24" alt="Watch Later" />
            <span>Watch Later</span>
          </a>
        </li>
      </ul>
    </aside>
  );
}
