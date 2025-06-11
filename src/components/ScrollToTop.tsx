import { useEffect } from "react";
import { useLocation } from "react-router";

export const useScrollToTop = () => {
	const { pathname } = useLocation();

	
	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.scrollTo({ top: 0 });
		}
	}, [pathname]);
};

export default useScrollToTop;