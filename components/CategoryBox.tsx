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
      //alt text
      aria-label={description}
      onClick={handleClick}
      className={`flex flex-col items-center justify-center gap-2 p-3 min-w-[70px] border-b-2 hover:text-hourrail-orange transition cursor-pointer ${
        selected ? "border-b-hourrail-orange" : "border-transparent"
      } ${selected ? "text-hourrail-orange" : "text-neutral-500"}`}
    >
      <Icon size={26} />
      <div className="font-medium text-xs whitespace-nowrap">{label}</div>
    </div>
  );
}

export default CategoryBox;
