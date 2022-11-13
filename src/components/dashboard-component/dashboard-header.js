import React from "react";

// components

export default function HeaderStats() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-lightBlue-600 md:pt-32 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full bg-slate-600">
          <div>
            <h1>test1</h1>
            <div className="flex flex-wrap bg-primary">
              <h1>test2</h1>
            </div>
            <div className="flex flex-wrap bg-teal-500">
              <h1>test2</h1>
            </div>
            <div className="flex flex-wrap bg-primary">
              <h1>test2</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
