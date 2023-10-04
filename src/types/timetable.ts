export type Speaker = {
  code: string,
  name: string,
  biography: string,
  avatar: string,
}

export type MultilingualString<T> = {
  en: T,
  'ja-jp': T,
}

export type Slot<T> = {
  room_id: number,
  room: MultilingualString<T>,
  start: string,
  end: string
}

export type Talk = {
  code: string,
  speakers: Speaker[],
  created: string,
  title: string,
  submission_type: MultilingualString<"Keynote" | "Talk">,
  submission_type_id: number,
  track: MultilingualString<string>,
  track_id: number,
  state: string,
  abstract: string,
  description: string,
  duration: number,
  slot_count: number,
  do_not_record: boolean,
  is_featured: boolean,
  content_locale: 'ja-jp' | 'en',
  slot: Slot<"track 1" | "track 2" | "track 3" | "track 4" | "track 5">,
  image: string,
  resources: object,
}

export type Answer = {
  submission: string,
  answer: string,
}

export type Track = "" | "track 1" | "track 2" | "track 3" | "track 4" | "track 5"

export type Day = 'day1' | 'day2';

export type ConferenceEvent = {
  title: string,
  code: "",
  slot: Slot<"">,
}
