import axios from "axios";
import { useEffect, useState } from "react";
import Title from "../ui/Title";
import Image from "next/image";

const Footer = () => {
  const [footer, setFooter] = useState([]);

  useEffect(() => {
    const getFooter = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/footer`
        );
        setFooter(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getFooter();
  }, []);

  return (
    <div className="bg-secondary text-white">
      <div className="container mx-auto pt-16 pb-6">
        
        <div className="flex md:justify-between justify-center text-center flex-wrap md:gap-y-0 gap-y-6   ">
        <Image src="/ukmlogo.png" alt="IBB Ulaşım Logo" className="footer-logo  " width={260} height={260} />
        <div className="md:flex-1 ">
            <Title addClass="text-[20px] ml-5 text-primary">HİZMETLER</Title>
            <p className="mt-3">{footer?.desc}</p>
            <div className="flex flex-col gap-y-2 mt-3 ml-5">
              <a href={footer?.location} target="_blank" rel="noreferrer">
                <span className="inline-block ml-2">Bilgi Hizmetleri</span>
              </a>
              <a href={footer?.location} target="_blank" rel="noreferrer">
                <span className="inline-block ml-2">Çevre Hizmetleri</span>
              </a>
              <a href={footer?.location} target="_blank" rel="noreferrer">
                <span className="inline-block ml-2">Acil Hizmetler</span>
              </a>
              <a href={footer?.location} target="_blank" rel="noreferrer">
                <span className="inline-block ml-2">E-Belediye Hizmetleri</span>
              </a>
            </div>
          </div>
          <div className="md:flex-1 ">
            <Title addClass="text-[20px] ml-5 text-primary">BELEDİYE</Title>
            <p className="mt-3">{footer?.desc}</p>
            <div className="flex flex-col gap-y-2 mt-3 ml-5">
              <a href={footer?.location} target="_blank" rel="noreferrer">
                <span className="inline-block ml-2">Yetki Alanı</span>
              </a>
              <a href={footer?.location} target="_blank" rel="noreferrer">
                <span className="inline-block ml-2">Etik Komisyonu</span>
              </a>
              <a href={footer?.location} target="_blank" rel="noreferrer">
                <span className="inline-block ml-2">Arabuluculuk</span>
              </a>
              <a href={footer?.location} target="_blank" rel="noreferrer">
                <span className="inline-block ml-2">Encümen</span>
              </a>
            </div>
          </div>
          <div className="md:flex-1 ">
            <Title addClass="text-[20px] ml-5 text-primary">LİNKLER</Title>
            <p className="mt-3">{footer?.desc}</p>
            <div className="flex flex-col gap-y-2 mt-3 ml-5">
              <a href={footer?.location} target="_blank" rel="noreferrer">
                <span className="inline-block ml-2">Başkan</span>
              </a>
              <a href={footer?.location} target="_blank" rel="noreferrer">
                <span className="inline-block ml-2">Meclis</span>
              </a>
              <a href={footer?.location} target="_blank" rel="noreferrer">
                <span className="inline-block ml-2">Kurumsal</span>
              </a>
              <a href={footer?.location} target="_blank" rel="noreferrer">
                <span className="inline-block ml-2">Hizmetler</span>
              </a>
            </div>
          </div>
          <div className="md:flex-1 ">
            <Title addClass="text-[20px] ml-5 text-primary">SAYFALAR</Title>
            <p className="mt-3">{footer?.desc}</p>
            <div className="flex flex-col gap-y-2 mt-3 ml-5">
              <a href={footer?.location} target="_blank" rel="noreferrer">
                <span className="inline-block ml-2">Anasayfa</span>
              </a>
              <a href={footer?.location} target="_blank" rel="noreferrer">
                <span className="inline-block ml-2">Hakkımızda</span>
              </a>
              <a href={footer?.location} target="_blank" rel="noreferrer">
                <span className="inline-block ml-2">Kararlar</span>
              </a>
              <a href={footer?.location} target="_blank" rel="noreferrer">
                <span className="inline-block ml-2">İletişim</span>
              </a>
            </div>
          </div>
          <Image src="/ukmlogo.png" alt="IBB Ulaşım Logo" className="footer-logo  " width={260} height={260} />
        </div>
        <p className="text-center mt-10">
           @2023 İstanbul Büyükşehir Belediyesi Ulaşım Koordinasyon Şube Müdürlüğü 💙 ile tasarlanmıştır
        </p>
      </div>
    </div>
  );
};

export default Footer;