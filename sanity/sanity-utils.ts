import { createClient, groq } from "next-sanity";
import clientConfig from './config/client-config'
import { Itinerary } from "@/types";


export async function getItinerary(slug: string): Promise<Itinerary> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "itinerary" && slug.current == $slug][0]{
      _id,
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
    { slug }
  )
}



export async function getItineraries(): Promise<Itinerary[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "itinerary"] {
      _id,
      "images": images[0].asset->url,
      cityStart->{cityName, countryName},
      cityEnd->{cityName, countryName},
      stepsOptions[0]->{
        steps[]->{
          transportMethod->{icon}
        },
      },
      highlight,
      slug,
      _id
    } | order(highlight desc, cityEnd.countryName asc)`
  )
}
    




