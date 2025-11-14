export const Card = ({ children, className = "" }) => (
  <div className={`rounded-xl border p-4 bg-white ${className}`}>{children}</div>
);

export const CardHeader = ({ children, className = "" }) => (
  <div className={`mb-2 ${className}`}>{children}</div>
);

export const CardTitle = ({ children, className = "" }) => (
  <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>
);

export const CardContent = ({ children, className = "" }) => (
  <div className={`${className}`}>{children}</div>
);
