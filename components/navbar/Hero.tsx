"use client";

import { Itinerary, SafeUser } from "@/types";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import qs from "query-string";
import Link from "next/link";
import CitySelect from "../inputs/CitySelect";
import { useCallback, useState } from "react";
import CitySelectTemp from "../inputs/CitySelectTemp";
import { useRouter, useSearchParams } from "next/navigation";


type Props = {
  currentUser?: SafeUser | null;
  citiesStart: Itinerary["cityEnd"][];
  citiesEnd: Itinerary["cityEnd"][];
};

function Hero({ currentUser, citiesEnd, citiesStart }: Props) {

  return (
    <div className="relative w-full z-10 shadow-sm bg-hero bg-cover bg-top sm:bg-center backdrop-brightness-75" style={{height:"45vh"}}>
      
        <Container>
        <div className="py-4 gap-y-10 flex flex-col justify-center">
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <div className="flex md:hidden flex-row items-center gap-2">
              <Link href="https://www.instagram.com/hourrail/">
                <FaInstagram className="text-3xl text-white"/>
              </Link>
              <Link href="https://www.linkedin.com/company/hourrail/">
                <FaLinkedin className="text-3xl text-white" href="https://www.linkedin.com/company/hourrail/"/>
              </Link>
            </div>
            <Logo Hero />
            <UserMenu currentUser={currentUser} />
          </div>
          
          <div className="flex flex-col md:flex-row gap-3 justify-center">
             {/*
             <Search />
             */}
          </div>
        </div>
        <span className="absolute left-0 right-0 m-auto bottom-28 md:bottom-20 text-white text-xl sm:text-4xl font-bold text-center font-integraBold max-w-3xl ">
            Trouve ta prochaine aventure {" "} sans avion et sans voiture
          </span>
        </Container>

        <div className="absolute inset-x-0 mx-auto max-w-xs -bottom-5 hover:scale-105 duration-150 transform cursor-pointer">
        {/*
        <Search />
        */}
        <CitySelectTemp
        citiesStart={citiesStart}
        citiesEnd={citiesEnd}
       
      />
          </div>
        {/*
          <button className="bg-hourrail-orange text-white absolute inset-x-0 mx-auto max-w-[13rem] -bottom-5 hover:scale-105 duration-150 transform shadow-md hover:shadow-hourrail-smooth font-bold py-2.5 px-6 rounded-full">Rechercher
          <BiSearch className="text-lg text-white top-[31%] left-4 absolute" />
          </button>
        */}
    </div>
  );
}

export default Hero;
