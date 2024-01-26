import filterIcon from "/assets/mobile/icon-filter.svg";
import searchIcon from "/assets/desktop/icon-search-white.svg";

const Form = () => {
  return (
    <form className="flex w-full items-center justify-between rounded-md bg-white p-4">
      <input
        type="text"
        placeholder="Filter by title..."
        className="text-[1rem] font-normal leading-5 tracking-normal text-very-dark-blue caret-very-dark-blue placeholder:text-very-dark-blue/50 focus:outline-none"
      />
      <div className="flex h-12 w-[5.75rem] gap-6">
        <button>
          <img className="h-5 w-5" src={filterIcon} alt="filter icon" />
        </button>
        <button className="flex h-12 w-12 items-center justify-center rounded-[5px] bg-violet">
          <img className="h-5 w-5" src={searchIcon} alt="search icon" />
        </button>
      </div>
    </form>
  );
};

export default Form;
