import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";


export default function Home() {
  return (
    <main className={styles.main}>

      <div className={styles.center}>
        <Image
          className={styles.main_page_logo}
          src="/boom.jpg"
          width={100}
          height={100}
          priority
        />
      </div>
      <p className={styles.image_caption}>
        Kaeul's Portfolio
      </p>

      <p className={styles.main_page_description}>
        안녕하세요.
        <br/>
        김가을의 페이지에 오신것을 환영합니다.
      </p>


      <div className={styles.icon_grid}>
        
        <Link //포폴 링크
          href="/portfolio"
          rel="noopener noreferrer"
        >
          <Image
            className={styles.icon_circle}
            src="/portpolio.png"
            width={50}
            height={50}
          />
        </Link>
        
        <Link //가천대학교
        href="https://www.gachon.ac.kr"
        target="_blank"
        rel="noopener noreferrer"
        >
          <Image
            className={styles.icon_circle}
            src="/gachon.png"
            width={50}
            height={50}
          />
        </Link>


        <Link //이메일
        href="mailto:samfall03@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        >
          <Image
            className={styles.icon_circle}
            src="/mail.png"
            width={50}
            height={50}
          />
        </Link>

        <Link //깃허브
        href="https://github.com/"
        target="_blank"
        rel="noopener noreferrer"
        >
          <Image
            className={styles.icon_circle}
            src="/github.png"
            width={50}
            height={50}
          />
        </Link>

      </div>


      <div className={styles.icon_grid2}>
        <Link //인스타
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            className={styles.icon_circle}
            src="/instargram.png"
            width={50}
            height={50}
          />
        </Link>

        <Link //유튜브
        href="https://www.youtube.com/"
        target="_blank"
        rel="noopener noreferrer"
        >
          <Image
            className={styles.icon_circle}
            src="/youtube.png"
            width={50}
            height={50}
          />
        </Link>

        <Link //네이버
        href="https://www.naver.com/"
        target="_blank"
        rel="noopener noreferrer"
        >
          <Image
            className={styles.icon_circle}
            src="/naver.png"
            width={50}
            height={50}
          />
        </Link>
      </div>

      



        




      {/* <div className={styles.grid}>

        <Link //포폴 링크
          href="/portfolio_pages"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Portfolio <span>-&gt;</span>
          </h2>
          <p>Check out our past achievements.</p>
        </Link>
        
        <a //가천대학교
          href="https://www.gachon.ac.kr"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Gachon Univ. <span>-&gt;</span>
          </h2>
          <p>Check out various information about Gachon University.</p>
        </a>

        <a //인스타 링크
          href="https://www.instagram.com/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Instagram <span>-&gt;</span>
          </h2>
          <p>Check out the records of this special day.</p>
        </a>

        <a //네이버 링크
          href="https://naver.com"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Naver <span>-&gt;</span>
          </h2>
          <p>Find out what you're curious about on Naver.</p>
        </a>

        <a //github 페이지
          href="https://github.com/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Github <span>-&gt;</span>
          </h2>
          <p>
            Share what you have developed.
          </p>
        </a>
        
      </div> */}



    </main>
  );
}
