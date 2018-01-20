import auto27 from '../images/auto27.png';
import todoApp from '../images/todo-app.png';
import markdown from '../images/markdown.png';

const project = {};
project.auto27 = {
  name: 'Auto27',
  image: auto27,
  detail: 'A car dealer website, where the admin user can update their car inventory to put it on sale.',
  techs: ['ReactJs', 'Redux', 'MongoDb', 'ExpressJs', 'Nodejs', 'AWS'],
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
  detail: 'A simple Todo-app. Users create their own account with the todo lists linked only to their account',
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
  detail: 'Simple App converts markdown formart to regular text.',
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
  image: markdown,
  detail: 'Simple youtube player that render videos from youtube API',
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
  image: markdown,
  detail: 'Single page app that searchs user keywords in Wikipeadia database',
  techs: ['VanillaJS'],
  github: [
    { sourceCode: 'https://github.com/LambertTran/youtube-player-reactjs' },
  ],
  web: [
    { webLink: 'https://github.com/LambertTran/portfolio-v1/tree/master/projects/wikiSearch' },
  ],
};

export default project;
