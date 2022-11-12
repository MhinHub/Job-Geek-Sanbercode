/*eslint-disable*/
import Cookies from "js-cookie";
import React from "react";
import { Link } from "react-router-dom";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = React.useState("hidden");
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link
            className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
            to="/"
          >
            Home
          </Link>
          {/* User */}
          <ul className="md:hidden items-center flex flex-wrap list-none">
            <li className="inline-block relative"></li>
            <li className="inline-block relative"></li>
          </ul>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link
                    className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0"
                    to="/"
                  >
                    Home
                  </Link>
                </div>
              </div>
            </div>
            {/* Form */}

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Heading */}
            <h6 className="md:min-w-full text-blueGray-500 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
              Admin Layout Pages
            </h6>
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf(
                      "/dashboard/list-job-vacancy"
                    ) !== -1
                      ? "text-slate-500 hover:text-teal-500"
                      : "text-slate-700 hover:text-teal-500")
                  }
                  to="/dashboard/list-job-vacancy"
                >
                  <i
                    className={
                      "fas fa-table mr-2 text-sm " +
                      (window.location.href.indexOf(
                        "/dashboard/list-job-vacancy"
                      ) !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Tables
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf(
                      "/dashboard/list-job-vacancy/form"
                    ) !== -1
                      ? "text-slate-500 hover:text-teal-500"
                      : "text-slate-700 hover:text-teal-500")
                  }
                  to="/dashboard/list-job-vacancy/form"
                >
                  <i
                    className={
                      "fas fa-table mr-2 text-sm " +
                      (window.location.href.indexOf(
                        "/dashboard/list-job-vacancy/form"
                      ) !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Input Form
                </Link>
              </li>

              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/dashboard/profile") !== -1
                      ? "text-slate-500 hover:text-teal-500"
                      : "text-slate-700 hover:text-teal-500")
                  }
                  to="/dashboard/profile"
                >
                  <i
                    className={
                      "fas fa-tools mr-2 text-sm " +
                      (window.location.href.indexOf("/dashboard/profile") !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Profile
                </Link>
              </li>
              <li className="items-center">
                <Link
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf(
                      "/dashboard/profile/change-passworde"
                    ) !== -1
                      ? "text-slate-500 hover:text-teal-500"
                      : "text-slate-700 hover:text-teal-500")
                  }
                  to="/dashboard/profile/change-password"
                >
                  <i
                    className={
                      "fas fa-tools mr-2 text-sm " +
                      (window.location.href.indexOf(
                        "/dashboard/profile/change-password"
                      ) !== -1
                        ? "opacity-75"
                        : "text-blueGray-300")
                    }
                  ></i>{" "}
                  Change Password
                </Link>
              </li>
            </ul>

            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            <ul>
              <li className="items-center">
                <Link
                  onClick={() => {
                    Cookies.remove("token");
                    Cookies.remove("name");
                    Cookies.remove("email");
                    Cookies.remove("image_url");
                  }}
                  className={
                    "text-xs uppercase py-3 font-bold block " +
                    (window.location.href.indexOf("/") !== -1
                      ? "text-slate-500 hover:text-teal-500"
                      : "text-slate-700 hover:text-teal-500")
                  }
                  to="/"
                >
                  <a
                    onClick={() => {
                      Cookies.remove("token");
                    }}
                    className={
                      "fas fa-table mr-2 text-sm " +
                      (window.location.href.indexOf("/") !== -1
                        ? "opacity-75"
                        : "text-teal-300")
                    }
                  ></a>{" "}
                  Logout
                </Link>
              </li>
            </ul>
            {/* Divider */}
          </div>
        </div>
      </nav>
    </>
  );
}
