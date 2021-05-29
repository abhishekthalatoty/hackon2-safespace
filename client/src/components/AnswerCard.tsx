import { Typography } from "@material-ui/core";

export const AnswerCard = ({ answer }) => {
  return (
    <>
      <Typography
        style={{ textAlign: "left", paddingTop: 10, color: "#565656" }}
      >
        answered by {answer.userDisplayName}
      </Typography>
      <Typography
        style={{ paddingTop: 10, textAlign: "left", paddingBottom: 10 }}
      >
        {answer.body}
      </Typography>

      <hr style={{ width: "75%" }} />
    </>
  );
};
