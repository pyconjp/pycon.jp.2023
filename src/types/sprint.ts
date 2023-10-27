export type OrderPosition = {
  "id": number,
  "order": string,
  "canceled": boolean,
  "item": number,
  "answers": Answer[],
}

export type Answer = {
  "question": number,
  "question_identifier": string,
  "answer": string,
}

export type SprintTopic = {
  subject?: string,
  name?: string,
}