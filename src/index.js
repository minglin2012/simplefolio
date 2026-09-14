import initScrollReveal from "./scripts/scrollReveal";
import initTiltEffect from "./scripts/tiltAnimation";
import { targetElements, defaultProps } from "./data/scrollRevealConfig";
import { projects } from "./data/projects";
import renderProjects from "./scripts/renderProjects";

// 项目卡片必须在动画初始化之前渲染出来 —— ScrollReveal 和 vanilla-tilt
// 都是在模块加载时按选择器一次性抓取元素的，晚于它们渲染的卡片不会被接管：
// 既不会有滚动入场动画，也不会有 3D 倾斜效果。
renderProjects(projects);

initScrollReveal(targetElements, defaultProps);
initTiltEffect();
