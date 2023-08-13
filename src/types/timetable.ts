export type Speaker = {
  code: string,
  name: string,
  biography: string,
  avatar: string,
}

export type MultilingualString<T> = {
  en: T,
  'ja-JP': T,
}

export type Session = {
  code: string,
  speakers: Speaker[],
  created: string,
  title: string,
  'submission_type': MultilingualString<"Keynote" | "Talk">,
  'submission_type_id': number,
  'track': MultilingualString<string>,
  'track_id': number,
  'state': string,
  'abstract': string,
  'description': string,
  'duration': number,
  'slot_count': number,
  'do_not_record': boolean,
  'is_featured': boolean,
  'content_locale': string,
  'slot': {
    room_id: number,
    room: MultilingualString<Track>,
    start: StartDateTime,
    end: string
  },
  'image': string,
  'resources': object,
}

export type Track = "pyconjp_1" | "pyconjp_2" | "pyconjp_3" | "pyconjp_4" | "pyconjp_5"

export type StartDateTime = "2022-10-14T10:00:00+09:00"
  | "2022-10-14T10:30:00+09:00"
  | "2022-10-14T11:30:00+09:00"
  | "2022-10-14T13:00:00+09:00"
  | "2022-10-14T13:50:00+09:00"
  | "2022-10-14T14:40:00+09:00"
  | "2022-10-14T15:30:00+09:00"
  | "2022-10-14T16:20:00+09:00"
  | "2022-10-14T17:10:00+09:00"
  | "2022-10-14T18:00:00+09:00"
  | "2022-10-14T18:30:00+09:00"
  | "2022-10-15T10:00:00+09:00"
  | "2022-10-15T10:30:00+09:00"
  | "2022-10-15T11:30:00+09:00"
  | "2022-10-15T13:00:00+09:00"
  | "2022-10-15T13:50:00+09:00"
  | "2022-10-15T14:40:00+09:00"
  | "2022-10-15T15:10:00+09:00"
  | "2022-10-15T16:00:00+09:00"
  | "2022-10-15T16:50:00+09:00";

export type Floor = '4F' | '20F';