import exp from "constants";

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
  'content_locale': 'ja-JP' | 'en',
  'slot': {
    room_id: number,
    room: MultilingualString<Track>,
    start: string,
    end: string
  },
  'image': string,
  'resources': object,
}

export type Track = "track 1" | "track 2" | "track 3" | "track 4" | "track 5"

export type Day = 'day1' | 'day2';

export type Floor = '4F' | '20F';