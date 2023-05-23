"use client";

import { usePathname, useSearchParams } from "next/navigation";
//lucide icons
import { Sailboat, Snowflake, Mountain, PartyPopper, PalmtreeIcon, Castle, TreeDeciduous, Backpack, CalendarHeart, MoonStar } from "lucide-react";
import CategoryBox from "../CategoryBox";
import Container from "../Container";
import getMoods from "@/app/actions/getMoods";
import { useEffect, useRef } from "react";


export const categories = [
  {
    label: "Plage",
    slug: "plage",
    icon: PalmtreeIcon,
    description: "Destinations à la plage",
  },
  {
    label: "Montagne",
    slug: "montagne",
    icon: Mountain,
    description: "Destinations à la montagne",
  },
  {
    label: "Festif",
    slug: "festif",
    icon: PartyPopper,
    description: "Destinations festives",
  },
  {
    label: "Patrimoine",
    slug: "villes-et-patrimoine",
    icon: Castle,
    description: "Destinations avec un patrimoine riche",
  },
  {
    label: "Campagne",
    slug: "campagne",
    icon: TreeDeciduous,
    description: "Destinations à la campagne",
  },
  {
    label: "Polaire",
    slug: "polaire",
    icon: Snowflake,
    description: "Destinations avec un froid polaire",
  },
  {
    label: "Weekend",
    slug: "week-end",
    icon: Backpack,
    description: "Destinations pour un week-end",
  },
  {
    label: "Voile",
    slug: "voile",
    icon: Sailboat,
    description: "Destinations accessibles en voilier",
  },
  {
    label: "Train de nuit",
    slug: "train-de-nuit",
    icon: MoonStar,
    description: "Destinations accessibles en train de nuit",
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
        className="pt-5 flex flex-row items-center justify-between overflow-x-auto md:overflow-x-clip snap-x scrollbar-none"
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
            description={items.description}
          />
        ))}
      </div>
    </Container>
  );
}

export default Categories;
