
import { t } from "i18next"
import Aboutbg from "../assets/aboutImg.png"
import { useTranslation } from "react-i18next";

function About() {
    const { t } = useTranslation();
    const texts = Array.from({ length: 12 }, (_, i) => ({
      text: t(`about.text${i + 1}`)
    }));
  return (
    <div>
      <div class="container">
        <div class="flex flex-col-reverse lg:flex-row md:items-center gap-10">
          <div class="">
            <h2 data-aos="flip-down" class="text-[18px] pb-3 font-medium lg:text-[23px]">{t("about.title")}</h2>
            <div class="">
              {
                texts.map((text , index) =>(
                  <p 
                    data-aos="flip-down"
                    key={index} 
                    className="text-[10px] md:text-[12px] text-gray-600 lg:text-[13px]">
                      {text.text}
                    </p>
                ))
              }
            </div>
          </div>
            <img  
              src={Aboutbg} 
              alt="aboutimg" 
              class="w-full object-cover lg:w-[60%] rounded-3xl shadow-[0_0_15px_#00000070]"
            />
        </div>
      </div>
    </div>
  )
}

export default About