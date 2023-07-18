export type Sponsor = {
  category: "diamond" | "platinum" | "gold" | "silver" | "bronze" | "special" | "patron"
  name: string;
  logo: string;
  url: string;
  description: string;
  width: number;
  height: number;
};
