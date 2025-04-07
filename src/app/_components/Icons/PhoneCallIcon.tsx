const PhoneCallIcon = ({ className = "" }) => (
  <svg
    className={`w-6 h-6 text-blue-400 ${className}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 5a5 5 0 015 5v1m-4 4l4 4m-4-4a11 11 0 01-11-11l4 4"
    />
  </svg>
);

export default PhoneCallIcon;
