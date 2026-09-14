// 项目数据。
//
// 加一个项目 = 在下面的数组里加一个对象。index.html 不用动。
//
// 字段说明：
//   title        项目标题（必填）
//   description  项目描述（必填）
//   image        缩略图变量，来自下方的 import
//   liveUrl      “在线预览” 链接。写 null 就不渲染这个按钮
//   sourceUrl    “查看源码” 链接。写 null 就不渲染这个按钮
//
// ⚠️ 图片必须用 import 引入，不能写成 "assets/xxx.jpg" 这样的字符串。
//    Parcel 靠静态分析决定把哪些文件复制进 dist/，运行时拼出来的路径它看不见，
//    结果就是图片不会被复制、上线后 404。

import imgEdu from "../assets/project-1.jpg";
import imgAi from "../assets/project-2.jpg";
import imgSmart from "../assets/project-3.jpg";

export const projects = [
  {
    title: "教育信息化平台搭建与运维",
    description:
      "负责教育信息化、密码安全及网络运维平台的搭建与优化。基于 Nginx、Linux 架构部署网课平台，完成负载均衡、SSL、CDN、直播及支付验证全流程配置；落地全校 Moodle 平台部署，完成主题二次开发、插件优化与任务调优。使用 Python、FastAPI 开发轻量化题库系统与试题音频生成工具，实现教务出题自动化。同时负责国密密码平台、签名验签服务及多协议 VPN 平台运维，开发教务数据自动化导出工具，有效提升运维工作效率。",
    image: imgEdu,
    liveUrl: null,
    sourceUrl: null,
  },
  {
    title: "AI 自动化工作流与技术生态搭建",
    description:
      "专注教育场景 AI 自动化工作流研发。搭建标准化 AI 出题工作流，依托知识点大纲与多重校验机制，实现试题批量生成、智能打标与质量核验。基于 Python 与大模型开发 AI 自动阅卷系统，通过可视化工作台实现阅卷全流程自动化。同时搭建结构化技术知识库与自动化部署技术博客，自研 AI 发布流水线，实现技术内容高效迭代更新。",
    image: imgAi,
    liveUrl: null,
    sourceUrl: null,
  },
  {
    title: "智能化项目实施与职业技能项目落地",
    description:
      "负责政企智能化项目落地与数字职业技能培训实施。主导网络安全、密码技术、程序设计等广东省紧缺工种的技能培训配套工作，完成题库、课程、实操环境搭建，支撑官方职业技能等级认定与竞赛技术保障。深度参与多个千万级政企智能化项目，负责数据中台方案设计、技术选型、协议联调与系统开发，落地 BIM 可视化、数据驾驶舱等核心能力，完成多项技术攻关，积累丰富的大型项目交付经验。",
    image: imgSmart,
    liveUrl: null,
    sourceUrl: null,
  },
];
