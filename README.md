# 旅行心愿单 🍜🏞️

一个纯前端的手机端旅行心愿单工具，支持美食和景点双模式，数据存在浏览器本地。

## ✨ 功能

- 🍜 美食 / 🏞️ 景点 双模式切换
- ✏️ 每条记录可添加：城市、名称、地址、备注、照片
- 📌 自动分为「待去」和「已去」两个区域
- 📍 按省份自动分组、折叠/展开
- 🔍 搜索（含备注内容）
- 📋 一键复制地址到剪贴板
- 📷 拍照或相册选图，自动压缩
- 🗑 单条删除
- 📱 PWA 支持，添加到手机桌面像 App 一样使用

## 🚀 部署到 GitHub Pages

### 第一步：创建仓库

1. 登录 https://github.com
2. 点右上角 **+** → **New repository**
3. 仓库名填：`travel-wishlist`（或任何你喜欢的名字）
4. 选 **Public**
5. 不要勾选 "Add a README file"（因为你已经有了）
6. 点 **Create repository**

### 第二步：上传文件

**方式 A：网页拖拽上传（最简单）**

1. 进入你的仓库页面
2. 点 **Add file** → **Upload files**
3. 把下面这些文件**全部拖进去**：
   - `index.html`
   - `manifest.json`
   - `sw.js`
   - `favicon.ico`
   - `icons/icon-192.png`
   - `icons/icon-512.png`
4. 拉到下面写 commit message：`initial commit`
5. 点 **Commit changes**

**方式 B：用 Git 命令行**

```bash
git init
git add .
git commit -m "initial commit"
git remote add origin https://github.com/你的用户名/travel-wishlist.git
git push -u origin main
```

### 第三步：开启 GitHub Pages

1. 仓库页面 → **Settings** → 左侧 **Pages**
2. **Source** 选 `Deploy from a branch`
3. **Branch** 选 `main` → 点 **Save**
4. 等 1-2 分钟，访问：
   ```
   https://你的用户名.github.io/travel-wishlist/
   ```

### 第四步：手机添加到桌面

**iPhone (Safari)：**
1. Safari 打开上面的网址
2. 点底部分享按钮 → **添加到主屏幕**
3. 图标自动变成橙色🍜，以后像 App 一样点开

**Android (Chrome/Edge)：**
1. Chrome 打开网址
2. 地址栏右侧会出现「安装」或「⋮」→ **安装应用** / **添加到主屏幕**
3. 桌面出现图标，点开就是全屏 App 体验

## 📁 文件说明

| 文件 | 作用 |
|---|---|
| `index.html` | 主页面，包含所有 HTML/CSS/JS |
| `manifest.json` | PWA 配置文件，控制桌面图标和全屏 |
| `sw.js` | Service Worker，实现离线缓存 |
| `favicon.ico` | 浏览器标签页图标 |
| `icons/icon-192.png` | 桌面图标（小） |
| `icons/icon-512.png` | 桌面图标（大） |

## ⚠️ 注意事项

- 数据存在手机浏览器的 **localStorage** 里，**换浏览器/无痕模式会丢失**
- 照片存在 localStorage 里，单张压缩到 800px 宽，但别存太多（建议 < 30 张）
- 固定用**同一个浏览器**打开这个网址
- 如果要备份数据，目前需要手动记录（后续可加导出功能）

## 📄 License

MIT
