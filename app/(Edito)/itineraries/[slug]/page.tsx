import getCurrentUser from "@/app/actions/getCurrentUser";
import getItinerary from "@/app/actions/getItinerary";
import getListingById from "@/app/actions/getListingById";
import getReservation from "@/app/actions/getReservations";
import ClientOnly from "@/components/ClientOnly";
import EmptyState from "@/components/EmptyState";
import ListingClient from "@/components/ListingClient";

interface IParams {
  slug?: string;
  option?: number;
}

const ListingPage = async ({ params }: { params: IParams }) => {
  const itinerary = await getItinerary(params) as any;
  //const reservations = await getReservation(params);
  const currentUser = await getCurrentUser();

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
