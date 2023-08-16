import React from "react";
import Image from "next/image";
export default function Viwers() {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-blue-500 font-medium tracking-widest">
              What They Say About Us
            </h2>
            <h1 className="text-gray-900 text-2xl title-font font-bold mb-4">
              Happy Patients Tell Us Something
            </h1>
            <div className="flex flex-wrap mt-6">
              <div className="grid pb-3 md:grid-rows-1 lg:grid-cols-1">
                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                      <Image width={54} height={58} src="/img/men.jpg" alt="" />
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                      Chamber Diff
                    </h2>
                    <div className="pl-20">
                      <svg
                        width="140"
                        height="28"
                        viewBox="0 0 140 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M13.0489 2.92705C13.3483 2.00574 14.6517 2.00574 14.9511 2.92705L16.9187 8.98278C17.0526 9.3948 17.4365 9.67376 17.8697 9.67376H24.2371C25.2058 9.67376 25.6086 10.9134 24.8249 11.4828L19.6736 15.2254C19.3231 15.4801 19.1764 15.9314 19.3103 16.3435L21.2779 22.3992C21.5773 23.3205 20.5228 24.0866 19.7391 23.5172L14.5878 19.7746C14.2373 19.5199 13.7627 19.5199 13.4122 19.7746L8.2609 23.5172C7.47719 24.0866 6.42271 23.3205 6.72206 22.3992L8.68969 16.3435C8.82356 15.9314 8.6769 15.4801 8.32642 15.2254L3.17511 11.4828C2.39139 10.9134 2.79417 9.67376 3.76289 9.67376H10.1303C10.5635 9.67376 10.9474 9.3948 11.0813 8.98278L13.0489 2.92705Z"
                          fill="#FF7A00"
                        />
                        <path
                          d="M41.0489 2.92705C41.3483 2.00574 42.6517 2.00574 42.9511 2.92705L44.9187 8.98278C45.0526 9.3948 45.4365 9.67376 45.8697 9.67376H52.2371C53.2058 9.67376 53.6086 10.9134 52.8249 11.4828L47.6736 15.2254C47.3231 15.4801 47.1764 15.9314 47.3103 16.3435L49.2779 22.3992C49.5773 23.3205 48.5228 24.0866 47.7391 23.5172L42.5878 19.7746C42.2373 19.5199 41.7627 19.5199 41.4122 19.7746L36.2609 23.5172C35.4772 24.0866 34.4227 23.3205 34.7221 22.3992L36.6897 16.3435C36.8236 15.9314 36.6769 15.4801 36.3264 15.2254L31.1751 11.4828C30.3914 10.9134 30.7942 9.67376 31.7629 9.67376H38.1303C38.5635 9.67376 38.9474 9.3948 39.0813 8.98278L41.0489 2.92705Z"
                          fill="#FF7A00"
                        />
                        <path
                          d="M69.0489 2.92705C69.3483 2.00574 70.6517 2.00574 70.9511 2.92705L72.9187 8.98278C73.0526 9.3948 73.4365 9.67376 73.8697 9.67376H80.2371C81.2058 9.67376 81.6086 10.9134 80.8249 11.4828L75.6736 15.2254C75.3231 15.4801 75.1764 15.9314 75.3103 16.3435L77.2779 22.3992C77.5773 23.3205 76.5228 24.0866 75.7391 23.5172L70.5878 19.7746C70.2373 19.5199 69.7627 19.5199 69.4122 19.7746L64.2609 23.5172C63.4772 24.0866 62.4227 23.3205 62.7221 22.3992L64.6897 16.3435C64.8236 15.9314 64.6769 15.4801 64.3264 15.2254L59.1751 11.4828C58.3914 10.9134 58.7942 9.67376 59.7629 9.67376H66.1303C66.5635 9.67376 66.9474 9.3948 67.0813 8.98278L69.0489 2.92705Z"
                          fill="#FF7A00"
                        />
                        <path
                          d="M97.0489 2.92705C97.3483 2.00574 98.6517 2.00574 98.9511 2.92705L100.919 8.98278C101.053 9.3948 101.437 9.67376 101.87 9.67376H108.237C109.206 9.67376 109.609 10.9134 108.825 11.4828L103.674 15.2254C103.323 15.4801 103.176 15.9314 103.31 16.3435L105.278 22.3992C105.577 23.3205 104.523 24.0866 103.739 23.5172L98.5878 19.7746C98.2373 19.5199 97.7627 19.5199 97.4122 19.7746L92.2609 23.5172C91.4772 24.0866 90.4227 23.3205 90.7221 22.3992L92.6897 16.3435C92.8236 15.9314 92.6769 15.4801 92.3264 15.2254L87.1751 11.4828C86.3914 10.9134 86.7942 9.67376 87.7629 9.67376H94.1303C94.5635 9.67376 94.9474 9.3948 95.0813 8.98278L97.0489 2.92705Z"
                          fill="#FF7A00"
                        />
                        <path
                          d="M125.049 2.92705C125.348 2.00574 126.652 2.00574 126.951 2.92705L128.919 8.98278C129.053 9.3948 129.437 9.67376 129.87 9.67376H136.237C137.206 9.67376 137.609 10.9134 136.825 11.4828L131.674 15.2254C131.323 15.4801 131.176 15.9314 131.31 16.3435L133.278 22.3992C133.577 23.3205 132.523 24.0866 131.739 23.5172L126.588 19.7746C126.237 19.5199 125.763 19.5199 125.412 19.7746L120.261 23.5172C119.477 24.0866 118.423 23.3205 118.722 22.3992L120.69 16.3435C120.824 15.9314 120.677 15.4801 120.326 15.2254L115.175 11.4828C114.391 10.9134 114.794 9.67376 115.763 9.67376H122.13C122.563 9.67376 122.947 9.3948 123.081 8.98278L125.049 2.92705Z"
                          fill="#FF7A00"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">
                      “Lorem Ipsum is simply dummy text the printing industry.
                      Lorem Ipsum has been the industrys standard dummy text
                      ever since the 1500s”
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap mt-6">
              <div className="grid pb-3 md:grid-rows-1 lg:grid-cols-1">
                <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
                  <div className="flex items-center mb-3">
                    <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                      <Image
                        width={54}
                        height={58}
                        src="/img/woman.jpg"
                        alt=""
                      />
                    </div>
                    <h2 className="text-gray-900 text-lg title-font font-medium">
                      Reyna Botfrag
                    </h2>
                    <div className="pl-20">
                      <svg
                        width="140"
                        height="28"
                        viewBox="0 0 140 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M13.0489 2.92705C13.3483 2.00574 14.6517 2.00574 14.9511 2.92705L16.9187 8.98278C17.0526 9.3948 17.4365 9.67376 17.8697 9.67376H24.2371C25.2058 9.67376 25.6086 10.9134 24.8249 11.4828L19.6736 15.2254C19.3231 15.4801 19.1764 15.9314 19.3103 16.3435L21.2779 22.3992C21.5773 23.3205 20.5228 24.0866 19.7391 23.5172L14.5878 19.7746C14.2373 19.5199 13.7627 19.5199 13.4122 19.7746L8.2609 23.5172C7.47719 24.0866 6.42271 23.3205 6.72206 22.3992L8.68969 16.3435C8.82356 15.9314 8.6769 15.4801 8.32642 15.2254L3.17511 11.4828C2.39139 10.9134 2.79417 9.67376 3.76289 9.67376H10.1303C10.5635 9.67376 10.9474 9.3948 11.0813 8.98278L13.0489 2.92705Z"
                          fill="#FF7A00"
                        />
                        <path
                          d="M41.0489 2.92705C41.3483 2.00574 42.6517 2.00574 42.9511 2.92705L44.9187 8.98278C45.0526 9.3948 45.4365 9.67376 45.8697 9.67376H52.2371C53.2058 9.67376 53.6086 10.9134 52.8249 11.4828L47.6736 15.2254C47.3231 15.4801 47.1764 15.9314 47.3103 16.3435L49.2779 22.3992C49.5773 23.3205 48.5228 24.0866 47.7391 23.5172L42.5878 19.7746C42.2373 19.5199 41.7627 19.5199 41.4122 19.7746L36.2609 23.5172C35.4772 24.0866 34.4227 23.3205 34.7221 22.3992L36.6897 16.3435C36.8236 15.9314 36.6769 15.4801 36.3264 15.2254L31.1751 11.4828C30.3914 10.9134 30.7942 9.67376 31.7629 9.67376H38.1303C38.5635 9.67376 38.9474 9.3948 39.0813 8.98278L41.0489 2.92705Z"
                          fill="#FF7A00"
                        />
                        <path
                          d="M69.0489 2.92705C69.3483 2.00574 70.6517 2.00574 70.9511 2.92705L72.9187 8.98278C73.0526 9.3948 73.4365 9.67376 73.8697 9.67376H80.2371C81.2058 9.67376 81.6086 10.9134 80.8249 11.4828L75.6736 15.2254C75.3231 15.4801 75.1764 15.9314 75.3103 16.3435L77.2779 22.3992C77.5773 23.3205 76.5228 24.0866 75.7391 23.5172L70.5878 19.7746C70.2373 19.5199 69.7627 19.5199 69.4122 19.7746L64.2609 23.5172C63.4772 24.0866 62.4227 23.3205 62.7221 22.3992L64.6897 16.3435C64.8236 15.9314 64.6769 15.4801 64.3264 15.2254L59.1751 11.4828C58.3914 10.9134 58.7942 9.67376 59.7629 9.67376H66.1303C66.5635 9.67376 66.9474 9.3948 67.0813 8.98278L69.0489 2.92705Z"
                          fill="#FF7A00"
                        />
                        <path
                          d="M97.0489 2.92705C97.3483 2.00574 98.6517 2.00574 98.9511 2.92705L100.919 8.98278C101.053 9.3948 101.437 9.67376 101.87 9.67376H108.237C109.206 9.67376 109.609 10.9134 108.825 11.4828L103.674 15.2254C103.323 15.4801 103.176 15.9314 103.31 16.3435L105.278 22.3992C105.577 23.3205 104.523 24.0866 103.739 23.5172L98.5878 19.7746C98.2373 19.5199 97.7627 19.5199 97.4122 19.7746L92.2609 23.5172C91.4772 24.0866 90.4227 23.3205 90.7221 22.3992L92.6897 16.3435C92.8236 15.9314 92.6769 15.4801 92.3264 15.2254L87.1751 11.4828C86.3914 10.9134 86.7942 9.67376 87.7629 9.67376H94.1303C94.5635 9.67376 94.9474 9.3948 95.0813 8.98278L97.0489 2.92705Z"
                          fill="#FF7A00"
                        />
                        <path
                          d="M125.049 2.92705C125.348 2.00574 126.652 2.00574 126.951 2.92705L128.919 8.98278C129.053 9.3948 129.437 9.67376 129.87 9.67376H136.237C137.206 9.67376 137.609 10.9134 136.825 11.4828L131.674 15.2254C131.323 15.4801 131.176 15.9314 131.31 16.3435L133.278 22.3992C133.577 23.3205 132.523 24.0866 131.739 23.5172L126.588 19.7746C126.237 19.5199 125.763 19.5199 125.412 19.7746L120.261 23.5172C119.477 24.0866 118.423 23.3205 118.722 22.3992L120.69 16.3435C120.824 15.9314 120.677 15.4801 120.326 15.2254L115.175 11.4828C114.391 10.9134 114.794 9.67376 115.763 9.67376H122.13C122.563 9.67376 122.947 9.3948 123.081 8.98278L125.049 2.92705Z"
                          fill="#FF7A00"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <p className="leading-relaxed text-base">
                      “Lorem Ipsum is simply dummy text the printing industry.
                      Lorem Ipsum has been the industrys standard dummy text
                      ever since the 1500s”
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Image width={490} height={900} src="/img/catat.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
