"use client";

import { useState, ChangeEvent } from "react";

// Type definitions
interface Card {
  id: number;
  logo: string;
  title: string;
  description: string;
}

const tabs: string[] = [
  "All Apps",
  "Quick Access",
  "ERP",
  "E-commerce",
  "E-Mail Hosting",
  "Database",
  "Content Management",
];

const cards: Card[] = [
  {
    id: 1,
    logo: "/python.png",
    title: "Odoo",
    description:
      "Comprehensive ERP and CRP platform for business management suite with integrated modules for CRM, ERP, inventory, HR, and e-commerce.",
  },
  {
    id: 2,
    logo: "/python.png",
    title: "Python",
    description:
      "Comprehensive ERP and CRP platform for business management suite with integrated modules for CRM, ERP, inventory, HR, and e-commerce.",
  },
  {
    id: 3,
    logo: "/python.png",
    title: "NodeJs",
    description:
      "Comprehensive ERP and CRP platform for business management suite with integrated modules for CRM, ERP, inventory, HR, and e-commerce.",
  },
  {
    id: 4,
    logo: "/python.png",
    title: "Odoo",
    description:
      "Comprehensive ERP and CRP platform for business management suite with integrated modules for CRM, ERP, inventory, HR, and e-commerce.",
  },
  {
    id: 5,
    logo: "/python.png",
    title: "Python",
    description:
      "Comprehensive ERP and CRP platform for business management suite with integrated modules for CRM, ERP, inventory, HR, and e-commerce.",
  },
  {
    id: 6,
    logo: "/python.png",
    title: "NodeJs",
    description:
      "Comprehensive ERP and CRP platform for business management suite with integrated modules for CRM, ERP, inventory, HR, and e-commerce.",
  },
  {
    id: 7,
    logo: "/python.png",
    title: "NodeJs",
    description:
      "Comprehensive ERP and CRP platform for business management suite with integrated modules for CRM, ERP, inventory, HR, and e-commerce.",
  },
];

export default function ApplicationSection() {
  const [activeTab, setActiveTab] = useState<string>("All Apps");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredCards = cards.filter((card) =>
    card.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <section className="py-20 bg-black text-white mt-10">
      {/* Section Intro */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <p className="inline-block border border-gray-500 text-gray-500 uppercase text-sm px-3 py-1 rounded-full mb-2 tracking-wide">
          Applications
        </p>

        <h2 className="text-4xl md:text-5xl font-semibold text-gray-200 mb-2">
          Select the application that best fits your needs
        </h2>

        <p className="text-lg md:text-xl text-gray-400 max-w-4xl mx-auto">
          Choose from our range of applications to get started quickly and easily
        </p>
      </div>

      {/* Search Field */}
      <div className="max-w-2xl mx-auto mb-6">
        <input
          type="text"
          placeholder="Search Application"
          className="w-full bg-[linear-gradient(135deg,#0d0d0d,#050505)]
          border border-white/10
          shadow-[0_0_10px_rgba(0,0,0,0.5)] text-gray-200 rounded-lg px-4 py-3 focus:outline-none focus:ring-1 focus:ring-gray-700"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {tabs.map((tab) => (
          <button
            key={tab}
            className={`px-6 py-2 rounded-full border ${
              activeTab === tab
                ? "bg-gray-300 text-black"
                : "border-gray-500 text-gray-200 "
            } transition`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCards.map((card) => (
          <div
            key={card.id}
            className="bg-[linear-gradient(135deg,#0d0d0d,#050505)]
            border border-white/10
            shadow-[0_0_10px_rgba(0,0,0,0.5)] rounded-xl p-6 transition"
          >
            <div className="w-12 h-12 mb-4 rounded-full flex items-center justify-center text-gray-500 text-lg font-bold">
              <img
                src={card.logo}
                alt={card.title}
                className="w-8 h-8 filter grayscale"
              />
            </div>

            <h3 className="text-2xl font-medium mb-2 text-gray-300">
              {card.title}
            </h3>

            <p className="text-gray-400 text-lg">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
