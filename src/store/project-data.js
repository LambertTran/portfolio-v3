import hyperloop from '../images/hyperloop.png';
import auto27 from '../images/auto27.png';
import todoApp from '../images/todo-app.png';
import markdown from '../images/markdown.png';
import youtube from '../images/youtube-player.png';
import wiki from '../images/wiki-searcher.png';

const project = {};
project.UCDhyperloop = {
  name: 'UC.Davis hyperloop',
  image: hyperloop,
  status: 'In progress',
  detail: 'Hyperloop club website at UC.Davis',
  techs: ['Handlebars', 'MySQL', 'ExpressJs', 'Nodejs', 'Sass', 'AWS'],
  github: [
    { sourceCode: 'https://github.com/LambertTran/UCD-hyperloop' },
  ],
  web: [
    { frontEnd: 'https://ucd-hyperloop.herokuapp.com/' },
    { backEnd: 'https://ucd-hyperloop.herokuapp.com/login' },
  ],
};
project.auto27 = {
  name: 'Auto27',
  image: auto27,
  detail: 'A car dealer website with an CMS that allows an admin user to manage their car inventory and customer images.',
  techs: ['ReactJs', 'Redux', 'MongoDb', 'ExpressJs', 'Nodejs','Sass', 'AWS'],
  github: [
    { fontEnd: 'https://github.com/LambertTran/reactjs-auto27-web' },
    { backEnd: 'https://github.com/LambertTran/node-server-auto27' },
  ],
  web: [
    { frontEnd: 'http://auto27.s3-website-us-west-1.amazonaws.com/' },
    { backEnd: 'http://ec2-52-52-42-92.us-west-1.compute.amazonaws.com:8080/auto27' },
  ],
};
project.todoApp = {
  name: 'Full-stack Todo App',
  image: todoApp,
  detail: 'A simple Todo-app where users can create their own account and todo lists that are linked only to their identity',
  techs: ['ReactJs', 'Redux', 'MongoDb', 'ExpressJs', 'Nodejs'],
  github: [
    { fontEnd: 'https://github.com/LambertTran/todo-app-react-redux' },
    { backEnd: 'https://github.com/LambertTran/node-server-todoApp' },
  ],
  web: [
    { webLink: 'http://todo-react-redux.s3-website-us-west-1.amazonaws.com/' },
  ],
};
project.markdown = {
  name: 'Markdown Preview',
  image: markdown,
  detail: 'Simple app converts markdown formart to regular text in real time.',
  techs: ['ReactJs'],
  github: [
    { sourceCode: 'https://github.com/LambertTran/markdown-preview' },
  ],
  web: [
    { webLink: 'http://markdown-preview.s3-website-us-west-1.amazonaws.com/' }, 
  ],
};
project.youtubeApp = {
  name: 'Youtube Player',
  image: youtube,
  detail: 'An youtube player that renders and plays videos using youtube API',
  techs: ['ReactJs'],
  github: [
    { sourceCode: 'https://github.com/LambertTran/youtube-player-reactjs' },
  ],
  web: [
    { webLink: 'http://youtube-player-reactjs.s3-website-us-west-1.amazonaws.com/' },
  ],
};
project.wikiSearch = {
  name: 'Wikipeadia Search App',
  image: wiki,
  detail: 'A single page app displays Wikipeadia searched result bases on user\' inputs',
  techs: ['VanillaJS'],
  github: [
    { sourceCode: 'https://github.com/LambertTran/wiki-searcher' },
  ],
  web: [
    { webLink: 'http://wiki-searcher.s3-website-us-west-1.amazonaws.com/' },
  ],
};

export default project;
