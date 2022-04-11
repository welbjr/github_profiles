import { useParams } from "react-router-dom";

import UserCard from "./UserCard";
import ProjectTabs from "./ProjectTabs";
import useGithubAPI from "../hooks/useGithubAPI";

/**
 * Página do perfil.
 * UserCard mostra o nome do perfil, foto e descrição.
 * UserProjects renderiza uma lista de projetos.
 */

export default function UserDetails() {
  const { username } = useParams();
  const { profileData, repos, starred } = useGithubAPI(username);

  return (
    <>
      <UserCard profileData={profileData} />
      <ProjectTabs repos={repos} starred={starred} />
    </>
  );
}
