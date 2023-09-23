<!-- README Template created by Othneil Drew. Repo can be found here: https://github.com/othneildrew/Best-README-Template/ -->

<a name="readme-top"></a>

[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![MIT License][license-shield]][license-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/willdelorm/predict-your-depiction">
    <img src="client/public/android-chrome-192x192.png" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">Predict Your Depiction</h3>

  <p align="center">
    A facial recognition app using the Clarifai API. Code adapted from Zero to Mastery.
    <br />
    <a href="https://github.com/willdelorm/predict-your-depiction"><strong>Explore the docs »</strong></a>
    <br />
    <br />
    <a href="https://github.com/willdelorm/predict-your-depiction">View Demo</a>
    ·
    <a href="https://github.com/willdelorm/predict-your-depiction/issues">Report Bug</a>
    ·
    <a href="https://github.com/willdelorm/predict-your-depiction/issues">Request Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>

<!-- ABOUT THE PROJECT -->

## About The Project

![Product Name Screen Shot][product-screenshot]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React][React.js]][React-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

### Prerequisites

- Download the latest version of [Node.js](https://nodejs.org/)

### Installation

1. Create your own Clarifai App at [Clarifai](https://www.clarifai.com/)
2. Clone the repo
   ```sh
   git clone https://github.com/willdelorm/predict-your-depiction.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Enter your own API details in `src/utils/clarifai.utils.js`
   ```js
   const PAT = "YOUR PAT HERE";
   const USER_ID = "YOUR USER_ID HERE";
   const APP_ID = "YOUR APP_ID HERE";
   ```
5. Start your server, then run `npm start` to spin up your App.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- USAGE EXAMPLES -->

## Usage

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ROADMAP -->

## Roadmap

- [ ] 

See the [open issues](https://github.com/willdelorm/predict-your-depiction/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTRIBUTING -->

## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- CONTACT -->

## Contact

Your Name - willdelorm@gmail.com

Project Link: [https://github.com/willdelorm/predict-your-depiction](https://github.com/willdelorm/predict-your-depiction)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- ACKNOWLEDGMENTS -->

## Acknowledgments

- [Zero To Mastery](https://zerotomastery.com)
- [Particles BG](https://www.npmjs.com/package/particles-bg)
- [React Bootstrap](https://react-bootstrap.github.io/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[contributors-shield]: https://img.shields.io/github/contributors/willdelorm/predict-your-depiction.svg?style=for-the-badge
[contributors-url]: https://github.com/willdelorm/predict-your-depiction/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/willdelorm/predict-your-depiction.svg?style=for-the-badge
[forks-url]: https://github.com/willdelorm/predict-your-depiction/network/members
[stars-shield]: https://img.shields.io/github/stars/willdelorm/predict-your-depiction.svg?style=for-the-badge
[stars-url]: https://github.com/willdelorm/predict-your-depiction/stargazers
[issues-shield]: https://img.shields.io/github/issues/willdelorm/predict-your-depiction.svg?style=for-the-badge
[issues-url]: https://github.com/willdelorm/predict-your-depiction/issues
[license-shield]: https://img.shields.io/github/license/willdelorm/predict-your-depiction.svg?style=for-the-badge
[license-url]: https://github.com/willdelorm/predict-your-depiction/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/willdelorm
[product-screenshot]: client/public/screenshot.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
