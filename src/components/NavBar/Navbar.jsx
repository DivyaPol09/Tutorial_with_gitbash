import React from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";
import "flowbite";
const NavBar = () => {
  return (
    <div>
      <nav class="bg-white border-gray-200 dark:bg-gray-900 border-b-2">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link to="/">
            <a href="#" class="flex items-center space-x-3 rtl:space-x-reverse">
              <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Trendy Trunk
              </span>
            </a>
          </Link>
          <div class="flex md:order-2">
            <button
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              class="md:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
            >
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
              <span class="sr-only">Search</span>
            </button>
            <div class="relative hidden md:block ">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0"
                  />
                </svg>
                <span class="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                class="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>

            <div className="flex items-center justify-evenly cursor-pointer">
              <Link to="profile">
                <div className="flex flex-col justify-center items-center ml-10">
                  <svg
                    class="w-6 h-6 text-gray-800 dark:text-white  "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 18"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M7 8a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm-2 3h4a4 4 0 0 1 4 4v2H1v-2a4 4 0 0 1 4-4Z"
                    />
                  </svg>
                  <span className="text-center text-xs">Profile</span>
                </div>
              </Link>

              <Link to="wishlist">
                <div className="ml-5 flex flex-col justify-center items-center">
                  <svg
                    class="w-6 h-6 text-gray-800 dark:text-white  "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 21 19"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M11 4C5.5-1.5-1.5 5.5 4 11l7 7 7-7c5.458-5.458-1.542-12.458-7-7Z"
                    />
                  </svg>
                  <span className="text-center text-xs">Wishlist</span>
                </div>
              </Link>

              <Link to="cartpage">
                <div className="ml-5 max-md:mr-10 flex flex-col justify-center items-center">
                  <svg
                    class="w-6 h-6 text-gray-800 dark:text-white  "
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 18 20"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 9V4a3 3 0 0 0-6 0v5m9.92 10H2.08a1 1 0 0 1-1-1.077L2 6h14l.917 11.923A1 1 0 0 1 15.92 19Z"
                    />
                  </svg>
                  <span className="text-xs text-center">Bag</span>
                </div>
              </Link>
            </div>

            <button
              data-collapse-toggle="navbar-search"
              type="button"
              class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-search"
              aria-expanded="false"
            >
              <span class="sr-only">Open main menu</span>
              <svg
                class="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-search"
          >
            <div class="relative mt-3 md:hidden">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                id="search-navbar"
                class="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search..."
              />
            </div>
            <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {/* ====================== Men Dropdown Started ===================== */}

              <li>
                <Link to="mens">
                  <button
                    id="dropdownDelayButton"
                    data-dropdown-toggle="dropdownDelay"
                    data-dropdown-delay="300"
                    data-dropdown-trigger="hover"
                    class="inline-flex items-center md:hover:text-blue-700"
                    type="button"
                  >
                    Men
                    <svg
                      class="w-2.5 h-2.5 ms-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                </Link>

                <div
                  id="dropdownDelay"
                  class="z-10 flex hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-64 dark:bg-gray-700"
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDelayButton"
                  >
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-bold text-[#ee5f77]"
                      >
                        Topwear
                      </a>
                    </li>
                    <li>
                      <Link to="t-shirts">
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          T-Shirt
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="shirts">
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Shirt
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="men_sweatshirts">
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Sweatshirts
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="jackets">
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Jackets
                        </a>
                      </Link>
                    </li>
                  </ul>

                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownDelayButton"
                  >
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-bold text-[#ee5f77]"
                      >
                        Bottomwear
                      </a>
                    </li>
                    <li>
                      <Link to="mens_jeans">
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Jeans
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="cargos">
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Cargos
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="mens_shorts">
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Shorts
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="mens_trackpants">
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Trackpants & Joggers
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              {/*============================ Womens Dropdown Started from ========================== */}

              <li>
                <Link to="womens">
                  <button
                    id="dropdownHoverButton"
                    data-dropdown-toggle="dropdownHover"
                    data-dropdown-trigger="hover"
                    class=" text-center inline-flex items-center "
                    type="button"
                  >
                    Women
                    <svg
                      class="w-2.5 h-2.5 ms-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                </Link>

                <div
                  id="dropdownHover"
                  class="z-10 flex hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-64 dark:bg-gray-700"
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownHoverButton"
                  >
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-bold text-[#ee5f77]"
                      >
                        Topwear
                      </a>
                    </li>
                    <li>
                      <Link to="womens_kurti">
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Kurti
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="womens_tanktops">
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Tank-Tops
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="womens_tshirts">
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          T-shirts
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="womens_jackets">
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Jackets
                        </a>
                      </Link>
                    </li>
                  </ul>

                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownHoverButton"
                  >
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-bold text-[#ee5f77]"
                      >
                        Bottomwear
                      </a>
                    </li>
                    <li>
                      <Link to="womens_jeans">
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Jeans
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="womens_skirts">
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Skirts
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="womens_trousers">
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Trousers & Capris
                        </a>
                      </Link>
                    </li>

                    <li>
                      <Link to="womens_shorts">
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Shorts
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>

              {/* ======================= Juniors Dropdown Started ======================= */}

              <li>
                <Link to="juniors">
                  <button
                    id="dropdownDefaultButton"
                    data-dropdown-toggle="dropdown"
                    data-dropdown-trigger="hover"
                    class="text-center inline-flex items-center"
                    type="button"
                  >
                    Juniors{" "}
                    <svg
                      class="w-2.5 h-2.5 ms-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                </Link>

                <div
                  id="dropdown"
                  class="z-10 flex hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-64 dark:bg-gray-700"
                >
                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownHoverButton"
                  >
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-bold text-[#ee5f77]"
                      >
                        Boys
                      </a>
                    </li>
                    <li>
                      <Link to="boys_tshirts">
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          T-Shirts
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="boys_shirts">
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Shirts
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="boys_shorts">
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Shorts
                        </a>
                      </Link>
                    </li>

                    <li>
                      <Link to="boys_jeans">
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Jeans
                        </a>
                      </Link>
                    </li>
                  </ul>

                  <ul
                    class="py-2 text-sm text-gray-700 dark:text-gray-200"
                    aria-labelledby="dropdownHoverButton"
                  >
                    <li>
                      <a
                        href="#"
                        class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white font-bold text-[#ee5f77]"
                      >
                        Girls
                      </a>
                    </li>
                    <li>
                      <Link to="girls_dress">
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Dresses
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="girls_tops">
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Tops & T-Shirts
                        </a>
                      </Link>
                    </li>
                    <li>
                      <Link to="girls_skirts">
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Skirts
                        </a>
                      </Link>
                    </li>

                    <li>
                      <Link to="girls_jeans">
                        <a
                          href="#"
                          class="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          Jeans
                        </a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
