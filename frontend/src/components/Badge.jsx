const Badge = ({ children, className = "" }) => {
  return (
    <span className={`text-sm px-3 py-1 rounded-full font-medium ${className}`}>
      {children}
    </span>
  );
};

export default Badge;
