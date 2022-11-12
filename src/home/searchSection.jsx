import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import { DataJobContext } from "../context/DataJobContext";
const SearchSection = () => {
  let { valueOfSearch } = useParams();
  const {
    data,
    setData,
    fetchStatus,
    setFetchStatus,
    currentId,
    setCurrentId,
    input,
    setInput,
    functions,
    searchStatus,
    setSearchStatus,
  } = useContext(DataJobContext);
  const { fetchData } = functions;
  const [searchData, setSearchData] = useState([]);

  useEffect(() => {
    /////////////////////
    const fetchSearch = async () => {
      let result = await axios.get(
        `https://dev-example.sanbercloud.com/api/job-vacancy`
      );
      let resultData = result.data;
      console.log(resultData);

      let filterData = resultData.filter((e) => {
        return Object.values(e)
          .join(" ")
          .toLowerCase()
          .includes(valueOfSearch.toLowerCase());
      });

      setSearchData([...filterData]);
    };

    if (searchStatus) {
      fetchSearch();
      setSearchStatus(false);
    }
  }, [searchStatus, setSearchStatus]);
  console.log(searchData);
  return (
    <>
      <div className="card">
        {searchData !== null && (
          <>
            {searchData.map((e) => {
              return (
                <div>
                  <h2>{e.title}</h2>
                  <h5>Release Year : {e.company_image_url}</h5>
                  <img alt="..." src={e.image_url} />
                  <br />
                  <br />
                  <div>
                    <strong>Price: {e.job_description}</strong>
                    <br />
                    <strong>Rating: {e.rating}</strong>
                    <br />
                    <strong>Size: {e.size}</strong>
                    <br />
                    <strong style={{ marginRight: "10px" }}>
                      Platform : Android & IOS
                    </strong>
                    <br />
                  </div>
                  <p>
                    <strong style={{ marginRight: "10px" }}>
                      Description :
                    </strong>{" "}
                    {e.description}
                  </p>

                  <hr />
                </div>
              );
            })}
          </>
        )}
      </div>
    </>
  );
};

export default SearchSection;
