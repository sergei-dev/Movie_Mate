import React from 'react';
import './styles.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import AboutPageNav from '../AboutPageNav';
import StackList from '../StackList';
import CareerInfo from '../CareerInfo';
import CareerRow from '../CareerRow';
import TeamList from '../TeamList';
import htmlIcon from './assets/html.png';
import cssIcon from './assets/css.png';
import jsIcon from './assets/js.png';
import reactIcon from './assets/react.png';
import reduxIcon from './assets/redux.png';


const AboutNav = [
    {
        path: '/team',
        text: 'The Team'
    },
    {
        path: '/stack',
        text: 'Our Stack'
    },
    {
        path: '/career',
        text: 'Career'
    }
]

const listStack = [
    {
        icon:  htmlIcon,
        alt: 'HTML'
    },
    {
        icon:  cssIcon,
        alt: 'CSS'
    },
    {
        icon:  jsIcon,
        alt: 'JS'
    },
    {
        icon:  reactIcon,
        alt: 'React.js'
    },
    {
        icon:  reduxIcon,
        alt: 'Redux.js'
    }
]

const frontEndInfo = [
    'Strong experience with HTML5, CSS3',
    'Deep knowledge of JavaScript',
    'Experience in Responsive Web Design',
    'Experience with Git',
    'Fluent in English both spoken and written'
]

const backEndInfo = [
    'Understanding accessibility and security compliance',
    'User authentication and authorization between multiple systems and environments',
    'Integration of multiple data sources and databases into one system',
    'Data migration, transformation, and scripting',
    'Setup and administration of backups',
    'Proficient understanding of code versioning tools, such as Git',
    'Fluent in English both spoken and written'
]
const AboutPage = (props)  => {
    return (
        <div className="AboutPage">
        <AboutPageNav items={AboutNav} currentPath={props.match.path}/>   
            <div className="AboutPage__body">
                <Switch>
                <Route 
                    path={`${props.match.path}/team`}
                   component={TeamList} 
                />
                <Route 
                    path={`${props.match.path}/stack`}
                    component={() => (
                        <StackList stackItems={listStack}/>
                    )}
                />
                <Route 
                    path={`${props.match.path}/career`}
                    component={() => (
                        <CareerInfo 
                        head="Currently we are looking for">
                            <CareerRow 
                            title="Front-end developer"
                            listCareer={frontEndInfo}
                            />
                            <CareerRow
                            title="Back-end developer"
                            listCareer={backEndInfo}
                            />
                        </CareerInfo>
                    )}
                />
            </Switch>
            </div>           
        </div>
    )
}

export default AboutPage;
