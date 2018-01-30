/** Packages */
import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

/** Components */
import AvatarTalk from '../components/AvatarTalk';

/** Styles */
import '../styles/css/ContactPage.css';

/** Resume */
import resumePdf from '../documents/Resume.pdf';

/** Class */
export default function ContactPage() {
  const contact1 = 'What do you think about my projects?';
  const contact2 = 'If you have any question or want to have a conversation with me, '+
                   'feel free to reach on one of these social media';
  const contact3 = 'Or send me an email at';
  const resume = 'Oh! Btw, you can also check out my resume using link below';
  const hope = 'I hope to talk to you soon!';
  const bye = 'Have a good day :D';
  return (
    <div className="contact-page" id="contact-page">
      <div className="contact-content">
        <AvatarTalk talk={contact1} key="contact1" />
        <AvatarTalk talk={resume} key="resume" />
        <div className="resume">
          <a className="resume-btn" href={resumePdf} target="_blank">Resume</a>
        </div>
        <AvatarTalk talk={contact2} key="contact2" />
        <div className="social-icon">
          <a href="https://www.facebook.com/profile.php?id=100017117864078" target="_blank">
            <i className="devicon-facebook-plain colored" />
          </a>
          <a href="https://twitter.com/LbTran648" target="_blank">
            <i className="devicon-twitter-plain colored" />
          </a>
          <a href="https://www.linkedin.com/in/lamberttran/" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>
          <a href="https://github.com/LambertTran" target="_blank">
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
