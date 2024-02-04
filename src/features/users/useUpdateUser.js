import { useMutation } from "react-query";
import { updateUser as updateUserApi } from "../../services/apiUsers";

export default function useUpdateUser() {
  const {
    isLoading: isUpdating,
    mutate: updateUser,
    error: updateError,
  } = useMutation({
    mutationFn: updateUserApi,
    onSuccess: () => {
      console.log("user updated");
    },
    onError: (error) => console.log("error updating user:" + error),
  });
  return { isUpdating, updateUser, updateError };
}
