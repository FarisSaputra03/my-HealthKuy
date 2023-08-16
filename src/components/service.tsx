import React from "react";
import Image from "next/image";
export default function Service() {
  const listService = [
    {
      svg: (
        <svg
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect width="52" height="52" rx="12" fill="#E8F1FC" />
          <path
            d="M47 39.0001C47 37.2929 46.6637 35.6025 46.0104 34.0252C45.3571 32.448 44.3995 31.0149 43.1924 29.8077C41.9852 28.6006 40.5521 27.643 38.9749 26.9897C37.3977 26.3364 35.7072 28.0001 34 28.0001C32.2928 28.0001 30.6023 26.3364 29.0251 26.9897C27.4479 27.643 26.0148 28.6006 24.8076 29.8077C23.6004 31.0149 22.6429 32.448 21.9896 34.0252C21.3363 35.6025 21 37.2929 21 39.0001L34 39.0001H47Z"
            fill="#0E67DD"
            stroke="#E8F1FC"
            stroke-width="2"
          />
          <circle cx="34" cy="18" r="7" fill="#0E67DD" />
          <circle cx="19" cy="20" r="7" fill="#0E67DD" />
          <path
            d="M32 41.0001C32 39.2929 31.6637 37.6025 31.0104 36.0252C30.3571 34.448 29.3995 33.0149 28.1924 31.8077C26.9852 30.6006 25.5521 29.643 23.9749 28.9897C22.3977 28.3364 20.7072 30.0001 19 30.0001C17.2928 30.0001 15.6023 28.3364 14.0251 28.9897C12.4479 29.643 11.0148 30.6006 9.80761 31.8077C8.60045 33.0149 7.64288 34.448 6.98957 36.0252C6.33625 37.6025 6 39.2929 6 41.0001L19 41.0001H32Z"
            fill="#0E67DD"
            stroke="#E8F1FC"
            stroke-width="2"
          />
        </svg>
      ),
      title: "No Need To Queue",
      description:
        "Lorem Ipsum is simply dummy text of the printing typesetting industry.",
    },
    {
      svg: (
        <svg
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect width="52" height="52" rx="12" fill="#E8F1FC" />
          <circle cx="31" cy="27" r="12" stroke="#0E67DD" stroke-width="2" />
          <path
            d="M39.2144 30.6774C38.3637 32.5778 36.8803 34.1245 35.017 35.0538C33.1537 35.9832 31.0258 36.2377 28.9959 35.774C26.9659 35.3104 25.1596 34.1572 23.8846 32.511C22.6096 30.8648 21.9448 28.8275 22.0036 26.7461C22.0623 24.6647 22.8409 22.6681 24.2067 21.0965C25.5726 19.5248 27.4411 18.4754 29.4939 18.1269C31.5467 17.7785 33.6569 18.1526 35.4648 19.1856C37.2727 20.2185 38.6665 21.8464 39.4088 23.7918L31 27L39.2144 30.6774Z"
            fill="#0E67DD"
          />
          <rect
            x="22"
            y="15"
            width="2"
            height="3"
            rx="1"
            transform="rotate(-30 22 15)"
            fill="#0E67DD"
          />
          <rect
            width="2"
            height="3"
            rx="1"
            transform="matrix(-0.866025 -0.5 -0.5 0.866025 40.2319 15)"
            fill="#0E67DD"
          />
          <path
            d="M31 15V12H29H33"
            stroke="#0E67DD"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18 20H15"
            stroke="#0E67DD"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18 34H15"
            stroke="#0E67DD"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.5 23H10"
            stroke="#0E67DD"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M16.5 31H10"
            stroke="#0E67DD"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M15 27H7"
            stroke="#0E67DD"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
      title: "Fast And Easy Process",
      description:
        "Lorem Ipsum is simply dummy text of the printing typesetting industry.",
    },
    {
      svg: (
        <svg
          width="52"
          height="52"
          viewBox="0 0 52 52"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect width="52" height="52" rx="12" fill="#E8F1FC" />
          <path
            d="M33.976 30.472C33.976 31.6453 33.6667 32.7333 33.048 33.736C32.4507 34.7173 31.5547 35.528 30.36 36.168C29.1867 36.7867 27.7893 37.128 26.168 37.192V39.784H24.12V37.16C21.8587 36.968 20.0347 36.296 18.648 35.144C17.2613 33.9707 16.5253 32.3813 16.44 30.376H22.264C22.392 31.656 23.0107 32.4773 24.12 32.84V27.784C22.456 27.3573 21.1227 26.9413 20.12 26.536C19.1387 26.1307 18.2747 25.48 17.528 24.584C16.7813 23.688 16.408 22.4613 16.408 20.904C16.408 18.9627 17.1227 17.4053 18.552 16.232C20.0027 15.0587 21.8587 14.3973 24.12 14.248V11.656H26.168V14.248C28.408 14.4187 30.1787 15.0693 31.48 16.2C32.7813 17.3307 33.5067 18.8987 33.656 20.904H27.8C27.672 19.752 27.128 19.0053 26.168 18.664V23.624C27.9387 24.1147 29.304 24.552 30.264 24.936C31.224 25.32 32.0773 25.96 32.824 26.856C33.592 27.7307 33.976 28.936 33.976 30.472ZM22.2 20.648C22.2 21.1813 22.36 21.6293 22.68 21.992C23.0213 22.3547 23.5013 22.6747 24.12 22.952V18.504C23.5227 18.6107 23.0533 18.8453 22.712 19.208C22.3707 19.5493 22.2 20.0293 22.2 20.648ZM26.168 32.936C26.808 32.8293 27.3093 32.5733 27.672 32.168C28.056 31.7627 28.248 31.2613 28.248 30.664C28.248 30.1093 28.0667 29.6613 27.704 29.32C27.3627 28.9573 26.8507 28.648 26.168 28.392V32.936Z"
            fill="#0E67DD"
          />
        </svg>
      ),
      title: "Price Is Very Affordable ",
      description:
        "Lorem Ipsum is simply dummy text of the printing typesetting industry.",
    },
  ];
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-1 py-36 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <Image width={460} height={500} src="/img/ok.jpg" alt="" />
          <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
            <h2 className="text-sm title-font text-blue-500 tracking-widest">
              Our Extra Services
            </h2>
            <h1 className="text-gray-900 text-3xl title-font font-bold mb-1">
              3 reasons why you should choose our services
            </h1>
            <div className="flex flex-wrap mt-6">
              {listService.map((data: any, index) => (
                <div
                  key={index + 1}
                  className="grid pb-3 md:grid-rows-1 lg:grid-cols-1">
                  <div className="border border-gray-200 p-4 rounded-lg">
                    <div className=" flex gap-5">
                      <div>{data.svg}</div>
                      <div>
                        <h2 className="text-lg text-gray-900 font-bold title-font mb-2">
                          {data.title}
                        </h2>
                        <p className="leading-relaxed text-base">
                          {data.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
