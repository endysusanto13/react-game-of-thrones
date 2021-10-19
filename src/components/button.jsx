import cn from "classnames";
import PropTypes from "prop-types";

export const Button = ({ type = "button", variant, render, ...props }) => {
  const className = cn(
    "inline-flex justify-center items-center py-2 px-4 border shadow-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500",
    variant && classByVariant[variant],
    props.className
  );

  if (render) {
    return render({
      className,
      ...props,
    });
  }

  return <button type={type} {...props} className={className} />;
};

const classByVariant = {
  primary: "border-transparent text-white text-sm bg-gray-600 hover:bg--700",
  outline: "border-gray-500 text-gray-500 text-sm bg-white hover:text-gray-700",
  wideLight: "w-full border-transparent text-gray-900 text-base bg-gray-200 hover:bg-yellow-500",
  wideDark: "w-full border-transparent text-white text-base bg-gray-400 hover:bg-yellow-600",
};

Button.propTypes = {
  variant: PropTypes.oneOf(["primary", "outline", "wideLight", "wideDark"]),
  render: PropTypes.func,
};
