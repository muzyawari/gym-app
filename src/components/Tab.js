import React from "react";
import { useLocation } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Tab = () => {
  let location = useLocation();
  const tab = location.pathname;
  return (
    <div className="block h-full w-full">
      <nav className="flex space-x-4" aria-label="Tabs">
        <a
          key={tab}
          href={tab}
          className={classNames(
            location
              ? "bg-indigo-100 text-indigo-700 object-cover"
              : "text-gray-500 hover:text-gray-700 object-cover",
            "px-3 py-2 font-medium text-sm rounded-md"
          )}
          aria-current={tab.current ? "page" : undefined}
        >
          {tab}
        </a>
      </nav>
    </div>
  );
};

export default Tab;
