import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Commet } from 'react-loading-indicators';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [iframeLoading, setIframeLoading] = useState(true);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const BOT_TOKEN = '7519624691:AAGw5kc72DDVM3fE1iv4t_vwfXvJqzo8mQM';
    const CHAT_ID = '1957552716';

    const message = `📝 *Yangi xabar:*\n👤 *Ism:* ${formData.name}\n📞 *Telefon:* +998${formData.phone}\n💬 *Xabar:* ${formData.message}`;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            chat_id: CHAT_ID,
            text: message,
            parse_mode: 'Markdown',
          }),
        }
      );

      if (response.ok) {
        setFormData({ name: '', phone: '', message: '' });
        toast.success('✅ Muvaffaqiyatli yuborildi!');
      } else {
        toast.error('❌ Yuborishda xatolik yuz berdi!');
      }
    } catch (error) {
      toast.error('🚫 Telegramga ulanib bo‘lmadi!');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="py-10 relative max-[890px]:py-5">
      <ToastContainer />
      <div className="container">
        <div className="flex flex-col md:flex-row md:justify-between gap-10">
          {loading ? (
            <div className="w-full flex justify-center items-center min-h-[200px]">
              <Commet
                color="#fbbf24"
                size="large"
                text="Yuborilmoqda..."
                textColor="#fbbf24"
              />
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="md:w-1/2 flex flex-col gap-5 items-start"
            >
              <h1 className="text-3xl pl-5 font-medium md:text-4xl md:font-bold">
                {t('footer.contact.title')}
              </h1>

              <input
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("contact.text")}
                className="w-full text-[12px] md:text-sm outline-none hover:shadow-[2px_2px_3px_#00000019] focus:shadow-[2px_2px_6px_#00000040] bg-gray-300 rounded-3xl pl-7 p-3"
              />
              <input
                required
                type="number"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder={t("contact.number")}
                className="w-full text-[12px] md:text-sm outline-none hover:shadow-[2px_2px_3px_#00000019] focus:shadow-[2px_2px_6px_#00000040] bg-gray-300 rounded-3xl pl-7 p-3"
              />
              <textarea
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("contact.haber")}
                className="w-full text-[12px] md:text-sm outline-none hover:shadow-[2px_2px_3px_#00000019] focus:shadow-[2px_2px_6px_#00000040] h-26 bg-gray-300 rounded-3xl pl-7 p-3"
              ></textarea>

              <button
                type="submit"
                className="px-4 tracking-wide text-white font-medium py-1 bg-red-500 rounded-2xl cursor-pointer"
              >
                {t("contact.btn")}
              </button>
            </form>
          )}

          <div className="relative w-full md:w-1/2 max-[770px]:h-full">
            {iframeLoading && (
              <div className="absolute inset-0 flex justify-center items-center bg-white rounded-3xl z-10">
                <Commet
                  color="#fbbf24"
                  size="large"
                  text="Yuklanmoqda..."
                  textColor="#fbbf24"
                />
              </div>
            )}
            <iframe
              className="w-full h-full rounded-3xl"
              src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d3067.6526359032846!2d64.459964!3d39.747453!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMznCsDQ0JzUwLjgiTiA2NMKwMjcnMzUuOSJF!5e0!3m2!1sen!2us!4v1744540235784!5m2!1sen!2us"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              onLoad={() => setIframeLoading(false)}
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
