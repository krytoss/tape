import { useState } from "react";
import { useLocation } from "react-router";
import Link from "./Link";
import { Menu, X } from "lucide-react";

const TopMenu: React.FC = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Domov", to: "/" },
    { name: "Bezpečnosť v zdravotníctve", to: "/zdravotnictvo" },
    { name: "Biznis", to: "/biznis" },
    { name: "Zábava", to: "/zabava" },
  ];

  return (
    <div className="fixed z-50 top-0 left-0 w-full min-h-16 pt-2 md:h-20 text-white flex flex-col items-center bg-black/30 backdrop-blur-md px-6 md:px-12">
      <div className="flex flex-row w-full items-center">
			<img src="/logo.png" alt="Logo" className="h-12 md:h-16" />
		
		{/* Mobile Menu Toggle */}
		<button
			className="ml-auto md:hidden text-white"
			onClick={() => setMenuOpen(!menuOpen)}
		>
			{menuOpen ? <X size={28} /> : <Menu size={28} />}
		</button>
		
		{/* Desktop Menu */}
		<ul className="hidden md:flex ml-auto space-x-6">
			{links.map((link, index) => {
			const isActive = location.pathname === link.to;
			return (
				<li key={index}>
				<Link
					to={link.to}
					className={`text-xl border-b-2 border-transparent transition duration-300 ${
					isActive ? "border-brand" : "hover:border-white"
					}`}
				>
					{link.name}
				</Link>
				</li>
			);
			})}
		</ul>
	</div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden w-full flex flex-col items-center justify-center space-y-2 text-white text-2xl py-6">
          {links.map((link, index) => (
            <Link
              key={index}
              to={link.to}
              className="hover:text-gray-300 w-full text-center hover:bg-black/40 p-3"
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopMenu;