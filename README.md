<!-- Source: Best-README-Template BLANK_README (Unlicense) — https://github.com/othneildrew/Best-README-Template -->
<a id="readme-top"></a>

# my-perfect-react-templete

A Create React App template pre-wired with TypeScript, Craco, Tailwind CSS, Less and Ant Design, so a new project starts from a working build instead of default create-react-app scaffolding.

**English** · [简体中文](README.zh-CN.md)

[![CI](https://github.com/anyingiit/my-perfect-react-templete/actions/workflows/ci.yml/badge.svg)](https://github.com/anyingiit/my-perfect-react-templete/actions/workflows/ci.yml)
[![License](https://img.shields.io/github/license/anyingiit/my-perfect-react-templete)](LICENSE)

[Report a bug](https://github.com/anyingiit/my-perfect-react-templete/issues/new?template=bug_report.yml) · [Request a feature](https://github.com/anyingiit/my-perfect-react-templete/issues/new?template=feature_request.yml)

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li><a href="#getting-started">Getting Started</a></li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>

## About The Project

Cloning `my-perfect-react-templete` gives a Create React App project wrapped in Craco (`craco.config.js`), so its webpack configuration can be extended without ejecting. TypeScript (`tsconfig.json`), Tailwind CSS (`tailwind.config.js`, `postcss.config.js`) and Less (`craco-less`, `src/App.less`) are already wired to build together, and Ant Design is installed and themed through the same Less pipeline (`src/App.less` imports `~antd/dist/antd.less`), with a commented-out `<Button>` in `src/App.tsx` showing how to pull a component in. ESLint, Prettier and Stylelint configuration ship ready to run.

What is not here yet is the application itself. `src/App.tsx` still renders the starter's own placeholder, a single "Hello World" heading, and nothing in it yet uses the Ant Design components, Tailwind utility classes or Less styling the tooling wires together -- that part is what starting from this template means filling in.

See the [open issues](https://github.com/anyingiit/my-perfect-react-templete/issues) for planned features and known issues.

## Getting Started

### Prerequisites

- Node.js 16 or newer -- `package.json`'s `@types/node` dependency targets the Node 16 API surface
- Yarn -- the repository commits `yarn.lock`, not a `package-lock.json`

### Installation

```sh
git clone https://github.com/anyingiit/my-perfect-react-templete.git
cd my-perfect-react-templete
yarn install
```

## Usage

```sh
yarn start   # dev server at http://localhost:3000, with hot reload
yarn build   # production bundle, output to build/
yarn test    # run the test suite
```

Start with `yarn start`, then edit `src/App.tsx` to replace the placeholder heading with the actual page.

## Contributing

Contributions are welcome. Read [CONTRIBUTING.md](CONTRIBUTING.md) for how to open an issue or a pull request, and [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for the standards expected of everyone taking part.

Please do not report security issues in public issues or pull requests. [SECURITY.md](SECURITY.md) explains how to report them privately.

## License

Distributed under the MIT License. See [LICENSE](LICENSE) for details.

## Contact

Project link: [https://github.com/anyingiit/my-perfect-react-templete](https://github.com/anyingiit/my-perfect-react-templete)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
