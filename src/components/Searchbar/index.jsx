import filterIcon from "/assets/mobile/icon-filter.svg";
import searchIcon from "/assets/desktop/icon-search-white.svg";
import { useState } from "react";

const Searchbar = ({ onSearch, onLocationChange, onFullTimeChange }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [location, setLocation] = useState("");
  const [isFullTime, setIsFullTime] = useState(false);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleLocationChange = (e) => {
    setLocation(e.target.value);
  };

  const handleFullTimeChange = (e) => {
    setIsFullTime(e.target.checked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchTerm);
    onLocationChange(location);
    onFullTimeChange(isFullTime);
  };
  return (
    <form
      className="flex w-full items-center justify-between rounded-md bg-white p-4"
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Filter by title..."
        className="text-[1rem] font-normal leading-5 tracking-normal text-very-dark-blue caret-very-dark-blue placeholder:text-very-dark-blue/50 focus:outline-none"
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <input
        type="text"
        placeholder="Filter by location..."
        className="text-[1rem] font-normal leading-5 tracking-normal text-very-dark-blue caret-very-dark-blue placeholder:text-very-dark-blue/50 focus:outline-none"
        value={location}
        onChange={handleLocationChange}
      />
      <label>
        Full-Time
        <input
          type="checkbox"
          checked={isFullTime}
          onChange={handleFullTimeChange}
        />
      </label>
      <div className="flex h-12 w-[5.75rem] gap-6">
        <button>
          <img className="h-5 w-5" src={filterIcon} alt="filter icon" />
        </button>
        <button
          className="flex h-12 w-12 items-center justify-center rounded-[5px] bg-violet"
          type="submit"
        >
          <img className="h-5 w-5" src={searchIcon} alt="search icon" />
        </button>
      </div>
    </form>
  );
};

export default Searchbar;
