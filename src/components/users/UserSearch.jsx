import { useState, useContext } from "react";
import { FaSearch } from "react-icons/fa";
import GithubContext from "../../context/github/GithubContext";
import AlertContext from "../../context/alert/AlertContext";
import { searchUsers } from "../../context/github/GithubActions";

const UserSearch = () => {
  const [text, setText] = useState("");

  const { users, dispatch } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);

  const handleChange = (e) => setText(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (text === "") {
      setAlert("Please enter something", "error");
    } else {
      const users = await searchUsers(text);
      dispatch({
        type: "SET_LOADING",
      });
      dispatch({
        type: "GET_USERS",
        payload: users,
      });
      setText("");
    }
  };

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 mb-8 gap-8">
      <div>
        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <div className="relative">
              <input
                className="w-full pr-40 bg-gray-200 input input-lg text-black rounded-md"
                type="text"
                placeholder="Search Github Profile..."
                value={text}
                onChange={handleChange}
              />
              <button
                type="submit"
                className="absolute top-0 right-0 rounded-l-none rounded-r-md w-36 btn btn-lg btn-primary"
              >
                <FaSearch className="text-3xl" />
              </button>
            </div>
          </div>
        </form>
      </div>

      {users.length > 0 && (
        <div>
          <button
            onClick={() => dispatch({ type: "CLEAR_USERS" })}
            className="btn btn-outline btn-lg rounded-md"
          >
            Clear
          </button>
        </div>
      )}
    </div>
  );
};

export default UserSearch;
