import ClientOnly from "@/components/ClientOnly";
import Footer from "@/components/Footer";
import ToastContainerBar from "@/components/ToastContainerBar";
import LoginModal from "@/components/models/LoginModal";
import RegisterModal from "@/components/models/RegisterModal";
import RentModal from "@/components/models/RentModal";
import SearchModal from "@/components/models/SearchModal";
import Navbar from "@/components/navbar/Navbar";
import { barlow, inter, IntegraBold, nunito } from "./fonts";
import cx from 'clsx';

import "../styles/globals.css";
import getCurrentUser from "./actions/getCurrentUser";
import Hero from "@/components/navbar/Hero";

export const metadata = {
  title: "Hourrail !",
  description: "Le voyage sur les bons rails !",
  icons: "https://cdn.sanity.io/images/l1a05fsu/production/d3da640ae385ca64169ab3a7f40ce8daac9c7e77-88x94.png",
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
