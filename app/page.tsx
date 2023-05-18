import ClientOnly from "@/components/ClientOnly";
import Container from "@/components/Container";
import EmptyState from "@/components/EmptyState";
import ListingCard from "@/components/listing/ListingCard";
import getCurrentUser from "./actions/getCurrentUser";
import getItineraries, { IItinerariesParams } from "./actions/getItineraries";
import { ItineraryCardType, safeListing } from "@/types";
import ToastContainerBar from "@/components/ToastContainerBar";
import SearchModal from "@/components/models/SearchModal";
import RegisterModal from "@/components/models/RegisterModal";
import LoginModal from "@/components/models/LoginModal";
import RentModal from "@/components/models/RentModal";
import Hero from "@/components/navbar/Hero";
import getCities from "./actions/getCities";
import Categories from "@/components/navbar/Categories";
import FeedbackModal from "@/components/models/FeedBackModal";

interface HomeProps {
  searchParams: IItinerariesParams;
}

export default async function Home({ searchParams }: HomeProps) {
  const itineraries = await getItineraries(searchParams);
  const currentUser = await getCurrentUser();
  const {citiesStart, citiesEnd} = await getCities();

  if (itineraries.length === 0) {
    return (
      <ClientOnly>
        <EmptyState showReset />
      </ClientOnly>
    );
  }

  return (
    <ClientOnly>
      <ToastContainerBar />
      <SearchModal citiesStart={citiesStart} citiesEnd={citiesEnd} />
      <RegisterModal />
      <LoginModal />
      <FeedbackModal/>
      <RentModal citiesStart={citiesStart} citiesEnd={citiesEnd} />
      <Hero currentUser={currentUser} citiesStart={citiesStart} citiesEnd={citiesEnd}/>
      <Categories />

      <Container>
        <div className="pt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4 gap-8 overflow-x-hidden">
          {itineraries.map((itinerary: ItineraryCardType) => {
            return (
              <ListingCard
                key={itinerary._id}
                data={itinerary}
                currentUser={currentUser}
              />
            );
          })}
        </div>
      </Container>
    </ClientOnly>
  );
}
