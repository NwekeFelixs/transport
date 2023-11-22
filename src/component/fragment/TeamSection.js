import React from 'react';
import '../css/styles.css';

import teamMember1 from '../images/team-1.png';
import teamMember2 from '../images/team-2.png';
import teamMember3 from '../images/team-3.png';

const TeamSection = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="section_title">Our Team</h2>
        <div className="team">
          <div className="team_card">
            <img src={teamMember1} alt="" className="team_img" />
            <div className="team_footer">
              <h3 className="team_name">Sarah Doe</h3>
              <p className="team_designation">Finance Manager</p>
            </div>
          </div>
          <div className="team_card">
            <img src={teamMember2} alt="" className="team_img" />
            <div className="team_footer">
              <h3 className="team_name">James Patrick</h3>
              <p className="team_designation">Head of Logistics</p>
            </div>
          </div>
          <div className="team_card">
            <img src={teamMember3} alt="" className="team_img" />
            <div className="team_footer">
              <h3 className="team_name">Julliet Smith</h3>
              <p className="team_designation">General Manager</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
