import highlightsData from "../data/highlights";

const iconStyles = "w-8 h-8 flex-shrink-0";

const HighlightCard = ({ icon, color, title, bullets }) => (
  <div className="flex items-start">
    <div className={`${iconStyles} text-${color}-300`}>{icon}</div>
    <div>
      <h3 className="text-xl font-bold -ml-2">{title}</h3>
      <ul className="mt-2 space-y-1 text-base">
        {bullets.map((text, i) => (
          <li key={i}>{text}</li>
        ))}
      </ul>
    </div>
  </div>
);

const HighlightsList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12 text-left">
      {highlightsData.map((item, index) => (
        <HighlightCard key={index} {...item} />
      ))}
    </div>
  );
};

export default HighlightsList;
