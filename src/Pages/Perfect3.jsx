import news3 from "../assets/news3.png";
import { useTranslation } from 'react-i18next';
import Contact from "../Page/Contact";

function Perfect3() {
        const { t } = useTranslation();
  return (
    <div>
      <div className="max-w-[900px] mx-auto h-full px-5">
        <div className="w-full">
          <img src={news3} alt="news" className="w-full rounded-2xl"/>
        </div>
        <div className="flex items-center gap-2 mt-1 mb-3">
          <h1 data-aos="flip-down" className="font-semibold text-gray-200">10/05/2024</h1>
          <p data-aos="flip-down" className="text-xs text-[#c5a53b]">{t("news.text-top")}</p>
        </div>
          <h1 data-aos="flip-down" className="text-xl text-[#c5a53b] font-bold md:text-2xl mb-2">{t("news.title1")}</h1>
          <p data-aos="flip-down" className="text-gray-200 text-base md:text-sm mb-5">{t("news.per1/1")}</p>
          <p data-aos="flip-down" className="text-gray-200 text-base md:text-sm mb-5">{t("news.per1/2")}</p>
          <p data-aos="flip-down" className="text-gray-200 text-base md:text-sm mb-5">{t("news.per1/3")}</p>
          <p data-aos="flip-down" className="text-gray-200 text-base md:text-sm mb-5">{t("news.per1/4")}</p>
      </div>
      <Contact/>
    </div>
  )
}

export default Perfect3
