type Link = {
  title: string;
  url: string;
  isComingSoon?: boolean;
  isDisabled?: boolean;
};

export type Menu = {
  title: string;
  children: Link[];
};

export const menu: Menu[] = [
  {
    title: "ABOUT",
    children: [
      { title: "ABOUT.COC", url: "/coc" },
      { title: "ABOUT.VENUE", url: "/venue" },
    ],
  },
  {
    title: "EVENTS",
    children: [
      { title: "EVENTS.TIMETABLE", url: "/timetable" },
      { title: "EVENTS.TUTORIAL", url: "/tutorial" },
      { title: "EVENTS.LIGHTNING_TALK", url: "/lightning-talk" },
      { title: "EVENTS.POSTER_SESSION", url: "/poster" },
      { title: "EVENTS.SPRINT", url: "/sprint" },
    ],
  },
  {
    title: "SPONSOR",
    children: [{ title: "SPONSOR.SPONSOR_LIST", url: "/sponsor" }],
  },
  {
    title: "CONTENTS",
    children: [
      { title: "CONTENTS.NOC", url: "/noc", isComingSoon: false },
    ],
  },
  {
    title: "STAFF",
    children: [{ title: "STAFF.STAFF", url: "/staff" }],
  },
];

export default menu;
