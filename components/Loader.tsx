"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

type Props = {};

function Loader({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="h-[70vh] flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Loading gif positioned in the center of the screen with absolute positioning + Loading text */}
      <div className="relative flex-col flex justify-center">
        <Image
          src="/Loader_white.gif"
          alt="Loading"
          width={400}
          height={200}
          className="z-20"
        />
        <div className="z-20 ml-14 -mt-1 text-xl text-center text-hourrail-orange font-medium">
          Loading...
        </div>
      </div>
    </motion.div>
  );
}

export default Loader;
