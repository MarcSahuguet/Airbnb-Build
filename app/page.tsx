
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
  const category = searchParams.category;
  const cityStart = searchParams.departureCity
  const cityEnd = searchParams.arrivalCity

  const itineraries = await getItineraries();
  const filteredItineraries = itineraries.filter((itinerary: ItineraryCardType) => {
    if (category && itinerary.moods[0].name.toLowerCase() !== category && itinerary.moods[1]?.name.toLowerCase() !== category) {
      return false;
    }
    if (cityStart && itinerary.cityStart.cityName.toLowerCase() !== cityStart) {
      return false;
    }
    if (cityEnd && itinerary.cityEnd.cityName.toLowerCase() !== cityEnd) {
      return false;
    }
    return true;
  });

  const currentUser = await getCurrentUser();
  const {citiesStart, citiesEnd} = await getCities();

  if (filteredItineraries.length === 0) {
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
          {filteredItineraries.map((itinerary: ItineraryCardType) => {
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
