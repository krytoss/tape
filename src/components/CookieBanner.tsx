import { useState, useEffect } from "react";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookie_consent", "true");
    setVisible(false);
    window.location.reload(); // alebo inicializuj GA ručne
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 w-full bg-gray-800/95 text-white px-4 py-8 z-[9999]">
		<div className="w-full mx-auto grid grid-cols-1 sm:grid-cols-3 items-center">
			<div className="sm:col-start-2 text-center text-lg">
				Táto stránka používa cookies pre analýzu návštevnosti.
			</div>
			<div className="sm:col-start-3 flex justify-end mt-4 sm:mt-0 gap-2">
				<button
					onClick={acceptCookies}
					className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
				>
					Súhlasím
				</button>
				<button
					onClick={() => setVisible(false)}
					className="bg-transparent border-2 border-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded"
				>
					Odmietam
				</button>
			</div>
		</div>
	</div>
  );
}