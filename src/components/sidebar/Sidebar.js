import { Fragment, useState } from "react";
import Home from "../../pages/Home";
import Folders from "../../pages/Folders";
import SidebarMenuTabs from "./SidebarComponents/SidebarMenuTabs";
import { Route, Routes } from "react-router-dom";
import { Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuAlt2Icon } from "@heroicons/react/outline";

const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Sidebar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [folders, setFolders] = useState([]);

  return (
    <>
      <SidebarMenuTabs
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        folders={folders}
        setFolders={setFolders}
      />

      <div>
        <div className="md:pl-64 ">
          <div className="max-w-4xl mx-auto flex flex-col md:px-8 xl:px-0">
            <div className="sticky top-0 z-10 flex-shrink-0 h-16 bg-white border-b border-gray-200 flex">
              <button
                type="button"
                className="border-r border-gray-200 px-4 text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 md:hidden"
                onClick={() => setSidebarOpen(true)}
              >
                <span className="sr-only">Open sidebar</span>
                <MenuAlt2Icon className="h-6 w-6" aria-hidden="true" />
              </button>
              <div className="flex-1 flex justify-between px-4 md:px-0">
                <div className="flex-1 flex">
                  <div className="w-full flex md:ml-0">
                    <div className="relative w-full text-gray-400 focus-within:text-gray-600">
                      <Routes>
                        <Route path="/" element={<Home />}></Route>
                        <Route
                          path="dashboard"
                          element={<Home folder={folders} />}
                        ></Route>
                        <Route
                          path="folders/:folder"
                          element={<Folders />}
                        ></Route>
                      </Routes>
                    </div>
                  </div>
                </div>
                <div className="ml-4 flex items-center md:ml-6">
                  <button
                    type="button"
                    className="bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="sr-only">View notifications</span>
                    <BellIcon className="h-6 w-6" aria-hidden="true" />
                  </button>

                  {/* Profile dropdown */}
                  <Menu as="div" className="ml-3 relative">
                    <div>
                      <Menu.Button className="max-w-xs flex items-center text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        <span className="sr-only">Open user menu</span>
                        <img
                          className="h-8 w-8 rounded-full"
                          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                          alt=""
                        />
                      </Menu.Button>
                    </div>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 py-1 focus:outline-none">
                        {userNavigation.map((item) => (
                          <Menu.Item key={item.name}>
                            {({ active }) => (
                              <a
                                href={item.href}
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block py-2 px-4 text-sm text-gray-700"
                                )}
                              >
                                {item.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            </div>

            {/* <main className="flex-1">
              <div className="py-6">
                <div className="px-4 sm:px-6 md:px-0">
                  <h1 className="text-2xl font-semibold text-gray-900">
                    Dashboard
                  </h1>
                </div>
                <div className="px-4 sm:px-6 md:px-0">
                  <div className="py-4">
                    <Routes>
                      <Route path="/" element={<Home />}></Route>
                      <Route path="/dashboard" element={<Home />}></Route>
                    </Routes>
                    <div className="h-96 border-4 border-dashed border-gray-200 rounded-lg" />
                  </div>
                </div>
              </div>
            </main> */}
          </div>
        </div>
      </div>
    </>
  );
}
