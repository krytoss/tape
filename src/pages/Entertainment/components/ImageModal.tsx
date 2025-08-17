import { createPortal } from "react-dom";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Props = {
  images?: string[];
  currentIndex: number;
	hideIndex?: boolean;
	children?: React.ReactNode;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
};

const ImageModal = ({ images, currentIndex, onClose, onNext, onPrev, hideIndex = false, children }: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
	setIsMounted(true);
  
	const handleKeyDown = (e: KeyboardEvent) => {
	  if (e.key === "ArrowRight") {
		onNext();
	  } else if (e.key === "ArrowLeft") {
		onPrev();
	  } else if (e.key === "Escape") {
		onClose();
	  }
	};
  
	document.addEventListener("keydown", handleKeyDown);
	return () => {
	  document.removeEventListener("keydown", handleKeyDown);
	  setIsMounted(false);
	};
  }, [onNext, onPrev, onClose]);

  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
	setTouchStartX(e.changedTouches[0].clientX);
  };
  
  const handleTouchEnd = (e: React.TouchEvent) => {
	if (touchStartX !== null) {
	  const distance = e.changedTouches[0].clientX - touchStartX;
	  const swipeThreshold = 50;
  
	  if (distance > swipeThreshold) {
		onPrev(); // swipe right
	  } else if (distance < -swipeThreshold) {
		onNext(); // swipe left
	  }
	}
  };

  if (!isMounted) return null;

  return createPortal(
    <div
		className="fixed inset-0 z-[9999] bg-black bg-opacity-90 w-screen h-screen flex items-center justify-center select-none"
		onClick={onClose}
		onTouchStart={handleTouchStart}
  		onTouchEnd={handleTouchEnd}
	>
		<div className="absolute top-0 left-0 w-full h-20 bg-black opacity-50 z-[999999]">
			<div className="absolute top-5 left-1/2 -translate-x-1/2 text-white text-xl border-0 px-4 py-1 z-[99999]">
				{ !hideIndex && `${currentIndex + 1} / ${images?.length}` }
			</div>
			<button onClick={onClose} className="absolute top-5 right-5 text-white text-3xl border-0 px-4 py-1 hover:bg-gray-500">✕</button>
		</div>
		
		{
			images && images?.length > 1 && 
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
			className={`relative flex items-center justify-center ${(children && !images) ? 'w-full h-full' : ''}`}
			onClick={(e) => e.stopPropagation()}
		>
			{ images ? (
				<img
					src={images[currentIndex]}
					alt={`Obrázok: ${images[currentIndex]}`}
					className="max-w-[calc(100vw-10rem)] max-h-[calc(100vh-15rem)] object-contain rounded shadow-2xl"
				/>
			) : (
				children
			)}
		</div>

		{
			images && images?.length > 1 && 
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