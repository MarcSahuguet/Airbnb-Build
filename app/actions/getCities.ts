import { createClient, groq } from "next-sanity";
import clientConfig from '@/sanity/config/client-config'
  
export type ItineraryCardType = {
  moods: {
    name: string;
    _id: string;
    slug: {
      current: string;
    };
  }[];
  price: number;
  _id: string;
  slug: {
    current: string;
  };
  cityStart: {
    cityName: string;
    countryName: string;
  };
  cityEnd: {
    cityName: string;
    countryName: string;
  };
  stepsOptions: {
    steps: {
      transportMethod: {
        icon: any;
      };
    }[];
  };
  image: any;
};

  export default async function getCities(cityStart?: string, cityEnd?: string) {
    try {
      let citiesData = await createClient(clientConfig).fetch(
        groq`*[_type == "itinerary"]{cityStart->{cityName, cityLocation, countryName, slug}, cityEnd->{cityName, cityLocation, countryName, slug}}`, "force-cache");
        //map citiesStart and citiesEnd by avoiding duplicated names and return an array of cities
        const citiesStart = citiesData.map((city: any) => city.cityStart).filter((city: any, index: any, self: any) =>
        index === self.findIndex((t: any) => (
          t.cityName === city.cityName && t.countryName === city.countryName
        ))
      )
      if (cityStart) {
        citiesData = citiesData.filter((city: any) => city.cityStart.cityName.toLowerCase() === cityStart)
      }       
      const citiesEnd = citiesData.map((city: any) => city.cityEnd).filter((city: any, index: any, self: any) =>
        index === self.findIndex((t: any) => (
          t.cityName === city.cityName && t.countryName === city.countryName
        ))
      )
      return {citiesStart, citiesEnd};
       
    } catch (error: any) {
      throw new Error(error.message);
    }
  }