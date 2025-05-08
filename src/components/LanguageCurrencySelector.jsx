import React, { useState } from "react";

const LanguageCurrencySelector = () => {
    const [languageOpen, setLanguageOpen] = useState(false);
    const [currencyOpen, setCurrencyOpen] = useState(false);

    const [selectedLanguage, setSelectedLanguage] = useState("English");
    const [selectedCurrency, setSelectedCurrency] = useState("Dollar (USD)");

    const languages = ["English", "Bangla", "Russian"];
    const currencies = ["Dollar (USD)", "Euro (EUR)"];

    return (
        <div className="flex space-x-4 items-center relative bg-[#1B6392] p-4 text-white">
            {/* Language Dropdown */}
            <div className="relative">
                <button
                    onClick={() => {
                        setLanguageOpen(!languageOpen);
                        setCurrencyOpen(false);
                    }}
                    className="cursor-pointer"
                >
                    {selectedLanguage.slice(0, 3)} <span>▼</span>
                </button>
                {languageOpen && (
                    <div className="absolute top-full left-0 mt-2 bg-white text-black shadow-md rounded w-40 z-10">
                        {languages.map((lang) => (
                            <div
                                key={lang}
                                onClick={() => {
                                    setSelectedLanguage(lang);
                                    setLanguageOpen(false);
                                }}
                                className={`px-4 py-2 hover:bg-gray-200 cursor-pointer ${selectedLanguage === lang ? "font-bold text-[#EBC80C]" : ""
                                    }`}
                            >
                                {lang}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Currency Dropdown */}
            <div className="relative">
                <button
                    onClick={() => {
                        setCurrencyOpen(!currencyOpen);
                        setLanguageOpen(false);
                    }}
                    className="cursor-pointer"
                >
                    {selectedCurrency.includes("USD") ? "USD" : "EUR"} <span>▼</span>
                </button>
                {currencyOpen && (
                    <div className="absolute top-full left-0 mt-2 bg-white text-black shadow-md rounded w-40 z-10">
                        {currencies.map((cur) => (
                            <div
                                key={cur}
                                onClick={() => {
                                    setSelectedCurrency(cur);
                                    setCurrencyOpen(false);
                                }}
                                className={`px-4 py-2 hover:bg-gray-200 cursor-pointer ${selectedCurrency === cur ? "font-bold text-[#EBC80C]" : ""
                                    }`}
                            >
                                {cur}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default LanguageCurrencySelector;
