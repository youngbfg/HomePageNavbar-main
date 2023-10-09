import styles from "./homepagenavbar.module.css";
import Image from "next/image";

const homepagenavbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.homepagenavbar}>
        <div className={styles.homepagenavbarstyle}>
          {/* ---------------------acil ulaşım yolları--------------------------------------------- */}

          <div>
            {/* acil_ulasim_resim */}
            <div className={styles.acil_ulasim_resim}>
              <Image
                src="/acil_ulasim_resim.png"
                alt="acil_ulasim_resim"
                width={350}
                height={400}
              />
            </div>

            {/* acil_ulasim_yollari_yazi */}
            <button className={styles.acil_ulasim_yollari_yazi}>
              <a href="admin">Acil Ulaşım Yolları</a>
            </button>
          </div>

          {/* -------------------------anaarter --------------------------------------- */}
          <div>
            {/* ana_arter_resim */}
            <div className={styles.ana_arter_resim}>
              <Image
                src="/ana_arter_resim.png"
                alt="ana_arter_resim"
                width={350}
                height={400}
              />
            </div>

            <button className={styles.anaarter_yollari_yazi}>
              <a href="admin">Anaarter Yolları</a>
            </button>
          </div>

          {/* ----------------------kararlar ----------------------------------------- */}

          <div>
            {/* kararlar_resim */}
            <div className={styles.kararlar_resim}>
              <Image
                src="/kararlar_resim.png"
                alt="kararlar_resim"
                width={350}
                height={400}
              />
            </div>

            {/* admin örnek sayfadır butonun çalıştığını simgeler admin sayfası isteğe göre değiştirilecektir */}
            {/* ------------------------------------------------------------------- */}
            {/* kararlar_yazi */}
            <button className={styles.kararlar_yazi}>
              <a href="admin">Kararlar</a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default homepagenavbar;
