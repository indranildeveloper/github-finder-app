import { useContext, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import {
  FaArrowLeft,
  FaGithub,
  FaMapMarkerAlt,
  FaTwitter,
  FaGlobe,
  FaCodepen,
  FaStore,
  FaUserFriends,
  FaUsers,
} from "react-icons/fa";
import RepoList from "../components/repos/RepoList";
import Spinner from "../components/layout/Spinner";
import PersonalInfo from "../components/users/PersonalInfo";
import GithubUserInfo from "../components/users/GithubUserInfo";
import GithubContext from "../context/github/GithubContext";
import { getUserAndRepos } from "../context/github/GithubActions";

const User = () => {
  const params = useParams();
  const { user, loading, repos, dispatch } = useContext(GithubContext);

  const {
    name,
    type,
    avatar_url,
    location,
    bio,
    blog,
    twitter_username,
    login,
    html_url,
    followers,
    following,
    public_gists,
    public_repos,
    hireable,
  } = user;

  useEffect(() => {
    dispatch({
      type: "SET_LOADING",
    });
    const getUserData = async () => {
      const userData = await getUserAndRepos(params.login);
      dispatch({
        type: "GET_USER_AND_REPOS",
        payload: userData,
      });
    };
    getUserData();
  }, [dispatch, params.login]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="w-full mx-auto lg:w-10/12">
        <div className="mb-4">
          <Link className="btn btn-primary rounded-md" to="/">
            <FaArrowLeft className="mr-2" />
            Back To Search
          </Link>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-3 mb-8 md:gap-8">
          <div className="custom-card-image mb-6 md:mb-0">
            <div className="rounded-md shadow-xl card image-full">
              <figure>
                <img src={avatar_url} alt={login} />
              </figure>
              <div className="card-body justify-end">
                <h2 className="card-title mb-0">{name}</h2>
                <p>{login}</p>
              </div>
            </div>
          </div>

          <div className="col-span-2">
            <div className="mb-6">
              <h1 className="text-3xl card-title">
                {name}
                <div className="ml-2 mr-1 badge badge-success">{type}</div>
                {hireable && (
                  <div className="mx-1 badge badge-info">Hireable</div>
                )}
              </h1>
              <p>{bio}</p>
              <div className="mt-4 card-actions">
                <a
                  className="btn btn-outline rounded-md"
                  href={html_url}
                  target="_blank"
                  rel="noreferrer"
                >
                  <FaGithub className="text-xl mr-2" /> Visit Github Profile
                </a>
              </div>
            </div>

            <div className="w-full rounded-md shadow-md bg-base-200 stats">
              {location && (
                <PersonalInfo
                  title="Location"
                  value={location}
                  icon={<FaMapMarkerAlt />}
                />
              )}
              {blog && (
                <PersonalInfo
                  title="Website"
                  value={blog}
                  icon={<FaGlobe />}
                  link={`https://${blog}`}
                />
              )}
              {twitter_username && (
                <PersonalInfo
                  title="Twitter"
                  value={`@${twitter_username}`}
                  icon={<FaTwitter />}
                  link={`https://twitter.com/${twitter_username}`}
                />
              )}
            </div>
          </div>
        </div>
        <div className="w-full py-5 mb-6 rounded-md shadow-md bg-base-100 stats">
          <GithubUserInfo
            title="Followers"
            value={followers}
            icon={<FaUsers className="text-3xl md:text-5xl" />}
          />
          <GithubUserInfo
            title="Following"
            value={following}
            icon={<FaUserFriends className="text-3xl md:text-5xl" />}
          />
          <GithubUserInfo
            title="Public Repos"
            value={public_repos}
            icon={<FaCodepen className="text-3xl md:text-5xl" />}
          />
          <GithubUserInfo
            title="Public Gists"
            value={public_gists}
            icon={<FaStore className="text-3xl md:text-5xl" />}
          />
        </div>
        <RepoList repos={repos} />
      </div>
    </>
  );
};

export default User;
