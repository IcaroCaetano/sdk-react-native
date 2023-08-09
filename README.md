<h3 align="center"; style="background-color:#001e50;">
    <img alt="NextLevelWeek" title="#WvLogo" src="./src/assets/logotipo-vw.webp" />
</h3>
<h2 align="left">SDK VW - Template</h1>

<h4 align="center"> 
	 Status: Finished
</h4>

## About
SDK VW - This project aims to serve as a standard development for mobile applications using react native. Your directory architecture and layout must be followed.

---

<p align="center">
 <a href="#about">About</a> •
 <a href="#features">Features</a> •
 <a href="#layout">Layout</a> • 
 <a href="#how-it-works">How it works</a> • 
 <a href="#tech-stack">Tech Stack</a> • 
 <a href="#pre-requisites">Pre-requisites</a> • 
 <a href="#technologies">Technologies</a> • 

</p>

## Features

- [x] Customers and partners can use the SDK to:
   - [x] initialize a react native app with predetermined structures
   - [x] use the documentation to build a mobile development environment

---

## How it works

The SDK has a pre-designed template which should be used to maintain a standard structure when customizing a project.

Below is a description of each folder and what it should contain:

-   **[assets](./src/assets/)** - Inside the assets folder are fonts and images.
-   **[components](./src/components/)** - Folder used to store components which are basically functions that return JSX or other components.
-   **[contex](./src/context/)** - Stores context components.
-   **[database](./src/database/)** - In this folder are the artifacts related to the database.
-   **[models](./src/models/)** - Inside the models folder are models, enums, requests, responses, and dtos.
-   **[navigations](./src/navigations/)** - Folder where navigation components are stored.
-   **[screens](./src/screens/)** - Folder where screen presentation components are stored.
-   **[services](./src/services/)** - Within the services folder are services common to the project and also integration components such as requests, for example.
-   **[utils](./src/utils/)** - In this folder are the artifacts common to the entire project, such as classes or functions.

## Tech Stack

The following tools were used in the construction of the project:

> See the file  [package.json](package.json)

### Pre-requisites

Before you begin, you will need to have the following tools installed on your machine:
[Git] (https://git-scm.com), [Node.js] (https://nodejs.org/en/).
In addition, it is good to have an editor to work with the code like [VSCode] (https://code.visualstudio.com/)

After installing node js make sure it is Node 18 or above (type node -v in command prompt for windows).
With the installation of node you already have npm which is a package manager. With this manager it will be possible to install react and its dependencies.

Run the following command at a command prompt or shell to install react native:

```bash
#Run to install react-native
$ npm install -g react-native-cli

```
To set up an android development environment it is necessary to download the android SDK and have it installed on the machine. I recommend downloading android Studio because it already installs the Android SDK and already brings the android emulators in the package.
[Android Studio] (https://developer.android.com/studio)

It is also necessary to have the java JDK installed on the local machine. And set your environment variables. [Java 17] (https://www.oracle.com/java/technologies/downloads/#java17)

After having the environment configured, download the VW SDK.
Download and install dependencies. Navigate to the root folder of the project via the prompt or shell and install the dependencies.
Run the command:

```bash
#Run to install dependencies
npm install

```

To run the app open android studio. Select the project and in device manager run the android device emulator.

Once this is done to run the app, navigate to its root folder and execute the command:

```bash
#To Run app VW SDK
react-native start

```


## Technologies

The following tools were used in building the project:

- [Node.js](https://nodejs.org/en/) - version 18.16.1
- [React](https://pt-br.reactjs.org/) - version 18.2.0
- [React Native](https://reactnative.dev/) - version 0.71.8
- [TypeScript](https://www.typescriptlang.org/) - version 4.8.4