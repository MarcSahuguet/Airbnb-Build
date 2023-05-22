"use client";

import useLoginModel from "@/hook/useLoginModal";
import { Itinerary, SafeReservation, SafeUser } from "@/types";
import axios from "axios";
import { differenceInCalendarDays, eachDayOfInterval } from "date-fns";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useState } from "react";
import { Range } from "react-date-range";
import { toast } from "react-toastify";

import Container from "./Container";
import ListingHead from "./listing/ListingHead";
import ListingInfo from "./listing/ListingInfo";
import ListingReservation from "./listing/ListingReservation";
import { categories } from "./navbar/Categories";
import MapOpen from "./MapOpen";
import YoutubeVideo from "./listing/YoutubeVideo";

const initialDateRange = {
  startDate: new Date(),
  endDate: new Date(),
  key: "selection",
};

type Props = {
  //reservations?: SafeReservation[];
  itinerary: Itinerary 
  //& {user: SafeUser;};
  currentUser?: SafeUser | null;
  params: { slug?: string, option?: number };
};

function ListingClient({ itinerary, currentUser, params }: Props) {
  const router = useRouter();
  const loginModal = useLoginModel();
  /*
  const disableDates = useMemo(() => {
    let dates: Date[] = [];
      reservations.forEach((reservation) => {
        const range = eachDayOfInterval({
          start: new Date(reservation.startDate),
          end: new Date(reservation.endDate),
        });

        dates = [...dates, ...range];
      });

      return dates;
    }, [reservations]);
  */
  const [isLoading, setIsLoading] = useState(false);
  //const [totalPrice, setTotalPrice] = useState(listing.price);
  const [dateRange, setDateRange] = useState<Range>(initialDateRange);
  const option =  1; //params.option;

  const stepsOption = itinerary.stepsOptions.filter(
    (stepsOption) => stepsOption.option === option
  )[0];
  const steps = itinerary.stepsOptions.filter(
    (stepsOption) => stepsOption.option === option
  )[0].steps;

  const onCreateReservation = useCallback(() => {
    if (!currentUser) {
      return loginModal.onOpen();
    }

    setIsLoading(true);

    axios
      .post("/api/reservations", {
        //totalPrice,
        startDate: dateRange.startDate,
        endDate: dateRange.endDate,
        ItineraryId: itinerary?.slug.current,
      })
      .then(() => {
        toast.success("Success!");
        setDateRange(initialDateRange);
        router.push("/trips");
      })
      .catch(() => {
        toast.error("Something Went Wrong");
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [ dateRange, itinerary?.slug, router, currentUser, loginModal]);
  /*
    useEffect(() => {
      if (dateRange.startDate && dateRange.endDate) {
        const dayCount = differenceInCalendarDays(
          dateRange.endDate,
          dateRange.startDate
        );

        if (dayCount && listing.price) {
          setTotalPrice(dayCount * listing.price);
        } else {
          setTotalPrice(listing.price);
        }
      }
    }, [dateRange, listing.price]);
  */
  const category = useMemo(() => {
    return categories.find((item) => item.label === itinerary.moods[0].name);
  }, [itinerary.moods]);

  return (
    <Container>
     
      <div className="max-w-screen-lg mx-auto pt-16">
        <div className="flex flex-col gap-6">
          <ListingHead
            title={itinerary.cityEnd}
            imageSrc={itinerary.images}
            locationValue={itinerary.cityStart}
            id={itinerary.slug?.current}
            currentUser={currentUser}
          />
          <div className="grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6">
           
            <ListingInfo
              category={category}
              itinerary={itinerary}
              steps={steps}
            />
            
            <div className="mb-10 md:order-last md:col-span-3 ">
             <MapOpen steps={steps} />
             <YoutubeVideo videoId="2gQPsQNwbog" />

             {/*
              <ListingReservation
                price={listing.price}
                totalPrice={totalPrice}
                onChangeDate={(value) => setDateRange(value)}
                dateRange={dateRange}
                onSubmit={onCreateReservation}
                disabled={isLoading}
                disabledDates={disableDates}
              />
              */} 
             
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default ListingClient;
