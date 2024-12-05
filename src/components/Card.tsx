interface CardProps {
	title: string;
	description: string;
	count: number;
	icon: string; // icon prop'u eklendi
}

export default function Card({ title, description, count, icon }: CardProps) {
	return (
		<div className="flex flex-col gap-2 border border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-lg hover:border-black transition cursor-pointer">
			<img src={`/${icon}.svg`} alt="icon" className="h-6 w-6 mb-2" />
			<h2 className="text-lg font-semibold text-black">{title}</h2>
			<p className="text-sm text-gray-600">{description}</p>
			<p className="text-sm text-gray-400">{count} yazı</p>
		</div>
	);
}
