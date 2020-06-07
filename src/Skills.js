import React, {Component} from 'react';
import Sectiontitle from './SectionTitle';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  faSass,
  faReact,
  faHtml5,
  faCss3Alt,
  faJs,
} from '@fortawesome/free-brands-svg-icons';
import './Skills.css';

class Skills extends Component {
  state = {
    text: 'Kliknij na ikonę by dowiedzieć się więcej.',
  };

  skillsList = [
    {
      name: 'HTML',
      icon: faHtml5,
      text: 'Napisałem sporo linijek kodu w HTML i znam go dobrze.',
    },
    {
      name: 'CSS',
      icon: faCss3Alt,
      text: 'Z CSSa korzystam codziennie, więc znam kilka tricków.',
    },
    {
      name: 'Sass',
      icon: faSass,
      text: 'Wykorzystałem preprocesor sass w kilku moich projektach.',
    },
    {
      name: 'JavaScript',
      icon: faJs,
      text: 'Programując Front-end korzystam z JavaScriptu cały czas.',
    },
    {
      name: 'React.js',
      icon: faReact,
      text: 'React.js poznałem niedawno, jednak daje on duże możliwości.',
    },
  ];

  handleClick = (e) => {
    const skillname = e.target.getAttribute('skillname');
    const text = this.skillsList.filter((skill) => skill.name === skillname)[0]
      .text;
    this.setState({
      text,
    });
  };

  render() {
    return (
      <section id='skills'>
        <div className='wrapper'>
          <Sectiontitle title='Umiejętności' id='Skills' />
          <div className='skillsText'>{this.state.text}</div>
          <div className='skillsContainer'>
            {this.skillsList.map((skill) => (
              <div
                onClick={this.handleClick}
                skillname={skill.name}
                key={skill.name}
                className='skill swipeFromBottom'
              >
                <FontAwesomeIcon
                  style={{height: '80%', width: '80%'}}
                  className='skillSvg'
                  icon={skill.icon}
                />
                <div className='skillName'>{skill.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
