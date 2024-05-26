import React, { useState } from "react";

export default function Header() {
  const [isToggleOpen, setIsToggleOpen] = useState(false);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const handleSubMenuToggle = (menu) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  return (
    <header className="border-b-1 relative z-20 w-full border-b border-slate-200 bg-white/90 shadow-lg shadow-slate-700/5 after:absolute after:left-0 after:top-full after:z-10 after:block after:h-px after:w-full after:bg-slate-200 lg:border-slate-200 lg:backdrop-blur-sm lg:after:hidden">
      <div className="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
        <nav
          aria-label="main navigation"
          className="flex h-[5.5rem] items-stretch justify-between font-medium text-slate-700"
          role="navigation"
        >
          <a
            id="WindUI"
            aria-label="WindUI logo"
            aria-current="page"
            className="flex items-center gap-2 whitespace-nowrap py-3 text-lg focus:outline-none lg:flex-1"
            href="/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 128 128"
            >
              <path
                d="M109 58.75a5.258 5.258 0 0 1-5.25 5.25H75.22l-9.74-6.27a3.524 3.524 0 0 0-1.93-.57 3.586 3.586 0 0 0-1.95 6.6l.37.24H24.25a5.25 5.25 0 0 1 0-10.5h79.5a5.249 5.249 0 0 1 5.25 5.25z"
                fill="#f7963e"
              />
              <path
                d="m100.45 88.77-1.61 12.09a9.392 9.392 0 0 1-9.31 8.14H38.47a9.392 9.392 0 0 1-9.31-8.14L24.25 64h37.72l20.67 13.31 6.59 4.24zM103.75 64l-2.25 16.92L75.22 64h28.53z"
                fill="#ffad5a"
              />
              <path
                d="M108.72 89.83a3.578 3.578 0 0 1-4.95 1.08l-3.32-2.14-11.22-7.22-6.59-4.24L61.97 64l-.37-.24a3.586 3.586 0 0 1 1.95-6.6 3.524 3.524 0 0 1 1.93.57L75.22 64l26.28 16.92 6.15 3.96a3.585 3.585 0 0 1 1.07 4.95z"
                fill="#f9d16e"
              />
              <path
                fill="#4f9da6"
                d="M58.39 53.5H33.65l-4.02-19.81 23.77-4.82 2.91 14.36 2.08 10.27z"
              />
              <path
                d="m78.98 34.42-1.04 3.17-5.23 15.91H58.39l-2.08-10.27 4.82-14.67a9.394 9.394 0 1 1 17.85 5.86z"
                fill="#f9d16e"
              />
              <path
                d="M98.5 46.56v5.47a8.927 8.927 0 0 1-.13 1.47H72.71l5.23-15.91h11.59a8.975 8.975 0 0 1 8.97 8.97z"
                fill="#ff5959"
              />
              <path
                d="M72.333 39.34a1.73 1.73 0 0 1-.608-.11l-8.333-3.089a1.75 1.75 0 1 1 1.216-3.282l8.333 3.09a1.75 1.75 0 0 1-.608 3.391zM69.417 48.333a1.727 1.727 0 0 1-.554-.09l-8.25-2.75a1.75 1.75 0 1 1 1.107-3.32l8.251 2.75a1.75 1.75 0 0 1-.554 3.41z"
                fill="#fff8e3"
              />
              <rect
                x="60.425"
                y="73.667"
                width="7.15"
                height="26.333"
                rx="3.575"
                fill="#f7963e"
              />
              <path
                d="M45.1 99.873a3.555 3.555 0 0 1-4.035-2.864l-2.888-19.421a3.415 3.415 0 0 1 3.047-3.795 3.555 3.555 0 0 1 4.035 2.865l2.884 19.421a3.413 3.413 0 0 1-3.043 3.794zM89.23 81.55l-2.29 15.46a3.552 3.552 0 0 1-4.04 2.86 3.408 3.408 0 0 1-3.04-3.79l2.78-18.77z"
                fill="#f7963e"
              />
            </svg>
            <span>Student Eats BC</span>
          </a>
          <button
            className={`relative order-10 block h-10 w-10 self-center lg:hidden
            ${
              isToggleOpen
                ? "visible opacity-100 [&_span:nth-child(1)]:w-6 [&_span:nth-child(1)]:translate-y-0 [&_span:nth-child(1)]:rotate-45 [&_span:nth-child(2)]:-rotate-45 [&_span:nth-child(3)]:w-0 "
                : ""
            }
          `}
            onClick={() => setIsToggleOpen(!isToggleOpen)}
            aria-expanded={isToggleOpen ? "true" : "false"}
            aria-label="Toggle navigation"
          >
            <div className="absolute left-1/2 top-1/2 w-6 -translate-x-1/2 -translate-y-1/2 transform">
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
              ></span>
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
              ></span>
              <span
                aria-hidden="true"
                className="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
              ></span>
            </div>
          </button>
          <ul
            role="menubar"
            aria-label="Select page"
            className={`absolute left-0 top-0 z-[-1] h-[28.5rem] w-full justify-center overflow-hidden  overflow-y-auto overscroll-contain bg-white/90 px-8 pb-12 pt-24 font-medium transition-[opacity,visibility] duration-300 
            lg:visible lg:relative lg:top-0 lg:z-0 lg:flex lg:h-auto lg:w-auto lg:translate-y-0 lg:items-stretch lg:overflow-visible lg:overscroll-auto lg:bg-transparent lg:p-0 lg:pt-0 lg:opacity-100
            ${
              isToggleOpen
                ? "visible translate-y-0 opacity-100 backdrop-blur-sm"
                : "invisible translate-y-[-2rem] opacity-0"
            }`}
          >
            <li className="flex items-stretch">
              <a
                className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                href="/"
              >
                Home
              </a>
            </li>
            <li className="flex items-stretch">
              <a
                className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                href="./flyers"
              >
                Flyer Deals
              </a>
            </li>
            <li className="flex items-stretch">
              <a
                className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                href="./contact"
              >
                Contact
              </a>
            </li>

            <li className="flex items-stretch relative">
              <button
                className="flex items-center gap-2 py-4 transition-colors duration-300 hover:text-emerald-500 focus:text-emerald-600 focus:outline-none focus-visible:outline-none lg:px-8"
                onClick={() => handleSubMenuToggle("resources")}
                aria-haspopup="true"
                aria-expanded={openSubMenu === "resources"}
              >
                Resources
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  aria-labelledby="resources-icon-title resources-icon-desc"
                  role="img"
                >
                  <title id="resources-icon-title">Expand Resources</title>
                  <desc id="resources-icon-desc">
                    Click to expand the resources submenu
                  </desc>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </button>
              {openSubMenu === "resources" && (
                <ul className="absolute left-0 top-full mt-2 w-60 bg-white shadow-lg border rounded-md">
                  {[
                    {
                      href: "/resources/budgeting-tools",
                      text: "Budgeting Tools",
                    },
                    {
                      href: "/resources/community-forum",
                      text: "Community Forum",
                    },
                    {
                      href: "/resources/events-calendar",
                      text: "Events Calendar",
                    },
                    {
                      href: "/resources/resources-directory",
                      text: "Resources Directory",
                    },
                    {
                      href: "/resources/educational-content",
                      text: "Educational Content",
                    },
                    { href: "/resources/maps", text: "Interactive Maps" },
                  ].map((item, index) => (
                    <li
                      key={index}
                      className="py-2 px-4 hover:bg-emerald-500 hover:text-white"
                    >
                      <a href={item.href} tabindex="0">
                        {item.text}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          </ul>
          {/* <div className="ml-auto flex items-center px-6 lg:ml-0 lg:p-0">
            <button className="inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded bg-emerald-500 px-5 text-sm font-medium tracking-wide text-white shadow-md shadow-emerald-200 transition duration-300 hover:bg-emerald-600 hover:shadow-sm hover:shadow-emerald-200 focus:bg-emerald-700 focus:shadow-sm focus:shadow-emerald-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:border-emerald-300 disabled:bg-emerald-300 disabled:shadow-none">
              <a href="/contact">Contact Us</a>
            </button>
          </div> */}
        </nav>
      </div>
    </header>
  );
}
