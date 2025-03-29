"use client";

import { useState } from "react";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ShareIcon from "@mui/icons-material/Share";
import LinkIcon from "@mui/icons-material/Link";
import styles from "./socials.module.scss";

interface SocialsProps {
  slug: string;
}

const Socials: React.FC<SocialsProps> = ({ slug }) => {
  const [isLike, setIsLike] = useState<boolean>(false);
  const [likeCount, setLikeCount] = useState<number>(0);

  const like = () => {
    if (isLike) {
      setIsLike(false);
      setLikeCount(likeCount - 1);
    } else {
      setIsLike(true);
      setLikeCount(likeCount + 1);
    }
  };

  const copyLink = () => {
    const articleUrl = `${window.location.origin}/news/${slug}`;
    navigator.clipboard
      .writeText(articleUrl)
      .then(() => {
        console.log("Link copied to clipboard!");
      })
      .catch((err) => {
        console.log("Failed to copy link: ", err);
      });
  };

  return (
    <div className={styles["socials-share"]}>
      <button
        className={`${styles["like"]} ${isLike ? styles["liked"] : ""}`}
        onClick={like}
        aria-label="Like">
        <ThumbUpIcon /> {likeCount}
      </button>
      <button className={styles["share"]} onClick={copyLink} aria-label="Share">
        <ShareIcon />
      </button>
      <button
        className={styles["copy-link"]}
        onClick={copyLink}
        aria-label="Copy link">
        <LinkIcon />
      </button>
    </div>
  );
};

export default Socials;
