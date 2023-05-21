import { createClient, groq } from "next-sanity";
import clientConfig from '@/sanity/config/client-config'
  export interface IItinerariesParams {
        category?: string;
        departureCity?: string;
        arrivalCity?: string;
  };
   
  export default async function getItineraries() {
  
    
    try {  
      const itineraries = createClient(clientConfig).fetch(
        `*[_type == "itinerary"]{
          _id,
          "image": images[0].asset->url,
          cityStart->{cityName, countryName},
          cityEnd->{cityName, countryName},
          stepsOptions[0]->{
            steps[]->{
              transportMethod->{
                "icon": icon.asset->url,
              },
            },
          },
          moods[]->{
            _id,
            name,
            slug {
                current
            }
          },
          highlight,
          slug,
          _id
        } | order(highlight desc, cityStart.countryName desc)`
      )
        
      // return itineraries with mood.name  == params.mood
        return itineraries;

    } catch (error: any) {
      throw new Error(error.message);
    } 
  }