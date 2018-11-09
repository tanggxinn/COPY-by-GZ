import React from "react"

import Layout from "../../component/Layout";
import Card from "../../component/Card";


const projectData = [
  {
    key:'001',
    imgad:'https://placehold.it/560x980/ff6a6a/333333?text=picture',
    name:'最新检查结果',
    text:'这里是最新提交的检查结果，鼠标悬停可见上传检查图片的原图，点击可进入查看详情。'
  },
  {
    key:'002',
    imgad:'https://placehold.it/560x980/ff6a6a/333333?text=picture',
    name:'血常规',
    text:'babababa'
  },
  {
    key:'003',
    imgad:'https://placehold.it/560x980/ff6a6a/333333?text=picture',
    name:'血常规',
    text:'babababa'
  },
  {
    key:'004',
    imgad:'https://placehold.it/560x980/ff6a6a/333333?text=picture',
    name:'血常规',
    text:'babababa'
  }
];

export default function Homepage (props) {
  return (
    <div>
        <Card projectData = {projectData} />
    </div>
  );
}
