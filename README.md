## Project commands

1. install node 12
     ```
   sudo apt update
   sudo apt -y install curl dirmngr apt-transport-https lsb-release ca-certificates
   curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
   sudo apt -y install nodejs
     ```
2. install npm
     ```
     sudo apt install npm
     ```

3. install yarn
     ```
   npm install --global yarn
   yarn install
     ```

4. Add to /etc/hosts
     ```
   127.0.1.1	xxxxxx
   127.0.1.1	xxxxxx
     ```

5. Run yarn
     ```
     yarn serve
     ```

7. Code Quality
    ```
    yarn test:unit  # run unit tests
    yarn lint # run linter
    ```
