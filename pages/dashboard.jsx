import Image from "next/image";
import { motion } from "framer-motion";
import Head from "next/head";
import { signOut, useSession } from "next-auth/react";
import UserProfile from "../components/Profile";
import Link from "next/link";
// import atm from "../public/atm.svg";

export default function Component() {
  const { data: session } = useSession();

  return (
    <>
      <Head>
        <title>Dashboard | GLERA</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <div className="text-center h-screen justify-center items-center">
        <h3> Welcom {session.user.name}</h3>
        <h1>DASHBOARD STILL UNDER CONSTRUCTION.</h1>
      </div>
    </>
  );
}
