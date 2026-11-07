# Ning Yang Academic Homepage

这是一个可直接部署到 GitHub Pages 的英文个人学术主页，不需要安装 Node.js，也不需要编译。

## 1. 本地查看

双击 `index.html` 即可查看。字体和图标来自网络，本地查看时需要联网；个人照片和两张山景图已保存在 `assets` 文件夹中。

不要在手机上打开 `http://127.0.0.1:4173`。`127.0.0.1` 在手机上代表手机自身，不是电脑，因此会显示“网络出错”。手机应访问部署后的 GitHub Pages 网址。

## 2. 修改内容

绝大多数内容都在 `content.js`。用记事本或 VS Code 打开后，可以修改：

- `bio`：个人简介
- `profiles`：邮箱、CV、Google Scholar、ORCID、GitHub 等链接
- `research`：研究方向
- `publications`：论文
- `education`：教育经历
- `experience`：科研或项目经历
- `awards`：奖励
- `conferences`：会议报告

修改文字时请保留英文双引号、逗号和大括号。

## 3. 临时关闭主页

在 `content.js` 第一部分找到：

```js
siteEnabled: true,
```

改成 `siteEnabled: false` 后提交，访问者只会看到“暂时不可用”页面。注意：这种方式只是隐藏内容，仓库公开时文件仍可被访问。

要真正停止网站公开访问：进入 GitHub 仓库的 **Settings → Pages → Build and deployment**，把 Source 改为 **None**，或将仓库改为私有（取决于你的 GitHub 套餐）。重新开放时再选择 **Deploy from a branch**。

## 4. 部署到你的 GitHub Pages

当前仓库是 `Younnin/NingYang-geo.github.io`。它不是 GitHub 的“用户主页仓库”，因此默认项目网址为：

`https://younnin.github.io/NingYang-geo.github.io/`

如果希望使用根网址 `https://younnin.github.io/`，仓库需要改名为 `Younnin.github.io`。

部署步骤：

1. 打开仓库 `https://github.com/Younnin/NingYang-geo.github.io`。
2. 打开 **Settings → Pages**。
3. 在 **Build and deployment** 中选择 **Deploy from a branch**。
4. Branch 选择 `main` 和 `/ (root)`，点击 Save。
5. 等待约 1-3 分钟，GitHub 会显示公开网址。

私人仓库能否发布 Pages 取决于 GitHub 账户套餐和组织策略。如果 Pages 设置中没有可用的发布选项，可暂时将仓库设为公开，或升级到支持私人仓库 Pages 的套餐。发布后，网页内容本身仍会公开访问。

## 5. 更换图片

当前主页仅使用个人照片，以避免宽屏背景裁剪影响阅读。两张山景原图仍保存在资源目录，后续可用于相册或独立图片模块：

- `assets/portrait.jpg`：个人照片
- `assets/mountain-sunset.jpg`：备用山景图
- `assets/mountain-stars.jpg`：备用山景图

替换时使用相同文件名即可，不需要修改代码。建议个人照片保持竖向 4:5，背景图保持横向。

## 文件说明

- `index.html`：页面结构，通常不需要修改
- `styles.css`：颜色、字体和版式
- `content.js`：所有个人资料
- `app.js`：交互逻辑，通常不需要修改
- `assets/Ning-Yang-CV.pdf`：网站下载的 CV
- `assets/Ning-Yang-CV-Chinese.pdf`：中文简历
- `.nojekyll`：确保 GitHub Pages 原样发布静态文件
