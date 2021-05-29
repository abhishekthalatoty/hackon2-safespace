import { makeStyles } from "@material-ui/core/styles";
import { EventCard } from "./EventCard";

const sessions = [
  {
    topic: "Religion",
    now: true,
    desc: "People from different backgrounds can join and discuss about religion",
  },
  {
    topic: "Race",
    desc: "People from different backgrounds can join and discuss about religion",
  },
  {
    topic: "Gender",
    desc: "People from different backgrounds can join and discuss about religion",
  },
  {
    topic: "Nation",
    desc: "People from different backgrounds can join and discuss about religion",
  },
];

export const RightSection = () => {
  return (
    <div>
      {sessions.map((session, idx) => (
        <EventCard key={idx} session={session} />
      ))}
    </div>
  );
};
