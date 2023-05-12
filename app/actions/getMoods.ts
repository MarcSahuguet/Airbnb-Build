import { createClient, groq } from "next-sanity";
import clientConfig from '@/sanity/config/client-config'
  
  export default async function getMoods() {
    try {
      const moods = createClient(clientConfig).fetch(
        groq`*[_type == "mood"]{name, _id, image, slug}`
      , 'force-cache')
      return moods;
    } catch (error: any) {
      throw new Error(error.message);
    }
  };
