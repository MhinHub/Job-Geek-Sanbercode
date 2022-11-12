import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { DataJobContext } from "../context/DataJobContext";
const JobForm = () => {
  let { slug } = useParams();
  const { handleFunctions, state } = useContext(DataJobContext);
  let {
    handleText,
    handleChange,
    handleSubmit,
    handleEdit,
    handleShow,
    handleDelete,
  } = handleFunctions;

  let {
    dataJob,
    setDataJob,
    input,
    setInput,
    currentIndex,
    setCurrentIndex,
    fetchStatus,
    setFetchStatus,
  } = state;
  //   console.log("test1");
  useEffect(() => {
    if (slug !== undefined) {
      //   console.log("test2");
      axios
        .get(`https://dev-example.sanbercloud.com/api/job-vacancy/${slug}`)
        .then((res) => {
          let data = res.data;
          console.log(data);
          setInput({
            title: data.title,
            job_description: data.job_description,
            job_qualification: data.job_qualification,
            job_type: data.job_type,
            job_tenure: data.job_tenure,
            job_status: data.job_status,
            company_name: data.company_name,
            company_image_url: data.company_image_url,
            company_city: data.company_city,
            salary_min: data.salary_min,
            salary_max: data.salary_max,
          });
          setCurrentIndex(data.id);
        });
    }
    return () => {
      setInput({
        title: "",
        job_description: "",
        job_qualification: "",
        job_type: "",
        job_tenure: "",
        job_status: "",
        company_name: "",
        company_image_url: "",
        company_city: "",
        salary_min: "",
        salary_max: "",
      });
    };
  }, []);
  return (
    <>
      <div className="mt-5 md:mt-0 md:col-span-2">
        <h2 className="font-bold text-dark text-3xl mb-5 max-w-md lg:text-3xl">
          Input Jobs{" "}
        </h2>
        <form onSubmit={handleSubmit} method="POST">
          <div className="shadow overflow-hidden sm:rounded-md">
            <div className="px-4 py-5 bg-white sm:p-6">
              <div className="grid grid-cols-6 gap-6">
                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Title{" "}
                  </label>
                  <input
                    onChange={handleChange}
                    value={input.title}
                    type="text"
                    name="title"
                    className="mt-1  block w-full shadow-sm sm:text-sm border-gray-300 rounded-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Company Name{" "}
                  </label>
                  <input
                    onChange={handleChange}
                    value={input.company_name}
                    type="text"
                    name="company_name"
                    className="mt-1  block w-full shadow-sm sm:text-sm border-gray-300 rounded-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Company Image (URL){" "}
                  </label>
                  <input
                    onChange={handleChange}
                    value={input.company_image_url}
                    type="text"
                    name="company_image_url"
                    className="mt-1  block w-full shadow-sm sm:text-sm border-gray-300 rounded-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Company City{" "}
                  </label>
                  <input
                    onChange={handleChange}
                    value={input.company_city}
                    type="text"
                    name="company_city"
                    className="mt-1  block w-full shadow-sm sm:text-sm border-gray-300 rounded-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Job Qualification
                  </label>
                  <input
                    onChange={handleChange}
                    value={input.job_qualification}
                    type="text"
                    name="job_qualification"
                    className="mt-1  block w-full shadow-sm sm:text-sm border-gray-300 rounded-sm"
                  />
                </div>

                <div className="col-span-6">
                  <label className="block text-sm font-medium text-gray-700">
                    Job Description{" "}
                  </label>
                  <input
                    onChange={handleChange}
                    value={input.job_description}
                    type="text"
                    name="job_description"
                    autoComplete="street-address"
                    className="mt-1  block w-full shadow-sm sm:text-sm border-gray-300 rounded-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                  <label
                    htmlFor="city"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Job Status
                  </label>
                  <input
                    checked={input.job_status_0}
                    onChange={handleChange}
                    type="radio"
                    name="job_status_0"
                    value="0"
                  />
                  Ditutup
                  <input
                    checked={input.job_status_1}
                    onChange={handleChange}
                    type="radio"
                    name="job_status_1"
                    value="1"
                  />
                  Dibuka
                  {/* <input
                    onChange={handleChange}
                    value={input.job_status}
                    type="number"
                    name="job_status"
                    className="mt-1  block w-full shadow-sm sm:text-sm border-gray-300 rounded-sm"
                  /> */}
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Job Type
                  </label>
                  <input
                    onChange={handleChange}
                    value={input.job_type}
                    type="text"
                    name="job_type"
                    className="mt-1  block w-full shadow-sm sm:text-sm border-gray-300 rounded-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                  <label className="block text-sm font-medium text-gray-700">
                    Job Tenure
                  </label>
                  <input
                    onChange={handleChange}
                    value={input.job_tenure}
                    type="text"
                    name="job_tenure"
                    className="mt-1  block w-full shadow-sm sm:text-sm border-gray-300 rounded-sm"
                  />
                </div>
                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Salary Min
                  </label>
                  <input
                    onChange={handleChange}
                    value={input.salary_min}
                    type="text"
                    name="salary_min"
                    className="mt-1  block w-full shadow-sm sm:text-sm border-gray-300 rounded-sm"
                  />
                </div>

                <div className="col-span-6 sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700">
                    Salary Max
                  </label>
                  <input
                    onChange={handleChange}
                    value={input.salary_max}
                    type="text"
                    name="salary_max"
                    className="mt-1  block w-full shadow-sm sm:text-sm border-gray-300 rounded-sm"
                  />
                </div>
              </div>
            </div>
            <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-teal-400 focus:outline-none focus:ring-2 "
              >
                Save
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default JobForm;
