[English](README.md) · **简体中文**

> 英文版是规范版本。本页与 [README.md](README.md) 不一致时，以英文版为准。

<!-- translation-of: README.md sha256:3f01170660824b64 -->

<!-- Source: Best-README-Template BLANK_README (Unlicense) — https://github.com/othneildrew/Best-README-Template -->
<a id="readme-top"></a>

# my-perfect-react-templete

一个预先接好 TypeScript、Craco、Tailwind CSS、Less 和 Ant Design 的 Create React App 模板，让新项目从一个可运行的构建开始，而不是默认的 create-react-app 脚手架。

[![CI](https://github.com/anyingiit/my-perfect-react-templete/actions/workflows/ci.yml/badge.svg)](https://github.com/anyingiit/my-perfect-react-templete/actions/workflows/ci.yml)
[![License](https://img.shields.io/github/license/anyingiit/my-perfect-react-templete)](LICENSE)

[报告问题](https://github.com/anyingiit/my-perfect-react-templete/issues/new?template=bug_report.yml) · [提出需求](https://github.com/anyingiit/my-perfect-react-templete/issues/new?template=feature_request.yml)

<details>
  <summary>目录</summary>
  <ol>
    <li><a href="#about-the-project">关于本项目</a></li>
    <li><a href="#getting-started">开始使用</a></li>
    <li><a href="#usage">用法</a></li>
    <li><a href="#contributing">参与贡献</a></li>
    <li><a href="#license">许可证</a></li>
    <li><a href="#contact">联系方式</a></li>
  </ol>
</details>

## 关于本项目

克隆 `my-perfect-react-templete` 得到的是一个用 Craco（`craco.config.js`）包装过的 Create React App 项目，这样就能在不 eject 的情况下扩展它的 webpack 配置。TypeScript（`tsconfig.json`）、Tailwind CSS（`tailwind.config.js`、`postcss.config.js`）和 Less（`craco-less`、`src/App.less`）已经接在一起可以一起构建，Ant Design 也已安装并通过同一条 Less 管线完成了主题接入（`src/App.less` 引入了 `~antd/dist/antd.less`），`src/App.tsx` 里还留了一段被注释掉的 `<Button>`，示范如何引入一个组件。ESLint、Prettier 和 Stylelint 的配置也已就绪，开箱可用。

目前还没有的是应用本身：`src/App.tsx` 渲染的仍是脚手架自带的占位内容，一个 "Hello World" 标题，其中还没有用到 Ant Design 组件、Tailwind 工具类或 Less 样式这些已经接好的能力——把这些用起来，正是从这个模板开始要填的部分。

计划中的功能与已知问题，见 [open issues](https://github.com/anyingiit/my-perfect-react-templete/issues)。

## 开始使用

### 环境要求

- Node.js 16 或更高版本——`package.json` 中的 `@types/node` 依赖对应 Node 16 的 API
- Yarn——仓库提交的是 `yarn.lock`，而不是 `package-lock.json`

### 安装

```sh
git clone https://github.com/anyingiit/my-perfect-react-templete.git
cd my-perfect-react-templete
yarn install
```

## 用法

```sh
yarn start   # 开发服务器，http://localhost:3000，支持热更新
yarn build   # 生产环境构建产物，输出到 build/
yarn test    # 运行测试套件
```

先执行 `yarn start`，然后修改 `src/App.tsx`，把占位标题换成真正的页面。

## 参与贡献

欢迎参与。[CONTRIBUTING.md](CONTRIBUTING.md) 说明如何提交 issue 或 pull request，[CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) 说明对所有参与者的行为要求。

请不要在公开的 issue 或 pull request 中报告安全问题。[SECURITY.md](SECURITY.md) 说明了私下报告的方式。

## 许可证

以 MIT 许可证分发。详见 [LICENSE](LICENSE)。

## 联系方式

项目地址：[https://github.com/anyingiit/my-perfect-react-templete](https://github.com/anyingiit/my-perfect-react-templete)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
