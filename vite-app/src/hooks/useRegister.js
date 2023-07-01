import { useRegisterMutation } from "../redux/api/authApi";
import { useNavigate } from "react-router";

const registerHook = () => {
  const [register, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();
  const useRegisterUser = (values) => {
    register(values).then((res) => {
      console.log("res", res);
    });
  };
  return [useRegisterUser, { isLoading }];
};
export default registerHook;
