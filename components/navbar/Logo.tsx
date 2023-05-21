"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

type Props = {
  Hero?: boolean;
};

function Logo({ Hero }: Props) {
  const router = useRouter();

  return (
    <div onClick={() => router.push("/")}>
        {Hero ? (
          <>
            <Image
              alt='Mood image'
              width={120}
              height={120}
              src='/Logo_hourrail.png'
              className='block md:hidden self-center -ml-2.5 shake hover:rotate-2 transition-all duration-200 cursor-pointer'
            />
            <Image
              alt='Mood image'
              width={150}
              height={150}
              src='/Logo_hourrail.png'
              className='hidden md:block absolute self-center top-0 mx-auto shake hover:rotate-2 transition-all duration-200 cursor-pointer'
            />
          </>
        ) : (
          <>
            <Image
              alt='Mood image'
              width={170}
              height={170}
              src='/Logo_hourrail.png'
              className='hidden sm:block shake hover:rotate-2 transition-all duration-200'
            />

            <Image
              alt='Mood image'
              width={80}
              height={80}
              src='https://cdn.sanity.io/images/l1a05fsu/production/d2eaeb7f80e5211ba75a293cff2e78916265634d-196x210.png'
              className=' block sm:hidden'
            />
          </>
      )}
    </div>
  );
}

export default Logo;
