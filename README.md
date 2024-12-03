## OASIS AI BETA CLI VERSION

![banner](assets/image-1.png)
AI inference powered by distributed compute.

# Features

![Banner](assets/image.png)

- **Automated Referral**
- **Register/Login Accounts**
- **Auto Create Providers**
- **Auto Send Heartbeat**
- **Support Multy Accounts**
- **Support Proxy**

## Prerequisite

- **Git**
- **Node.js**
- **NPM**

put your proxy in file `proxy_list.js` format `http://username:pass@ip:port` 1 proxy for 1 provider

so if you want create multiple providers you need to put multiple proxy there.

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/Rambeboy/oasis-ai-bot.git && cd oasis-ai-bot
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Make new accounts folder:
   ```bash
   mkdir -p accounts
   ```

4. Configure all folder:
   ```bash
   cp accounts/accounts_tmp.js accounts.js && cp config/proxy_list_tmp.js proxy_list.js
   ```

5. Put your email and pass to `accounts.js` format `email|password` 1 account for 1 line

   ```bash
   nano accounts.js
   ```

6. Put your proxy to `proxy_list.js`

   ```bash
   nano proxy_list.js
   ```

7. Setup to create accounts/login and get Tokens:

   ```bash
   npm run setup
   ```

8. Run The Script:

   ```bash
   npm run start
   ```

9. Additional feature auto referral:
    ```bash
    npm run autoreff
    ```

## LICENSE

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
