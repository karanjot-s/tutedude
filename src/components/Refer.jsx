import React from "react";
import { Link } from "react-router-dom";
import InviteIcon from "../assets/icons/invite.svg";
import WalletIcon from "../assets/icons/wallet.svg";
import CouponIcon from "../assets/icons/coupon.svg";
import DiscountIcon from "../assets/icons/discount.svg";
import RupeeIcon from "../assets/icons/rupee.svg";
import styles from "../styles/Refer.module.css";

const Refer = () => {
  const stats = {
    earnings: 2500,
    referals: 7,
    balance: 500,
  };

  const referralCode = "EDH54";

  const working = [
    {
      title: "Invite your Friends",
      text: "Share the link tutedude.com with your friends",
      icon: InviteIcon,
    },
    {
      title: "Friend purchases any course",
      text: "Using your REFERRAL CODE in the payments page",
      icon: WalletIcon,
    },
    {
      title: "You get ₹ 200 as referral money",
      text: "On total purchase the friend makes, into your wallet",
      icon: CouponIcon,
    },
    {
      title: "Your Friend gets ₹ 200 Off",
      text: "On his overall fee on successful purchase using your referral code",
      icon: DiscountIcon,
    },
    {
      title: "Transfer money from wallet",
      text: "When the wallet balance reaches ₹200 or more, you can withdraw it",
      icon: RupeeIcon,
    },
  ];

  return (
    <div className={styles.refer_main}>
      <div className={styles.info}>
        <div className={styles.card}>
          <div className={styles.stats}>
            <div>
              <span>Referral Earning</span>
              <span>&#x20b9; {stats.earnings}</span>
            </div>
            <div>
              <span>Total Referrals</span>
              <span>{stats.referals}</span>
            </div>
            <div>
              <span>Wallet Balance</span>
              <span>&#x20b9; {stats.balance}</span>
            </div>
          </div>
          <button>Withdraw Balance</button>
        </div>
        <div className={styles.code}>
          <h3>Your Referral Code</h3>
          <div
            onClick={() => {
              navigator.clipboard.writeText(referralCode);
              window.alert("Referral code copied");
            }}
          >
            {referralCode}
          </div>
        </div>
      </div>
      <div className={styles.question_div}>
        <h3>How does it work ?</h3>
        <div className={styles.question_content}>
          {working.map((item, i) => (
            <div key={i} className={styles.question}>
              <span className={styles.icon}>
                <img src={item.icon} />
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
