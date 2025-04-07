import { useEffect, useState } from "react";

export function useActiveSection(ids: string[]) {
	const [activeId, setActiveId] = useState<string | null>(null);

	useEffect(() => {
		const observers: IntersectionObserver[] = [];

		ids.forEach(id => {
			const el = document.getElementById(id);
			if (!el) return;

			const observer = new IntersectionObserver(
				([entry]) => {
					if (entry.isIntersecting) {
						setActiveId(id);
					}
				},
				{ threshold: 0.6 }
			);
			observer.observe(el);
			observers.push(observer);
		});

		return () => {
			observers.forEach(o => o.disconnect());
		};
	}, [ids]);

	return activeId;
}