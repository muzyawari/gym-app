import { useState } from "react";
import {
  FolderIcon,
  DocumentAddIcon,
  FolderAddIcon,
  DocumentDuplicateIcon,
  CheckIcon,
  XIcon,
} from "@heroicons/react/solid";

const FoldersSidebar = ({ folders, setFolders }) => {
  const [pages, setPages] = useState([]);
  const [pageName, setPageName] = useState("");
  const [folderName, setFolderName] = useState("");
  const [openInput, setOpenInput] = useState(false);
  const [openPageInput, setOpenPageInput] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const handleFolderAdd = () => {
    if (!folderName) return;

    setFolders([...folders, folderName]);
    setFolderName("");
    setOpenInput(!openInput);
  };

  const handlePageAdd = () => {
    if (!pageName) return;

    setPages([...pages, pageName]);
    setPageName("");
    setOpenPageInput(!openPageInput);
  };

  console.log(folders);

  return (
    <div>
      <p className="group cursor-pointer text-gray-600 hover:bg-gray-50 hover:text-gray-700 group rounded-md py-2 px-2 flex items-center text-sm font-medium">
        <FolderIcon
          className="text-gray-500 mr-3 flex-shrink-0 h-6 w-6 group-hover:text-gray-500"
          aria-hidden="true"
        />
        Folders
        <FolderAddIcon
          className="h-5 w-5 invisible hover:bg-gray-300 hover:rounded-md group-hover:visible flex-shrink-0  ml-24  text-gray-400"
          onClick={() => setOpenInput(!openInput)}
        />
      </p>
      {openInput && (
        <div className="mt-2 flex rounded-md shadow-sm ml-2">
          <div className="relative flex items-stretch flex-grow focus-within:z-10">
            <input
              type="text"
              value={folderName}
              onChange={(e) => setFolderName(e.target.value)}
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md  sm:text-sm  text-zinc-700 border-gray-200"
              placeholder="Add Folder"
            />
          </div>
          <button
            type="submit"
            className="-ml-px  relative inline-flex items-center space-x-2 px-1 py-2 border border-gray-100 text-gray-400  text-sm font-medium rounded-md   hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <CheckIcon
              onClick={handleFolderAdd}
              className="h-5 w-5  text-gray-400"
              aria-hidden="true"
            />
          </button>
          <button className="-ml-px  relative inline-flex items-center space-x-2 px-1 py-2 border border-gray-100 text-gray-400  text-sm font-medium rounded-md   hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
            <XIcon
              className="h-5 w-5  text-gray-400"
              aria-hidden="true"
              onClick={() => {
                setFolderName("");
                setOpenInput(!openInput);
              }}
            />
          </button>
        </div>
      )}
      {folders.map((folder, index) => (
        <div
          key={index}
          className="group cursor-pointer mt-2 text-gray-600 ml-2 hover:bg-gray-50 hover:text-gray-700 group rounded-md py-2 px-2 flex items-center text-sm font-medium"
        >
          <DocumentDuplicateIcon
            className="text-gray-500 mr-3 flex-shrink-0 h-6 w-6 group-hover:text-gray-500"
            aria-hidden="true"
          />
          {folder}
          <DocumentAddIcon
            onClick={handlePageAdd}
            className="h-5 w-5 invisible hover:bg-gray-300 hover:rounded-md group-hover:visible  flex-shrink-0  ml-32 text-gray-400"
          />
        </div>
      ))}
      {openPageInput && (
        <div className="mt-2 flex rounded-md shadow-sm ml-2">
          <div className="relative flex items-stretch flex-grow focus-within:z-10">
            <input
              type="text"
              value={folderName}
              onChange={(e) => setFolderName(e.target.value)}
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full rounded-md  sm:text-sm  text-zinc-700 border-gray-200"
              placeholder="Add Folder"
            />
          </div>
          <button
            type="submit"
            className="-ml-px  relative inline-flex items-center space-x-2 px-1 py-2 border border-gray-100 text-gray-400  text-sm font-medium rounded-md   hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
          >
            <CheckIcon
              onClick={handleFolderAdd}
              className="h-5 w-5  text-gray-400"
              aria-hidden="true"
            />
          </button>
          <button className="-ml-px  relative inline-flex items-center space-x-2 px-1 py-2 border border-gray-100 text-gray-400  text-sm font-medium rounded-md   hover:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">
            <XIcon
              className="h-5 w-5  text-gray-400"
              aria-hidden="true"
              onClick={() => {
                setFolderName("");
                setOpenInput(!openInput);
              }}
            />
          </button>
        </div>
      )}
    </div>
  );
};

export default FoldersSidebar;
