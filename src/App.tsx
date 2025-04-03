import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import "./App.css";
import Main from "./components/layout/Main/Main";
import { lazy } from "react";

const Home = lazy(() => import("./page/Home/Home"));
const Savings = lazy(() => import("./page/Savings/Savings"));
const Investment = lazy(() => import("./page/Investments/investment"));

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route element={<Main />}>
        <Route path="/" element={<Home />} />
        <Route path="/savings" element={<Savings />} />
        <Route path="/investments" element={<Investment />} />
      </Route>
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
