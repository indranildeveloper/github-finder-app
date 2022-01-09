import PropTypes from "prop-types";

const PersonalInfo = ({ title, value, icon, link }) => {
  return (
    <div className="stat">
      <div className="stat-title text-md flex items-center gap-2">
        {icon}
        {title}
      </div>
      <div className="text-lg stat-value">
        <a href={link} target="_blank" rel="noreferrer">
          {value}
        </a>
      </div>
    </div>
  );
};

PersonalInfo.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  link: PropTypes.string,
};

export default PersonalInfo;
