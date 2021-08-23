import React from "react"
import { NextPage } from "next"
import Head from "next/head"
import { Screen } from "../components/Screen/Screen"
import { Button } from "../components/Button/Button"
import { Shell } from "../components/Shell/Shell"
import { useTime } from "../services/time/index"

const Home: NextPage = () => {
  const [health, setHealth] = React.useState(3)
  const [maxHealth, setMaxHealth] = React.useState(3)
  const [happiness, setHappiness] = React.useState(2)
  const [maxHappiness, setMaxHappiness] = React.useState(3)
  const [isAwake, setIsAwake] = React.useState(true)
  const [hungry, setHungry] = React.useState(false)

  const time = useTime()

  React.useEffect(() => {
    time.hour >= 9 && time.hour < 21 ? setIsAwake(true) : setIsAwake(false)
  }, [time.hour])

  return (
    <div className="max-w-full text-center">
      <Head>
        <title>Dino Tamagochi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="max-w-4xl pt-28  m-50 my-20 h-full relative">
          <Shell colour="#F047CB" />
          <div className="block absolute w-full">
            <div className="bg-yellow-bright shadow-inner w-128 rounded-xl z-10 m-auto h-128 flex mt-80">
              <Screen>
                <p className="font-mono text-5xl text-right">
                  DINO
                  <br />
                  TAMAGOTCHI
                </p>
              </Screen>
            </div>
            <div className="flex max-w-screen-sm justify-center m-auto mt-8 pb-20">
              <Button />
              <Button />
              <Button />
            </div>
          </div>
          <div className="border-white border-4 fixed text-white top-40 right-40 w-440 p-8">
            <span>States</span>

            <ul className="text-left">
              <li>Day: {time.day}</li>
              <li>Current day hour: {time.hour}</li>
              <li>Awake/asleep: {isAwake ? "Awake" : "Asleep"}</li>
              <li>Hungry/full: {hungry ? "Hungry" : "Full"}</li>
              <li>
                Hearts: {health}/{maxHealth}
              </li>
              <li>
                Happiness: {happiness}/{maxHappiness}
              </li>
            </ul>
          </div>
        </section>
      </main>
    </div>
  )
}
export default Home
