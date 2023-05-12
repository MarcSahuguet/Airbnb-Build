"use client";

import useCountries from "@/hook/useCountries";
import { SafeUser } from "@/types";
import dynamic from "next/dynamic";
import React from "react";
import { IconType } from "react-icons";
import ListingCategory from "./ListingCategory";
import Sleep from "../Sleep";
import Offers from "../Offers";
import Step from "../Step";

const Map = dynamic(() => import("../Map"), {
  ssr: false,
});

type Props = {
  //user: SafeUser;
  description?: string;
  guestCount?: number;
  roomCount?: number;
  bathroomCount?: number;
  steps: Step[];
  category:
    | {
        icon: IconType;
        label: string;
        description: string;
      }
    | undefined;
  locationValue: string;
};

function ListingInfo({
  description,
  guestCount,
  roomCount,
  bathroomCount,
  category,
  locationValue,
  steps,
}: Props) {
  const { getByValue } = useCountries();
  const coordinates = getByValue(locationValue)?.latlng;

  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <div className=" text-xl font-semibold flex flex-row items-center gap-2">
          <div>Proposé par</div>
        </div>
        <div className="flex flex-row items-center gap-4 font-light text-neutral-500">
          <p>{guestCount} temps</p>
          <p>{roomCount} prix</p>
          <p>{bathroomCount} type couchette</p>
        </div>
      </div>
      <hr />
      
      {steps.map((step) => (
        <Step
          key={step._id}
          stepCityStart={step.stepCityStart}
          stepCityEnd={step.stepCityEnd}
          transportMethod={step.transportMethod}
          stepTime={step.stepTime}
          bookingLink={step.bookingLink} 
        />
      ))}
      <hr />
      <div className="flex flex-col">
        <p className="text-4xl font-bold text-hourrail-orange">
          Iti<span className="text-black">nérail</span>
        </p>
        <p className="text-neutral-500 pt-3">
        Les temps de trajet sont une estimation et peuvent varier.
        Chaque lien de réservation renvoie vers le site qui nous
        semble être le plus approprié pour le trajet concerné.
        Cependant, il n&apos;est probablement pas adapté si vous
        possédez un pass Interrail. Tous nos conseils à ce sujet
        sur cette{' '}
        <a
          href='https://youtu.be/2gQPsQNwbog?t=147'
          target='_blank'
          rel='noopener noreferrer'
          className='text-hourrail-orange hover:text-hourrail-rouge-orange'
        >
          vidéo
        </a>
        . Pour certains liens, nous recevons une commission à
        chaque fois que vous réservez un billet. Cela nous
        permettra de pérenniser HOURRAIL !
        </p>
        <p className="text-black font-bold underline pt-3 cursor-pointer">
          En savoir plus
        </p>
      </div>
      <hr />
      <p className="text-lg font-light text-neutral-500">{description}</p>
      <hr />
      {/* <Sleep /> */}
      <hr />
      {/* <Offers /> 
      <hr />
      <p className="text-xl font-semibold">{`Where you’ll be`}</p>
      <Map center={coordinates} locationValue={locationValue} />
      */}
    </div>
  );
}

export default ListingInfo;
