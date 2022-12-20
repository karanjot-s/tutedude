import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Referred.module.css";

const Referred = ({data}) => {
  
  const getFormatedDate = (dateString) => {
    const d = new Date(dateString)
    
    return isNaN ? dateString : `${d.getDate()}-${d.getMonth()}-${d.getFullYear()}`
  }

  return (
    <>
      <div className={styles.back_link}>
        <Link to="/">
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
              navigator.clipboard.writeText(data.code);
              window.alert("Referral code copied");
            }}
            className={styles.code}
          >
            {data.code}
          </div>
        </div>
        <div className={styles.wallet_card}>
          <h4>Wallet Balance</h4>
          <span>&#x20b9;{data.walletBalance}</span>
        </div>
      </div>
      <div className={styles.friends}>
        <h3>
          Friends who enrolled <span>({data.enrollers.length})</span>
        </h3>
        <div className={styles.friends_container}>
          <div className={`${styles.friends_data} ${data.enrollers.length < 2 ? "" : (
            data.enrollers.length === 2 ? styles.friends_2 : styles.friends_many
          )}`}>
            {data.enrollers.map((enroller, i) => (
              <div
                key={i}
                className={`${styles.card} ${
                  enroller.courses.length > 6 ? styles.over : ""
                }`}
              >
                <div className={styles.heading}>
                  <h4>{enroller.studentName}</h4>
                  <span>{getFormatedDate(enroller.date_time)}</span>
                </div>
                <h5>Coursed Enrolled({enroller.courses.length})</h5>
                <ul>
                  {enroller.courses.map((course, i) => (
                    <li key={i}>{course}</li>
                  ))}
                </ul>
                <div className={styles.refer_amount}>
                  <span>Referral Amount</span>
                  <span>&#x20b9;{enroller.referralAmount}</span>
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
