import { Listing, Reservation, User } from "@prisma/client";

export type ItineraryCardType = {
  moods: {
    name: string;
    _id: string;
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

export type Step = {
  _id?: string;
  nameOfStep?: string;
  stepTime: number;
  bookingLink?: string;
  transportMethod: {
    icon: any;
    name: string;
  };
  stepCityStart: {
    cityLocation: {
      lat: number;
      lng: number;
    };
    cityName: string;
    countryName: string;
  };
  stepCityEnd: {
    cityLocation: {
      lat: number;
      lng: number;
    };
    cityName: string;
    countryName: string;
  };
};

export type Itinerary = {
  nameOfItinerary: string;
  slug: {
    current: string;
  };
  cityStart: {
    cityLocation: {
      lat: number;
      lng: number;
    };
    cityName: string;
    countryName: string;
  };
  cityEnd: {
    cityLocation: {
      lat: number;
      lng: number;
    };
    cityName: string;
    countryName: string;
  };
  images: any;
  moods: {
    _id: string;
    name: string;
  }[];
  stepsOptions: {
    _id: string;
    nameOfStepsOption: string;
    option: number;
    steps: Step[];
  }[];
};

export type safeItinerary = Omit<Itinerary, "createdAt"> & {
  createdAt: string;
};


export type safeListing = Omit<Listing, "createdAt"> & {
  createdAt: string;
};

export type SafeReservation = Omit<
  Reservation,
  "createdAt" | "startDate" | "endDate" | "listing"
> & {
  createdAt: string;
  startDate: string;
  endDate: string;
  listing: safeListing;
};

export type SafeUser = Omit<
  User,
  "createdAt" | "updatedAt" | "emailVerified"
> & {
  createdAt: string;
  updatedAt: string;
  emailVerified: string | null;
};
