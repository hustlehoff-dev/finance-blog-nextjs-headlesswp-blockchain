"use client";

import React from "react";
import styles from "./loadcat.module.scss";

interface LoadCatProps {
  isLoading: boolean;
  hasMore: boolean;
}

const LoadCat: React.FC<LoadCatProps> = ({ isLoading, hasMore }) => {
  return (
    <div className={styles["load-cat"]}>
      <img
        src="https://comeincrypto.com/cms/wp-content/uploads/2025/01/loadcat.gif"
        alt="Cat that loads content xd"
      />
      {isLoading && "Loading more posts..."}
      {!hasMore && "No more posts to meow..."}
    </div>
  );
};

export default LoadCat;
