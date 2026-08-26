# AICourse 课程网站

这是一个 Astro 静态课程网站框架，适合约 200 人访问的小型公网课程站。构建完成后只生成 HTML、CSS 和少量 JavaScript，不需要数据库或常驻 Node.js 服务。

## 1. 安装依赖

每次在项目内操作前，先进入 Conda 环境：

```bash
conda activate courseweb
cd ~/course_website
```

确认终端开头显示 `(courseweb)` 后，安装项目依赖：

```bash
npm install
```

## 2. 本地开发

```bash
npm run dev
```

终端会给出本地访问地址，通常是 `http://localhost:4321/`。

## 3. 内容与站点配置

- 课程名称、邮箱、域名和示例课程数据：[src/data/site.ts](src/data/site.ts)
- 首页：[src/pages/index.astro](src/pages/index.astro)
- 课程详情页模板：[src/pages/courses/[slug].astro](src/pages/courses/[slug].astro)
- 统一视觉样式：[src/styles/global.css](src/styles/global.css)
- 参考截图：根目录的 `image.png`，只用于设计参考，不会被网站公开引用。

发布前请更新以下位置的示例域名 `course.example.com`：

- `astro.config.mjs`
- `public/robots.txt`
- `infra/nginx.conf`
- `src/data/site.ts`

## 4. 构建与部署

```bash
npm run build
```

构建结果在 `dist/`。将其中的**全部内容**上传到服务器的静态目录，例如 `/var/www/courseweb`。Nginx 示例配置在 [infra/nginx.conf](infra/nginx.conf)。

部署前进行本地预览：

```bash
npm run preview
```

## 5. 常用命令

```bash
npm run check
npm run format
```
