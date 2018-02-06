# CSE 3353 - Intro to Algorithms

## Welcome!

This repository is where I will host any and all code snippets discussed in class. 
Feel free to clone this repository to your local machine and run any examples. To
the best of my abilities, each folder / snippet will be self-contained and dated
to the lecture that it's related to. Sample data files will also be included.

## Prerequisites:

- Have [Node 8+](https://nodejs.org/en/) installed
- Have [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) installed
- Recommended: Have [Visual Studio Code](https://code.visualstudio.com/) installed
	- Browse the VSCode extensions library for anything that catches your fancy

Once you install the above pre-requisites, clone this repo:

```sh
git clone git@github.com:ChristianAyala/CSE-3353.git
```

This will create a folder called CSE-3353 in your current directory,
so be sure you run that command in a proper useful place.

Be sure you run the following command to make sure your local repository
is up to date with any changes I may have pushed up:

```sh
git pull origin master
```

## Running the code

Each code sample will contain a package.json file, which will outline any dependencies
needed for the code to run. To run the snippets:

```sh
cd [folder]
npm install
npm start
```

The install command will only need to be run once, and the second command will be
configured to run the correct script. For files that require some outside data
(like additional data files), you will have to update the filename in the script
or the package.json file, where appropriate. If a file name is used in the code,
it will be at or near the top of the file.

If the `npm start` command fails (in particular on Windows), try install server
as a global package:

```sh
npm install -g server
```

All output will be logged to the terminal.

## Code Linting

There is a root `package.json` file that applies a "linter" to all of the
snippets in the repository. A linter runs through your code and makes sure
that it follows a certain set of style guides and programming conventions.
In some cases, a linter can be pedantic; in most cases, it can actually
help find potential bugs that are unique to an interpreted language like
JavaScript by calling out errors before runtime.

Visual Studio Code will automatically apply the linter as you code in real
time. All you have to do (including the initial clone step):

```sh
git clone git@github.com:ChristianAyala/CSE-3353.git
cd CSE-3353
npm install
```

This will install all the necessary linter packages.

It is recommended that you use this in your own projects. To do so:

```sh
npm init
npm install --only=dev eslint eslint-config-google
```

The first command will have you fill out a few fields related to your project.
The second will install the linter and the
[Google linter configuration](https://github.com/google/eslint-config-google/blob/master/index.js).
Feel
free to copy the `eslintrc.js` file into your own project.

## Contributing

If things don't work exactly as they should (my bad!), feel free to open a Pull 
Request! If you don't know what that is, feel free to reach out to me and I will
walk you through the process of forking, creating a branch, and creating a PR.
It's a valuable skill that you will use on a daily basis as a software developer,
so don't be afraid to ask how to do it!