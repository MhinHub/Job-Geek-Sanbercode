import React, { useState } from "react";
import Cookies from "js-cookie";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Login = () => {
  let history = useHistory();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const handleLogin = (e) => {
    e.preventDefault();

    let { email, password } = input;
    axios
      .post("https://dev-example.sanbercloud.com/api/login", {
        email,
        password,
      })
      .then((res) => {
        let { data } = res;
        Cookies.set("token", data.token, { expires: 1 });
        Cookies.set("name", data.user.name, { expires: 1 });
        Cookies.set("email", data.user.email, { expires: 1 });
        Cookies.set("image_url", data.user.image_url, { expires: 1 });

        // Cookies.set("user", JSON.stringify(data.user), { expires: 1 });
        history.push("/dashboard/list-job-vacancy");
      })
      .catch((error) => {
        console.log(error);
        alert("Login gagal");
      });
    setInput({
      email: "",
      password: "",
    });
  };
  return (
    <>
      <div className="container mx-auto mt-5 px-4 h-full ">
        <div className="flex content-center items-center justify-center h-full ">
          <div className="w-full lg:w-4/12 px-4">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-200 border-0">
              <div className="rounded-t mb-0 px-6 py-6 bg-white">
                <div className="text-center mb-3 bg-white">
                  <h6 className="text-blueGray-500 text-sm font-bold">
                    Sign in
                  </h6>
                </div>
                <hr className="mt-6 border-b-1 border-blueGray-300" />
              </div>
              <div className="flex-auto px-4 lg:px-10 py-10 pt-0 bg-white">
                <form onSubmit={handleLogin} method="POST">
                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Email
                    </label>
                    <input
                      onChange={handleChange}
                      type="text"
                      placeholder="Email"
                      name="email"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>

                  <div className="relative w-full mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="grid-password"
                    >
                      Password
                    </label>
                    <input
                      onChange={handleChange}
                      placeholder="Password"
                      name="password"
                      type="password"
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>

                  <div className="text-center mt-6">
                    <button
                      className="bg-primary text-white active:bg-blueGray-600 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Sign In
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;
