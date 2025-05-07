export const Button = ({ children, variant = "primary", handleClickAdd }) => {
  const base =
    "w-max rounded-full p-2 px-3 text-sm cursor-pointer font-semibold transition-all duration-200 ease-in-out hover:scale-95";

  const moreStyle = {
    primary: "bg-neutral-900 text-white active:bg-black",
    secondary:
      " border border-neutral-300 hover:border-neutral-600 active:border-black",
  };

  return (
    <button
      className={`${base} ${moreStyle[variant]}`}
      onClick={handleClickAdd}
    >
      {children}
    </button>
  );
};
