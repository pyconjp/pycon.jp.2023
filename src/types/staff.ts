export const DivisionNames = ["core", "chair", "reviewer", "day", "vicechair1", "vicechair2", "supervisor1"] as const;
export type Division = typeof DivisionNames[number];

export type Staff = {
    name: string;
    icon: string;
    twitter: string;
    github: string;
    facebook: string;
    division: Division;
    mastodon: string;
}