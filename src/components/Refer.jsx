import React from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Refer.module.css";

const Refer = ({data}) => {

  const working = [
    {
      title: "Invite your Friends",
      text: "Share the link tutedude.com with your friends",
      icon: "/assets/icons/invite.svg",
    },
    {
      title: "Friend purchases any course",
      text: "Using your REFERRAL CODE in the payments page",
      icon: "/assets/icons/wallet.svg",
    },
    {
      title: "You get ₹ 200 as referral money",
      text: "On total purchase the friend makes, into your wallet",
      icon: "/assets/icons/coupon.svg",
    },
    {
      title: "Your Friend gets ₹ 200 Off",
      text: "On his overall fee on successful purchase using your referral code",
      icon: "/assets/icons/discount.svg",
    },
    {
      title: "Transfer money from wallet",
      text: "When the wallet balance reaches ₹200 or more, you can withdraw it",
      icon: "/assets/icons/rupee.svg",
    },
  ];

  return (
    <div className={styles.refer_main}>
      <div className={styles.info}>
        <div className={styles.card}>
          <div className={styles.stats}>
            <div>
              <span>Referral Earning</span>
              <span>&#x20b9; {data.referralEarnings}</span>
            </div>
            <div>
              <span>Total Referrals</span>
              <span>{data.referralNumber}</span>
            </div>
            <div>
              <span>Wallet Balance</span>
              <span>&#x20b9; {data.walletBalance}</span>
            </div>
          </div>
          <button>Withdraw Balance</button>
        </div>
        <div className={styles.code}>
          <h3>Your Referral Code</h3>
          <div
            onClick={() => {
              navigator.clipboard.writeText(data.code);
              window.alert("Referral code copied");
            }}
          >
            {data.code}
          </div>
        </div>
      </div>
      <div className={styles.question_div}>
        <h3>How does it work ?</h3>
        <div className={styles.question_content}>
          {working.map((item, i) => (
            <div key={i} className={styles.question}>
              <span className={styles.icon}>
                <img src={item.icon} alt="" />
              </span>
              <div>
                <h4>{item.title}</h4>
                <span>{item.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.links}>
        <Link to="/refered">Friends who enrolled</Link>
        <Link to="">Terms & Conditions</Link>
      </div>
    </div>
  );
};

export default Refer;
