"use client";

import useLoginModel from "@/hook/useLoginModal";
import useRegisterModal from "@/hook/useRegisterModal";
import useRentModal from "@/hook/useRentModal";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { SafeUser } from "@/types";
import { signOut } from "next-auth/react";
import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Avatar from "../Avatar";
import MenuItem from "./MenuItem";
import useFeedbackModal from "@/hook/useFeedbackModal";

type Props = {
  currentUser?: SafeUser | null;
};

function UserMenu({ currentUser }: Props) {
  const router = useRouter();
  const registerModel = useRegisterModal();
  const loginModel = useLoginModel();
  const feedbackModal = useFeedbackModal();
  const rentModel = useRentModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const onRent = useCallback(() => {
    if (!currentUser) {
      return loginModel.onOpen();
    }
    rentModel.onOpen();
  }, [currentUser, loginModel, rentModel]);

  const onFeedback = useCallback(() => { 
      return feedbackModal.onOpen();
  }, [loginModel, rentModel]);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          className="hidden md:block text-sm font-semibold py-2.5 px-4 rounded-full bg-white bg-opacity-30 hover:bg-neutral-100 transition cursor-pointer"
          onClick={onRent}
        >
          Envie de contribuer ?
        </div>
        <div
          onClick={toggleOpen}
          className="bg-white md:py-1 md:pl-2.5 md:pr-1 border-[1px] flex flex-row items-center gap-2.5 rounded-full cursor-pointer hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            {currentUser ? (
              <Avatar src={currentUser?.image!} userName={currentUser?.name} />
            ) : (
              <Image
                className="rounded-full"
                height="30"
                width="30"
                alt="Avatar"
                src="/assets/avatar.png"
              />
            )}
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem
                  onClick={() => router.push("/trips")}
                  label="My trips"
                />
                <MenuItem
                  onClick={() => router.push("/favorites")}
                  label="My favorites"
                />
                <MenuItem
                  onClick={() => router.push("/reservations")}
                  label="My reservations"
                />
                <MenuItem
                  onClick={() => router.push("/properties")}
                  label="My properties"
                />
                <MenuItem onClick={onRent} label="Envie de contribuer ?" />
                <hr />
                <MenuItem onClick={() => signOut()} label="Logout" />
              </>
            ) : (
              <>
                <MenuItem onClick={loginModel.onOpen} label="Se connecter" />
                <MenuItem onClick={registerModel.onOpen} label="Créer un compte" />
                <MenuItem onClick={() => router.push("https://fr.tipeee.com/hourrail")} label="Faire un don ?" />
                <MenuItem onClick={() => router.push("https://docs.google.com/forms/d/e/1FAIpQLSefj9Xx7QiOMkeghtajWdYFexWH6E1hSCsIpG4K-ms2vNnsUA/viewform")} label="Rejoindre la team" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default UserMenu;
