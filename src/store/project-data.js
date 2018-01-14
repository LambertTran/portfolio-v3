import auto27 from '../images/auto27.png';
import todoApp from '../images/todo-app.png';
import markdown from '../images/markdown.png';

const project = {};
project.auto27 = {
  name: 'Auto27',
  image: auto27,
  detail: 'This is car dealer showcase',
  techs: ['ReactJs', 'Redux', 'MongoDb', 'ExpressJs', 'Nodejs', 'AWS'],
  github: [
    { fontEnd: 'https://github.com/LambertTran/car-dealer-website' },
    { backEnd: 'https://github.com/LambertTran/car-dealer-website' },
  ],
  web: [
    { frontEnd: 'https://auto27.us/' },
    { backEnd: 'https://ucd-hyperloop.herokuapp.com/login' },
  ],
};
project.todoApp = {
  name: 'Full-stack Todo App',
  image: todoApp,
  detail: 'This is car dealer showcase',
  techs: ['ReactJs', 'Redux', 'MongoDb', 'ExpressJs', 'Nodejs', 'AWS'],
  github: [
    { fontEnd: 'https://github.com/LambertTran/todo-app-react-redux' },
    { backEnd: 'https://github.com/LambertTran/node-server-todoApp' },
  ],
  web: [
    { frontEnd: 'http://todo-react-redux.s3-website-us-west-1.amazonaws.com/' },
  ],
};
project.markdown = {
  name: 'Markdown Preview',
  image: markdown,
  detail: 'This is car dealer showcase',
  techs: ['ReactJs'],
  github: [
    'https://ucd-hyperloop.herokuapp.com/login',
  ],
  web: ['http://todo-react-redux.s3-website-us-west-1.amazonaws.com/'],
};

export default project;
