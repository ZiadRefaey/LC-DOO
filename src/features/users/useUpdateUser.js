import { useMutation } from "react-query";
import { updateUser } from "../../services/apiUsers";

export default function useUpdateUser() {
  const { isLoading, mutate } = useMutation({
    mutationFn: () => updateUser,
    onSuccess: () => {
      console.log("user updated");
    },
    onError: () => console.log("error"),
  });
  return { isLoading, mutate };
}
