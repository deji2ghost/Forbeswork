import { Outlet } from "react-router";
import NavBar from "../Navbar/NavBar";
import Sidebar from "../Sidebar/Sidebar";

const Main = () => {
  return (
    <main className="flex min-h-screen">
      <div className="w-[20%] min-h-screen">
        <Sidebar />
      </div>
      <section className="w-full flex flex-col">
        <NavBar />
        <div className="relative p-3 flex-1">
          <Outlet />
        </div>
      </section>
    </main>
  );
};

export default Main;
