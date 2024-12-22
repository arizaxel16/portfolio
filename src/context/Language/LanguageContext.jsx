import React, { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export const useLanguage = () => {
	return useContext(LanguageContext);
};

export const LanguageProvider = ({ children }) => {
	const [language, setLanguage] = useState("en");

	const newLanguage = (langCode) => {
		setLanguage(langCode);
	};

	return (
		<LanguageContext.Provider value={{ language, newLanguage }}>
			{children}
		</LanguageContext.Provider>
	);
};
