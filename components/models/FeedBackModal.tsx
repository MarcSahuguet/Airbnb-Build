"use client";

import useLoginModel from "@/hook/useLoginModal";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import Button from "../Button";
import Modal from "./Modal";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import useFeedbackModal from "@/hook/useFeedbackModal";

type Props = {};

function FeedbackModal({}: Props) {
  const router = useRouter();
  const modalstate = useFeedbackModal();
  const [isLoading, setIsLoading] = useState(false);
 const [feedback, setFeedback] = useState('');

 const {
  handleSubmit,
  formState: { errors },
} = useForm<FieldValues>({
});

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log('Submitting feedback:', feedback);
    if (feedback === '') {
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      modalstate.onClose();
    }, 1300);

    sendToSlack(feedback);
  };

  //Send to Slack function
  const sendToSlack = (feedback: string) => {
    const data = {
      text: feedback,
    };
    fetch(
      process.env.NEXT_PUBLIC_SLACK_WEBHOOK_URL as string,
      {
        method: 'POST',
        body: JSON.stringify(data),
      }
    ).then((res) => {
      if (res.status === 200) {
        console.log('feedback sent to slack');
      } else {
        console.log('error sending feedback to slack');
      }
    });
  };


  const bodyContent = (
    <div className='flex flex-col items-center justify-center p-3'>

    <form className='flex flex-col items-center justify-center space-y-4'>
      <input
        className='border border-gray-300 rounded-md w-80 h-10 px-3'
        type='text'
        placeholder='Nom'
      />
      <input className='border border-gray-300 rounded-md w-80 h-10 px-3' type='text' placeholder='Email' />
      <textarea
        className='border border-gray-300 rounded-md w-80 h-40 px-3 pt-1'
        placeholder='Message'
        value={feedback}
        onChange={(e) => setFeedback(e.target.value)}
      />
      <button onClick={onSubmit} className= ' text-white font-BarlowMedium hover:border-b-hourrail-rouge-orange border-b-4 border-transparent text-xs sm:text-sm pt-2 pb-1 px-4'>
        {isLoading ? <p className=' animate-pulse '>Envoi en cours</p> :  ''}
      </button>
    </form>
  </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      <div className="text-neutral-500 text-center mt-4 font-light">
        <div>
          Plus on est de fous, plus on décarbone !
        </div>
      </div>
    </div>
  );
  return (
    <Modal
      disabled={isLoading}
      isOpen={modalstate.isOpen}
      title="Dis nous tout !"
      actionLabel="Envoyer"
      onClose={modalstate.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
}

export default FeedbackModal;
