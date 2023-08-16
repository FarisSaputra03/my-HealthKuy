import React from "react";
import Image from "next/image";
export default function List() {
  return (
    <div className="flex ml-40">
      <div className=" grid grid-cols-2 gap-4 place-content-stretch w-96">
        <div>
          <Image width={300} height={300} src="/img/gagah.jpg" alt="" />
        </div>
        <div>
          <Image width={300} height={300} src="/img/catat.jpg" alt="" />
        </div>
        <div>
          <Image width={300} height={300} src="/img/siap.jpg" alt="" />
        </div>
        <div>
          <Image width={300} height={300} src="/img/biasa.jpg" alt="" />
        </div>
      </div>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-blue-500 font-medium tracking-widest">
          Doctor Specialist
        </h2>
        <h1 className="text-gray-900 text-3xl title-font font-bold mb-1">
          Our Experienced & Trusted Specialist
        </h1>
        <h1 className="text-gray-900 text-3xl title-font font-bold mb-1">
          Doctors Are Ready To Help Patiens
        </h1>
        <h2 className="text-sm title-font text-gray-500 font-medium tracking-widest">
          Lorem Ipsum is simply dummy text of the printing typesetting industry.
        </h2>
        <div className="grid grid-cols-2 gap-4 place-content-center pt-6">
          <div className="font-bold text-3xl">
            320+
            <p className="text-gray-500 text-sm font-normal">Pediatrician</p>
          </div>
          <div className="font-bold text-3xl">
            210+
            <p className="text-gray-500 text-sm font-normal">Obstetricians</p>
          </div>
          <div className="font-bold text-3xl">
            190+
            <p className="text-gray-500 text-sm font-normal">
              Experienced Nurse
            </p>
          </div>
          <div className="font-bold text-3xl">
            2.5K+
            <p className="text-gray-500 text-sm font-normal">Trusted Doctors</p>
          </div>
        </div>
        <div className="flex gap-10 mt-6">
          <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded-lg text-lg">
            Choose Specialist
          </button>
          <div>
            <button className="inline-flex text-blue-500 bg-white border-0 py-2 px-6 focus:outline-none hover:bg-white rounded-lg text-lg">
              View All Specialist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
