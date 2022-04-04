// https://picmagic.oss-cn-beijing.aliyuncs.com/img/home.jpg
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="home-layout">
      <div>
        <h1>简化版在线杂货铺</h1>
        <p>在乎生活的每件小事，不辜负每一次期待</p>
        <Link to="/products" className="btn btn-default">
          开始选购
        </Link>
      </div>
      <img
        src="https://picmagic.oss-cn-beijing.aliyuncs.com/img/home.jpg"
        width="350"
        height="250"
        className="rounded home-image"
        alt=""
      />
    </div>
  );
}
