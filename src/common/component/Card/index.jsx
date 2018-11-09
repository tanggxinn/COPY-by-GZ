import React from "react";

import styles from "./index.less";

export default function Card (props) {
  const projectData = props.projectData;
  return (
    <div className={styles.root}>
      {projectData.map(obj=>(
        <div className={styles.onecard} key={obj.key} >
          <a href="w">
            <div className={styles.back}>
              <div className={styles.imgchange}>
                <img 
                src={obj.imgad} 
                alt="" className={styles.minimg}
                />
                <img 
                src={obj.imgad} 
                alt="" className={styles.maximg}
                />
              </div>
              <div className={styles.pchange}>
                <p className={styles.title}>
                  {obj.name}
                </p>
                <p className={styles.item}>
                  {obj.text}
                </p>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
  );
}