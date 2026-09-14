// 把 src/data/projects.js 里的项目数据渲染成页面上的项目卡片。
//
// 生成的 DOM 结构和原来的静态 HTML 完全一致，所以现有的 SCSS 和
// ScrollReveal / vanilla-tilt 动画不需要任何改动。

const ESCAPES = {
  "&": "&amp;",
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&#39;",
};

const escapeHtml = (value) => String(value ?? "").replace(/[&<>"']/g, (ch) => ESCAPES[ch]);

function projectRow({ title, description, image, liveUrl, sourceUrl }) {
  // 没有链接的项目不渲染对应按钮，避免出现点了没反应的死链。
  const buttons = [
    liveUrl &&
      `<a rel="noreferrer" target="_blank" class="cta-btn cta-btn--hero" href="${escapeHtml(
        liveUrl
      )}">在线预览</a>`,
    sourceUrl &&
      `<a rel="noreferrer" target="_blank" class="cta-btn text-color-main" href="${escapeHtml(
        sourceUrl
      )}">查看源码</a>`,
  ]
    .filter(Boolean)
    .join("\n                ");

  const thumbnail = `<div
          data-tilt
          data-tilt-max="4"
          data-tilt-glare="true"
          data-tilt-max-glare="0.5"
          class="thumbnail rounded js-tilt"
        >
          <img
            alt="${escapeHtml(title)}"
            class="img-fluid"
            src="${escapeHtml(image)}"
          />
        </div>`;

  // 有在线预览链接时，缩略图本身也可以点；没有就不是链接。
  const imageColumn = liveUrl
    ? `<a rel="noreferrer" href="${escapeHtml(liveUrl)}" target="_blank">
          ${thumbnail}
        </a>`
    : thumbnail;

  return `          <div class="row">
            <div class="col-lg-4 col-sm-12">
              <div class="project-wrapper__text load-hidden">
                <h3 class="project-wrapper__text-title">${escapeHtml(title)}</h3>
                <div>
                  <p class="mb-4">${escapeHtml(description)}</p>
                </div>
                ${buttons}
              </div>
            </div>
            <div class="col-lg-8 col-sm-12">
              <div class="project-wrapper__image load-hidden">
                ${imageColumn}
              </div>
            </div>
          </div>`;
}

export default function renderProjects(projects, selector = ".project-wrapper") {
  const container = document.querySelector(selector);
  if (!container || !projects || !projects.length) return;

  container.insertAdjacentHTML("beforeend", projects.map(projectRow).join("\n"));
}
