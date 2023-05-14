import { createClient, groq } from "next-sanity";
import clientConfig from '@/sanity/config/client-config'
  
  export default async function getCities() {
    try {
      const citiesData = await createClient(clientConfig).fetch(
        groq`*[_type == "itinerary"]{cityStart->{cityName, cityLocation, countryName}, cityEnd->{cityName, cityLocation, countryName}}`)
        const citiesStart = citiesData.map((city: any) => city.cityStart);
        const citiesEnd = citiesData.map((city: any) => city.cityEnd);
        return {citiesStart, citiesEnd};  
      
    } catch (error: any) {
      throw new Error(error.message);
    }
  }