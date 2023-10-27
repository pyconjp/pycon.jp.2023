import axios, {AxiosResponse} from "axios";
import {OrderPosition, Answer, SprintTopic} from "@/types/sprint";

const ORGANIZER: string = 'pyconjp'
const EVENT: string = '2023-apac';
const Q_SPRINT_TOPIC: number = 96896
const Q_SPRINT_LEADER_NAME: number = 97463;
const SPRINT_ITEM_ID = 384016;

export const fetchOrderPositions = () => axios.get(
  `https://pretix.eu/api/v1/organizers/${ORGANIZER}/events/${EVENT}/orderpositions`,
  {
    params: {
      limit: 300,
      page: 1,
      order__status: "p",
      item: SPRINT_ITEM_ID
    },
    headers: {
      'Authorization': `Token ${process.env.PRETIX_API_KEY}`,
      'Content-Type': 'application/json',
    }
  }
).then(
  (response: AxiosResponse<{ results: OrderPosition[] }>) => response.data.results
);

export const getSprints = (orderPositions: OrderPosition[]) => {
  let sprints: SprintTopic[] = [];
  for (let orderPosition of orderPositions) {
    if (orderPosition.answers.length > 0) {
      sprints.push(extractSprint(orderPosition.answers));
    }
  }
  return sprints;
}

const extractSprint = (answers: Answer[]) => {
  let sprintTopic: SprintTopic = {};
  // let isLeader = false;
  for (const answer of answers) {
    if (answer.question == Q_SPRINT_LEADER_NAME) {
      sprintTopic.name = answer.answer;
    } else if (answer.question == Q_SPRINT_TOPIC) {
      // isLeader = true;
      sprintTopic.subject = answer.answer;
    }
  }

  return sprintTopic;
}