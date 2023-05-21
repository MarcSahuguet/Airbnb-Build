"use client";

import useCountries from "@/hook/useCountries";
import { Itinerary, SafeUser } from "@/types";
import dynamic from "next/dynamic";
import React from "react";
import { IconType } from "react-icons";
import ListingCategory from "./ListingCategory";
import Sleep from "../Sleep";
import Offers from "../Offers";
import Step from "../Step";
import linkifyHtml from "linkify-html";

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
  itinerary: Itinerary;
};

function ListingInfo({
  description,
  guestCount,
  roomCount,
  bathroomCount,
  category,
  itinerary,
  steps,
}: Props) {
  const { getByValue } = useCountries();
  const coordinates = getByValue(itinerary.cityEnd.cityName)?.latlng;
  const countries = [
    ...new Set([
      ...new Set(
        itinerary.stepsOptions[0].steps.map((step: any) => step.stepCityStart.countryName)
      ),
      ...new Set(
        itinerary.stepsOptions[0].steps.map((step: any) => step.stepCityEnd.countryName)
      ),
    ]),
  ];

  return (
    <div className="col-span-4 flex flex-col gap-8">
      <div className="flex flex-row gap-6">

        <div className="text-lg font-semibold flex flex-col gap-1">
          <div>Pays traversés</div>
          <div className="flex flex-row text-sm gap-4 font-light text-neutral-500">
            {countries.map(
              (country, index) =>
                country +
                (index !== countries.length - 1 ? ', ' : '')
            )}
          </div>
        </div>

        <div className="text-lg font-semibold flex flex-col items-start gap-1">
          <div>Type de séjour</div>
          <div className="text-sm flex flex-row gap-4 font-light text-neutral-500">
            { itinerary.moods.slice(0,2).map((mood) => mood.name).join(", ")}
          </div>
        </div>
      </div>
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
