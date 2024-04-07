import Link from "next/link";
import styles from "./_page.module.css";
import Image from "next/image";
import Skill from "./component.js";



export default function Portfolio() {
    return (
        <div>

            <head>
                <title>나의 포트폴리오</title>
            </head>
            <div className={styles.page_body}>
                <div className={styles.topbar}>
                    {/* <div className={styles.topbar_button_left}>
                        <Link href="privacy_tap">
                            <>개인정보 | </>
                        </Link>
                        <Link href="about_me_tap">
                            <>About Me | </>
                        </Link>
                        <Link href="education_tap">
                            <>Education | </>
                        </Link>
                        <Link href="certificate_tap">
                            <>Certificate | </>
                        </Link>
                        <Link href="career_tap">
                            <>Career </>
                        </Link>
                        
                    </div> */}

                    <div className={styles.topbar_button_right}>
                        <div className={styles.topbar_button_right_bg}>
                            <Link href="/">
                                <Image className={styles.homebutton}
                                    src="/home.png"
                                    width={20}
                                    height={20}
                                >    
                                </Image>
                            </Link>
                        </div>
                    </div>
                    
                </div>
                

                <div className={styles.page_head}>
                    <h4>김가을의 포트폴리오</h4>
                </div>


                <div className={styles.data1}>
                    <div id="privacy_tap"></div>
                    <div className={styles.image_background}>
                        <Image 
                            className={styles.image_setting}
                            src="/id_photo.png"
                            width={150}
                            height={170}
                        />
                    </div>

                    <div className={styles.image_info_gap}></div>
                    
                    <div className={styles.my_info}>
                        개인정보
                        <div className={styles.my_details}>
                            이름 : 김가을<br/>
                            성별 : 남<br/> 
                            출생일 : 2003.08.12<br/>
                            나이 : 22세(만20세)
                        </div>
                    </div>

                    <div className={styles.my_info}>
                        <div className={styles.my_details2}>
                            tel. : 010-4064-3348<br/>
                            e-mail : samfall@gmail.com<br/>
                            adress : 서울시 송파구 풍납동 489-10번지<br/>
                        </div>
                    </div>
                </div>

                <div className={styles.data1}>
                    <div id="about_me_tap"></div>
                    <div className={styles.about_me}>
                        About Me
                        <div className={styles.about_me_detail1}>
                            안녕하세요. 책임감있는 테스터 김가을 입니다.
                        </div>
                        <div className={styles.about_me_detail2}>
                            개발과 테스팅에대해 공부하며 업무를 진행중인 김가을이라고 합니다.<br/>
                            현재 엘앰캐드에 재직중이며 프로그램 테스팅을 주 업무로 맡고 있습니다.
                        </div>
                    </div>
                </div>

                <div className={styles.data1}>
                    <div id="education_tap"></div>
                    <div className={styles.my_education}>
                        My education
                        <div className={styles.education}>
                            2019.03.02 ~ 2022.02.10 성수공업고등학교 졸업
                            
                            <Link className={styles.education_adress}
                                href="https://map.naver.com/p/directions/-/14143287.9130547,4514661.9008949,%EC%84%B1%EC%A7%84%ED%95%99%EA%B5%90(2029%EB%85%84%EC%98%88%EC%A0%95),1078814153,PLACE_POI/-/transit?c=16.75,0,0,0,dh"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                | 길찾기
                            </Link>
                        </div>
                        <div className={styles.education}>
                            2022.03.02 ~ 2025.02.10 가천대학교 졸업 예정
                            
                            <Link className={styles.education_adress}
                                href="https://map.naver.com/p/directions/-/14152124.95517166,4502353.3273306545,%EA%B0%80%EC%B2%9C%EB%8C%80%ED%95%99%EA%B5%90,11591489,PLACE_POI/-/transit?c=15.00,0,0,0,dh"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                | 길찾기
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={styles.data1}>
                    <div id="certificate_tap"></div>
                    <div className={styles.my_certificate}>
                        Certificate
                        <div className={styles.certificate_title}>
                            2019.09.21 | 자동차 정비기능사 취득
                            <Link className={styles.certificate_info}
                                href="https://www.q-net.or.kr/crf005.do?id=crf00505&jmCd=6281"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                | 자격증
                            </Link>
                        </div>

                        <div className={styles.certificate_title}>
                            2020.09.21 | 자동차 차체수리기능사 취득
                            <Link className={styles.certificate_info}
                                href="https://www.q-net.or.kr/crf005.do?id=crf00505&gSite=Q&gId="
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                | 자격증
                            </Link>
                        </div>

                        <div className={styles.certificate_title}>
                            2020.09.21 | 자동차 보수도장기능사 취득
                            <Link className={styles.certificate_info}
                                href="https://www.q-net.or.kr/crf005.do?id=crf00505&gSite=Q&gId="
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                | 자격증
                            </Link>
                        </div>

                        <div className={styles.certificate_title}>
                            2024.09.21 | CSTS 취득 예정
                            <Link className={styles.certificate_info}
                                href="https://terms.tta.or.kr/dictionary/dictionaryView.do?word_seq=038239-3"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                | 자격증
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={styles.data1}>
                    <div id="career_tap"></div>
                    <div className={styles.my_career}>
                        Career
                        <div className={styles.career_title}>
                            2023.03.02 ~ 20xx.xx.xx | 엘앰캐드 재직중
                            <Link className={styles.career_info}
                                href="http://www.elmcad.com/"
                                target="_blank"
                            >
                                | 엘앰캐드 홈페이지
                            </Link>
                        </div>
                    </div>
                </div>

                <div className={styles.data1}>
                    <div id="skill_tap">
                        <div className={styles.my_skill}>
                            My Skill
                            <div className={styles.skill_title}>
                                <Skill/>
                            </div>
                        </div>
                        
                    </div>
                </div>
                
            </div>
            
        </div>
    ) 
}