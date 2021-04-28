import React from "react";
import { NextPage } from "next";
import Head from "next/head";
import { Screen } from "../components/Screen/Screen";
import { Button } from "../components/Button/Button";
import { Shell } from "../components/Shell/Shell";

const Home: NextPage = () => {
  return (
    <div className="max-w-full text-center">
      <Head>
        <title>Dino Tamagochi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <section className="max-w-4xl pt-28  m-auto my-20 h-full relative">
          <Shell colour="#F047CB" />
          <div className="block absolute w-full">
            <div className="bg-yellow-bright shadow-inner w-128 rounded-xl z-10 m-auto h-128 flex mt-80">
              <Screen>
                <span className="font-mono text-5xl">TAMAGOTCHI</span>
              </Screen>
            </div>
            <div className="flex max-w-screen-sm justify-center m-auto mt-8 pb-20">
              <Button />
              <Button />
              <Button />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
export default Home;
