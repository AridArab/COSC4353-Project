import { useNavigate } from "react-router-dom";
import { useAuth } from "./authprovider/authProvider";

const Logout = () => {
  const { setToken } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    setToken();
    navigate("/", { replace: true });
  };

  setTimeout(() => {
    handleLogout();
  }, 3 * 1000);

  return(
    <>
        <h1>Logging Out....</h1>
    </>
  );
};

export default Logout;
