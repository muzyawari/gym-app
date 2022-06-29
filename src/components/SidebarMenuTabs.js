import { Fragment, useState } from "react";
import { NavLink, Outlet, Route, Routes, useLocation } from "react-router-dom";
import { Dialog, Menu, Transition } from "@headlessui/react";

import {
  BellIcon,
  CalendarIcon,
  ChartBarIcon,
  HomeIcon,
  InboxIcon,
  MenuAlt2Icon,
  UsersIcon,
  XIcon,
  FolderIcon,
  DocumentAddIcon,
  FolderAddIcon,
} from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/solid";

const navigation = [
  { name: "Dashboard", href: "#", icon: HomeIcon, current: true },
  { name: "Folders", href: "#", icon: UsersIcon, current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const SidebarMenuTabs = ({ sidebarOpen, setSidebarOpen, onAddBtnClick }) => {
  let location = useLocation();
  const tab = location.pathname;

  return (
    <div>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-40 flex md:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-600 bg-opacity-75" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className="relative max-w-xs w-full bg-white pt-5 pb-4 flex-1 flex flex-col">
              <Transition.Child
                as={Fragment}
                enter="ease-in-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in-out duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    className="ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    onClick={() => setSidebarOpen(false)}
                  >
                    <span className="sr-only">Close sidebar</span>
                    <XIcon className="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </Transition.Child>
              <div className="flex-shrink-0 px-4 flex items-center">
                <img
                  className="h-8 w-auto"
                  src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
                  alt="Workflow"
                />
              </div>
              <div className="mt-5 flex-1 h-0 overflow-y-auto">
                <nav className="px-2 space-y-1">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-100 text-gray-900"
                          : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                        "group rounded-md py-2 px-2 flex items-center text-base font-medium"
                      )}
                    >
                      <item.icon
                        className={classNames(
                          item.current
                            ? "text-gray-500"
                            : "text-gray-400 group-hover:text-gray-500",
                          "mr-4 flex-shrink-0 h-6 w-6"
                        )}
                        aria-hidden="true"
                      />
                      {item.name}
                    </a>
                  ))}
                </nav>
              </div>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14">
            {/* Dummy element to force sidebar to shrink to fit close icon */}
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:w-64 md:flex-col md:fixed md:inset-y-0">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="border-r border-gray-200 pt-5 flex flex-col flex-grow bg-white overflow-y-auto">
          <div className="flex-shrink-0 px-4 flex items-center">
            <img
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg"
              alt="Workflow"
            />
          </div>
          <div className="flex-grow mt-5 flex flex-col">
            <nav className="flex-1 px-2 pb-4 space-y-1">
              <NavLink
                to={`/dashboard`}
                className={({ isActive }) =>
                  isActive
                    ? " bg-gray-100 text-gray-900 group rounded-md py-2 px-2 flex items-center text-sm font-medium"
                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 group rounded-md py-2 px-2 flex items-center text-sm font-medium"
                }
              >
                <HomeIcon
                  className={
                    (({ isActive }) =>
                      isActive
                        ? "text-gray-400 mr-3 flex-shrink-0 h-6 w-6"
                        : "text-gray-300 group-hover:text-gray-500",
                    "mr-3 flex-shrink-0 h-6 w-6 text-gray-500")
                  }
                  aria-hidden="true"
                />
                Dashboard
              </NavLink>
              <p className="group cursor-pointer text-gray-600 hover:bg-gray-50 hover:text-gray-900 group rounded-md py-2 px-2 flex items-center text-sm font-medium">
                <FolderIcon
                  className={
                    (({ isActive }) =>
                      isActive
                        ? "text-gray-500 mr-3 flex-shrink-0 h-6 w-6"
                        : "text-gray-400 group-hover:text-gray-500",
                    "mr-3 flex-shrink-0 h-6 w-6 text-gray-500")
                  }
                  aria-hidden="true"
                />
                Folders
                <DocumentAddIcon className="h-5 w-5 invisible  hover:bg-gray-300 hover:rounded-md group-hover:visible mr-3 flex-shrink-0 ml-16 text-gray-400 group" />
                <FolderAddIcon className="h-5 w-5 invisible hover:bg-gray-300 hover:rounded-md group-hover:visible mr-3 flex-shrink-0  text-gray-400" />
              </p>
              <div class="relative flex flex-col items-center group">
                <svg
                  class="w-5 h-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z"
                    clip-rule="evenodd"
                  />
                </svg>
                <div class="absolute bottom-0 flex flex-col items-center hidden mb-6 group-hover:flex">
                  <span class="relative z-10 p-2 text-xs leading-none text-white whitespace-no-wrap bg-black shadow-lg">
                    A top aligned tooltip.
                  </span>
                  <div class="w-3 h-3 -mt-2 rotate-45 bg-black"></div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SidebarMenuTabs;
