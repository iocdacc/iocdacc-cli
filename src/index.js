#!/usr/bin/env node

const inquirer = require('inquirer');
const shell = require('shelljs');

const input1 = {
  type: 'list',
  name: 'type',
  message: '需要初始化哪种项目?',
  default: 0,
  choices: [
    {
      name: '传统模式',
      value: '0',
    },
    {
      name: 'react-spa',
      value: '1',
    },
    {
      name: 'react-ssr',
      value: '2',
    },
  ],
};

const input2 = {
  type: 'input',
  name: 'src',
  message: '请输入项目目录(当前的相对路径)',
  default: './',
};

inquirer
  .prompt([
    input1,
    input2,
  ])
  .then((answers) => {
    switch (answers.type) {
      case '0':
        shell.exec(`git clone git@github.com:iocdacc/old-js.git ${answers.src}`);
        break;

      case '1':
        shell.exec(`git clone git@github.com:iocdacc/react-spa.git ${answers.src}`);
        break;

      case '2':
        shell.exec(`git clone git@github.com:iocdacc/react-next.git ${answers.src}`);
        break;

      default:
        break;
    }
  });
