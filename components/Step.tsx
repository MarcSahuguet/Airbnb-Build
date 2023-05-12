import { Step } from '@/types';
import Image from 'next/image';
import { event } from "nextjs-google-analytics";


type StepProps = {
  currentSizeScreen?: number;
} & Step;

const Step = ({
  stepCityStart,
  stepCityEnd,
  transportMethod,
  stepTime,
  bookingLink,
  currentSizeScreen,
}: StepProps) => {

  const handleSubmit = (e: any) => {

    event("operator_redirection", {
      category: "Itinerary",
      label: `${stepCityStart.cityName}-${stepCityEnd.cityName}`,

    });
  };

  return (
    <div className='font-BarlowSemiBold'>
      <div className='flex justify-start gap-2 border-b border-black text-sm text-black sm:text-lg'>
        <p>
          {stepCityStart.cityName}, {stepCityStart.countryName}
        </p>
        <p>&gt;</p>
        <p>
          {stepCityEnd.cityName}, {stepCityEnd.countryName}
        </p>
      </div>
      <div className='flex items-center gap-3 pt-2'>
        <Image
          alt={transportMethod.name}
          src={transportMethod.icon}
          width={currentSizeScreen && currentSizeScreen > 640 ? 60 : 40}
          height={currentSizeScreen && currentSizeScreen > 640 ? 60 : 40}
          className='object-contain'
        />
        <div className='flex-grow font-BarlowMedium text-sm text-black sm:text-base'>
          <p>{transportMethod.name}</p>
          <p>
            ≈{' '}
            {Math.floor(stepTime / 60) === 0 ? '00' : Math.floor(stepTime / 60)}
            h
            {stepTime % 60 === 0
              ? '00'
              : stepTime % 60 < 10
              ? `0${stepTime % 60}`
              : stepTime % 60}
          </p>
        </div>
        <a onClick={handleSubmit} href={bookingLink} target='_blank' rel='noopener noreferrer'>
          <button className='sm:px-6 border-y-4 border-transparent bg-hourrail-orange p-2 font-BarlowSemiBold text-sm text-white drop-shadow-md hover:border-b-hourrail-rouge-orange sm:text-lg'>Je réserve mon billet !</button>
        </a>
      </div>
    </div>
  );
};

export default Step;
