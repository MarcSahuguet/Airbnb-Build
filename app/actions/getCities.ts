import { createClient, groq } from "next-sanity";
import clientConfig from '@/sanity/config/client-config'
  
  export default async function getCities() {
    try {
      const citiesData = await createClient(clientConfig).fetch(
        groq`*[_type == "itinerary"]{cityStart->{cityName, cityLocation, countryName}, cityEnd->{cityName, cityLocation, countryName}}`)
        //map cities and avoid cityName duplicates
        const citiesStart = citiesData.map((city: any) => city.cityStart).filter((city: any, index: any, self: any) => self.indexOf(city) === index);
        const citiesEnd = citiesData.map((city: any) => city.cityEnd).filter((city: any, index: any, self: any) => self.indexOf(city) === index);
        return {citiesStart, citiesEnd};  
      
    } catch (error: any) {
      throw new Error(error.message);
    }
  }