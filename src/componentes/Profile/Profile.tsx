import { SquareArrowOutUpRightIcon } from "lucide-react";
import Avatar from "../../assets/avatar.svg";
import GitHubLogo from "../../assets/GitHubLogo.svg";
import Logo2 from "../../assets/Logo2.svg";
import Logo3 from "../../assets/Logo3.svg";

import styles from "./styles.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <div className={styles.profile}>
        <img className={styles.avatar} src={Avatar} alt="" />
      </div>

      <div className={styles.info}>
        <span>Cameron Williamson</span>

        <p>
          Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
          viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat
          pulvinar vel mass.
        </p>

        <div className={styles.infoTags}>
          <div>
            <img src={GitHubLogo} alt="" />
            <p>cameronwll</p>
          </div>
          <div>
            <img src={Logo2} alt="" />
            <p>Rocketseat</p>
          </div>
          <div>
            <img src={Logo3} alt="" />
            <p>32 seguidores</p>
          </div>
        </div>
      </div>
      <button>
        <span>
          GITHUB
          <SquareArrowOutUpRightIcon size={16} color="#3294F8" />
        </span>
      </button>
    </div>
  );
}
