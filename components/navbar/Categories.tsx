"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { BsSnow } from "react-icons/bs";
import { FaSkiing } from "react-icons/fa";
import {
  GiSleepingBag,
  GiBoatFishing,
  GiCactus,
  GiCastle,
  GiCaveEntrance,
  GiForestCamp,
  GiIsland,
  GiSubway,
  GiSailboat
} from "react-icons/gi";
import { IoDiamond } from "react-icons/io5";
import { MdOutlineVilla } from "react-icons/md";
import { TbBeach, TbMountain, TbPool } from "react-icons/tb";
import CategoryBox from "../CategoryBox";
import Container from "../Container";
import getMoods from "@/app/actions/getMoods";

export const categories = [
  {
    label: "Plage",
    icon: TbBeach,
    description: "This property is close to the beach!",
  },
  {
    label: "Montagne",
    icon: TbMountain,
    description: "This property is in the countryside!",
  },
  {
    label: "Iles",
    icon: GiIsland,
    description: "This property is on an island!",
  },
  {
    label: "Lacs",
    icon: GiBoatFishing,
    description: "This property is near a lake!",
  },
  {
    label: "Ski",
    icon: FaSkiing,
    description: "This property has skiing activies!",
  },
  {
    label: "Chateau",
    icon: GiCastle,
    description: "This property is an ancient castle!",
  },
  {
    label: "Caves",
    icon: GiCaveEntrance,
    description: "This property is in a spooky cave!",
  },
  {
    label: "Camping",
    icon: GiForestCamp,
    description: "This property offers camping activities!",
  },
  {
    label: "Laponie",
    icon: BsSnow,
    description: "This property is in arctic environment!",
  },
  {
    label: "Desert",
    icon: GiCactus,
    description: "This property is in the desert!",
  },
  {
    label: "Voile",
    icon: GiSailboat,
    description: "This property offers sailing activities!",
  },
  {
    label: "Nuit",
    icon: GiSleepingBag,
    description: "This property is near a train station!",
  },
];



type Props = {};

 function Categories({}: Props) {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  //const moods = await getMoods();

  const isMainPage = pathname === "/";

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div className="pt-5 flex flex-row items-center justify-between overflow-x-auto">
        {categories.map((items, index) => (
          <CategoryBox
            key={index}
            icon={items.icon}
            label={items.label}
            selected={category === items.label}
          />
        ))}
      </div>
    </Container>
  );
}

export default Categories;
