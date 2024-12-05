"use client";
import React, { useState } from "react";
import { useLocale } from "next-intl";
import { useTransition } from "react";
import { Locale } from "@/i18n/config";
import { setUserLocale } from "@/services/locale";
import { useTranslations } from "next-intl";

export default function Navbar() {
	const [isPending, startTransition] = useTransition();
	const [query, setQuery] = useState("");
	const t = useTranslations("Home");

	function onChange(value: string) {
		const locale = value as Locale;
		startTransition(async () => {
			await setUserLocale(locale);
		});
	}

	const locale = useLocale();

	return (
		<header className="bg-black text-white py-5">
			<div className="max-w-7xl mx-auto flex items-center justify-between">
				<div className="flex items-center gap-4 justify-center cursor-pointer">
					<svg
						width="40"
						height="20"
						viewBox="0 0 68 24"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							d="M9.42906 2.38428V23.5161H4.96151V6.62663H4.83802L0 9.6631V5.6968L5.23029 2.38428H9.42906Z"
							fill="white"
						/>
						<path
							d="M11.2816 2.02197H16.2504V23.517H11.2816V2.02197Z"
							fill="white"
						/>
						<path
							d="M17.6307 2.95232C17.6307 1.44134 18.8221 0.25 20.5946 0.25C22.338 0.25 23.5293 1.44134 23.5293 2.95232C23.5293 4.43424 22.338 5.62558 20.5946 5.62558C18.8221 5.62558 17.6307 4.43424 17.6307 2.95232ZM18.0957 7.3109H23.0644V23.5248H18.0957V7.3109Z"
							fill="white"
						/>
						<path
							d="M24.931 2.02197H29.8998V13.9064L34.8105 7.31038H40.9416L34.2003 15.4464L40.9997 23.5243H34.8395L29.8998 16.7249V23.5243H24.931V2.02197Z"
							fill="white"
						/>
						<path
							d="M41.9296 11.4359H34.8541V7.30981H41.9296V3.35803H46.8983V7.30981H50.1527V11.4359H46.8983V17.9447C46.8983 18.9036 47.3051 19.3104 48.4093 19.3104H50.1818V23.5237H47.6538C44.2832 23.5237 41.9296 22.0999 41.9296 17.8866V11.4359Z"
							fill="white"
						/>
						<path
							d="M59.1967 23.749C54.4313 23.749 51.0026 20.5527 51.0026 15.4095C51.0026 10.2664 54.3732 7.07739 59.1967 7.07739C63.9258 7.07739 67.2674 10.2156 67.2674 15.1553C67.2674 15.6202 67.2383 16.1142 67.1802 16.6082H55.9423C56.1167 18.7293 57.4242 19.7173 59.0224 19.7173C60.4171 19.7173 61.2017 19.0199 61.6085 18.1482H66.8969C66.1051 21.3154 63.2284 23.749 59.1967 23.749ZM55.9714 13.8477H62.1896C62.1896 12.0752 60.7949 11.0582 59.1386 11.0582C57.5114 11.0582 56.2619 12.0462 55.9714 13.8477Z"
							fill="white"
						/>
					</svg>

					<span className="text-sm">{t("egitim")}</span>
				</div>
				<div className="flex items-center gap-4">
					<select
						defaultValue={locale}
						disabled={isPending}
						onChange={(e) => onChange(e.target.value)}
						className="bg-black text-white text-sm border-none focus:outline-none"
					>
						<option value="tr">Türkçe</option>
						<option value="en">English</option>
					</select>
					<button className="text-sm">{t("login")}</button>
					
				</div>
			</div>
		</header>
	);
}
