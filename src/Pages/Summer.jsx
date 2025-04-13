import React from "react";
import summer from "../data/Summer";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import useLikeStore from "../store/likeStore";

function Summer() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { likedItems, toggleLike } = useLikeStore();

  const handleNavigation = (id) => {
    navigate(`/details/${id}`);
  };
  return (
    <div className="py-2 md:py-10">
      <div className="container">
        <h1 data-aos="flip-down" className="text-2xl md:text-4xl font-bold text-center mb-5">
          {t("summer.titlesup")}
        </h1>
        <p data-aos="flip-down" className="text-[12px] md:text-sm text-center pb-10">
          {t("quality.title")}
        </p>
        <div className="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-5">
          {summer.map((item) => {
            const isLiked = likedItems.some(
              (likedItem) => likedItem.id === item.id
            );
            return (
              <div
                data-aos="fade-up"
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
                <div className="">
                  <div className="flex w-full h-40 rounded-xl overflow-hidden items-center justify-center ">
                    <img
                      src={item.img}
                      alt={t(item.title)}
                      className="w-full h-full object-cover rounded-md transition-transform duration-300 hover:scale-107"
                    />
                  </div>
                  <h2 data-aos="flip-down" className="text-md  md:pt-1">{t(item.title)}</h2>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Summer;
