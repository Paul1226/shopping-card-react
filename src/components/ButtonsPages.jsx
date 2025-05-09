export const ButtonsPages = ({
  children,
  variant = "primary",
  handleClickAction,
}) => {
  const base =
    "w-max rounded-full text-sm cursor-pointer font-semibold transition-all duration-200 ease-in-out hover:scale-95";

  const moreStyle = {
    primary: "bg-neutral-900 text-white active:bg-black p-2 px-3",
    secondary:
      " border border-neutral-400 hover:border-neutral-600 active:border-black p-2 px-3",
    removeAll:
      "border border-red-500 text-red-500 active:bg-red-500 active:text-white p-2 px-3",
    quantity: "rounded-sm bg-white/20 border border-neutral-300 p-1 h-min",
  };

  return (
    <button
      className={`${base} ${moreStyle[variant]}`}
      onClick={handleClickAction}
    >
      {children}
    </button>
  );
};
