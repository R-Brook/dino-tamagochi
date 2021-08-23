export interface TimeState {
  day: number
  hour: number
}

export type Action = { type: "IncrementDay" } | { type: "IncrementHour" }
