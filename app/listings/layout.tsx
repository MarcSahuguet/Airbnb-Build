
import Navbar from "@/components/navbar/Navbar";
import "@/styles/globals.css";
import getCurrentUser from "./../actions/getCurrentUser";
import SearchModal from "@/components/models/SearchModal";
import RegisterModal from "@/components/models/RegisterModal";
import LoginModal from "@/components/models/LoginModal";
import RentModal from "@/components/models/RentModal";
import ToastContainerBar from "@/components/ToastContainerBar";

export const metadata = {
  title: "Hourrail !",
  description: "Le voyage sur les bons rails !",
  icons: "https://cdn.sanity.io/images/l1a05fsu/production/d3da640ae385ca64169ab3a7f40ce8daac9c7e77-88x94.png",
};


export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const currentUser = await getCurrentUser();

  return (
    <div>
        <ToastContainerBar />
        <SearchModal />
        <RegisterModal />
        <LoginModal />
        <RentModal />
        <Navbar currentUser={currentUser} />
        <div className="pt-14">{children}</div>
    </div>
  );
}
