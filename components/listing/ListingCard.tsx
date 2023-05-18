"use client";

import useCountries from "@/hook/useCountries";
import { ItineraryCardType, SafeReservation, SafeUser, safeItinerary } from "@/types";
import { format } from "date-fns";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useCallback, useMemo } from "react";
import Button from "../Button";
import HeartButton from "../HeartButton";

type Props = {
  data: ItineraryCardType;
  reservation?: SafeReservation;
  onAction?: (id: string) => void;
  disabled?: boolean;
  actionLabel?: string;
  actionId?: string;
  currentUser?: SafeUser | null;
};

function ListingCard({
  data,
  reservation,
  onAction,
  disabled,
  actionLabel,
  actionId = "",
  currentUser,
}: Props) {
  const router = useRouter();
  const { getByValue } = useCountries();
  data.price = 100;
  const location = getByValue(data.cityEnd.countryName);

  const handleCancel = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>) => {
      e.stopPropagation();

      if (disabled) return;

      onAction?.(actionId);
    },
    [onAction, actionId, disabled]
  );

  const price = useMemo(() => {
    if (reservation) {
      return reservation.totalPrice;
    }

    return data.price;
  }, [reservation, data.price]);

  const reservationDate = useMemo(() => {
    if (!reservation) {
      return null;
    }

    const start = new Date(reservation.startDate);
    const end = new Date(reservation.endDate);

    return `${format(start, "PP")} - ${format(end, "PP")}`;
  }, [reservation]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: 0.5,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      onClick={() => router.push(`/itineraries/${data.slug.current}`)}
      className="col-span-1 cursor-pointer group"
    >
      <div className="flex flex-col gap-1.5 w-full">
        <div className="sm:aspect-square aspect-video w-full relative overflow-hidden rounded-xl">
          <Image
            fill
            className="object-cover h-full w-full group-hover:scale-110 transition"
            src={data.image}
            alt="listing"
          />
          <div className="absolute top-3 left-3 rounded-full py-1 px-2 bg-white text-xs font-integra">
                Depuis{" "}{data.cityStart.cityName}
          </div>
          {/*
          <div className="absolute top-3 right-3">
            <HeartButton listingId={data._id} currentUser={currentUser} />
          </div>
          */}
        </div>
        <div className="flex flex-col gap-0.5">
          <div className="font-semibold text-lg">
            {data.cityEnd.cityName}, {data.cityEnd.countryName}
          </div>
          <div className="font-light text-neutral-500">
            {reservationDate || data.moods.slice(0,2).map((mood) => mood.name).join(", ")}
          </div>
        </div>
        {/*
        <div className="flex flex-row items-center gap-">
          <div className="flex gap-1 font-semibold">
            ${price} {!reservation && <div className="font-light"> Night</div>}
          </div>
        </div>
        */}
        {onAction && actionLabel && (
          <Button
            disabled={disabled}
            small
            label={actionLabel}
            onClick={handleCancel}
          />
        )}
      </div>
    </motion.div>
  );
}

export default ListingCard;
