import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router";
import "./App.css";
import Home from "./page/Home/Home";
import Main from "./components/layout/Main/Main";
import Queryprovider from "./components/layout/QueryProvider/Queryprovider";
import Savings from "./page/Savings/Savings";
import Investment from "./page/Investments/investment";

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
    <Queryprovider>
      <RouterProvider router={router} />
    </Queryprovider>
  );
}

export default App;
