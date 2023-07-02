import { useRegisterMutation } from "../redux/api/authApi";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
const registerHook = () => {
  const [register, { isLoading }] = useRegisterMutation();
  const navigate = useNavigate();
  const useRegisterUser = (values) => {
    register(values).then(({ data, error }) => {
      if (error) {
        toast.error(error?.data.error);
      } else {
        toast.success(data?.resala);
        navigate("/login");
      }
    });
  };
  return [useRegisterUser, { isLoading }];
};
export default registerHook;
