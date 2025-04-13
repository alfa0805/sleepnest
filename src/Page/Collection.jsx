import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import useLikeStore from "../store/likeStore";
import winter from "../data/Winter";
import summer from "../data/Summer";
import autumn from "../data/Autumn";
import { IoSearch } from "react-icons/io5";

function Collection() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { likedItems, toggleLike } = useLikeStore();

  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("all");

  const allItems = {
    all: [...winter, ...summer, ...autumn],
    winter: winter,
    summer: summer,
    autumn: autumn,
  };

  const itemsToShow = allItems[selected].filter((item) =>
    t(item.title).toLowerCase().includes(search.toLowerCase())
  );

  const handleNavigation = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="container flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <div className="w-full md:w-1/4 p-4">
        <div className="flex items-center justify-between w-full px-1 py-1 mb-4 rounded-3xl bg-gray-200">
          <input
            type="text"
            placeholder="Search..."
            className="outline-none text-xs pl-3"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="w-[40px] h-[40px] rounded-[50%] bg-red-500 flex items-center justify-center">
            <IoSearch className="text-white text-xl"/>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <button
            onClick={() => setSelected("all")}
            className={`text-center text-lg px-3 py-2 rounded ${
              selected === "all" ? " font-bold text-[#dfb82d]" : ""
            }`}
          >
            {t("all")}
          </button>
          <button
            onClick={() => setSelected("winter")}
            className={`text-center text-lg px-3 py-2 rounded ${
              selected === "winter" ? " font-bold text-[#dfb82d]" : ""
            }`}
          >
            {t("winter.titlesup")}
          </button>
          <button
            onClick={() => setSelected("summer")}
            className={`text-center text-lg px-3 py-2 rounded ${
              selected === "summer" ? " font-bold text-[#dfb82d]" : ""
            }`}
          >
            {t("summer.titlesup")}
          </button>
          <button
            onClick={() => setSelected("autumn")}
            className={`text-center text-lg px-3 py-2 rounded ${
              selected === "autumn" ? " font-bold text-[#dfb82d]" : ""
            }`}
          >
             {t("autm.titlesup")}
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="w-full md:w-3/4 p-4">
        <div className="grid grid-cols-1 min-[450px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-5">
          {itemsToShow.map((item) => {
            const isLiked = likedItems.some((likedItem) => likedItem.id === item.id);
            return (
              <div
                onClick={() => handleNavigation(item.id)}
                key={item.id}
                className="hover:text-red-500 cursor-pointer relative"
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(item);
                  }}
                  className="absolute bg-white/80 text-red-500 w-8 h-8 flex items-center justify-center rounded-full top-2 right-2 z-3 text-xl"
                >
                  {isLiked ? <FaHeart /> : <FaRegHeart />}
                </button>
                <div className="flex w-full h-40 rounded-xl overflow-hidden items-center justify-center">
                  <img
                    src={item.img}
                    alt={t(item.title)}
                    className="w-full h-full object-cover rounded-md transition-transform duration-300 hover:scale-107"
                  />
                </div>
                <h2 className="text-md pt-1">{t(item.title)}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Collection;
