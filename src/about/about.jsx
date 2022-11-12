import React from "react";
import logoSanbercode from "../assets/img/logo.png";

function About() {
  return (
    <>
      <div className="container">
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
          <img className="w-full" src={logoSanbercode} alt="sanbercode logo" />

          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">
              <h1>SanberDev | Santai Berkualitas Development</h1>
              <p>
                Halo! saya <b>Aryanda,</b> dari Bootcamp Digital Skill Batch ke
                - 33
              </p>
            </div>
            <h2>Data Peserta Sanbercode React JS</h2>
            <ul>
              <li>
                <b>Nama : </b>Aryanda Rizky Pratama
              </li>
              <li>
                <b>Email : </b>aryandarizky1234@gmail.com
              </li>
              <li>
                <b>Sisteem Operasi : </b>Windows
              </li>
              <li>
                <b>Akun Gitlab : </b>Aryanda04
              </li>
              <li>
                <b>Akun Telegram : </b>Aryanda Rizky
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
