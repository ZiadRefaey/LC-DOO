import Banner from "../../components/Banner";
import UserProfileImage from "../../components/UserProfileImage";
import { FaEdit } from "react-icons/fa";
import { FadeLoader } from "react-spinners";
import { useAuth } from "../../services/apiAuth";
import Section from "../../ui/Section";
import UserProfileForm from "../../features/users/UserProfileForm";

export default function UserProfile() {
  const { fireStoreUser: user, isLoading, error } = useAuth();

  return (
    <section className="min-h-full ">
      {isLoading && (
        <Section className={"flex items-center justify-center min-h-[50vh]"}>
          <FadeLoader color="#082C86" />
        </Section>
      )}
      {user && (
        <>
          <Banner banner={user?.banner} />
          <section className=" max-w-[1280px] m-auto px-4 xl:px-0">
            <div className="flex flex-col items-start gap-3  justify-center xl:flex-row">
              <div className="flex flex-col w-full xl:max-w-[407px]">
                <UserProfileImage pfp={user?.pfp} />
                <aside className=" bg-adminSecondary px-4 py-2 min-h-[150px]">
                  <div className="flex items-center justify-between w-full">
                    <p className=" text-body-lg font-bold">About Me</p>
                    <FaEdit className="opacity-50 cursor-pointer hover:opacity-100 transition-all duration-200" />
                  </div>
                  <p>This person has yet to enter a bio.</p>
                </aside>
              </div>

              <UserProfileForm user={user} />
            </div>
          </section>
        </>
      )}
      {error && (
        <Section className={"flex items-center justify-center min-h-[50vh]"}>
          <p>Something went wrong: {error}</p>
        </Section>
      )}
    </section>
  );
}
