import {Floor, Track, ConferenceEvent} from "@/types/timetable";

export const events: {
  day1: ConferenceEvent[],
  day2: ConferenceEvent[],
} = {
  day1: [
    {
      start: "2023-10-27T10:00:00+09:00",
      end: "2023-10-27T11:30:00+09:00",
      title: "Opening & Keynote",
    },
    {
      start: "2023-10-27T12:20:00+09:00",
      end: "2023-10-27T13:40:00+09:00",
      title: "Lunch",
    },
    {
      start: "2023-10-27T14:50:00+09:00",
      end: "2023-10-27T15:30:00+09:00",
      title: "Break",
    },
    {
      start: "2023-10-27T17:00:00+09:00",
      end: "2023-10-27T18:00:00+09:00",
      title: "LT & Closing",
    },
  ],
  day2: [
    {
      start: "2023-10-28T10:00:00+09:00",
      end: "2023-10-28T11:20:00+09:00",
      title: "Opening & Keynote",
    },
    {
      start: "2023-10-28T12:10:00+09:00",
      end: "2023-10-28T13:30:00+09:00",
      title: "Lunch",
    },
    {
      start: "2023-10-28T14:40:00+09:00",
      end: "2023-10-28T15:20:00+09:00",
      title: "Break",
    },
    {
      start: "2023-10-28T16:40:00+09:00",
      end: "2023-10-28T17:40:00+09:00",
      title: "LT & Closing",
    },
    {
      start: "2023-10-28T18:00:00+09:00",
      end: "2023-10-28T19:30:00+09:00",
      title: "Party 🥳",
    },
  ],
};


export const tracks: Track[] = [
  "track 1",
  "track 2",
  "track 3",
  "track 4",
  "track 5",
];