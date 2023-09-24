import axios, {AxiosResponse} from "axios";
import {Answer, Talk} from "@/types/timetable";

export const SUBMISSION_TYPE_REGULAR_TALK = 2850;
export const SUBMISSION_TYPE_SHORT_TALK = 3340;

export const fetchAnswers = async () => axios.get(
  'https://pretalx.com/api/events/pyconapac2023/answers',
  {
    params: {
      question: 2563, // 発表の言語
      limit: 300,
    },
    headers: {
      Authorization: `Token ${process.env.PRETALX_AUTH_KEY}`,
    },
  },
).then(
  (response: AxiosResponse<{ results: Answer[] }>) => response.data.results
);

export const fetchTalks = async (submissionTypeId: number) =>
  axios.get(
    'https://pretalx.com/api/events/pyconapac2023/talks/',
    {
      params: {
        state: 'confirmed',
        submission_type: submissionTypeId,
        limit: 100,
      },
      headers: {
        Authorization: `Token ${process.env.PRETALX_AUTH_KEY}`,
      },
    },
  ).then(
    (response: AxiosResponse<{ results: Talk[] }>) => response.data.results
  );