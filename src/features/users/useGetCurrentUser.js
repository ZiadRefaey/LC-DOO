import { useQuery } from "react-query";
import { getCurrentUser } from "../../services/apiUsers";
export function useGetCurrentUser(id) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["users"],
    queryFn: () => getCurrentUser(id),
  });
  return { data, isLoading, error };
}
