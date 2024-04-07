import styles from "./_page.module.css";

export default function Skill() {
    let 스킬 = ["NX", "Catia", "C++", "React", "Next.js"];
        return (
            <div>
                <div className={styles.my_skill}></div>{스킬.map((skill, i) => {
                    return (
                        <div className={styles.skill_title}>
                            <>{skill} / 습득률 : 70% 이상</>
                        </div>
                    )
                })}
            </div>
        );
}
