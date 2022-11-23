import "./App.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Refer from "./components/Refer";
import Layout from "./components/Layout";
import Referred from "./components/Refered";
import { useEffect, useState } from "react";
// import Home from "./components/Home";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    /*
    const backendData = {
      _id: 6544276768878,
      studentName: "Shivam",
      code: "EDCH54",
      walletBalance: 500,
      referralEarnings: 2500,
      enrollers: [
        {
          _id: 6544276768879, //id of the student who enrolled
          courses: [
            {
              _id: 6544276768877,
              name: "UI/UX",
            },
            {
              _id: 6544276768877,
              name: "Python",
            },
          ],
          referralAmount: 185,
          studentName: "Priyanka",
          enrolledDate: "15-09-2022",
        },
        {
          _id: 6544276768879, //id of the student who enrolled
          courses: [
            {
              _id: 6544276768877,
              name: "UI/UX",
            },
            {
              _id: 6544276768877,
              name: "Python",
            },
          ],
          referralAmount: 185,
          studentName: "Prem",
          enrolledDate: "14-09-2022",
        },
      ],
    };
    */

    // setData(backendData);

    fetch(
      "https://coupon-tutedude.herokuapp.com/dashboard?student_id=637d982f2934c8ee050e50dd"
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.dashboard);
        setData(data.dashboard);
      })
      .catch((err) => console.log(err));
  }, []);

  return data ? (
    <RouterProvider
      router={createBrowserRouter(
        createRoutesFromElements(
          <Route path="/" element={<Layout studentName={data.studentName} />}>
            {/* <Route path="" element={<Home />} /> */}
            <Route
              path="/"
              element={
                <Refer
                  data={{
                    code: data.code,
                    walletBalance: data.walletBalance,
                    referralEarnings: data.referralEarnings,
                    referralNumber: data.enrollers.length,
                  }}
                />
              }
            />
            <Route
              path="/refered"
              element={
                <Referred
                  data={{
                    code: data.code,
                    walletBalance: data.walletBalance,
                    enrollers: data.enrollers,
                  }}
                />
              }
            />
          </Route>
        )
      )}
    />
  ) : (
    "Loading..."
  );
}

export default App;
