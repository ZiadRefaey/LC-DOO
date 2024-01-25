import { useQuery } from "react-query";
import { getUsers } from "../../services/apiUsers";
export default function useUsers() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: getUsers,
  });
  return { data, isLoading, error };
}
