import { createClient, groq } from "next-sanity";
import { Project } from "@/types/Project";
import clientConfig from './config/client-config'
import { Page } from "@/types/Page";
import { Itinerary } from "@/types/itinerary";

export async function getProjects(): Promise<Project[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project"]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`
  )
}

export async function getProject(slug: string): Promise<Project> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _createdAt,
      name,
      "slug": slug.current,
      "image": image.asset->url,
      url,
      content
    }`,
    { slug }
  )
}

export async function getPages(): Promise<Page[]> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page"]{
      _id,
      _createdAt,
      title,
      "slug": slug.current
    }`
  )
}

export async function getPage(slug: string): Promise<Page> {
  return createClient(clientConfig).fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _createdAt,
      title,
      "slug": slug.current,
      content
    }`,
    { slug }
  )
}

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
    




