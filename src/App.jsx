import "./App.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Refer from "./components/Refer";
import Layout from "./components/Layout";
import Home from "./components/Home";
import Referred from "./components/Refered";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/refer" element={<Refer />} />
      <Route path="/refered" element={<Referred />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
