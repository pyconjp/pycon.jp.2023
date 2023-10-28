import {Track, ConferenceEvent, Slot} from "@/types/timetable";

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
        end: "2023-10-27T10:30:00+09:00",
        ...eventRoom,
      },
      title: "Opening",
      code: "",
      is_event: true,
      hide_end: true,
    },
    {
      slot: {
        start: "2023-10-27T10:30:00+09:00",
        end: "2023-10-27T11:30:00+09:00",
        ...eventRoom,
      },
      title: "Keynote: Why University Teachers Wrote a Python Textbook? (Hajime Kita)",
      code: "keynote1",
      is_event: true,
      hide_start: true,
      abstract: "As an elective course in the liberal arts and sciences program,\n Kyoto University has held a Python programming course since 2018.\n For this course, we developed a textbook in 2019, and continuously revised\n it. We also made the 2019 and the 2021 editions open to the public\n with the Creative Commons license CC-BY-NC-ND. We obtained various opinions\n that they are good learning material, and\n up to September 2023, we observed more than 1 million downloads.\n In this talk, the speaker explains why we developed a textbook by\n ourselves instead of using already published ones,\n and points in the design of it considering self-learning by university\n students\n as a novice in programming, and to meet a course goal that the learner\n can design, code, and test small Python programs by themselves.",
      speakers: [
        {
          code: 'keynote1_speaker',
          name: 'Hajime Kita',
          biography: 'Hajime Kita received his B.E., M.E., and D. E. degrees all from Kyoto\n University.\n From 1987 to 1997, he was an Assistant Professor at the Faculty of Engineering, Kyoto University.\n From 1997 to 2000, he was an Associate Professor at Interdisciplinary Graduate School of Science and Engineering, Tokyo Institute of Technology.\n From 2000 to 2003, he was a Professor at National Institution for Academic Degrees and University Evaluation.\n From 2003 to 2013, he was a Professor at Academic Center for Computing and Media Study, Kyoto University.\n Since 2013, he has been a Professor at Institute for Liberal Arts and Sciences (ILAS), Kyoto University.\n His research major is System Science and Engineering. In ILAS, he teaches general education courses in informatics including computer programming.\n His research interests are social simulation and general education of informatics in universities including education in computer programming.',
          avatar: '/kita-photo-2020-07-07-trim.jpg',
        }
      ],
    },
    {
      slot: {
        start: "2023-10-27T12:20:00+09:00",
        end: "2023-10-27T13:40:00+09:00",
        ...eventRoom,
      },
      title: "Lunch",
      code: "",
      is_event: true,
    },
    {
      slot: {
        start: "2023-10-27T14:50:00+09:00",
        end: "2023-10-27T15:30:00+09:00",
        ...eventRoom,
      },
      title: "Break",
      code: "",
      is_event: true,
    },
    {
      slot: {
        start: "2023-10-27T17:00:00+09:00",
        end: "2023-10-27T18:00:00+09:00",
        ...eventRoom,
      },
      title: "LT & Closing",
      code: "",
      is_event: true,
    },
  ],
  day2: [
    {
      slot: {
        start: "2023-10-28T10:00:00+09:00",
        end: "2023-10-28T10:20:00+09:00",
        ...eventRoom,
      },
      title: "Opening",
      code: "",
      is_event: true,
      hide_end: true,
    },
    {
      slot: {
        start: "2023-10-28T10:20:00+09:00",
        end: "2023-10-28T11:35:00+09:00",
        ...eventRoom,
      },
      title: "Keynote - Through the looking glass: 10 years of Python Organizing Lessons and Tribulations (Lorena Mesa)",
      code: "keynote2",
      is_event: true,
      hide_start: true,
      abstract: "Community organizing can be a challenge in its own right; discovering trends to educate the community on, empowering those around you to challenge themselves, and more. Over the last 10 years from a beginner engineer to today community organizing has shaped the way not only I connect to the language and community but has fundamentally altered my outlook on career development. Together we shall explore some of these lessons learned and reflect on how we can do more, do better.",
      speakers: [
        {
          code: 'keynote2_speaker',
          name: 'Lorena Mesa',
          biography: 'Political scientist turned coder, Lorena Mesa is a GitHub data engineer, past Director & Chair of the Python Software Foundation, https://joss.theoj.org/about editor, and PyLadies Chicago co-organizer. Lorena\'s time at Obama for America and her subsequent graduate research required her to learn how to transform messy, incomplete data into intelligible analysis on topics like predicting Latinx voter behavior. It\'s this unique background in research and applied mathematics that drove Lorena to pursue a career in engineering and data science. One part activist, one part Star Wars fanatic, and another part [Trekkie](https://www.greggpollack.com/wp-content/uploads/2017/03/lorena_for_twitter.jpg), Lorena abides by the motto to "live long and prosper".',
          avatar: '/lorena_for_twitter.jpg',
        }
      ],
    },
    {
      slot: {
        start: "2023-10-28T12:25:00+09:00",
        end: "2023-10-28T13:30:00+09:00",
        ...eventRoom,
      },
      title: "Lunch",
      code: "",
      is_event: true,
    },
    {
      slot: {
        start: "2023-10-28T14:40:00+09:00",
        end: "2023-10-28T15:20:00+09:00",
        ...eventRoom,
      },
      title: "Break",
      code: "",
      is_event: true,
    },
    {
      slot: {
        start: "2023-10-28T16:40:00+09:00",
        end: "2023-10-28T17:40:00+09:00",
        ...eventRoom,
      },
      title: "LT & Closing",
      code: "",
      is_event: true,
    },
    {
      slot: {
        start: "2023-10-28T18:00:00+09:00",
        end: "2023-10-28T19:30:00+09:00",
        ...eventRoom,
      },
      title: "Party 🥳",
      code: "",
      is_event: true,
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