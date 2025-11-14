const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      {...props}
      className={`rounded-md px-4 py-2 font-semibold shadow-sm transition-colors duration-200 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
