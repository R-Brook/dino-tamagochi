import React from "react"

export const Screen = ({ children }) => {
  return (
    <div className="bg-green-dull w-440 h-440 m-auto p-8 shadow-screen rounded-2xl">
      {children}
    </div>
  )
}
