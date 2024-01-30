import searchIcon from "/assets/desktop/icon-search-white.svg";
import locationIcon from "/assets/desktop/icon-location.svg";
import checkIcon from "/assets/desktop/icon-check.svg";
import { useState, useEffect } from "react";

const Searchbar = ({ onSearch, onLocationChange, onFullTimeChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [isFullTime, setIsFullTime] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleFullTimeChange = (e) => {
    setIsFullTime(e.target.checked);
  };

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };
  const handleModalContentClick = (e) => {
    // Prevent the click event from reaching the outer overlay
    e.stopPropagation();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSearch(searchTerm);
    onLocationChange(location);
    onFullTimeChange(isFullTime);
    setIsModalOpen(false);
  };

  useEffect(() => {
    // Add or remove the 'overflow-y-hidden' class based on the modal state
    if (isModalOpen) {
      document.body.classList.add("overflow-y-hidden");
    } else {
      document.body.classList.remove("overflow-y-hidden");
    }

    // Clean up the effect by removing the class when the component unmounts
    return () => {
      document.body.classList.remove("overflow-y-hidden");
    };
  }, [isModalOpen]);

  return (
    <form
      className="flex w-full items-center justify-between gap-4 rounded-md bg-white p-4 transition-colors duration-300 dark:bg-very-dark-blue"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Filter by title..."
        className="w-full text-[1rem] font-normal leading-5 tracking-normal text-very-dark-blue caret-very-dark-blue transition-colors duration-300 placeholder:text-very-dark-blue/50 focus:outline-none dark:bg-very-dark-blue dark:text-white dark:caret-violet dark:placeholder:text-white/50 "
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <input
        type="text"
        placeholder="Filter by location..."
        className="hidden text-[1rem] font-normal leading-5 tracking-normal text-very-dark-blue caret-very-dark-blue placeholder:text-very-dark-blue/50 focus:outline-none"
        value={location}
        onChange={handleLocationChange}
      />
      <label className="hidden">
        Full-Time
        <input
          type="checkbox"
          checked={isFullTime}
          onChange={handleFullTimeChange}
        />
      </label>
      <div className="flex h-12 w-[5.75rem] items-center gap-6">
        <button className="h-5 w-5" onClick={handleOpen} type="button">
          <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z"
              fill="#6E8098"
              fillRule="nonzero"
              className="transition-colors duration-300 dark:fill-white"
            />
          </svg>
        </button>
        <button
          className="flex h-12 w-12 items-center justify-center rounded-[5px] bg-violet"
          type="submit"
        >
          <img className="h-5 w-5" src={searchIcon} alt="search icon" />
        </button>
      </div>

      {/* modal for mobile */}
      {isModalOpen && (
        <div
          className="fixed left-0 top-0 flex h-screen w-full items-center bg-black/50 px-6"
          onClick={handleClose}
        >
          <div
            className="flex w-full flex-col rounded-md bg-white"
            onClick={handleModalContentClick}
          >
            <div className="flex items-center gap-4 border-b border-solid border-dark-grey/20 p-6">
              <div className="h-6 w-[1.063rem]">
                <img
                  className="h-full w-full object-cover"
                  src={locationIcon}
                  alt="location icon"
                />
              </div>
              <input
                type="text"
                placeholder="Filter by location..."
                className="text-[1rem] font-normal leading-5 tracking-normal text-very-dark-blue caret-very-dark-blue placeholder:text-very-dark-blue/50 focus:outline-none"
                value={location}
                onChange={handleLocationChange}
              />
            </div>
            <div className="flex w-full flex-col gap-6 p-6">
              <label className="flex w-full items-center gap-4">
                <input
                  className="hidden"
                  type="checkbox"
                  checked={isFullTime}
                  onChange={handleFullTimeChange}
                />
                <div
                  className={`${isFullTime ? "bg-violet" : "bg-very-dark-blue/10"} flex h-6 w-6 items-center justify-center rounded-[3px] transition-colors duration-200`}
                >
                  {isFullTime && <img src={checkIcon} alt="check icon" />}
                </div>
                <span className="text-base font-bold leading-5 tracking-normal text-very-dark-blue">
                  Full Time Only
                </span>
              </label>
              <button
                className="rounded-[5px] bg-violet py-4 text-center text-base font-bold leading-5 tracking-normal text-white"
                type="submit"
              >
                Search
              </button>
            </div>
          </div>
        </div>
      )}
    </form>
  );
};

export default Searchbar;
