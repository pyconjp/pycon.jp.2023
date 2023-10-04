import { Track, ConferenceEvent, Slot } from "@/types/timetable";

const eventRoom: Omit<Slot<"">, 'start' | 'end'> = {
  room_id: 0,
  room: {
    "ja-jp": "",
    en: "",
  },
}

export const events: {
  day1: ConferenceEvent[],
  day2: ConferenceEvent[],
} = {
  day1: [
    {
      slot: {
        start: "2023-10-27T10:00:00+09:00",
        end: "2023-10-27T11:30:00+09:00",
        ...eventRoom,
      },
      title: "Opening & Keynote",
      code: "",
    },
    {
      slot: {
        start: "2023-10-27T12:20:00+09:00",
        end: "2023-10-27T13:40:00+09:00",
        ...eventRoom,
      },
      title: "Lunch",
      code: "",
    },
    {
      slot: {
        start: "2023-10-27T14:50:00+09:00",
        end: "2023-10-27T15:30:00+09:00",
        ...eventRoom,
      },
      title: "Break",
      code: "",
    },
    {
      slot: {
        start: "2023-10-27T17:00:00+09:00",
        end: "2023-10-27T18:00:00+09:00",
        ...eventRoom,
      },
      title: "LT & Closing",
      code: "",
    },
  ],
  day2: [
    {
      slot: {
        start: "2023-10-28T10:00:00+09:00",
        end: "2023-10-28T11:20:00+09:00",
        ...eventRoom,
      },
      title: "Opening & Keynote",
      code: "",
    },
    {
      slot: {
        start: "2023-10-28T12:10:00+09:00",
        end: "2023-10-28T13:30:00+09:00",
        ...eventRoom,
      },
      title: "Lunch",
      code: "",
    },
    {
      slot: {
        start: "2023-10-28T14:40:00+09:00",
        end: "2023-10-28T15:20:00+09:00",
        ...eventRoom,
      },
      title: "Break",
      code: "",
    },
    {
      slot: {
        start: "2023-10-28T16:40:00+09:00",
        end: "2023-10-28T17:40:00+09:00",
        ...eventRoom,
      },
      title: "LT & Closing",
      code: "",
    },
    {
      slot: {
        start: "2023-10-28T18:00:00+09:00",
        end: "2023-10-28T19:30:00+09:00",
        ...eventRoom,
      },
      title: "Party 🥳",
      code: "",
    },
  ],
};


export const tracks: { label: string, value: Track }[] = [
  { label: "#pyconapac_1", value: "track 1" },
  { label: "#pyconapac_2", value: "track 2" },
  { label: "#pyconapac_3", value: "track 3" },
  { label: "#pyconapac_4", value: "track 4" },
  { label: "#pyconapac_5", value: "track 5" },
];