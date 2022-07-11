import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XIcon } from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/solid";

import ExerciseCards from "./FolderComponents/ExerciseCards";

import { exerciseOptions, fetchData } from "../utils/fetchData";

import { useParams } from "react-router-dom";

// import SearchExercises from "../components/SearchExercises";

const Folders = () => {
  const [open, setOpen] = useState(true);

  const [search, setSearch] = useState("");
  const [exercises, setExercises] = useState([]);

  const [addExercise, setAddExercise] = useState([]);

  const handleSearch = async () => {
    const exerciseData = await fetchData(
      "https://exercisedb.p.rapidapi.com/exercises",
      exerciseOptions
    );

    const searchedExercises = exerciseData.filter(
      (item) =>
        item.name.toLowerCase().includes(search) ||
        item.target.toLowerCase().includes(search) ||
        item.equipment.toLowerCase().includes(search) ||
        item.bodyPart.toLowerCase().includes(search)
    );

    console.log(searchedExercises);

    setExercises(searchedExercises);
    setSearch("");
  };

  const handleExerciseClick = (itemToAdd) => {
    const existingExercise = addExercise.find(
      (exercise) => exercise.id === itemToAdd.id
    );

    if (!existingExercise) {
      setAddExercise([...addExercise, { ...itemToAdd }]);
    } else {
      return;
    }
  };

  console.log(addExercise);

  // const filteredItems =
  // query === ""
  // 	? []
  // 	: items.filter((item) => {
  // 			return item.name.toLowerCase().includes(query.toLowerCase());
  // 		});

  // useEffect(() => {
  //   handleSearch();
  // }, [search]);

  return (
    <>
      {/* <div className="flex-1 flex justify-between px-4 md:px-0 mt-4">
        <div className="flex-1 flex">
          <form className="w-full flex md:ml-0" action="#" method="GET">
            <label htmlFor="search-field" className="sr-only">
              Search
            </label>
            <div className="relative w-full text-gray-400 focus-within:text-gray-600">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center">
                <SearchIcon className="h-5 w-5" aria-hidden="true" />
              </div>
              <input
                id="search-field"
                className="block h-full w-full border-transparent py-2 pl-8 pr-3 text-gray-600 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                placeholder="Search"
                type="search"
                name="search"
              />
            </div>
          </form>
        </div>
      </div> */}

      <ExerciseCards addExercise={addExercise} />
      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 overflow-hidden"
          onClose={setOpen}
        >
          <div className="absolute inset-0 overflow-hidden">
            <Dialog.Overlay className="absolute inset-0" />

            <div className="fixed inset-y-0 right-0 pl-10 max-w-full flex">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <div className="w-screen max-w-md mt-16 ">
                  <div className="h-full divide-y divide-gray-200 flex flex-col bg-white shadow-xl ">
                    <div className="min-h-0 overflow-y-auto flex-1 flex flex-col py-6 ">
                      <div className="px-4 sm:px-6">
                        <div className="flex items-start justify-between">
                          <Dialog.Title className="text-lg font-medium text-gray-900">
                            Search for Gym Workouts
                          </Dialog.Title>
                          <div className="ml-3 h-7 flex items-center">
                            <button
                              type="button"
                              className="bg-white rounded-md text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                              onClick={() => setOpen(false)}
                            >
                              <span className="sr-only">Close panel</span>
                              <XIcon className="h-6 w-6" aria-hidden="true" />
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 relative flex-1 px-4 sm:px-6">
                        {/* Exercise Search */}

                        <div className="flex-1 flex justify-between px-4 md:px-0  border-gray-500 rounded-full sticky top-0 ">
                          <div className="flex-1 flex">
                            <label htmlFor="search-field" className="sr-only">
                              Search
                            </label>
                            <div className="relative w-full text-gray-400 focus-within:text-gray-600  ">
                              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                                <SearchIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </div>
                              <input
                                id="search-field"
                                className="block h-full w-full border-transparent border border-gray-300 rounded-lg  bg-gray-50 py-2 pl-10 pr-3 text-gray-600 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent sm:text-sm"
                                placeholder="Search"
                                type="search"
                                name="search"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                              />
                            </div>
                            <button
                              type="submit"
                              className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-600 rounded-lg border border-blue-700 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                              onClick={handleSearch}
                            >
                              <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                                ></path>
                              </svg>
                            </button>
                          </div>
                        </div>

                        <div className="mt-8">
                          <div className="flow-root">
                            <ul className="-my-6 divide-y divide-gray-200">
                              {exercises.map((exercise) => (
                                <li key={exercise.id} className="py-6 flex">
                                  <div className="flex-shrink-0 w-24 h-24 border border-gray-200 rounded-md overflow-hidden">
                                    <img
                                      className="w-full h-full object-center object-cover"
                                      src={exercise.gifUrl}
                                      alt={exercise.name}
                                      loading="lazy"
                                    />
                                  </div>
                                  <div className="ml-4 flex-1 flex flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          <p className="capitalize">
                                            {exercise.name}
                                          </p>
                                        </h3>
                                      </div>
                                      <p className="mt-1 text-sm text-gray-500">
                                        {exercise.color}
                                      </p>
                                    </div>
                                    <div className="flex-1 flex items-end justify-between	 text-sm">
                                      <div className="flex justify-between text-sm">
                                        <button
                                          type="button"
                                          className="text-gray-500 bg-white border border-gray-300 mr-2 focus:outline-none hover:bg-gray-200 focus:ring-4 focus:ring-gray-200 font-medium rounded-full px-2 py-1"
                                        >
                                          <p className={`capitalize text-xs`}>
                                            {exercise.target.length > 7
                                              ? exercise.target.substring(
                                                  0,
                                                  5
                                                ) + "..."
                                              : exercise.target}
                                          </p>
                                        </button>

                                        <button
                                          type="button"
                                          className="text-gray-500 bg-white border border-gray-300  focus:outline-none hover:bg-gray-200 focus:ring-4  focus:ring-gray-200 font-medium rounded-full text-sm px-2 py-1 "
                                        >
                                          <p className={`capitalize text-xs`}>
                                            {exercise.bodyPart}
                                          </p>
                                        </button>
                                      </div>

                                      <div className="flex ">
                                        <button
                                          onClick={() =>
                                            handleExerciseClick(exercise)
                                          }
                                          className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-700 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                                        >
                                          <span className="relative px-4 py-1 transition-all ease-in duration-75 bg-white  text-sm rounded-md group-hover:bg-opacity-0">
                                            Add
                                          </span>
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default Folders;
