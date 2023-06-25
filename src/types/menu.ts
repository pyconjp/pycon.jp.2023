export type Menus = Menu[];

export type Menu = {
  category: string;
  title: string;
  children: Menuchildren[];
}

export type Menuchildren = {
  title: string;
  link: string;
  innerlink: boolean;
}