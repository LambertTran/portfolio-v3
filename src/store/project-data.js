import auto27 from '../images/auto27.png';
import todoApp from '../images/todo-app.png';
import markdown from '../images/markdown.png';

const project = {};
project.auto27 = {
  name: 'Auto27',
  image: auto27,
  detail: 'This is car dealer showcase',
  techs: ['ReactJs', 'Redux', 'MongoDb', 'ExpressJs', 'Nodejs', 'AWS'],
  github: 'https://github.com/LambertTran/car-dealer-website',
  web: 'https://auto27.us/',
};
project.todoApp = {
  name: 'Full-stack Todo App',
  image: todoApp,
  detail: 'This is car dealer showcase',
  techs: ['ReactJs', 'Redux', 'MongoDb', 'ExpressJs', 'Nodejs', 'AWS'],
  github: [
    'https://github.com/LambertTran/todo-app-react-redux',
    'https://github.com/LambertTran/node-server-todoApp'
  ],
  web: 'http://todo-react-redux.s3-website-us-west-1.amazonaws.com/',
};
project.markdown = {
  name: 'Markdown Preview',
  image: markdown,
  detail: 'This is car dealer showcase',
  techs: ['ReactJs'],
  github: [
    'https://github.com/LambertTran/todo-app-react-redux',
    'https://github.com/LambertTran/node-server-todoApp'
  ],
  web: 'http://todo-react-redux.s3-website-us-west-1.amazonaws.com/',
};

export default project;
