# DeliverUS - Group Project

## DeliverUS

DeliverUS is a delivery app similar to those like Uber Eats or Just Eat, in which each restaurant has the option to post their products at a given price and customers will be able to make orders. We offer two interfaces, the one for owners and the one for customers, more visual.

## Introduction

This repository includes the complete backend (`DeliverUS-Backend` folder), the `customer` frontend (`DeliverUS-Frontend-Customer` folder), and the `owner` frontend (`DeliverUS-Frontend-Owner` folder).

## Environment Setup

### a) Windows

* Open a terminal and run the command:

    ```Bash
    npm run install:all:win
    ```

### b) Linux/MacOS

* Open a terminal and run the command:

    ```Bash
    npm run install:all:bash
    ```

## Execution

### Backend

* To **recreate migrations and seeders**, open a terminal and run the command (this is done by the previous command):

    ```Bash
    npm run migrate:backend
    ```

* To **start the backend**, open a terminal and run the command:

    ```Bash
    npm run start:backend
    ```

### Frontend

* To **run the `customer` frontend application**, open a new terminal and run the command:

    ```Bash
    npm run start:frontend:customer
    ```

* To **run the `owner` frontend application**, open a new terminal and run the command:

    ```Bash
    npm run start:frontend:owner
    ```

## Debugging

* To **debug the backend**, make sure **NO** instance is running, click the `Run and Debug` button on the sidebar, select `Debug Backend` from the dropdown list, and press the *Play* button.

* To **debug the frontend**, make sure there **IS** a running instance of the frontend you want to debug, click the `Run and Debug` button on the sidebar, select `Debug Frontend` from the dropdown list, and press the *Play* button.

## Testing

* To verify the proper functioning of the backend, you can run the included test suite by executing the following command:

    ```Bash
    npm run test:backend
    ```

**Warning: Tests cannot be modified.**
