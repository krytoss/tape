import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  images: string[];
  currentIndex: number;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

const ImageModal = ({ images, currentIndex, onClose, onNext, onPrev }: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (!isMounted) return null;

  return createPortal(
    <div
		className="fixed inset-0 z-[9999] bg-black bg-opacity-90 w-screen h-screen flex items-center justify-center select-none"
		onClick={onClose}
	>
		<button onClick={onClose} className="absolute top-5 right-5 text-white text-3xl border-0 px-4 py-1 hover:bg-gray-500">✕</button>
		
		{
			images.length > 1 && 
			<div
				onClick={(e) => {
					e.stopPropagation()
					onPrev()
				}}
				className="absolute left-0 top-1/2 -translate-y-1/2 cursor-pointer p-2 w-auto group"
			>
				<ChevronLeft size={'10xl'} className="group-hover:text-white text-gray-400 transform scale-150 cursor-pointer p-2 w-12" />
			</div>
		}

		<div
      		className="relative flex items-center justify-center"
      		onClick={(e) => e.stopPropagation()}
    	>
			<img
				src={images[currentIndex]}
				className="max-w-[calc(100vw-10rem)] max-h-[90vh] object-contain rounded shadow-2xl"
			/>
    	</div>

		{
			images.length > 1 && 
			<div onClick={(e) => {
				e.stopPropagation()
				onNext()
			}} className="absolute right-0 top-1/2 -translate-y-1/2 cursor-pointer p-2 w-auto group">
				<ChevronRight size={'10xl'} className="group-hover:text-white text-gray-400 transform scale-150 cursor-pointer p-2 w-12" />
			</div>
		}
	</div>,
    document.body // <== tu sa stane mágia
  );
};

export default ImageModal;