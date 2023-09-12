export interface DropdownDestinationType {
  id: number;
  url: string;
  text: string;
  textEn: string;
}

export interface TrendingOfferButtonType {
  id: number;
  text: string;
  filterValue: string;
}

type Type = "Apartment" | "Hotel" | "Exotic" | "Izlet";
type StateType = "Free" | "Reserved" | "Busy";

export interface ArangementGaleryImage {
  description: string;
  thumbnail: string;
  url: string;
  location: {
    country: string;
  };
}

export interface Arangement {
  id: number;
  name: string;
  type: Type;
  description: string;
  transportationDescription: string;
  country: string;
  countryMkd: string;
  region: string;
  thumbnailPhoto: string;
  gallery: Array<ArangementGaleryImage>;
  isLastMinute: boolean;
  isPublished: boolean;
  isTrending: boolean;
  priceForNights: number;
  startingPrice: number;
  prices: {
    prices: Array<number>;
    lastMinutePrices: Array<number>;
  };
  state: StateType;
  stars: number;
  availabilityDates: Array<string>;
  info: {
    distanceFromBeach?: number;
    distanceFromCenter?: number;
    walkingDistance?: string;
  };
}

export interface TestemonialType {
  id: number;
  title: string;
  rating: number;
  desc: string;
  brand: string;
  image: string;
}

export interface GaleryImageType {
  image: string;
  location: string;
}

export interface GroupTravelInfoType {
  miceTourismTitle: string;
  miceTourismDesc: string;
  miceTourismImage: string;
  teamBuildingTitle: string;
  teamBuildingDesc: string;
  teamBuildingImage: string;
  tailorMadeTitle: string;
  tailorMadeDesc: string;
  tailorMadeImage: string;
}

export interface OpstiUsloviInfoType {
  titleOne: string;
  textOne: string;
  titleTwo: string;
  textTwo: string;
  titleThree: string;
  textThree: string;
}

export interface PatnickoOsiguruvanjeInfoType {
  titleOne: string;
  textOne: string;
  titleTwo: string;
  textTwo: string;
  titleThree: string;
  textThree: string;
}

export interface AboutUsMidSectionDataType {
  title: string;
  desc: string;
}

export interface FooterLinksListType {
  id: number;
  url: string;
  text: string;
}

export interface NewsleterDataBodyType {
  name: string;
  email: string;
}

export interface ContactDataBodyType {
  name: string;
  email: string;
  desc: string;
}

export interface FlightSearchDataBodyType {
  ticketType: string;
  fromDate: Date;
  toDate: Date;
  departureDate: Date;
  arivalDate: Date;
  adults: string;
  kids: string;
  babies: string;
  flyClass: string;
}

export interface FlightContactDataType {
  name: string;
  surname: string;
  email: string;
  phone: string;
  ticketType: string;
  fromDate: Date;
  toDate: Date;
  departureDate: Date;
  arivalDate: Date;
  adults: string;
  kids: string;
  babies: string;
  flyClass: string;
}
