import { create } from "zustand";

interface FeedbackModalState {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useFeedbackModal = create<FeedbackModalState>((set) => ({
  isOpen: false,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}));

export default useFeedbackModal;
