import { useNavigate } from "react-router";
import { useLoginMutation } from "../redux/api/authApi";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../redux/slices/userSliice";
const loginHook = () => {
  const [login, { isLoading }] = useLoginMutation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const useLoginUser = (values) =>
    login(values).then(({ data, error }) => {
      if (data) {
        toast.success(data?.res.message);
        sessionStorage.setItem("userToken", data?.res.token);
        dispatch(setCurrentUser(data.res.user));
        navigate("/");
      } else {
        toast.error(error?.data.error);
      }
    });
  return [useLoginUser, { isLoading }];
};

export default loginHook;
