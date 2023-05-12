import { createClient, groq } from "next-sanity";
import clientConfig from '@/sanity/config/client-config'

  export interface IItinerariesParams {
        slug?: string;
  };
  
  export default async function getItinerary(params: IItinerariesParams) {
    try {
      const { slug } = params;
      const pageSlug = slug ? slug : '';

      const itinerary = await createClient(clientConfig).fetch(
        groq`*[_type == "itinerary" && slug.current == $pageSlug][0]{
      nameOfItinerary,
      "images": images[0].asset->url,
      slug,
      cityStart->{
        cityName,
        countryName,
        cityLocation{lat,lng}
      },
      cityEnd->{
        cityName,
        countryName,
        cityLocation{lat,lng}
      },
      moods[]->{
        _id,
        name
      },
      stepsOptions[]->{
        _id,
        nameOfStepsOption,
        option,
        steps[]->{
          _id,
          nameOfStep,
          stepCityStart->{
            cityName,
            countryName,
            cityLocation{lat,lng}
          },
          stepCityEnd->{
            cityName,
            countryName,
            cityLocation{lat,lng}
          },
          transportMethod->{
            name,
            icon
          },
          stepTime,
          bookingLink,
        },
      },
    }`,
    {pageSlug}
    )
        
      if (!itinerary) {
        return null;
      } else {
        return {
          itinerary,
        };
      }
    } catch (error: any) {
      throw new Error(error.message);
    }
  }