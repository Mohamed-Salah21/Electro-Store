import { useLoginMutation } from "../redux/api/authApi";

const loginHook = () => {
  const [login, { isLoading, error }] = useLoginMutation();
  const useLoginUser = (values) =>
    login(values).then((res) => console.log("reeeelgogin", res));
  return [useLoginUser, { isLoading, loginError: error?.data.error }];
};

export default loginHook;
