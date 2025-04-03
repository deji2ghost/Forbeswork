import { Outlet } from "react-router";
import NavBar from "../Navbar/NavBar";
import Sidebar from "../Sidebar/Sidebar";
import { useState } from "react";

const Main = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="flex min-h-screen">
      <>
        <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      </>
      <section className="w-full flex flex-col">
        <NavBar toggleSidebar={toggleSidebar} />
        <div className="relative p-3 bg-background flex-1">
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default Main;
