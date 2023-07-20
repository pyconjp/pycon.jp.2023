type Link = {
  title: string;
  url: string;
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
      { title: "ABOUT.VENUE", url: "/" },
    ],
  },
  {
    title: "EVENTS",
    children: [
      { title: "EVENTS.TIMETABLE", url: "/" },
      { title: "EVENTS.EVENTS", url: "/" },
    ],
  },
  {
    title: "SPONSOR",
    children: [{ title: "SPONSOR.SPONSOR_LIST", url: "/" }],
  },
  {
    title: "CONTENTS",
    children: [
      { title: "CONTENTS.COMMUNITIES", url: "/" },
      { title: "CONTENTS.BEGINNERS", url: "/" },
    ],
  },
  {
    title: "STAFF",
    children: [{ title: "STAFF.STAFF", url: "/staff" }],
  },
];

export default menu;
