const RocketIcon = ({ className = "" }) => (
  <svg
    className={`w-6 h-6 text-pink-400 ${className}`}
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 12L3 21l9-2 7-7a5 5 0 00-7-7l-7 7z"
    />
    <circle cx="15" cy="9" r="1" fill="currentColor" />
  </svg>
);
export default RocketIcon;
