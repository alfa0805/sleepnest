import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import useLikeStore from "../store/likeStore";
import { FaHeart, FaHeartBroken } from "react-icons/fa";

const Like = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { likedItems, toggleLike } = useLikeStore();

  const handleNavigation = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="py-2 ">
      <div className="container">
        <div className="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-5">
          {likedItems.length === 0 ? (
            <div className="flex w-full justify-center text-9xl">
              <div className="h-[20vh] md:h-[50vh]">
                <FaHeartBroken className="text-center text-red-500" />
              </div>
            </div>
          ) : (
            likedItems.map((item) => (
              <div
                onClick={() => handleNavigation(item.id)}
                key={item.id}
                className="group cursor-pointer relative"
              >
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleLike(item);
                  }}
                  className="absolute bg-white/80 text-red-500 w-8 h-8 flex items-center justify-center rounded-full top-2 right-2 z-3 text-xl"
                >
                  <FaHeart />
                </button>
                <div className="">
                  <div className="flex w-full h-40 rounded-xl overflow-hidden items-center justify-center">
                    <img
                      src={item.img}
                      alt={t(item.title)}
                      className="w-full h-full object-cover rounded-md transition-transform duration-300 hover:scale-107"
                    />
                  </div>
                  <h2 className="text-md md:pt-1 text-gray-100 group-hover:text-[#c5a53b]">{t(item.title)}</h2>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Like;
