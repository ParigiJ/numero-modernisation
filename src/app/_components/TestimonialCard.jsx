import Image from "next/image";

const TestimonialCard = ({ quote, logo, name, title, affiliation, pic }) => {
  return (
    <section className="w-full bg-white rounded-lg shadow-lg p-6 my-8 flex flex-col justify-between">
      <div className="flex flex-col md:flex-row gap-6 items-start md:h-60">
        <div className="flex flex-col items-center w-full md:w-1/3 text-center">
          <Image
            src={pic}
            alt={name}
            width={96}
            height={96}
            className="rounded-full mb-2"
          />
          <h3 className="text-lg font-bold text-background">{name}</h3>
          {pic ? (
            <Image
              src={logo}
              alt={`${name} logo`}
              width="auto"
              height="auto"
              className="bg-blue-100 mt-2 "
            />
          ) : null}
        </div>

        <div className="flex flex-col w-full md:w-2/3 text-left justify-center">
          <p className="text-gray-600 font-medium">{title}</p>
          <p className="text-gray-600 mb-4">{affiliation}</p>
          <p className="text-gray-800 text-lg italic">"{quote}"</p>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCard;
