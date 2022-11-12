import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { DataJobContext } from "../context/DataJobContext";

const JobList = () => {
  const { handleFunctions, state } = useContext(DataJobContext);
  let {
    handleText,
    handleChange,
    handleSubmit,
    handleEdit,
    handleDelete,
    handleStatus,
    handleSalary,
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

  useEffect(() => {
    const fetchData = async () => {
      let { data } = await axios.get(
        `https://dev-example.sanbercloud.com/api/job-vacancy`
      );
      // console.log(data);
      let result = data["data"].map((res) => {
        // console.log(data);
        let {
          id,
          title,
          job_description,
          job_qualification,
          job_type,
          job_tenure,
          job_status,
          company_name,
          company_image_url,
          company_city,
          salary_min,
          salary_max,
        } = res;

        return {
          id,
          title,
          job_description,
          job_qualification,
          job_type,
          job_tenure,
          job_status,
          company_name,
          company_image_url,
          company_city,
          salary_min,
          salary_max,
        };
      });
      setDataJob([...result]);
      //   console.log(result);
    };

    if (fetchStatus) {
      fetchData();
      setFetchStatus(false);
    }
  }, [fetchStatus, setFetchStatus]);
  return (
    <>
      <div className="relative pt-2  overflow-x-auto">
        <h2 className="font-bold text-dark text-3xl  mb-5 max-w-md lg:text-3xl">
          Job List{" "}
        </h2>
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">No</th>
              <th className="px-6 py-3">Title</th>
              <th className="px-6 py-3 truncate ...">Description</th>
              <th className="px-6 py-3">Qualification</th>
              <th className="px-6 py-3">Type</th>
              <th className="px-6 py-3">Tenure</th>
              <th className="px-6 py-3">Status</th>
              <th className="px-6 py-3">Salary</th>

              <th className="px-6 py-3">Company Name</th>
              <th className="px-6 py-3">Company Location</th>
              <th className="px-6 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {dataJob !== undefined && (
              <>
                {dataJob.map((res, index) => {
                  return (
                    <tr
                      className="border-b dark:bg-gray-800 dark:border-gray-700 odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700"
                      key={index}
                    >
                      <td class="px-6 py-4">{index + 1}</td>
                      <td class="px-6 py-4">{res.title}</td>
                      <td class="px-6 py-4">{res.job_description}</td>
                      <td class="px-6 py-4">{res.job_qualification} </td>
                      <td class="px-6 py-4">{res.job_type}</td>
                      <td class="px-6 py-4">{res.job_tenure}</td>
                      <td class="px-6 py-4">{handleStatus(res.job_status)}</td>
                      <td class="px-6 py-4">
                        {handleSalary(res.salary_min)} -{" "}
                        {handleSalary(res.salary_max)}
                      </td>

                      <td class="px-6 py-4">{res.company_name}</td>
                      <td class="px-6 py-4">{res.company_city}</td>

                      <td class="px-6 py-4">
                        <button
                          onClick={handleEdit}
                          value={res.id}
                          className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-70 transition duration-300 ease-in-out mb-3 "
                        >
                          edit
                        </button>
                        <button
                          onClick={handleDelete}
                          value={res.id}
                          className="text-base font-semibold text-white bg-primary py-3 px-8 rounded-full hover:shadow-lg hover:opacity-70 transition duration-300 ease-in-out"
                        >
                          delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </>
            )}
          </tbody>
        </table>
      </div>
      <br />
    </>
  );
};

export default JobList;
