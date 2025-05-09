import { IconSearch, IconCross } from "./Icons";
export const SearchProduct = () => {
  return (
    <form className="form relative w-2xs h-10 flex items-center px-2 rounded-full bg-neutral-100 transition-all duration-500 ease-in-out before:content-[''] before:absolute before:bottom-0 before:left-0 before:bg-violet-500 before:w-full before:h-[2px] before:scale-x-0 before:rounded-[1px] before:transition-transform before:duration-300 before:ease-in-out focus-within:before:scale-100 overflow-hidden">
      <button>
        <IconSearch className="size-4 stroke-neutral-400" />
      </button>
      <input
        className="input bg-transparent w-full h-full px-2 py-3 border-none focus:outline-none"
        placeholder="Buscar producto..."
        required=""
        type="text"
      />
      <button className="reset border-none bg-none" type="reset">
        <IconCross className="size-6 stroke-neutral-400" />
      </button>
    </form>
  );
};
