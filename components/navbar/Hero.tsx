"use client";

import { SafeUser } from "@/types";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import { FaInstagram } from "react-icons/fa";
import { BiSearch } from "react-icons/bi";


type Props = {
  currentUser?: SafeUser | null;
};

function Hero({ currentUser }: Props) {
  return (
    <div className="relative w-full z-10 shadow-sm bg-hero bg-cover bg-top" style={{height:"45vh"}}>  
       
        <Container>
        <div className="py-4 gap-y-12 flex flex-col justify-center">
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <FaInstagram className="text-3xl text-red-500 md:hidden" />
            {/* Keep the logo centered */}
            
            <Logo large />
            <UserMenu currentUser={currentUser} />
          </div>
          <p className="text-white text-2xl sm:text-4xl font-bold text-center">
            Trouve ta prochaine aventure en train avec Hourrail
          </p>
          <div className="flex flex-col md:flex-row gap-3 justify-center">
             <Search />
             <Search />
          </div>
        </div>
        
        </Container>
     
        <button className="bg-hourrail-orange text-white absolute inset-x-0 mx-auto max-w-xs -bottom-5 hover:scale-105 duration-150 transform shadow-md hover:shadow-hourrail-smooth font-bold py-2.5 px-8 rounded-full">Rechercher
        <BiSearch className="text-lg text-white top-[31%] left-4 absolute" />
        </button>
    </div>
  );
}

export default Hero;
