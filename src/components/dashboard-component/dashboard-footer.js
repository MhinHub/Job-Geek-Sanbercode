import React from "react";

export default function FooterAdmin() {
  return (
      <footer className="block py-4 bg-fuchsia-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-4/12 px-4">
              <div className="text-sm text-blueGray-500 font-semibold py-1 text-center md:text-left">
                Copyright © 2022
              </div>
            </div>
            <div className="w-full md:w-8/12 px-4">
              <div className="flex flex-wrap list-none md:justify-end  justify-center">
              <p>Muhaemin Iskandar</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
  )
}
