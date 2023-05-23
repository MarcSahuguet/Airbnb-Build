import getCurrentUser from "@/app/actions/getCurrentUser";
import getItinerary from "@/app/actions/getItinerary";
import getListingById from "@/app/actions/getListingById";
import getReservation from "@/app/actions/getReservations";
import ClientOnly from "@/components/ClientOnly";
import EmptyState from "@/components/EmptyState";
import ListingClient from "@/components/ListingClient";
import { Itinerary } from "@/types";
import type { Metadata } from 'next';
/*
export async function generateMetadata(itinerary: Itinerary): Promise<Metadata> {
  const title = `${itinerary.cityStart.cityName} - ${itinerary.cityEnd.cityName}`;
  const description = `${itinerary.cityStart.cityName} à ${itinerary.cityEnd.cityName} en train`;
  const icons = "https://cdn.sanity.io/images/l1a05fsu/production/d3da640ae385ca64169ab3a7f40ce8daac9c7e77-88x94.png";
  return {
    title,
    description,
    icons,
  };
}; 
*/
interface IParams {
  slug?: string;
  option?: number;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const itinerary = await getItinerary(params) as any;
  //const reservations = await getReservation(params);
  const currentUser = await getCurrentUser();
   //generateMetadata(itinerary.itinerary);
  
  if (!itinerary) {
    return (
      <ClientOnly>
        <EmptyState />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ListingClient
        itinerary={itinerary.itinerary}
        params={params}
        currentUser={currentUser}
      />
    </ClientOnly>
  );
};

export default ListingPage;
