import { PropsWithChildren } from 'react';
import { TfiClose } from 'react-icons/tfi';

interface ModalProps {
  showModal: boolean;
  onClose: () => void;
}

export const Modal = ({ showModal, onClose, children }: PropsWithChildren<ModalProps>) => {
  const onCloseClick = (event: React.MouseEvent<HTMLElement>) => {
    onClose();
    event.stopPropagation();
  };

  return (
    <section
      className={`location-selector fixed inset-0 overflow-hidden w-full flex flex-col z-50 justify-center items-center 
        transition-all ease-out duration-200 ${showModal ? 'visible bg-white' : 'invisible'}`}
    >
      <button
        type="button"
        className="absolute z-50 flex top-12 right-8 align-items-center 
        align-content-center justify-center h-10 w-10 
        bg-[#e6e6e6] rounded-full cursor-pointer
        hover:bg-orange-title  transition-all ease-out duration-200"
        onClick={onCloseClick}
      >
        <TfiClose className="mt-3 text-black hover:text-white" />
      </button>
      {children}
    </section>
  );
};
