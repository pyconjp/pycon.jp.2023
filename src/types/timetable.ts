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

export interface Session {
  code: string,
  title: string,
  speakers?: Speaker[],
  abstract?: string,
  description?: string,
  content_locale?: 'ja-jp' | 'en',
  slot: Slot<Track>,
  is_event?: boolean,
  hide_end?: boolean,
  hide_start?: boolean,
}

export interface Talk extends Session {
  slot: Slot<"track 1" | "track 2" | "track 3" | "track 4" | "track 5">,
  speakers: Speaker[],
  track_id: number,
  abstract: string,
  description: string,
  duration: number,
  content_locale: 'ja-jp' | 'en',
  image: string,
  is_event: undefined,
  hide_end: undefined,
  hide_start: undefined,
  // slot_count: number,
  // do_not_record: boolean,
  // is_featured: boolean,
  // resources: object,
  // created: string,
  // submission_type: MultilingualString<"Keynote" | "Talk">,
  // submission_type_id: number,
  // state: string,
}

export interface ConferenceEvent extends Session {
  slot: Slot<"">,
  hide_end?: true,
  hide_start?: true,
  is_event: true,
}

export type Answer = {
  submission: string,
  answer: string,
}

export type Track = "" | "track 1" | "track 2" | "track 3" | "track 4" | "track 5"

export type Day = 'day1' | 'day2';