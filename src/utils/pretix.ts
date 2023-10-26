import axios, {AxiosResponse} from "axios";
import {OrderPosition, Answer, SprintTopic} from "@/types/sprint";

const ORGANIZER: string = 'pyconjp'
const EVENT: string = '2023-apac';
const Q_SPRINT_TOPIC: number = 96896
const Q_SPRINT_LEADER_NAME: number = 97463;

export const fetchOrderPositions = async () => axios.get(
  `https://pretix.eu/api/v1/organizers/${ORGANIZER}/events/${EVENT}/orderpositions`,
  {
    params: {
      limit: 300,
      page: 1,
      order__status: "p",
      item: `${process.env.SPRINT_ITEM_ID}`
    },
    headers: {
      'Authorization': `Token ${process.env.PRETIX_API_KEY}`,
      'Content-Type': 'application/json',
    }
  }
).then(
  (response: AxiosResponse<{ results: OrderPosition[] }>) => response.data.results
);

export const getAnswers = (orderPositions: OrderPosition[]) => {
  let answers: Answer[] = [];
  for (let orderPosition of orderPositions) {
    for (const answer of orderPosition.answers) {
      answers.push(answer);
    }
  }
  return answers;
}

export const getSplintTopics = (answers: Answer[]) => {
  let sprintTopics: SprintTopic[] = [];
  // let isLeader = false;
  for (const answer of answers) {
    let sprintTopic: SprintTopic = {};
    if (answer.question == Q_SPRINT_LEADER_NAME) {
      sprintTopic.name = answer.answer;
    } else if (answer.question == Q_SPRINT_TOPIC) {
      // isLeader = true;
      sprintTopic.topic = answer.answer;
    }

    // if(isLeader) {
    //
    // }
  }

  return sprintTopics;
}