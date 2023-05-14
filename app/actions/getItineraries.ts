import { createClient, groq } from "next-sanity";
import clientConfig from '@/sanity/config/client-config'

  export interface IItinerariesParams {
        mood?: string;
        cityStart?: string;
        cityEnd?: string;
  };
  
  export default async function getItineraries(params: IItinerariesParams) {
    try {
        //fake params usage
        const test = params.mood; 
        /* *[_type == "itinerary" ${
      context.query?.mood ? '&& ' + moodsFilterQuery : ''
    } ${context.query?.cityStart ? '&& ' + cityStartFilterQuery : ''} ${
    context.query?.cityEnd ? '&& ' + cityEndFilterQuery : ''
  }] */
      const itineraries = createClient(clientConfig).fetch(
        groq`*[_type == "itinerary"] {
          _id,
          "image": images[0].asset->url,
          cityStart->{cityName, countryName},
          cityEnd->{cityName, countryName},
          stepsOptions[0]->{
            steps[]->{
              transportMethod->{icon}
            },
          },
          moods[]->{
            _id,
            name
          },
          highlight,
          slug,
          _id
        } | order(highlight desc, cityStart.countryName desc)`
      )
        
      return itineraries;
    } catch (error: any) {
      throw new Error(error.message);
    }
  }