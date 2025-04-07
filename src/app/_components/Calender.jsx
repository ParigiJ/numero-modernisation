"use client";
import { useState } from "react";

const schedule = [
  {
    day: "Monday",
    times: [
      "10:00 AM - 11:00 AM",
      "11:00 AM - 12:00 PM",
      "01:00 PM - 02:00 PM",
      "02:00 PM - 03:00 PM",
      "03:00 PM - 04:00 PM",
    ],
  },
  {
    day: "Tuesday",
    times: [
      "10:00 AM - 11:00 AM",
      "11:00 AM - 12:00 PM",
      "01:00 PM - 02:00 PM",
      "02:00 PM - 03:00 PM",
      "03:00 PM - 04:00 PM",
    ],
  },
  {
    day: "Wednesday",
    times: [
      "10:00 AM - 11:00 AM",
      "11:00 AM - 12:00 PM",
      "01:00 PM - 02:00 PM",
      "02:00 PM - 03:00 PM",
      "03:00 PM - 04:00 PM",
    ],
  },
  {
    day: "Thursday",
    times: [
      "10:00 AM - 11:00 AM",
      "11:00 AM - 12:00 PM",
      "01:00 PM - 02:00 PM",
      "02:00 PM - 03:00 PM",
      "03:00 PM - 04:00 PM",
    ],
  },
  {
    day: "Friday",
    times: [
      "10:00 AM - 11:00 AM",
      "11:00 AM - 12:00 PM",
      "01:00 PM - 02:00 PM",
      "02:00 PM - 03:00 PM",
      "03:00 PM - 04:00 PM",
    ],
  },
];

const Calender = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <section className="max-w-2/3 flex flex-col items-center gap-4">
      {!expanded ? (
        <>
          <h3 className="font-semibold text-lg text-left">{schedule[0].day}</h3>
          <div className="flex flex-wrap gap-2 mt-2">
            {schedule[0].times.map((time) => (
              <span
                key={time}
                className="px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded-lg border border-purple-300"
              >
                {time}
              </span>
            ))}
          </div>
        </>
      ) : (
        <>
          {schedule.map(({ day, times }) => (
            <div key={day} className="w-full text-left">
              <h3 className="font-semibold text-lg">{day}</h3>
              <div className="flex flex-wrap gap-2 mt-2 mb-4">
                {times.map((time) => (
                  <span
                    key={time}
                    className="px-3 py-1 text-sm bg-purple-100 text-purple-700 rounded-lg border border-purple-300"
                  >
                    {time}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </>
      )}
      <button
        className="px-3 py-1 text-sm bg-foreground text-background rounded-lg border border-purple-300"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Collapse " : "Show All Availability"}
      </button>
    </section>
  );
};

export default Calender;
