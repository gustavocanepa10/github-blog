import { SquareArrowOutUpRightIcon } from "lucide-react";
import Avatar from "../../assets/avatar.svg";
import GitHubLogo from "../../assets/GitHubLogo.svg";
import Logo2 from "../../assets/Logo2.svg";
import Logo3 from "../../assets/Logo3.svg";

import styles from "./styles.module.css";
import { useContext } from "react";
import { ProfileContext } from "../../context/ProfileContext";
import { Link } from "react-router";

interface User {
  login: string;
  name: string;
  avatar_url: string;
  bio: string;
  location: string;
  followers: number;
  following: number;
  public_repos: number;
  html_url: string;
}

export function Profile() {
  const { user } = useContext(ProfileContext);

  return (
    <div className={styles.profileContainer}>
      <div className={styles.profile}>
        <img src={user?.avatar_url} alt="" />
      </div>

      <div className={styles.info}>
        <span>{user?.name}</span>

        <p>{user?.bio}</p>

        <div className={styles.infoTags}>
          <div>
            <img src={GitHubLogo} alt="" />
            <p>{user?.login}</p>
          </div>
          <div>
            <img src={Logo2} alt="" />
            <p>{user?.location}</p>
          </div>
          <div>
            <img src={Logo3} alt="" />
            <p>{user?.followers}</p>
          </div>
        </div>
      </div>

      <button>
        <a href="https://github.com/gustavocanepa10">
          GITHUB
          <SquareArrowOutUpRightIcon size={16} color="#3294F8" />
        </a>
      </button>
    </div>
  );
}
