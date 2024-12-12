/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */

import "./connect.css";
import mapIcon from "../../images/map.png";
import cloudIcon from "../../images/cloud.png";
import formIcon from "../../images/form.png";

const Connect = () => {
  return (
    <div className="connect-container">
      <h1>More ways to contact.</h1>
      <div className="connect-contentContainer">
        <div className="connect-column">
          <div className="connect-columnIcon">
            <img src={mapIcon} />
          </div>
          <h3>Find a Global Office</h3>
          <span>Not in the U.S? Find a Global Office near you.</span>
          <a href="#">See our Global Offices</a>
        </div>

        <div className="connect-column">
          <div className="connect-columnIcon" style={{ padding: "16px 14px" }}>
            <img src={cloudIcon} />
          </div>
          <h3>Manage accounts.</h3>
          <span>
            Users with permissions can self-manage licenses and renewals.
          </span>
          <a href="#">Learn about Your Account App</a>
        </div>

        <div className="connect-column">
          <div className="connect-columnIcon">
            <img src={formIcon} />
          </div>
          <h3>Send us feedback.</h3>
          <span>Let us know what you think: products, site or otherwise.</span>
          <a href="#">Send feedback</a>
        </div>
      </div>
    </div>
  );
};

export default Connect;
