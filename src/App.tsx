import { HashRouter, Route, Routes, useLocation } from 'react-router';
import { pages } from './routes';
import { useScrollToTop } from './components/ScrollToTop';
import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

export const scrollToForm = (event: React.MouseEvent<HTMLAnchorElement>) => {
	event.preventDefault()
	const el = document.getElementById("form");
	if (el) {
		el.scrollIntoView({ behavior: 'smooth', block: 'start' });
	}
};

const AppContent = () => {
	const location = useLocation();
	const containerRef = useRef<HTMLDivElement>(null);

	useScrollToTop();

	useLayoutEffect(() => {
		const ctx = gsap.context(() => {
			gsap.fromTo(
				containerRef.current,
				{ opacity: 0 },
				{ opacity: 1, duration: 0.5, ease: "power2.out" }
			);
		});

		return () => ctx.revert();
	}, [location.pathname]);

	return (
		<div ref={containerRef}>
			<Routes>
				{Object.entries(pages).map(([path, { component: Component, children }]) => {
					if (children) {
						return (
							<Route key={path} path={path} element={<Component />}>
								{Object.entries(children).map(([childPath, { component: ChildComponent }]) => (
									<Route key={childPath} path={childPath} element={<ChildComponent />} />
								))}
							</Route>
						);
					}
					return <Route key={path} path={path} element={<Component />} />;
				})}
			</Routes>
		</div>
	);
};

const App = () => {
	return (
		<HashRouter>
			<AppContent />
		</HashRouter>
	);
};

export default App;