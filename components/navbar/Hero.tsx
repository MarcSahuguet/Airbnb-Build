"use client";

import { SafeUser } from "@/types";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";


type Props = {
  currentUser?: SafeUser | null;
};

function Hero({ currentUser }: Props) {
  return (
    <div className="relative w-full z-10 shadow-sm bg-hero bg-cover bg-top" style={{height:"45vh"}}>  
       
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
            <Logo large />
            <UserMenu currentUser={currentUser} />
          </div>
          
          <div className="flex flex-col md:flex-row gap-3 justify-center">
             {/*
             <Search />
             */}
          </div>
        </div>
        <span className="absolute bottom-20 text-white text-2xl sm:text-4xl font-bold text-center font-barlow ">
            Trouve ta prochaine aventure {" "} sans avion et sans voiture !
          </span>
        </Container>

        <div className="absolute inset-x-0 mx-auto max-w-xs -bottom-5 hover:scale-105 duration-150 transform ">
        <Search />
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
