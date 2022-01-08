import { useContext } from "react";
import { FaTimesCircle } from "react-icons/fa";
import AlertContext from "../../context/alert/AlertContext";

const Alert = () => {
  const { alert } = useContext(AlertContext);

  return (
    alert !== null && (
      <div className="alert alert-error mb-4 rounded-md">
        <div className="felx-1">
          {alert.type === "error" && <FaTimesCircle className="m-2" />}
          <p className="text-base font-semibold leading-7 text-white">
            {alert.msg}
          </p>
        </div>
      </div>
    )
  );
};

export default Alert;
