import React, { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useHistory } from "react-router-dom";

const ChangePassword = () => {
  let history = useHistory();
  const [input, setInput] = useState({
    current_password: "",
    new_password: "",
    new_confirm_password: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleRegist = (e) => {
    e.preventDefault();

    let { current_password, new_password, new_confirm_password } = input;
    axios
      .post(
        "https://dev-example.sanbercloud.com/api/change-password ",
        {
          current_password,
          new_password,
          new_confirm_password,
        },
        { headers: { Authorization: "Bearer " + Cookies.get("token") } }
      )
      .then((res) => {
        // let { token } = res.data;
        // Cookies.set("token", token, { expires: 1 });
        alert("Password berhasil diubah");
        history.push("/");
      })
      .catch((error) => {
        console.log(error);
        alert("Password gagal diubah");
      });
    setInput({
      current_password: "",
      new_password: "",
      new_confirm_password: "",
    });
  };
  return (
    <>
      <div className="flex items-center justify-center min-h-screen ">
        <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-2xl md:w-1/3 lg:w-1/2 sm:w-1/3">
          <h3 className="text-2xl font-bold text-center">Change Password</h3>
          <form onSubmit={handleRegist} method="POST">
            <div className="mt-4">
              <div>
                <label className="block" for="Name">
                  Masukkan Password Lama
                </label>
                <input
                  onChange={handleChange}
                  type="password"
                  placeholder="Current Password"
                  name="current_password"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="mt-4">
                <label className="block" for="email">
                  Masukkan Password Baru
                </label>
                <input
                  onChange={handleChange}
                  type="password"
                  placeholder=""
                  name="new_password"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="mt-4">
                <label className="block">Konfirmasi Password Baru</label>
                <input
                  onChange={handleChange}
                  type="password"
                  placeholder=""
                  name="new_confirm_password"
                  className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600"
                />
              </div>
              <div className="flex">
                <button className="w-full px-6 py-2 mt-4 text-white bg-primary rounded-lg hover:bg-teal-500">
                  Change Password
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default ChangePassword;
