import { useEffect, useState } from "react";
import { FaBars, FaMoon, FaSun } from "react-icons/fa6";

export interface NavbarProps{
  toggleSidebar: () => void
}

const NavBar:React.FC<NavbarProps> = ({toggleSidebar}) => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      document.documentElement.classList.add("dark");
      setDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  return (
    <div className="flex items-center justify-between bg-offwhite dark:bg-offBlue dark:border-white py-4 px-3">
      <>
      <FaBars className="lg:hidden" onClick={toggleSidebar} />
      <h1 className="text-black dark:text-white bg-inherit text-Lg text-Lg">FORBEWORK</h1>
      </>
      <button onClick={toggleDarkMode} className="bg-white cursor-pointer dark:bg-black px-4 py-2 rounded-md">
        {darkMode ? <FaSun /> : <FaMoon />}
      </button>
    </div>
  )
}

export default NavBar
