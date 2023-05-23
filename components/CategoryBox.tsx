"use client";

import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import React, { useCallback } from "react";
import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  label: string;
  slug: string;
  selected?: boolean;
  id?: string;
  description: string;
};

function CategoryBox({ icon: Icon, label, slug, selected, id, description }: Props) {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
    let currentQuery = {};

    if (params) {
      currentQuery = qs.parse(params.toString());
    }

    const updatedQuery: any = {
      ...currentQuery,
      category: slug,
    };

    if (params?.get("category") === slug) {
      delete updatedQuery.category;
    }

    const url = qs.stringifyUrl(
      {
        url: "/",
        query: updatedQuery,
      },
      { skipNull: true }
    );

    router.push(url);
  }, [slug, params, router]);

  return (
    <div
      id={id}
      data-toggle="tooltip" data-placement="left" title={description}
      onClick={handleClick}
      className={`group relative flex flex-col items-center justify-center gap-2 p-3 min-w-[70px] border-b-2 hover:text-hourrail-orange transition cursor-pointer ${
        selected ? "border-b-hourrail-orange" : "border-transparent"
      } ${selected ? "text-hourrail-orange" : "text-neutral-500"}`}
    >
      <Icon size={26} />
      <div className="font-medium text-xs whitespace-nowrap">{label}</div>
        <div className="opacity-0 w-44 bg-black text-white text-center text-xs rounded-lg py-2 absolute z-20 group-hover:opacity-100 delay-700 bottom-1/2 px-3 pointer-events-none" >
          {description}
          <svg className="absolute text-black h-2 w-full left-0 top-full" x="0px" y="0px" viewBox="0 0 255 255" xmlSpace="preserve"><polygon className="fill-current" points="0,0 127.5,127.5 255,0"/></svg>
        </div>
    </div>
  );
}

export default CategoryBox;
