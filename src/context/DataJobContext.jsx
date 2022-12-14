import React, { createContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export const DataJobContext = createContext();

export const DataJobProvider = (props) => {
  let history = useNavigate();
  const [dataJob, setDataJob] = useState([]);
  const [searchStatus, setSearchStatus] = useState(true);

  const [input, setInput] = useState({
    title: "",
    job_description: "",
    job_qualification: "",
    job_type: "",
    job_tenure: "",
    job_status: "",
    job_status_0: "",
    job_status_1: "",
    company_name: "",
    company_image_url: "",
    company_city: "",
    salary_min: "",
    salary_max: "",
  });
  let [currentIndex, setCurrentIndex] = useState(-1);
  let [fetchStatus, setFetchStatus] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();

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
    } = input;

    if (currentIndex === -1) {
      axios
        .post(
          `https://dev-example.sanbercloud.com/api/job-vacancy`,
          {
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
          },
          { headers: { Authorization: "Bearer " + Cookies.get("token") } }
        )
        .then((res) => {
          alert("Data berhasil ditambahkan");
          history.push("/dashboard/list-job-vacancy");
          setFetchStatus(true);
        });
    } else {
      axios
        .put(
          `https://dev-example.sanbercloud.com/api/job-vacancy/${currentIndex}`,
          {
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
          },
          { headers: { Authorization: "Bearer " + Cookies.get("token") } }
        )
        .then((res) => {
          alert("data berhasil dirubah");
          history.push("/dashboard/list-job-vacancy");

          setFetchStatus(true);
        });
    }

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
    setCurrentIndex(-1);
  };

  const handleChange = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    // let status = ["job_status_1", "job_status_0"];

    if (name === "job_status_1") {
      setInput({
        ...input,
        job_status_1: value,
        job_status_0: "",
        job_status: value,
      });
    } else if (name === "job_status_0") {
      setInput({
        ...input,
        job_status_0: value,
        job_status_1: "",
        job_status: value,
      });
    } else {
      setInput({ ...input, [name]: value });
    }
  };

  const handleEdit = (event) => {
    let idJob = parseInt(event.target.value);
    history.push(`/dashboard/list-job-vacancy/edit/${idJob}`);
    console.log(idJob);
  };
  const handleShow = (event) => {
    let idJob = parseInt(event.target.getAttribute("value"));
    history.push(`/job-vacancy/${idJob}`);
    // console.log(idJob);
  };

  const handleDelete = (event) => {
    let idData = parseInt(event.target.value);
    // console.log(idData)
    axios
      .delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${idData}`, {
        headers: { Authorization: "Bearer " + Cookies.get("token") },
      })
      .then(() => {
        setFetchStatus(true);
        alert("Data berhaisl dihapus");
      });
  };
  const handleStatus = (params) => {
    let status = params;
    if (status === 1) {
      return "Dibuka";
    } else {
      return "Ditutup";
    }
  };
  const handleSalary = (angka) => {
    if (angka !== null) {
      var number_string = angka.toString(),
        split = number_string.split(","),
        sisa = split[0].length % 3,
        rupiah = split[0].substr(0, sisa),
        ribuan = split[0].substr(sisa).match(/\d{3}/gi),
        separator;

      // tambahkan titik jika yang di input sudah menjadi angka ribuan
      if (ribuan) {
        separator = sisa ? "." : "";
        rupiah += separator + ribuan.join(".");
      }

      rupiah = split[1] !== undefined ? rupiah + "," + split[1] : rupiah;
      return rupiah === "0" ? "Free" : "Rp. " + rupiah + ",-";
    } else {
      return "Free";
    }
  };

  let handleFunctions = {
    handleSubmit,
    handleChange,
    handleEdit,
    handleShow,
    handleDelete,
    handleStatus,
    handleSalary,
  };

  let state = {
    dataJob,
    setDataJob,
    input,
    setInput,
    currentIndex,
    setCurrentIndex,
    searchStatus,
    setSearchStatus,
    fetchStatus,
    setFetchStatus,
  };

  return (
    <>
      <DataJobContext.Provider value={{ handleFunctions, state }}>
        {props.children}
      </DataJobContext.Provider>
    </>
  );
};
