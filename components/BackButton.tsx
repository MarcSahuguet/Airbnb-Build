"use client";
import { useRouter } from "next/navigation";

const BackButton = () => {
    const router = useRouter();

    return (
    <button
        className=' flex items-center gap-0.5 bg-white rounded-full py-1 px-2 font-BarlowMedium hover:underline'
        onClick={() => router.back()}
        >
            <svg
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 320 512'
            fill='black'
            width={12}
            height={12}
            >
            <path d='M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z' />
            </svg>
        Retour
    </button>
    );
};
export default BackButton;