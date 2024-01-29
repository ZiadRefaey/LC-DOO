import { useMutation, useQueryClient } from "react-query";
import { createUser as createUserApi } from "../../services/apiUsers";
export default function useCreateUser() {
  const queryClient = useQueryClient();
  const { mutate: createUser, isLoading: isCreating } = useMutation({
    mutationFn: ({ id, newUserData }) => createUserApi(id, newUserData),
    onSuccess: () => {
      alert("user successfull created");
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (err) => alert(err),
  });
  return { isCreating, createUser };
}
