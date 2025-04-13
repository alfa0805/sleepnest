import React from 'react'
import { NavLink } from 'react-router-dom'
import news1 from "../assets/news1.png";
import news2 from "../assets/news2.png";
import news3 from "../assets/news3.png";
import { useTranslation } from 'react-i18next';

function News() {
      const { t } = useTranslation();
  return (
    <div className="container">
      <div className="flex flex-col items-center mt-20">
        <h1 data-aos="flip-down" className="text-xl md:text-[35px] font-bold">{t("news.subtitle")}</h1>
        <p data-aos="flip-down" className="mt-4 text-base font-semibold text-gray-400">{t("news.subtext")}</p>
        <div className="flex flex-col justify-between mt-5 md:flex-row md:gap-5 lg:gap-10">
            <div data-aos="fade-up">
                <NavLink to="/perfect/1" data-discover="true"> 
                    <img src={news1} alt="news" className="w-full rounded-2xl cursor-pointer"/>
                    <div className="flex items-center gap-2 mt-1 mb-3">
                        <h1 data-aos="flip-down" className="font-semibold">10/05/2024</h1>
                        <p data-aos="flip-down" className="text-xs text-[#616060] ">{t("news.text-top")}</p>
                    </div>
                    <h1 data-aos="flip-down" className="text-lg font-bold md:text-base md:max-w-[450px] mb-2">{t("news.title1")}</h1>
                    <p data-aos="flip-down" className="text-[#5b5a5a] lg:max-w-[450px] text-base md:text-sm mb-5">{t("news.text1")}</p>
                </NavLink>
            </div>
            <div data-aos="fade-up">
                <NavLink to="/perfect/2" data-discover="true"> 
                    <img src={news2} alt="news" className="w-full rounded-2xl cursor-pointer"/>               
                    <div className="flex items-center gap-2 mt-1 mb-3">
                        <h1 data-aos="flip-down" className="font-semibold">10/05/2024</h1>
                        <p data-aos="flip-down" className="text-xs text-[#616060] ">{t("news.text-top")}</p>
                    </div>
                        <h1 data-aos="flip-down" className="text-lg font-bold md:text-base md:max-w-[450px] mb-2">{t("news.title2")}</h1>
                        <p data-aos="flip-down" className="text-[#5b5a5a] lg:max-w-[450px] text-base md:text-sm mb-5">{t("news.text2")}</p>
                </NavLink>
            </div>
            <div data-aos="fade-up">
                <NavLink to="/perfect/3" data-discover="true"> 
                    <img src={news3} alt="news" className="w-full rounded-2xl cursor-pointer"/>
                    <div className="flex items-center gap-2 mt-1 mb-3">
                        <h1 data-aos="flip-down" className="font-semibold">10/05/2024</h1>
                        <p data-aos="flip-down" className="text-xs text-[#616060] ">{t("news.text-top")}</p>
                    </div>
                    <h1 data-aos="flip-down" className="text-lg font-bold md:text-base md:max-w-[450px] mb-2">{t("news.title3")}</h1>
                    <p data-aos="flip-down" className="text-[#5b5a5a] lg:max-w-[450px] text-base md:text-sm mb-5">{t("news.text2")}</p>
                </NavLink>
            </div>
        </div>
      </div>
    </div>
  )
}

export default News
