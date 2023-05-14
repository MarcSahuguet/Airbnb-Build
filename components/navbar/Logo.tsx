"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  large?: boolean;
};

function Logo({large }: Props) {
  const router = useRouter();

  return (
    <div onClick={() => router.push("/")}>
        {large ? (
              <Image
              alt='Mood image'
              width={140}
              height={140}
              src='/Logo_hourrail.png'
              className='block self-center -ml-2 hover:animate-waving hover:rotate-2 transition-all duration-200 cursor-pointer'
            />
        ) : (
          <>
            <Image
              alt='Mood image'
              width={160}
              height={160}
              src='https://cdn.sanity.io/images/l1a05fsu/production/ad2c9e0dc5b4e0777caa378e5a5cf8a7b71ae94e-706x211.png'
              className='hidden sm:block hover:animate-waving hover:rotate-2 transition-all duration-200'
            />

            <Image
              alt='Mood image'
              width={80}
              height={80}
              src='https://cdn.sanity.io/images/l1a05fsu/production/d2eaeb7f80e5211ba75a293cff2e78916265634d-196x210.png'
              className='mx-auto block sm:hidden'
            />
          </>
      )}
    </div>
  );
}

export default Logo;
