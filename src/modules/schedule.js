import getComments from "./getComments";
import scheduleCard from "./scheduleCard"

const schedule = async () => {
  const data = await getComments();
  console.log(data);
  data.forEach((comment) => {
    scheduleCard(comment.username, comment.creation_date, comment.comment);
  });
};

export default schedule;