import classNames from "classnames";
import { useMemo } from "react";

type Props = {
  children: React.ReactNode;
};

const Category = ({ children }: Props) => {
  const categoryStyles = useMemo(
    () => [
      "bg-gradient-to-r from-yellow-200 via-green-200 to-green-300",
      "bg-gradient-to-r from-yellow-200 via-pink-200 to-pink-400",
      "bg-gradient-to-r from-teal-200 to-lime-200",
      "bg-gradient-to-r from-orange-300 to-rose-300",
      "bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-yellow-200 via-emerald-200 to-yellow-200",
      "bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-400",
    ],
    []
  );

  const randomStyle = useMemo(
    () => categoryStyles[Math.floor(Math.random() * categoryStyles.length)],
    [categoryStyles]
  );

  return (
    <div
      className={classNames(
        "px-2 py-1 rounded-md bg-gradient-to-r",
        randomStyle
      )}
    >
      <span className="text-xs font-medium leading-none">{children}</span>
    </div>
  );
};

export default Category;
