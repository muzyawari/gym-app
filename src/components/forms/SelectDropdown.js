/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

const people = [
  { id: 1, name: "1" },
  { id: 2, name: "2" },
  { id: 3, name: "3" },
  { id: 4, name: "4" },
  { id: 5, name: "5" },
  { id: 6, name: "6" },
  { id: 7, name: "7" },
  { id: 8, name: "8" },
  { id: 9, name: "9" },
  { id: 10, name: "10" },
  { id: 11, name: "11" },
  { id: 12, name: "12" },
  { id: 13, name: "13" },
  { id: 14, name: "14" },
  { id: 15, name: "15" },
  { id: 16, name: "16" },
  { id: 17, name: "17" },
  { id: 18, name: "18" },
  { id: 19, name: "19" },
  { id: 20, name: "20" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function SelectDropdown() {
  const [selected, setSelected] = useState(people[0]);

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className="mt-1 relative">
            <Listbox.Button className="bg-white relative w-full border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
              <span className="block truncate">{selected.name}</span>
              <span className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                <SelectorIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                {people.map((person) => (
                  <Listbox.Option
                    key={person.id}
                    className={({ active }) =>
                      classNames(
                        active ? "text-white bg-indigo-600" : "text-gray-900",
                        "cursor-default select-none relative py-2 pl-3 pr-9"
                      )
                    }
                    value={person}
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={classNames(
                            selected ? "font-semibold " : "font-normal",
                            "block truncate"
                          )}
                        >
                          {person.name}
                        </span>

                        {selected ? (
                          <span
                            className={classNames(
                              active ? "text-white" : "text-indigo-600",
                              "absolute inset-y-0 right-0 flex items-center pr-4"
                            )}
                          >
                            <CheckIcon className="h-5 w-5" aria-hidden="true" />
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
