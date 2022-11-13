import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { DataJobContext } from "../context/DataJobContext";
import JumboTron from "../components/jumbotron";

const LandingPage = () => {
  let history = useHistory();

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
      <div className="bg-fuchsia-900 pb-10 mb-20  shadow rounded-lg">
        <JumboTron />
      </div>
      <div className=" bg-white p-6 items-center pt-146 pb-28 mt-100 shadow rounded-lg">
        <h2 className="font-bold p-4 items-center text-dark text-3xl mb-2 max-w-md lg:text-3xl ">
          Find Your Jobs
        </h2>
        <div className="box pt-2 pb-6">
          <div className="box-wrapper">
            <div className=" bg-white rounded flex items-center w-1/2 p-3 shadow-sm border border-gray-200">
              <form method="POST" onSubmit={handleSearch}>
                <input
                  disabled
                  type="text"
                  onChange={handleSearchChange}
                  value={search}
                  placeholder="search for jobs"
                  x-model="q"
                  className="w-full pl-4 text-sm outline-none focus:outline-none bg-transparent"
                />
                {/* <input type="submit" value="Cari" /> */}
              </form>
            </div>
          </div>
        </div>
        {dataJob !== undefined ? (
          <>
            <div className=" cursor-pointer pt-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 relative">
              {dataJob.map((res, index) => {
                return (
                    <section id="JobCard" key={index}>
                    <div
                        value={res.id}
                        onClick={handleShow}
                        className=" cursor-pointer flex flex-col items-center justify-center bg-fuchsia-500 p-4 shadow rounded-lg"
                      >
                        <h2
                          className="mt-4 font-bold text-xl cursor-pointer"
                          value={res.id}
                          onClick={handleShow}
                        >
                          {res.title}
                        </h2>
                        <h6
                          value={res.id}
                          onClick={handleShow}
                          className="mt-2 text-sm font-medium cursor-pointer"
                        >
                          {res.company_name} ({res.company_city})
                        </h6>

                        <div
                          value={res.id}
                          onClick={handleShow}
                          className=" cursor-pointer inline-flex rounded-full overflow-hidden h-40 w-40"
                        >
                          <img
                            value={res.id}
                            onClick={handleShow}
                            src={res.company_image_url}
                            alt=""
                            className="h-full w-full"
                          />
                        </div>
                        <h6
                          value={res.id}
                          onClick={handleShow}
                          className="mt-2 text-sm font-medium"
                        >
                          qualification :
                        </h6>
                        <div className="flex-col flex">
                        <p
                          value={res.id}
                          onClick={handleShow}
                          className="text-xs text-gray-800 mt-3"
                        >
                          {res.job_qualification}
                        </p>

                        <p
                          value={res.id}
                          onClick={handleShow}
                          className="text-xs text-gray-800 mt-3"
                        >
                          {res.job_description}
                          </p>
                          </div>
                      </div>
                    </section>
                );
              })}
            </div>
          </>
        ) : (
            <h1 className="text-center text-2xl font-bold italic">Terjadi Kesalahan pada saat mengambil data</h1>
        )
      }
      </div>
    </>
  );
};

export default LandingPage;
