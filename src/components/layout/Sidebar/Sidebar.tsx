import { Link, useLocation } from "react-router";
import { routes } from "../../../data/navdata";
import { FaX } from "react-icons/fa6";

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const location = useLocation();
  return (
    <div className={`fixed pl-4 lg:static top-0 left-0 min-h-screen w-[50%] lg:w-[20%] bg-offwhite dark:bg-background border border-offGrey transform ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    } transition-transform duration-300 ease-in-out lg:translate-x-0 z-50`}>
      <FaX onClick={toggleSidebar} size={20} className="absolute right-2 top-2 flex items-end justify-end lg:hidden"/>
      <div className="mt-15 flex flex-col gap-3 bg-offwhite dark:bg-background">
        {routes.map((item) => (
          <Link
            key={item.name}
            className={` ${
              location.pathname === item.route ? "border-none bg-offBlue text-offGrey dark:bg-white dark:text-background" : "border-y border-l border-offGrey"
            } p-1 rounded-tl-md rounded-bl-md`}
            to={`${item.route}`}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
