import React, { useState } from "react";
import "./LanguageSelect.scss"
import ReactFlagsSelect from "react-flags-select";
import { useLanguage } from "../../../context/Language/LanguageContext";
import { en, es } from "./LanguageSelectStrings";

function LanguageSelect() {
	const { language, newLanguage } = useLanguage();
	const translations = language === "en" ? en : es;
	const [flagSelected, setFlagSelected] = useState("US");

	return (
		<ReactFlagsSelect
			selected={flagSelected}
			onSelect={(code) => {
				setFlagSelected(code);
				newLanguage(code === "US" || code === "GB" ? "en" : "es");
			}}
			countries={["US", "GB", "ES", "CO"]}
			className="flag-selector"
			selectButtonClassName="flag-pop-up-menu"
			customLabels={{
				US: translations.usFlag,
				GB: translations.ukFlag,
				ES: translations.esFlag,
				CO: translations.colFlag,
			}}
			placeholder="Select a country"
		/>
	);
}

export default LanguageSelect;
