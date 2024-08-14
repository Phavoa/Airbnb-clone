import { Link } from "react-router-dom";
import AirbnbIcon from "../assets/airbnb-1.svg";


const Header = () => {
  return (
    <header className="sticky top-1 flex justify-between z-50 mb-2">
        <a href="/" className="flex item-center gap-1">
          <img src={AirbnbIcon} width={30} height={30} alt="" />
          <span className="flex font-bold text-xl items-center">airbnb</span>
        </a>

        <div className="flex justify-between items-center border border-gray-300 rounded-full p-1 font-medium divide-x shadow shadow-gray-300">
          <div className="px-4">Anywhere</div>
          <div className="px-4">Any week</div>
          <div className="py-2 pl-4 pr-2">Add guests</div>
          <button className="bg-primary text-white p-2 rounded-full mr-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="size-4"
            >
              <path d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
        </div>

        <div className="flex border border-gray-300 rounded-full items-center gap-2 px-4">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          <Link to={'/login'}className="bg-gray-500 rounded-full text-white border-gray-500 relative overflow-hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-6 relative top-1"
            >
              <path d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z" />
            </svg>
          </Link>
        </div>
      </header>
  )
}

export default Header