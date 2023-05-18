import { createClient, groq } from "next-sanity";
import clientConfig from '@/sanity/config/client-config'

  export interface IItinerariesParams {
        category?: string;
        departureCity?: string;
        arrivalCity?: string;
  };
  
  export default async function getItineraries(params: IItinerariesParams) {
    try {
        //fake params usage
        const moodsFilterQuery = `'${params.category}' in moods[]->slug.current`;
        const cityStartFilterQuery = `'${params.departureCity}' == cityStart->slug.current`;
        const cityEndFilterQuery = `'${params.arrivalCity}' == cityEnd->slug.current`;        /* *[_type == "itinerary" ${
      context.query?.mood ? '&& ' + moodsFilterQuery : ''
    } ${context.query?.cityStart ? '&& ' + cityStartFilterQuery : ''} ${
    context.query?.cityEnd ? '&& ' + cityEndFilterQuery : ''
  }] */
      const itineraries = createClient(clientConfig).fetch(
        `*[_type == "itinerary" ${ params.category ? '&& ' + moodsFilterQuery : '' } ${ params.departureCity ? '&& ' + cityStartFilterQuery : '' } ${ params.arrivalCity ? '&& ' + cityEndFilterQuery : '' }]{
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
        
      // return itineraries with mood.name  == params.mood
        return itineraries;

    } catch (error: any) {
      throw new Error(error.message);
    } 
  }