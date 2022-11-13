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
                Halo! saya <b>Muhaemin</b>
              </p>
            </div>
            <h2>Data Peserta Sanbercode React JS</h2>
            <ul>
              <li>
                <b>Nama : </b>Muhaemin Iskandar
              </li>
              <li>
                <b>Email : </b>iskandarm20d@student.unhas.ac.id
              </li>
              <li>
                <b>Sistem Operasi : </b>Linux
              </li>
              <li>
                <b>Akun Gitlab : </b>MinlabHQ
              </li>
              <li>
                <b>Akun Telegram : </b>Muhaemin Iskandar
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
