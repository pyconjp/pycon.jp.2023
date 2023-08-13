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
      {title: "ABOUT.COC", url: "/coc"},
      {title: "ABOUT.VENUE", url: "/", isComingSoon: true},
    ],
  },
  {
    title: "EVENTS",
    children: [
      {title: "EVENTS.TIMETABLE", url: "/", isComingSoon: true},
      {title: "EVENTS.EVENTS", url: "/", isComingSoon: true},
    ],
  },
  {
    title: "SPONSOR",
    children: [{title: "SPONSOR.SPONSOR_LIST", url: "/", isComingSoon: true}],
  },
  {
    title: "STAFF",
    children: [{title: "STAFF.STAFF", url: "/staff"}],
  },
];

export default menu;
