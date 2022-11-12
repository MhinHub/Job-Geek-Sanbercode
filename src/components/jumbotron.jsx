import React from "react";

const JumboTron = () => {
  return (
    <>
      <section id="home" class="mb-100">
        <div class="container">
          <div class="flex flex-wrap">
            <div class="w-full self-center px-4 lg:w-1/2">
              <h1 class="text-base font-semibold text-slate-100 md:text-xl lg:text-2xl">
                Selamat Datang, di
                <span class="block font-bold text-slate-100 text-4xl mt-1 lg:text-5xl">
                  JobiFy
                </span>
              </h1>
              <h2 class="font-medium text-slate-200 text-lg mb-5 lg:text-2xl">
                Website Penghubung Calon Pekerja dan Perusahaan
              </h2>
              <p class="font-medium text-slate-200 mb-10 leading-relaxed">
                Sudah siap mengubah nasib anda? sudah siap menghadapi dunia
                kerja? bingung mencari mencari lowongan pekerjaan, JobiFy
                solusinya, dengan JobiFy anda bisa melihat lowongan pekerjaan di
                sekitar anda dengan mudah dan cepat, selain itu, adna juga dapat
                menambahkan lowongan pekerjaan baru agar bisa dilihat
                orang-orang
              </p>
            </div>
            <div class="w-full self-end px-4 lg:w-1/2">
              <div class="relative mt-10 lg:mt-9 lg:right-0">
                <img
                  src="https://pbs.twimg.com/profile_images/1086871544901656576/f8jZ6ag9_400x400.png"
                  alt="Aryanda Rizkyu Profile Pict"
                  class="max-w-full mx-auto"
                />
                <span class="absolute -bottom-10 -z-10 left-1/2 -translate-x-1/2">
                  <svg
                    width="400"
                    height="400"
                    viewBox="0 0 200 200"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#0D9488"
                      d="M38.9,-51.3C54.4,-42.3,73.6,-36.3,80.8,-23.9C88,-11.6,83.2,6.9,75.2,22.2C67.2,37.6,56.1,49.7,43,62.1C30,74.5,15,87.2,-0.7,88.1C-16.3,89,-32.7,78.2,-47.1,66.3C-61.5,54.3,-74.1,41.2,-75.6,26.9C-77.1,12.5,-67.6,-3.2,-62.6,-20.9C-57.7,-38.6,-57.2,-58.4,-47.5,-69.1C-37.8,-79.9,-18.9,-81.8,-3.6,-76.9C11.7,-71.9,23.5,-60.2,38.9,-51.3Z"
                      transform="translate(100 100) scale(0.9)"
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default JumboTron;
