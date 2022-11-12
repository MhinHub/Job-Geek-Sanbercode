import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { DataJobContext } from "../context/DataJobContext";
// components

export default function CardProfile() {
  return (
    <>
      <div className="relative flex flex-col min-w-0 break-words  w-full mb-6  mt-16">
        <div className="px-6">
          <div className="flex flex-wrap justify-center">
            <div className="w-full px-4 flex justify-center">
              <div className="relative">
                <img
                  alt="..."
                  src={Cookies.get("image_url")}
                  className="shadow-xl w-[300px] inline-block align-middle ... "
                />
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <span className="text-l font-bold block tracking-wide ">
                Nama :
              </span>
              {Cookies.get("name")}
            </div>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              <span className="text-l font-bold block tracking-wide ">
                Email :
              </span>
              {Cookies.get("email")}
            </div>
          </div>
          <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <a
                href="/dashboard/profile/change-password"
                className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-70 transition duration-300 ease-in-out"
              >
                Change Password
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
