import React from 'react';
import './styles.css';
import { Route } from 'react-router-dom';
import TeamListNav from '../TeamListNav';
import members from 'fakeDatabase';
import MemberCard from '../MemberCard';

const makeNavLinks = (members, path) =>
  members.map(member => ({
    path: `${path}/${member.id}`,
    text: member.name
  }));

const getMemberByID = (membs, id) => membs.find(memb => memb.id === id);

const TeamList = ({ match }) => {
  return (
    <div className="TeamList">
      <TeamListNav teamList={makeNavLinks(members, match.path)} />
      <div className="TeamList__card">
        <Route
          path={`${match.path}/:memberID`}
          render={props => {
            const memberID = props.match.params.memberID;
            const member = getMemberByID(members, memberID);
            return member
              ? <MemberCard {...member} {...props}/> 
              : <h2>Sorry, member not found</h2>
          }}
          />
      </div>
    </div>
  );
 
};
export default TeamList;
