"use client";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import _data from "@/utils/data.json";
import { useMemo, useState } from "react";
import { useLocale, useTranslations } from "next-intl";

interface DataType {
	id: number;
	icon: string;
	title: Record<string, string>;
	description: Record<string, string>;
	count: number;
}

export default function Home() {
	const locale = useLocale();
	const t = useTranslations("Home");
	const [search, setSearch] = useState("");

	const filteredData = useMemo(() => {
		const data = _data as DataType[];
		if (search.trim() === "") return data;

		return data.filter((item) => {
			const title = item.title[locale].toLowerCase();
			const description = item.description[locale].toLowerCase();
			const query = search.trim().toLowerCase();

			return title.includes(query) || description.includes(query);
		});
	}, [search, locale]);

	return (
		<>
			<div className="w-full bg-black py-4">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
					<Navbar />
					<SearchBar defaultValue={search} onSearch={setSearch} />
				</div>
			</div>
			<div className="max-w-6xl mx-auto my-4 px-4 sm:px-6 md:px-8">
				{search.trim().length > 0 && filteredData.length === 0 && (
					<div>
						<h1 className="text-2xl font-bold text-black text-center my-8">
							{t("no-data")}
						</h1>
					</div>
				)}
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
					{filteredData.map((item) => (
						<Card
							key={item.id}
							title={item.title[locale]}
							description={item.description[locale]}
							count={item.count}
							icon={item.icon}
						/>
					))}
				</div>
			</div>
			<Footer />
		</>
	);
}
