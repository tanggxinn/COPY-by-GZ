import React from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Layout from "../common/component/Layout";
import Homepage from "../common/container/Homepage";
import NotFound from "../common/container/NotFound";

const navbarData = [
  {
    key:'001',
    title:'抽血检查项目',
    item:['血常规','血生化（肝肾功能）','激素六项','免疫蛋白电泳']
  },
  {
    key:'002',
    title:'拍片检查项目',
    item:['X光片','CT','增强CT','核磁共振','B超']
  },
  {
    key:'003',
    title:'其他检查项目',
    item:['骨穿','血液肿瘤免疫残留','骨密度','+']
  }
];

export default function App (props) {
  // const {children} = props;
  return (
    <Router>
      <div>
        <Switch>
          <Layout navbarData={navbarData} >
            {/* {children} */}
            <Route path="/" component={Homepage} exact/>
            <Route path="/home" component={Homepage} exact/>
          </Layout>
          <Route component={NotFound} />
        </Switch>
      </div>
    </Router>
  );
}