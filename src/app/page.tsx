"use client";
import Card from "@/components/Card";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SearchBar from "@/components/SearchBar";
import data from "@/utils/data.json";
import { useState } from "react";

export default function Home() {
	const [filteredData, setFilteredData] = useState(data);

	const handleSearch = (query: string) => {
		if (query.trim() === "") {
		  // Eğer sorgu boşsa tüm kartları göster
		  setFilteredData(data);
		  return;
		}
	  
		const normalizedQuery = query
		  .toLowerCase()
		  .normalize("NFD")
		  .replace(/[\u0300-\u036f]/g, ""); // Aksanları kaldırır
	  
		const filtered = data.filter((item) => {
		  const normalizedTitle = item.title
			.toLowerCase()
			.normalize("NFD")
			.replace(/[\u0300-\u036f]/g, ""); // Aksanları kaldırır
	  
		  return normalizedTitle.startsWith(normalizedQuery);
		});
	  
		setFilteredData(filtered);
	  };

	return (
		<>
			<div className="w-full bg-black py-4">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8">
					<Navbar />
					<SearchBar onSearch={handleSearch} />
				</div>
			</div>
			<div className="max-w-6xl mx-auto my-4 px-4 sm:px-6 md:px-8">
				<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
					{filteredData.map((item) => (
						<Card
							key={item.id}
							title={item.title}
							description={item.description}
							count={item.count}
							icon={item.icon}
						/>
					))}
				</div>
			</div>
			<Footer/>
		</>
	);
}
