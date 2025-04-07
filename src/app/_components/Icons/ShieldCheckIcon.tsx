const ShieldCheckIcon = ({ className = "" }) => (
  <svg
    className={`w-6 h-6 text-green-400 ${className}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 3l7 4v5c0 5.25-3.5 9.75-7 11-3.5-1.25-7-5.75-7-11V7l7-4z"
    />
    <path
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 12l2 2l4-4"
    />
  </svg>
);

export default ShieldCheckIcon;
