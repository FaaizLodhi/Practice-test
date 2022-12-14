import React from "react";

export default function Footer() {
  return (
    <footer className="relative bg-slate-500 pt-8 pb-6">
      <div
        className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
        style={{ height: "80px" }}
      >
        
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl font-semibold">
              Let's keep in touch!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-white">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6">
              <button
                className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex fab fa-twitter"></i>
              </button>
              <button
                className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex fab fa-facebook-square"></i>
              </button>
              <button
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex fab fa-dribbble"></i>
              </button>
              <button
                className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                type="button"
              >
                <i className="flex fab fa-github"></i>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="#">About Us
                    </a>
                  </li>
                  <li>
                    <a className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="#">Blog
                    </a>
                  </li>
                  <li>
                    <a className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="#">Github
                    </a>
                  </li>
                  <li>
                    <a className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="#">Free Products
                    </a>
                  </li>

                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                    href="#">MIT License
                  </a>
                  </li>
                  <li>
                    <a className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="#">Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="#">Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a className="text-white hover:text-gray-900 font-semibold block pb-2 text-sm"
                        href="#">Contact Us
                    </a>
                  </li>
                </ul>

              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-400" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-sm text-gray-600 font-semibold py-1">
              Copyright ?? {new Date().getFullYear()}{" "}React App By Faaiz Lodhi{" "}
              <a
                href="#"
                className="text-gray-600 hover:text-gray-900"
              >
                Creative Tim
              </a>.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
