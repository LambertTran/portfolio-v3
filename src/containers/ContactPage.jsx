/** Packages */
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

/** Components */
import AvatarTalk from '../components/AvatarTalk';

/** Styles */
import '../styles/css/ContactPage.css';

/** Class */
export default function ContactPage() {
  const contact1 = 'What do you think about my skill set?';
  const contact2 = 'You can always reach me in social media';
  const contact3 = 'Or send me an email';
  const resume = 'Btw, you can also check out my resume';
  const hope = 'I hope talking to you soon!';
  const bye = 'You have a good day';
  return (
    <div className="contact-page">
      <div className="contact-content">
        <AvatarTalk talk={contact1} key="contact1" />
        <AvatarTalk talk={resume} key="resume" />
        <div className="resume">

        </div>
        <AvatarTalk talk={contact2} key="contact2" />
        <div className="social-icon">
          <a href="https://www.facebook.com/profile.php?id=100017117864078" target="_blank">
            <i className="devicon-facebook-plain colored" />
          </a>
          <a href="" target="_blank">
            <i className="devicon-twitter-plain colored" />
          </a>
          <a href="" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>
          <a href="#" target="_blank">
            <i className="devicon-github-plain colored" />
          </a>
        </div>
        <AvatarTalk talk={contact3} key="contact3" />
        <div className="email">
          <a href="mailto:lb.tran648@gmail.com">
            <i className="fa fa-envelope" aria-hidden="true" />
            lb.tran648@gmail.com
          </a>
        </div>
        <AvatarTalk talk={hope} key="hope" />
        <AvatarTalk talk={bye} key="bye" />
      </div>
    </div>
  );
}
