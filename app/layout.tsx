import ClientOnly from "@/components/ClientOnly";
import Footer from "@/components/Footer";
import { barlow, inter, IntegraBold, nunito } from "./fonts";


import "../styles/globals.css";
import getCurrentUser from "./actions/getCurrentUser";

export const metadata = {
  title: "HOURRAIL !",
  description: "HOURRAIL ! Voyager sans avion, tous nos itinéraires bas carbone",
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
