"use client";

import { SafeUser } from "@/types";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import Image from "next/image";
import Heading from "../Heading";
import HeartButton from "../HeartButton";
import BackButton from "../BackButton";

type Props = {
  title:  { countryName: string; cityName: string},
  locationValue: { countryName: string; cityName: string}
  imageSrc: string;
  id: string;
  currentUser?: SafeUser | null;
};

function ListingHead({
  title,
  locationValue,
  imageSrc,
  id,
  currentUser,
}: Props) {
  const images = [
    "https://cdn.sanity.io/images/l1a05fsu/production/0aca26df26ab8fb51b2984f502c6ad93a36555bb-1500x996.jpg",
    "https://cdn.sanity.io/images/l1a05fsu/production/0aca26df26ab8fb51b2984f502c6ad93a36555bb-1500x996.jpg",
    "https://cdn.sanity.io/images/l1a05fsu/production/0aca26df26ab8fb51b2984f502c6ad93a36555bb-1500x996.jpg",
    "https://cdn.sanity.io/images/l1a05fsu/production/0aca26df26ab8fb51b2984f502c6ad93a36555bb-1500x996.jpg",
  ];
  return (
    <>
      <Heading
        title={`${title.cityName}, ${title.countryName}`}
        subtitle={`Depuis ${locationValue.cityName}`}
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="w-full sm:h-[60vh] h-[36vh] overflow-hidden rounded-xl relative"
      >
        <div className="absolute top-3 left-3 z-[5]">
          <BackButton/>
        </div>
        {/*
        <Carousel showThumbs={false} autoPlay className="h-full w-full">
          {images.map((image, index) => (
            <div key={index}>
              <Image src={image} alt="image" fill className="object-cover" />
            </div>
          ))}
        </Carousel>
        */}
        <Image
          src={imageSrc}
          alt="image"
          fill
          className="object-cover w-full"
        />
        {/*
        <div className="absolute top-5 right-5">
          <HeartButton listingId={id} currentUser={currentUser} />
        </div>
        */}
      </motion.div>
    </>
  );
}

export default ListingHead;
