import axios, {AxiosResponse} from "axios";
import {Answer, ConferenceEvent, Talk} from "@/types/timetable";

export const SUBMISSION_TYPE_REGULAR_TALK = 2850;
export const SUBMISSION_TYPE_SHORT_TALK = 3340;
export const SUBMISSION_TYPE_LT = 2908;
export const SUBMISSION_TYPE_TUTORIAL = 2910;

const EVENT = 'pyconapac2023';

export const fetchSpeechLang = async () => axios.get(
  `https://pretalx.com/api/events/${EVENT}/answers`,
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

export const fetchSlideUrl = async () => axios.get(
  `https://pretalx.com/api/events/${EVENT}/answers`,
  {
    params: {
      question: 2953, // 発表資料へのURL
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
    `https://pretalx.com/api/events/${EVENT}/talks/`,
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

export const getTalk = async (code: string) =>
  axios.get(
    `https://pretalx.com/api/events/${EVENT}/talks/${code}`,
    {
      headers: {
        Authorization: `Token ${process.env.PRETALX_AUTH_KEY}`,
      }
    }
  ).then(
    (response: AxiosResponse<Talk>) => response.data
  );

export const sortTalks = (session1: Talk | ConferenceEvent, session2: Talk | ConferenceEvent) => {
  if (session1.slot.start < session2.slot.start) {
    return -1;
  } else if (session1.slot.start > session2.slot.start) {
    return 1;
  } else {
    if (session1.slot.room["ja-jp"] < session2.slot.room["ja-jp"]) {
      return -1;
    } else if (session1.slot.room["ja-jp"] > session2.slot.room["ja-jp"]) {
      return 1;
    } else {
      return 0;
    }
  }
}
