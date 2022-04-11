import axios from "axios";
import { useEffect, useState } from "react";

/**
 * Abstração de chamadas API do Github. Este hook faz três
 * chamadas:
 *  1. Buscar os dados de um perfil
 *  2. Repositórios
 *  3. Estrelas
 *
 * @param {string} username - Nickname do dono do repositório
 * @returns {Object} - Objeto com
 *  status: "loading" ou "success",
 *  profileData: objeto de resposta da api call https://api.github.com/users/${username},
 *  repos e starred: api call sequinte, com os repositórios e estrelas
 */

export default function useGithubAPI(username) {
  const [profileData, setProfileData] = useState({});
  const [repos, setRepos] = useState([]);
  const [starred, setStarred] = useState([]);

  useEffect(() => {
    const options = {
      client_id: process.env.REACT_APP_CLIENT_ID,
      client_secret: process.env.REACT_APP_CLIENT_SECRET,
    };

    // 1. Dados do perfil
    axios
      .get(`https://api.github.com/users/${username}`, options)
      .then((res) => {
        setProfileData(res.data);
      })
      .catch((err) => console.log(err));

    // 2. Repositórios
    axios
      .get(`https://api.github.com/users/${username}/repos`)
      .then((req) => setRepos(req.data))
      .catch((err) => console.log(err));

    // 3. Estrelas
    axios
      .get(`https://api.github.com/users/${username}/starred`)
      .then((req) => setStarred(req.data))
      .catch((err) => console.log(err));
  }, []);

  return { profileData, repos, starred };
}
