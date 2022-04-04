import React from "react";

export default function About() {
  return (
    <div className="about-layout">
          <div>
              <h1>关于我们</h1>
              <p>
                  我们保证货物新鲜。<br />
                  通过使用我们的在线平台节省您的时间，我们尽快将货物送达。<br />
                  <em>我们使用Stripe处理您的支付订单</em>
              </p>
      </div>
      <img
        src="https://picmagic.oss-cn-beijing.aliyuncs.com/img/about.jpg"
        height="275"
        width="183"
        className="rounded"
        alt=""
      />
    </div>
  );
}
