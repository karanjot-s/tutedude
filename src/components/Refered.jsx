import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Referred.module.css";

const Referred = () => {
  const referralCode = "EDCH54";
  const balance = 500;

  const friends = [
    {
      name: "Dhiraj Saxsena",
      date: "14 Sep, 2022",
      courses: ["UI/UX", "Photoshop", "Illustrator", "Python", "MERN", "Java"],
      referralAmount: 185,
    },
    {
      name: "Subhash Mishra",
      date: "15 Sep, 2022",
      courses: [
        "UI/UX",
        "Photoshop",
        "Illustrator",
        "Python",
        "MERN",
        "Java",
        "C++",
        "UI/UX",
        "Photoshop",
        "Illustrator",
        "Python",
        "MERN",
        "Java",
        "C++",
        "UI/UX",
        "Photoshop",
        "Illustrator",
        "Python",
        "MERN",
        "Java",
        "C++",
        "MERN",
        "Java",
      ],
      referralAmount: 485,
    },
    {
      name: "Prafull Kumar",
      date: "16 Sep, 2022",
      courses: [
        "UI/UX",
        "Photoshop",
        "Illustrator",
        "Python",
        "MERN",
        "Java",
        "C++",
        "UI/UX",
        "Photoshop",
        "Illustrator",
        "Python",
        "MERN",
        "Java",
        "C++",
        "UI/UX",
        "Photoshop",
        "Illustrator",
        "Python",
        "MERN",
        "Java",
        "C++",
        "MERN",
        "Java",
      ],
      referralAmount: 185,
    },
  ];

  return (
    <>
      <div className={styles.back_link}>
        <Link to="/refer">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.292893 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292893 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292893 7.29289ZM16 7L1 7V9L16 9V7Z"
              fill="#800080"
            />
          </svg>
          go back
        </Link>
      </div>
      <div className={styles.data}>
        <div>
          <h4>Your Referral Code</h4>
          <div
            onClick={() => {
              navigator.clipboard.writeText(referralCode);
              window.alert("Referral code copied");
            }}
            className={styles.code}
          >
            {referralCode}
          </div>
        </div>
        <div className={styles.wallet_card}>
          <h4>Wallet Balance</h4>
          <span>&#x20b9;{balance}</span>
        </div>
      </div>
      <div className={styles.friends}>
        <h3>
          Friends who enrolled <span>({friends.length})</span>
        </h3>
        <div className={styles.friends_container}>
          <div className={styles.friends_data}>
            {friends.map((friend, i) => (
              <div
                key={i}
                className={`${styles.card} ${
                  friend.courses.length > 6 ? styles.over : ""
                }`}
              >
                <div className={styles.heading}>
                  <h4>{friend.name}</h4>
                  <span>{friend.date}</span>
                </div>
                <h5>Coursed Enrolled({friend.courses.length})</h5>
                <ul>
                  {friend.courses.map((course, i) => (
                    <li key={i}>{course}</li>
                  ))}
                </ul>
                <div className={styles.refer_amount}>
                  <span>Referral Amount</span>
                  <span>&#x20b9;{friend.referralAmount}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.links}>
        <Link to="">Terms & Conditions</Link>
      </div>
    </>
  );
};

export default Referred;
