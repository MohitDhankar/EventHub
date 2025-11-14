const Input = ({ className = "", ...props }) => (
  <input
    {...props}
    className={`border border-gray-300 rounded-md px-3 py-2 text-sm w-full ${className}`}
  />
);

export default Input;
