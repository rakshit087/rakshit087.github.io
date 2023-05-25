import type { NextPage } from "next";
import Head from "next/head";
import { About } from "../sections/About";
import { Intro } from "../sections/Intro";
import { Navbar } from "../layouts/Navbar";
import { Projects } from "../sections/Projects";
import { Connect } from "../sections/Connect";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Rakshit</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="scroll-smooth">
        <Intro />
        <About />
        <Projects />
        <Connect />
      </main>
    </>
  );
};

export default Home;
