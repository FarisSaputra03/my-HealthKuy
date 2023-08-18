import React from "react";
import Image from "next/image";
export default function Artikel() {
  const listArtikel = [
    {
      img: "/img/pusing.jpg",
      days: "• 2 Min Read",
      title: " How To Reduce Dizziness In The Back Of The Head",
      img2: "/img/siap.jpg",
      name: "Dr. Bambang",
    },
    {
      img: "/img/gatal.png",
      days: "• 3 Min Read",
      title: "How To Take Good Care Of Your Scalp Hair & Strengthen",
      img2: "/img/catat.jpg",
      name: "Dr. Annie",
    },
    {
      img: "/img/pegal.png",
      days: "• 6 Min Read",
      title: "How To Keep Your Baby's Womb Healthy",
      img2: "/img/catat.jpg",
      name: "Dr. Annie",
    },
    {
      img: "/img/mata jeruk.png",
      days: "• 2 Min Read",
      title: "How To Refresh And Brighten Your Face For 7 Days",
      img2: "/img/gagah.jpg",
      name: "Dr. Annie",
    },
  ];
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap w-full mb-20">
          <div className="lg:w-1/2 mb-6 lg:mb-0">
            <h2 className="text-normal text-blue-500">Lastest Articles</h2>
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-gray-900">
              Useful Article For You To Read
            </h1>
          </div>
          <div className="lg:w-1/2 w-full grid justify-end leading-relaxed">
            <button className="mx-auto mt-6 text-blue-500 bg-white border-2 border-cyan-500  py-2 px-5 focus:outline-none hover:bg-white rounded-lg">
              See More Article
            </button>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {listArtikel.map((data: any, index) => (
            <div key={index + 1} className="xl:w-1/4 md:w-1/2 p-5">
              <div className="h-full border-2 group-hover:scale-110  card hover:shadow border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                <div className="h-40 rounded w-full object-cover object-center mb-6">
                  <Image width={720} height={400} src={data.img} alt="" />
                </div>
                <div className="p-5">
                  <div className="flex pt-2">
                    <h3 className="tracking-widest text-blue-500 text-xs font-medium title-font">
                      Healthy Living
                    </h3>
                    <p className="font-normal text-sm">{data.days}</p>
                  </div>
                  <h2 className="text-sm text-gray-900 font-bold title-font mb-4">
                    {data.title}
                  </h2>
                  <div className="flex gap-5">
                    <Image width={24} height={24} src={data.img2} alt="" />
                    <p>{data.name}</p>
                  </div>
                  <div className="pt-7 pl-5 w-auto">
                    <button className="w-auto text-blue-500 bg-blue-100 border-0 py-2 px-16 focus:outline-none rounded-lg text-sm">
                      Read Now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
