import { Link, useLocation } from "react-router";
import { routes } from "../../../data/navdata";

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="flex flex-col gap-3 bg-offwhite h-full border border-offGrey">
      <div className="mt-15 flex flex-col gap-3 bg-offwhite">
        {routes.map((item) => (
          <Link
            key={item.name}
            className={` ${
              location.pathname === item.route ? "border-none bg-white" : "border-y border-l border-offGrey"
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
