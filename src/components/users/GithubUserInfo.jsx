import PropTypes from "prop-types";

const GithubUserInfo = ({ title, value, icon }) => {
  return (
    <div className="stat">
      <div className="stat-figure text-secondary">{icon}</div>
      <div className="stat-title pr-5">{title}</div>
      <div className="stat-value pr-5 text-3xl md:text-4xl">{value}</div>
    </div>
  );
};

GithubUserInfo.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number,
  icon: PropTypes.node.isRequired,
};

export default GithubUserInfo;
