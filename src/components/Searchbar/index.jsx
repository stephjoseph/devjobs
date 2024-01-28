import filterIcon from "/assets/mobile/icon-filter.svg";
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
      className="flex w-full items-center justify-between gap-4 rounded-md bg-white p-4"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Filter by title..."
        className="w-full text-[1rem] font-normal leading-5 tracking-normal text-very-dark-blue caret-very-dark-blue placeholder:text-very-dark-blue/50 focus:outline-none"
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
          <img className="h-5 w-5" src={filterIcon} alt="filter icon" />
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
