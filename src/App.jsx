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
import { useState } from "react";
import Login from "./components/Login";
// import Home from "./components/Home";

function App() {
  const [data, setData] = useState();
  // const [studentEmail, setStudentEmail] = useState("");

  // const backendData = {
  //   success: true,
  //   dashboard: {
  //     _id: "639e1a26b122cff65132170d",
  //     studentName: "Shivam Goyal",
  //     walletBalance: 0,
  //     referralEarnings: 0,
  //     courses: ["Python", "MERN Stack", " PHP", " DSA"],
  //     email: "shivamgoyal@tutedude.com",
  //     __v: 0,
  //     code: "9fOFIK",
  //     enrollers: [
  //       {
  //         studentName: "Priyanka Makhija",
  //         email: "priyanka@tutedude.cm",
  //         courses: ["Python", "MERN Stack", " PHP", " UI/UX"],
  //         coupon_code_used: "9fOFIK",
  //         date_time: "28-2-2020",
  //         referralAmount: "200",
  //       },
  //       {
  //         studentName: "Amisha Ajwani",
  //         email: "amisha@tutedude.cm",
  //         courses: [
  //           "Python",
  //           "MERN Stack",
  //           " Web Development with PHP",
  //           " UI/UX",
  //           " Technical Analysis",
  //           " React Native",
  //         ],
  //         coupon_code_used: "9fOFIK",
  //         date_time: "28-2-2020",
  //         referralAmount: "200",
  //       },
  //     ],
  //   },
  // };
  // useEffect(() => {
  //   // setData(backendData.dashboard);

  // }, [studentEmail]);

  const onLogin = (email, password) => {
    fetch(
      "http://ec2-65-1-163-139.ap-south-1.compute.amazonaws.com:3001/dashboard",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.dashboard);

        if (data.success) {
          setData(data.dashboard);
        } else {
          window.alert("Invalid Email or Password");
        }
      })
      .catch((err) => {
        window.alert("Something went wrong");
      });
  };

  if (!data) return <Login onSubmit={onLogin} />;

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
