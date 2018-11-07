import React from "react";

import Header from "../Header";
import Navbar from "../Navbar";

import styles from "./index.less";

const navbarData = [
  { title:'抽血检查项目',
    item:['血常规','血生化（肝肾功能）','激素六项','免疫蛋白电泳']
  },
  { title:'拍片检查项目',
    item:['X光片','CT','增强CT','核磁共振','B超']
  },
  { title:'其他检查项目',
  item:['骨穿','血液肿瘤免疫残留','骨密度','+']
}
]

export default function Layout (props) {
  const { children } = props;
  return (
    <div className={styles.root}>
      <div className={styles.over}>
        <header>
          <Header />
        </header>
      </div>
      <div className={styles.half}>
        <nav>
          <Navbar navbarData={navbarData} />
        </nav>
      </div>
      <div className={styles.in}>
        <div className={styles.init}>
          {children}
        </div>
      </div>
    </div>
  );
}