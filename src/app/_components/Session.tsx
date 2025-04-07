import Button from "./Button";
import Calender from "./Calender";

const Session = () => {
  return (
    <section
      className="flex flex-col items-center justify-center max-w-3/4 gap-6 
    p-6 text-background bg-foreground rounded-2xl"
    >
      <h1 className="text-2xl font-semibold">Schedule a session with Eric</h1>
      <Calender />
      <Button className="bg-purple-500 shadow-2xl border border-">
        Book a Session
      </Button>
    </section>
  );
};

export default Session;
