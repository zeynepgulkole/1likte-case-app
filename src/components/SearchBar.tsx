import { useState } from "react";
import { useTranslations } from "next-intl";

interface SearchBarProps {
	onSearch: (query: string) => void;
	defaultValue?: string;
}

export default function SearchBar({ onSearch, defaultValue }: SearchBarProps) {
	const [query, setQuery] = useState(defaultValue ?? "");
	const t = useTranslations("Home");

	const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setQuery(e.target.value);
		onSearch(e.target.value);
	};

	return (
		<div>
			<h1 className="text-xl text-white font-medium mb-6">{t("title")}</h1>
			<div className="flex relative">
				<svg
					className="absolute top-2 left-4"
					width="22"
					height="22"
					viewBox="0 0 22 22"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						fillRule="evenodd"
						clipRule="evenodd"
						d="M10.5 1.75C5.66751 1.75 1.75 5.66751 1.75 10.5C1.75 15.3325 5.66751 19.25 10.5 19.25C15.3325 19.25 19.25 15.3325 19.25 10.5C19.25 5.66751 15.3325 1.75 10.5 1.75ZM0.25 10.5C0.25 4.83908 4.83908 0.25 10.5 0.25C16.1609 0.25 20.75 4.83908 20.75 10.5C20.75 13.0605 19.8111 15.4017 18.2589 17.1982L21.5303 20.4697C21.8232 20.7626 21.8232 21.2374 21.5303 21.5303C21.2374 21.8232 20.7626 21.8232 20.4697 21.5303L17.1982 18.2589C15.4017 19.8111 13.0605 20.75 10.5 20.75C4.83908 20.75 0.25 16.1609 0.25 10.5Z"
						fill="white"
					/>
				</svg>

				<input
					type="text"
					className="rounded-lg p-2 pl-12 w-full bg-[#414141]"
					placeholder={t("search")}
					value={query}
					onChange={handleInputChange}
				/>
			</div>
		</div>
	);
}
