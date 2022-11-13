import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { DataJobContext } from "../context/DataJobContext";

// components

export default function JobCard() {
  let { slug } = useParams();
  const { handleFunctions, state } = useContext(DataJobContext);
  let {
    handleText,
    handleChange,
    handleSubmit,
    handleEdit,
    handleShow,
    handleStatus,
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
      <div className="relative flex flex-col min-w-0 break-words bg-white w-full  shadow-xl rounded-lg mt-6">
        <div className="px-6">
          <div className="text-center mt-12">
            <img
              alt="Company"
              src={input.company_image_url}
              className="w-[300px] inline-block align-middle ..."
            />
            <h3 className="text-3xl font-semibold leading-normal  text-blueGray-700 mb-2">
              {input.title}
            </h3>
            <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
              {input.company_name} ({input.company_city})
            </div>
            <div className="mb-2 text-blueGray-600 mt-10">
              <span className="text-l font-bold block uppercase tracking-wide text-blueGray-600">
                qualification :{" "}
              </span>
              {input.job_qualification}
            </div>
            <div className="w-full px-4 text-center mt-6">
              <div className="flex justify-center py-4 lg:pt-2 pt-4">
                <div className="mr-4 p-3 text-center">
                  <span className="text-l font-bold block tracking-wide ">
                    Job Type
                  </span>
                  <span className="text-l  block tracking-wide ">
                    {input.job_type}
                  </span>
                </div>
                <div className="mr-4 p-3 text-center">
                  <span className="text-l font-bold block tracking-wide ">
                    Job Tenure
                  </span>
                  <span className="text-l  block tracking-wide ">
                    {input.job_tenure}
                  </span>
                </div>
                <div className="lg:mr-4 p-3 text-center">
                  <span className="text-l font-bold block tracking-wide ">
                    Job Status
                  </span>
                  <span className="text-l  block tracking-wide ">
                    {handleStatus(input.job_status)}
                  </span>
                </div>
                <div className="lg:mr-4 p-3 text-center">
                  <span className="text-l font-bold block tracking-wide ">
                    Job Salary
                  </span>
                  <span className="text-l  block tracking-wide ">
                    {input.salary_min} - {input.salary_max}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-10 py-5 border-t text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <span className="text-l font-bold block tracking-wide ">
                  Description :
                </span>
                <p className="mb-4 text-lg leading-relaxed ">
                  {input.job_description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
