import { Link, useLocation } from 'react-router';
import { pages } from '../../routes';

const Breadcrumbs: React.FC = () => {
	const location = useLocation();
	const segments = location.pathname.split('/').filter(Boolean);

	let pathAccumulator = '';
	let currentLevel: typeof pages | undefined = pages;

	const crumbs = segments.map((segment, index) => {
		pathAccumulator += '/' + segment;

		let pageEntry = currentLevel?.[segment];

		let title: string | undefined;
		if (pageEntry?.title) {
			title = pageEntry.title;
		} else if (pageEntry?.children?.[""]?.title) {
			title = pageEntry.children[""].title;
		} else {
			title = decodeURIComponent(segment);
		}

		if (pageEntry?.children?.[""]) {
			currentLevel = pageEntry.children;
		} else if (pageEntry?.children) {
			currentLevel = pageEntry.children;
		} else {
			currentLevel = undefined;
		}

		return {
			path: pathAccumulator,
			title,
			isLast: index === segments.length - 1,
		};
	});

	return (
		<nav aria-label="breadcrumb" className="p-4 w-full text-right">
			<ol className="flex items-end text-sm text-gray-700">
				<li>
					<Link to="/" className="hover:underline">Domov</Link>
				</li>
				{crumbs.map((crumb) => (
					<li key={crumb.path} className="flex items-center">
						<span className="mx-2">/</span>
						{crumb.isLast ? (
							<span className="text-gray-500">{crumb.title}</span>
						) : (
							<Link to={crumb.path} className="hover:underline">{crumb.title}</Link>
						)}
					</li>
				))}
			</ol>
		</nav>
	);
};

export default Breadcrumbs;