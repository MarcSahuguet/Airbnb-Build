"use client";

import { Itinerary, SafeUser } from "@/types";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Link from "next/link";
import CitySelectTemp from "../inputs/CitySelectTemp";
import Image from "next/image";

type Props = {
  currentUser?: SafeUser | null;
  citiesStart: Itinerary["cityEnd"][];
  citiesEnd: Itinerary["cityEnd"][];
};

function Hero({ currentUser, citiesEnd, citiesStart }: Props) {

  return (
    <div className="relative w-full z-10 shadow-sm bg-hero bg-cover bg-top sm:bg-center bg-blend-darken" style={{height:"45vh"}}>
       <div className="absolute -z-10 inset-0 w-full h-full bg-gray-800/30"/>
        <Container>
        <div className="py-4 gap-y-10 flex flex-col justify-center">
          <div className="relative flex flex-row items-center justify-between gap-3 md:gap-0">
            <div className="flex flex-row items-center gap-2">
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
        
        </Container>

        <div className="absolute flex flex-col inset-x-0 mx-auto max-w-xs md:max-w-xl bottom-6 gap-5 ">
          <span className="-z-10 -px-3 text-white text-2xl justify-center sm:text-4xl font-bold text-center font-default italic max-w-3xl ">
            Trouve ta prochaine aventure {" "} sans avion et sans voiture !
          </span>
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
