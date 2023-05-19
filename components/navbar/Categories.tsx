"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { FaSkiing } from "react-icons/fa";
import { GiForestCamp } from "react-icons/gi";
//lucide icons
import { Sailboat, Snowflake, Mountain, IceCream, PalmtreeIcon, Castle, BedIcon, Fish, CalendarHeart } from "lucide-react";
import CategoryBox from "../CategoryBox";
import Container from "../Container";
import getMoods from "@/app/actions/getMoods";
import { useEffect, useRef } from "react";

export const categories = [
  {
    label: "Plage",
    slug: "plage",
    icon: IceCream,
    description: "This property is close to the beach!",
  },
  {
    label: "Montagne",
    slug: "montagne",
    icon: Mountain,
    description: "This property is in the countryside!",
  },
  {
    label: "Iles",
    slug: "iles",
    icon: PalmtreeIcon,
    description: "This property is on an island!",
  },
  {
    label: "Lacs",
    slug: "lacs",
    icon: Fish,
    description: "This property is near a lake!",
  },
  {
    label: "Ski",
    slug: "ski",
    icon: FaSkiing,
    description: "This property has skiing activies!",
  },
  {
    label: "Chateau",
    slug: "chateau",
    icon: Castle,
    description: "This property is an ancient castle!",
  },
  {
    label: "Camping",
    slug: "camping",
    icon: GiForestCamp,
    description: "This property offers camping activities!",
  },
  {
    label: "Laponie",
    slug: "polaire",
    icon: Snowflake,
    description: "This property is in arctic environment!",
  },
  {
    label: "Weekend",
    slug: "week-end",
    icon: CalendarHeart,
    description: "This property is accessible in a weekend!",
  },
  {
    label: "Voile",
    slug: "voile",
    icon: Sailboat,
    description: "This property offers sailing activities!",
  },
  {
    label: "Nuit",
    slug: "train-de-nuit",
    icon: BedIcon,
    description: "This property is near a train station!",
  },
];



type Props = {};

 function Categories({}: Props) {
  const params = useSearchParams();
  const category = params?.get("category");
  const pathname = usePathname();
  //const moods = await getMoods();
  const containerRef = useRef<HTMLDivElement>(null);
  const isMainPage = pathname === "/";

  useEffect(() => {
    if (containerRef.current && category) {
      const selectedCategory = document.getElementById(category);
      if (selectedCategory) {
        selectedCategory.scrollIntoView({ block: "nearest", inline: "start", behavior: "smooth" });
      }
    }
  }, [category]);

  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="pt-5 flex flex-row items-center justify-between overflow-x-auto snap-x scrollbar-none"
        ref={containerRef}
        style={{ scrollSnapType: "x mandatory" }}

      >
        {categories.map((items, index) => (
          <CategoryBox
            key={index}
            icon={items.icon}
            slug={items.slug}
            label={items.label}
            selected={category === items.slug}
            id={items.slug} 
          />
        ))}
      </div>
    </Container>
  );
}

export default Categories;
