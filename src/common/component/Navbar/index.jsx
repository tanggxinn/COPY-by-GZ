import React from "react";

import styles from "./index.less";

export default function Navbar ({navbarData=[]}){
  return (
    <div className={styles.root}>
      <ul className={styles.first}>
        {navbarData.map(data=>(
          <li className={styles.title} key={data.key} >
            {data.title}
            {data.item ? (
              <ul className={styles.second}>
                {data.item
                .map((item, key) => ({ key: `item_${key}`, value: item }))
                .map(item=> (
                  <li className={styles.item} key={item.key} >
                  {item.value}
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
          ))}
      </ul>
    </div>
  );
}