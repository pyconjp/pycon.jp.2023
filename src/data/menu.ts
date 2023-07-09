type Link = {
  title: string,
  url: string,
  isDisabled?: boolean;
}

type Menu = {
  title: string,
  children: Link[],
}

const menu: Menu[] = [
  {
    title: "ABOUT",
    children: [
      {title: 'ABOUT.COC', url: '/coc'},
      {title: 'ABOUT.VENUE', url: '/'},
    ],
  },
  {
    title: "EVENTS",
    children: [
      {title: 'EVENTS.TIMETABLE', url: '/'},
      {title: 'EVENTS.EVENTS', url: '/'},
    ],
  },
  {
    title: "SPONSOR",
    children: [
      {title: 'SPONSOR.SPONSOR_LIST', url: '/'},
    ],
  },
  {
    title: "CONTENTS",
    children: [
      {title: 'CONTENTS.COMMUNITIES', url: '/'},
      {title: 'CONTENTS.BEGINNERS', url: '/'},
    ],
  },
  {
    title: "STAFF",
    children: [
      {title: 'STAFF.STAFF', url: '/'},
    ],
  },
];

export default menu;