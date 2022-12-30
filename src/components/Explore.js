import React from "react";

function Explore() {
  return (
    <div className="my-12">
      <div className="max-w-[1400px] w-full m-auto mb-10 py-12 px-4 flex justify-between">
        <div className="">
          <h3 className="mb-4">TRAVEL STORIES AND NEWS</h3>
          <h1 className="text-5xl font-bold">
            Explore our latest <br />
            stories
          </h1>
        </div>
        <div className="flex items-end">
          <button className="hover:shadow-xl">View all news</button>
          <button className="hover:shadow-xl">view all stories</button>
        </div>
      </div>
      {/* This is the main box */}
      <div className="max-w-[1400px] w-full m-auto h-full  px-4  gap-10  flex flex-col items-center    md:justify-start md:flex-row ">
        <div className="relative  w-4/5  ">
          <img
            src="https://images.pexels.com/photos/1020016/pexels-photo-1020016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="/"
            className="rounded-3xl w-full h-[600px] object-cover  "
          />
          <div className="bg-black/30 absolute top-0 left-0 w-full h-full rounded-3xl " />
          <div className="absolute bottom-10 text-white z-20 w-contain p-4">
            <h6 className="font-bold mb-2">Sustainable Travel</h6>
            <h1 className="font-bold text-2xl mb-2 ">
              10 things tha make us happy to
              <br /> travel in 2023
            </h1>
            <p className="mb-5">Dec 4,2023. 7 min read</p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              voluptates nostrum dolorum reprehenderit error! Doloribus est illo
              eius saepe.
            </p>
          </div>
        </div>
        <div className="flex justify-between gap-5 w-full md:w-1/2">
          <div className="flex flex-col justify-center items-start">
            <img
              src="https://images.pexels.com/photos/753639/pexels-photo-753639.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="/"
              className="rounded-full w-full h-[320px] object-cover mb-4"
            />
            <h6 className="font-bold mb-2  ">Activities</h6>
            <h1 className="font-bold text-2xl mb-2">
              10 best places to visit in Europe
            </h1>
            <p className="mb-5">Dec 4,2023. 7 min read</p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              voluptates nostrum dolorum reprehenderit error! Doloribus est illo
              eius saepe.
            </p>
          </div>
          <div className="flex flex-col justify-center items-start">
            <img
              src="https://images.pexels.com/photos/14436964/pexels-photo-14436964.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="/"
              className="rounded-full w-[400px] h-[320px] object-cover mb-4"
            />
            <h6 className="font-bold mb-2">Campaigns</h6>
            <h1 className="font-bold text-2xl mb-2">
              Why waterfalls are important?
            </h1>
            <p className="mb-5">Dec 4,2023. 7 min read</p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
              voluptates nostrum dolorum reprehenderit error! Doloribus est illo
              eius saepe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Explore;
