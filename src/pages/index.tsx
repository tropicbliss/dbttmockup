import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { api } from "~/utils/api";
import { useState } from "react";
import { Dialog } from "@headlessui/react";

const Home: NextPage = () => {
  return (
    <main>
      <h1></h1>
    </main>
  );
};

export default Home;
