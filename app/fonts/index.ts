import localFont from "next/font/local";
import { Inter, Barlow, Barlow_Condensed, Nunito } from "next/font/google";

export const IntegraBold = localFont({
    src: "./IntegralCF-Bold.otf",
    variable: "--font-integra-bold",
  });

export const IntegraRegular = localFont({
    src: "./IntegralCF-Regular.otf",
    variable: "--font-integra-regular",
});

export const barlow = Barlow({
    variable: "--font-barlow",
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    style: ["normal", "italic"]
}); 

export const barlowCondensed = Barlow_Condensed({
    variable: "--font-barlow-condensed",
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
});

export const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
});