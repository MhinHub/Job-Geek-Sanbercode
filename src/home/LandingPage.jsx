import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

import { DataJobContext } from "../context/DataJobContext";
import JumboTron from "../components/jumbotron";

const LandingPage = () => {
  let history = useNavigate(); 

  const { handleFunctions, state } = useContext(DataJobContext);

  const [search, setSearch] = useState("");

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchStatus(true);
    setSearch("");
    history.pushState(`/search/${search}`);
  };
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
    searchStatus,
    setSearchStatus,
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
      // console.log(data["data"]);
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
      <div className="bg-teal-700 pb-10 mb-20  shadow rounded-lg">
        <JumboTron />
      </div>
      <div className=" bg-white p-6 items-center pt-146 pb-28 mt-100 shadow rounded-lg">
        <h2 className="font-bold p-4 items-center text-dark text-3xl mb-2 max-w-md lg:text-3xl ">
          Find Your Jobs
        </h2>
        <div class="box pt-2 pb-6">
          <div class="box-wrapper">
            <div class=" bg-white rounded flex items-center w-1/2 p-3 shadow-sm border border-gray-200">
              <form method="POST" onSubmit={handleSearch}>
                <input
                  disabled
                  type="text"
                  onChange={handleSearchChange}
                  value={search}
                  placeholder="search for jobs"
                  x-model="q"
                  class="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"
                />
                {/* <input type="submit" value="Cari" /> */}
              </form>
            </div>
          </div>
        </div>
        {dataJob !== undefined && (
          <>
            <div class=" cursor-pointer pt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 relative">
              {dataJob.map((res, index) => {
                return (
                  <>
                    <section id="JobCard">
                      <div
                        value={res.id}
                        onClick={handleShow}
                        class=" cursor-pointer flex flex-col items-center justify-center bg-white p-4 shadow rounded-lg"
                      >
                        <h2
                          class="mt-4 font-bold text-xl cursor-pointer"
                          value={res.id}
                          onClick={handleShow}
                        >
                          {res.title}
                        </h2>
                        <h6
                          value={res.id}
                          onClick={handleShow}
                          class="mt-2 text-sm font-medium cursor-pointer"
                        >
                          {res.company_name} ({res.company_city})
                        </h6>

                        <div
                          value={res.id}
                          onClick={handleShow}
                          class=" cursor-pointer inline-flex shadow-lg border border-gray-200 rounded-full overflow-hidden h-40 w-40"
                        >
                          <img
                            value={res.id}
                            onClick={handleShow}
                            src={res.company_image_url}
                            alt=""
                            class="h-full w-full"
                          />
                        </div>
                        <h6
                          value={res.id}
                          onClick={handleShow}
                          class="mt-2 text-sm font-medium"
                        >
                          qualification :
                        </h6>
                        <p
                          value={res.id}
                          onClick={handleShow}
                          class="text-xs text-gray-500 text-center mt-3"
                        >
                          {res.job_qualification}
                        </p>

                        <p
                          value={res.id}
                          onClick={handleShow}
                          class="text-xs text-gray-500 text-center mt-3"
                        >
                          {res.job_description}
                        </p>
                      </div>
                    </section>
                  </>
                );
              })}
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default LandingPage;
