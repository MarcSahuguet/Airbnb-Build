import ClientOnly from "@/components/ClientOnly";
import Footer from "@/components/Footer";
import { barlow, inter, IntegraBold, nunito } from "./fonts";


import "../styles/globals.css";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import getCurrentUser from "./actions/getCurrentUser";

export const metadata = {
  title: "HOURRAIL !",
  description: "HOURRAIL ! Voyager sans avion, tous nos itinéraires bas carbone",
  icons: "/Logo_small-196x21",
  keywords: "Voyage, Décarbonné, Hourrail, Train, Train de nuit, Voilier, Ferry, Bus, Bus de nuit, Itinéraires",
  themeColor: "#ffffff",  
  robots: {
    index: false,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HOURRAIL!',
    description: 'HOURRAIL ! Voyager sans avion, tous nos itinéraires bas carbone',
    siteId: '1467726470533754880',
    creator: '@hourrail',
    creatorId: '1467726470533754880',
    images: ['https://cdn.sanity.io/images/l1a05fsu/production/3c704e9c5f520880c1cde007b2c2c4d1defef5d1-1200x630.png'],
  },
  openGraph: {
    locale: 'fr_FR',
    url: 'https://www.hourrail.com',
    title: 'HOURRAIL !',
    description: 'HOURRAIL ! Voyager sans avion, tous nos itinéraires bas carbone',
    images: 'https://cdn.sanity.io/images/l1a05fsu/production/3c704e9c5f520880c1cde007b2c2c4d1defef5d1-1200x630.png',
  },
};


export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <html lang="en">
      <body className={`${barlow.variable} ${inter.variable} ${IntegraBold.variable} ${nunito.variable} font-default`}>
        <div className="pb-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
