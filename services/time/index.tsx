import React, { FC } from "react"
import localForage from "localforage"
import { Action, TimeState } from "./types"
import { differenceInCalendarDays, format, parseISO } from "date-fns"

const timeInitialState: TimeState = {
  day: 1,
  hour: 0,
}

const reducer = (state: TimeState, action: Action) => {
  switch (action.type) {
    case "IncrementDay":
      const firstDay = parseISO("2021-08-23") // Temp. Need localforage start date.
      const currentDay = new Date()
      const dayDiff = differenceInCalendarDays(currentDay, firstDay) + 1
      return {
        ...state,
        day: dayDiff,
      }
    case "IncrementHour":
      return {
        ...state,
        hour: parseInt(format(new Date(), "k")),
      }
    default:
      return timeInitialState
  }
}

const TimeStateContext = React.createContext<TimeState | undefined>(undefined)

export const TimeProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(reducer, timeInitialState)

  React.useEffect(() => {
    setInterval(() => {
      dispatch({ type: "IncrementDay" })
      dispatch({ type: "IncrementHour" })
    }, 1000)
  }, [])

  return (
    <TimeStateContext.Provider value={state}>
      {children}
    </TimeStateContext.Provider>
  )
}

export const useTime = (): TimeState => {
  const context = React.useContext(TimeStateContext)
  return context
}
