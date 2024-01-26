const Form = () => {
  return (
    <form className="flex w-full items-center gap-6 rounded-md bg-white p-4">
      <input
        type="text"
        placeholder="Filter by title..."
        className="w-full text-[1rem] font-normal leading-5 tracking-normal text-very-dark-blue caret-very-dark-blue placeholder:text-very-dark-blue/50 focus:outline-none"
      />
    </form>
  );
};

export default Form;
