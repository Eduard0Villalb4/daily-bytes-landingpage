const Landing = () => {

  return (
    <div className="overflow-y-scroll overflow-x-hidden h-full bg-[#1d1f27]">
      <div className="block absolute -left-1 -top-48 -z-0">
      </div>
      <header className="p-4 lg:py-2 lg:px-0 container mx-auto grid lg:flex lg:justify-between grid-cols-2 text-slate-700 z-20">
        <nav className="flex items-center">
          <div className='z-20 flex flex-row items-center justify-center'>      
            <img className="h-8 mr-2" src="icon.png" alt="" />    
            <h2 className="text-white font-semibold">Daily Bytes</h2>
          </div>
        </nav>
        <div className=" lg:flex">
          <a
            className="px-4 py-3 bg-[#008cba]  hover:bg-[#008cba] hover:cursor-pointer text-white font-medium rounded-md mx-1 z-20"
            href="mailto:eduard0.villalb4.com"
          >
            Contact support
          </a>
        </div>
      </header>
      <section
        id="aboutSection"
        className="py-8 px-4 md:px-8 lg:py-16 2xl:py-40 2xl:px-60 mx-auto grid grid-cols-1 gap-8 lg:grid-cols-12 relative"
      >
        <div className="col-span-6 xl:place-self-center mb-8 mt-8 xl:mt-0 lg:mb-0 flex flex-col items-center justify-center">
          <div>
            <h1 className="text-white font-semibold">Daily Bytes</h1>
          </div>

          <p className="my-8 max-w-4xl mx-auto lg:mx-0 text-center opacity-70">
          Daily Bytes simplifies habit tracking with its unique approach—a minimalist annual calendar represented in cubes. Keep your habits organized and visualize your progress effortlessly with Daily Bytes.
          </p>
          <div className="flex flex-col md:flex-row md:space-x-4 w-full items-center justify-center">
            <a
              target="_blank"
              rel="noreferrer"
              className="w-fit lg:w-max px-4 py-3 bg-[#008cba]  hover:bg-[#008cba] hover:cursor-pointer text-white font-medium rounded-md lg:mr-8 mb-4 lg:mb-0"
            >
              Download App
            </a>
          </div>
        </div>
        <div className="col-span-6 relative">
          <img
            className=" xl:block absolute z-0 right-[9px] top-[13px]"
            src="./assets/bg-intro-desktop.svg"
          />
          <picture>
            <source srcSet="/assets/images/bg-intro-desktop.svg" type="image/png" />
          </picture>
          <div className='relative flex'>
            <div className='flex-1'>
              <div className=" relative aspect-[366/729] mx-auto max-w-[220px]">
                <div className="shadow-xl absolute inset-y-[calc(1/729*100%)] right-[calc(5/729*100%)] left-[calc(7/729*100%)] rounded-[calc(58/366*100%)/calc(58/729*100%)]"></div>
                <div className="absolute top-[calc(23/729*100%)] left-[calc(23/366*100%)] grid h-[calc(686/729*100%)] w-[calc(318/366*100%)] transform grid-cols-1 overflow-hidden bg-[#000]  ">
                  <div className="flex flex-col">
                    {/* <!-- content here --> */}
                    <div className="w-full h-full relative">
                      <img className='w-full h-full relative pt-4' src="./assets/Screenshoot-1.png" alt="" />
                    </div>
                    <div className="hidden bg-[black]  w-full h-full">
                      <div className="flex items-center">
                        <img
                          className="w-8 mt-5 mx-auto text-white"
                          src="./assets/menu.svg"
                          alt="logo"
                        />
                      
                        <img
                          className="w-8 mt-5 mx-auto text-white"
                          src="./assets/logout.svg"
                          alt="logo"
                        />
                      </div>

                      <div className="rounded-2xl bg-slate-50 mt-4 h-full p-4">
                      <div className="flex justify-between p-1 mb-4 border-b border-slate-300 px-2 pt-4 pb-4">
                          <p className="text-sm font-medium">Business Users</p>
                          <img className="w-5 h-5" src="./assets/close.svg" alt="logo" />
                        </div>
                        {/* <!-- card --> */}
                        <div className="border bg-slate-300 shadow rounded-md p-4 max-w-sm w-full mx-auto mb-4">
                          <div className="animate-pulse flex space-x-4">
                            <div className="rounded-full bg-slate-700 h-4 w-4"></div>
                            <div className="flex-1 space-y-6 py-1">
                              <div className="h-2 bg-slate-700 rounded"></div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- end card -->
                        <!-- card --> */}
                        <div className="border bg-slate-300 shadow rounded-md p-4 max-w-sm w-full mx-auto mb-4">
                          <div className="animate-pulse flex space-x-4">
                            <div className="rounded-full bg-slate-700 h-4 w-4"></div>
                            <div className="flex-1 space-y-6 py-1">
                              <div className="h-2 bg-slate-700 rounded"></div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- end card -->
                        <!-- card --> */}
                        <div className="border bg-slate-300 shadow rounded-md p-4 max-w-sm w-full mx-auto mb-4">
                          <div className="animate-pulse flex space-x-4">
                            <div className="rounded-full bg-slate-700 h-4 w-4"></div>
                            <div className="flex-1 space-y-6 py-1">
                              <div className="h-2 bg-slate-700 rounded"></div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- end card -->
                        <!-- card --> */}
                        <div className="border bg-slate-300 shadow rounded-md p-4 max-w-sm w-full mx-auto mb-4">
                          <div className="animate-pulse flex space-x-4">
                            <div className="rounded-full bg-slate-700 h-4 w-4"></div>
                            <div className="flex-1 space-y-6 py-1">
                              <div className="h-2 bg-slate-700 rounded"></div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- end card -->
                        <!-- card --> */}
                        <div className="border bg-slate-300 shadow rounded-md p-4 max-w-sm w-full mx-auto mb-4">
                          <div className="animate-pulse flex space-x-4">
                            <div className="rounded-full bg-slate-700 h-4 w-4"></div>
                            <div className="flex-1 space-y-6 py-1">
                              <div className="h-2 bg-slate-700 rounded"></div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- end card --> */}
                      </div>
                    </div>
                  </div>
                </div>
                <svg
                  viewBox="0 0 366 729"
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 h-full w-full fill-gray-500"
                >
                  <path
                    fill="#F2F2F2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M300.092 1c41.22 0 63.223 21.99 63.223 63.213V184.94c-.173.184-.329.476-.458.851.188-.282.404-.547.647-.791.844-.073 2.496.257 2.496 2.157V268.719c-.406 2.023-2.605 2.023-2.605 2.023a7.119 7.119 0 0 1-.08-.102v394.462c0 41.213-22.001 63.212-63.223 63.212h-95.074c-.881-.468-2.474-.795-4.323-.838l-33.704-.005-.049.001h-.231l-.141-.001c-2.028 0-3.798.339-4.745.843H66.751c-41.223 0-63.223-21.995-63.223-63.208V287.739c-.402-.024-2.165-.23-2.524-2.02v-.973A2.039 2.039 0 0 1 1 284.62v-47.611c0-.042.001-.084.004-.126v-.726c0-1.9 1.652-2.23 2.496-2.157l.028.028v-16.289c-.402-.024-2.165-.23-2.524-2.02v-.973A2.039 2.039 0 0 1 1 214.62v-47.611c0-.042.001-.084.004-.126v-.726c0-1.9 1.652-2.23 2.496-2.157l.028.028v-26.041a2.26 2.26 0 0 0 .093-.236l-.064-.01a3.337 3.337 0 0 1-.72-.12l-.166-.028A2 2 0 0 1 1 135.62v-24.611a2 2 0 0 1 1.671-1.973l.857-.143v-44.68C3.528 22.99 25.53 1 66.75 1h233.341ZM3.952 234.516a5.481 5.481 0 0 0-.229-.278c.082.071.159.163.228.278Zm89.99-206.304A4.213 4.213 0 0 0 89.727 24H56.864C38.714 24 24 38.708 24 56.852v618.296C24 693.292 38.714 708 56.864 708h250.272c18.15 0 32.864-14.708 32.864-32.852V56.852C340 38.708 325.286 24 307.136 24h-32.864a4.212 4.212 0 0 0-4.213 4.212v2.527c0 10.235-8.3 18.532-18.539 18.532H112.48c-10.239 0-18.539-8.297-18.539-18.532v-2.527Z"
                  ></path>
                  <rect x="154" y="29" width="56" height="5" rx="2.5" fill="black"></rect>
                </svg>
                <img
                  alt=""
                  src="./assets/phone-frame.svg"
                  width="366"
                  height="729"
                  decoding="async"
                  className="hidden pointer-events-none absolute inset-0 h-full w-full"
                />
              </div>
            </div>
            <div className='flex-1 pt-40'>
              <div className=" relative aspect-[366/729] mx-auto max-w-[220px]">
                <div className="shadow-xl absolute inset-y-[calc(1/729*100%)] right-[calc(5/729*100%)] left-[calc(7/729*100%)] rounded-[calc(58/366*100%)/calc(58/729*100%)]"></div>
                <div className="absolute top-[calc(23/729*100%)] left-[calc(23/366*100%)] grid h-[calc(686/729*100%)] w-[calc(318/366*100%)] transform grid-cols-1 overflow-hidden bg-[#000]">
                  <div className="flex flex-col">
                    {/* <!-- content here --> */}
                      <div className="w-full h-full">
                        <img className='w-full h-full relative pt-4' src="./assets/Screenshot-2.png" alt="" />
                      </div>
                    <div className="hidden bg-[black]  w-full h-full">
                      <div className="flex items-center">
                        <img
                          className="w-8 mt-5 mx-auto text-white"
                          src="./assets/menu.svg"
                          alt="logo"
                        />
                        <img
                          className="w-8 mt-5 mx-auto"
                          src="https://tailwindui.com/img/logos/mark.svg?color=white"
                          alt="logo"
                        />
                        <img
                          className="w-8 mt-5 mx-auto text-white"
                          src="./assets/logout.svg"
                          alt="logo"
                        />
                      </div>

                      <div className="rounded-2xl bg-slate-50 mt-4 h-full p-4">
                      <div className="flex justify-between p-1 mb-4 border-b border-slate-300 px-2 pt-4 pb-4">
                          <p className="text-sm font-medium">Business Users</p>
                          <img className="w-5 h-5" src="./assets/close.svg" alt="logo" />
                        </div>
                        {/* <!-- card --> */}
                        <div className="border bg-slate-300 shadow rounded-md p-4 max-w-sm w-full mx-auto mb-4">
                          <div className="animate-pulse flex space-x-4">
                            <div className="rounded-full bg-slate-700 h-4 w-4"></div>
                            <div className="flex-1 space-y-6 py-1">
                              <div className="h-2 bg-slate-700 rounded"></div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- end card -->
                        <!-- card --> */}
                        <div className="border bg-slate-300 shadow rounded-md p-4 max-w-sm w-full mx-auto mb-4">
                          <div className="animate-pulse flex space-x-4">
                            <div className="rounded-full bg-slate-700 h-4 w-4"></div>
                            <div className="flex-1 space-y-6 py-1">
                              <div className="h-2 bg-slate-700 rounded"></div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- end card -->
                        <!-- card --> */}
                        <div className="border bg-slate-300 shadow rounded-md p-4 max-w-sm w-full mx-auto mb-4">
                          <div className="animate-pulse flex space-x-4">
                            <div className="rounded-full bg-slate-700 h-4 w-4"></div>
                            <div className="flex-1 space-y-6 py-1">
                              <div className="h-2 bg-slate-700 rounded"></div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- end card -->
                        <!-- card --> */}
                        <div className="border bg-slate-300 shadow rounded-md p-4 max-w-sm w-full mx-auto mb-4">
                          <div className="animate-pulse flex space-x-4">
                            <div className="rounded-full bg-slate-700 h-4 w-4"></div>
                            <div className="flex-1 space-y-6 py-1">
                              <div className="h-2 bg-slate-700 rounded"></div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- end card -->
                        <!-- card --> */}
                        <div className="border bg-slate-300 shadow rounded-md p-4 max-w-sm w-full mx-auto mb-4">
                          <div className="animate-pulse flex space-x-4">
                            <div className="rounded-full bg-slate-700 h-4 w-4"></div>
                            <div className="flex-1 space-y-6 py-1">
                              <div className="h-2 bg-slate-700 rounded"></div>
                            </div>
                          </div>
                        </div>
                        {/* <!-- end card --> */}
                      </div>
                    </div>
                  </div>
                </div>
                <svg
                  viewBox="0 0 366 729"
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 h-full w-full fill-gray-500"
                >
                  <path
                    fill="#F2F2F2"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M300.092 1c41.22 0 63.223 21.99 63.223 63.213V184.94c-.173.184-.329.476-.458.851.188-.282.404-.547.647-.791.844-.073 2.496.257 2.496 2.157V268.719c-.406 2.023-2.605 2.023-2.605 2.023a7.119 7.119 0 0 1-.08-.102v394.462c0 41.213-22.001 63.212-63.223 63.212h-95.074c-.881-.468-2.474-.795-4.323-.838l-33.704-.005-.049.001h-.231l-.141-.001c-2.028 0-3.798.339-4.745.843H66.751c-41.223 0-63.223-21.995-63.223-63.208V287.739c-.402-.024-2.165-.23-2.524-2.02v-.973A2.039 2.039 0 0 1 1 284.62v-47.611c0-.042.001-.084.004-.126v-.726c0-1.9 1.652-2.23 2.496-2.157l.028.028v-16.289c-.402-.024-2.165-.23-2.524-2.02v-.973A2.039 2.039 0 0 1 1 214.62v-47.611c0-.042.001-.084.004-.126v-.726c0-1.9 1.652-2.23 2.496-2.157l.028.028v-26.041a2.26 2.26 0 0 0 .093-.236l-.064-.01a3.337 3.337 0 0 1-.72-.12l-.166-.028A2 2 0 0 1 1 135.62v-24.611a2 2 0 0 1 1.671-1.973l.857-.143v-44.68C3.528 22.99 25.53 1 66.75 1h233.341ZM3.952 234.516a5.481 5.481 0 0 0-.229-.278c.082.071.159.163.228.278Zm89.99-206.304A4.213 4.213 0 0 0 89.727 24H56.864C38.714 24 24 38.708 24 56.852v618.296C24 693.292 38.714 708 56.864 708h250.272c18.15 0 32.864-14.708 32.864-32.852V56.852C340 38.708 325.286 24 307.136 24h-32.864a4.212 4.212 0 0 0-4.213 4.212v2.527c0 10.235-8.3 18.532-18.539 18.532H112.48c-10.239 0-18.539-8.297-18.539-18.532v-2.527Z"
                  ></path>
                  <rect x="154" y="29" width="56" height="5" rx="2.5" fill="black"></rect>
                </svg>
                <img
                  alt=""
                  src="./assets/phone-frame.svg"
                  width="366"
                  height="729"
                  decoding="async"
                  className="hidden pointer-events-none absolute inset-0 h-full w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="downloadSection"
        className={` py-20 px-4 flex flex-col md:flex-row md:space-x-4 space-y-4 bg-[#008cba]  relative text-slate-100`}
      >
        <div className="flex-1">
          <h3 className="text-3xl Rlg:text-4xl font-medium mb-4">
            Install App
          </h3>
          <p className="">
          Daily Bytes simplifies habit tracking with its unique approach—a minimalist annual calendar represented in cubes. Keep your habits organized and visualize your progress effortlessly with Daily Bytes. Currently, the app is available only for Android devices. Download it from the Google Play Store and start enhancing your daily routine.
          <br />
          The iOS version is in the works and will be available soon. Thank you for your patience!
          </p>
        </div>
        <div
          className={`flex-1 flex justify-end items-end space-x-3`}
        >
          <div>
            <h3>Daily Bytes App</h3>
            <div>
              <a
                className=""
                href=""
                target="_blank"
                rel="noreferrer"
              >
                <img className='h-20' src="./assets/images/google-play-badge.webp" alt="" />
              </a>
              <a
                className="opacity-50"
                rel="noreferrer"
              >
                <img className='h-20 p-[15px]' src="./assets/images/available-on-the-app-store-logo.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="py-8 px-4 md:px-8 lg:py-16 2xl:px-60 mx-auto relative">
        <div className="grid grid-cols-12 gap-8 text-slate-500 py-16">
          <div className="col-span-4 xl:col-span-4">
            <span className='font-semibold'>Daily Bytes</span>
            <div className='flex space-x-16'>
              <ul>
                <li className="py-3">
                  <a className='text-[#008cba]' href="./terms-and-conditions">Terms and Conditions</a>
                </li>
                <li className="py-3">
                  <a className='text-[#008cba]' href="./privacy-policy">Privacy Policy</a>
                </li>
              </ul>
              <ul>
                <li className="py-3">
                  <a className='text-[#008cba]' href="mailto:eduard0.villalb4.com">contact</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center flex-col lg:flexRow text-gray-400">
          <div className="flex items-center mb-2">
            <a
              className="mr-6"
              target="_blank"
              rel="noopener noreferrer"
              href="mailto:eduard0.villalb4.com"
            >
              <img
                className=" h-[28px] w-[28px]"
                src="https://cdn4.iconfinder.com/data/icons/social-media-logos-6/512/112-gmail_email_mail-512.png"
                alt="Email"
              />
            </a>
            <a
              className="mr-6"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.tiktok.com/@edudevweb?_t=8qvhfriJaLN&_r=1"
            >
              <img
                className=" h-[28px] w-[28px]"
                src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tiktok-round-white-icon.png"
                alt="Tiktok"
              />
            </a>
            <a
              className="mr-6"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.instagram.com/eduard0.villalb4?igsh=MWpxdngzZmJmOHVkYg=="
            >
              <img
                className=" h-[28px] w-[28px]"
                src="./assets/icons/Instagram_icon.png"
                alt="Instagram"
              />
            </a>
          </div>
          <p className="text-center">Made with 💗 & lots of ☕ by @Eduard0.Villalb4</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;