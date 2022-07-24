# News Today API

<!-- NAVIGATION -->
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
    <li><a href="#contributors">Contributors</a></li>
  </ol>

<!-- ABOUT THE PROJECT -->

## About The Project

### Built With

some technology used in this project.

- [Express](https://expressjs.com)
- [JWT](https://jwt.io)
- [MySQL](https://mysql.com)
- [Sendinblue (email marketing)](https://www.sendinblue.com)


<!-- GETTING STARTED -->

## Getting Started

Get started with this project, intructions on setting up your project locally.
To get a local copy up and running follow these simple steps.

### Prerequisites

Before installing, you must be install [nodejs](https://nodejs.org) [yarn](https://yarnpkg.com/getting-started/install)

### Installation

1. Clone this repo

```sh
git clone https://github.com/bracket-technology/newstoday-be.git
```

2. Install yarn package

```sh
cd newstoday-be
yarn install
```

3. Setting `.env`

- create `.env` file

  ```sh
  touch .env
  ```

- Add configuration in `.env` file

```
host = yourdbhostname
user = yourdbusername
password = yourdbpassword
database = yourdbdatabasename

SECRET_KEY_CRYPT = yoursecretkeycrypto

SECRET_KEY_JWT = yoursecretkeyjwt

API_KEY_SENDINBLUE =yourkeysendinblue

EMAIL_SENDER = yourdefaultemail

LINK_VERIFY = yourlinkverify
LINK_FORGOT_PASS = yourlinkforgotpass

PORT = yourport

```


1. Start the project

```sh
yarn start
```

<!-- Contributors -->

## Contributors

- Fullstack [Dhani Setiaji (PM)](https://github.com/dhanisetiaji)
- BackEnd [Ahmad Wahyudi](https://github.com/ahmadvvahyudi)
- BackEnd [Dio Fitriadi](https://github.com/diofitriadi)
- BackEnd [Noviana R](https://github.com/Novianaa)
- FrontEnd [Sangkan Faiq](https://github.com/sangkanfaiq)

