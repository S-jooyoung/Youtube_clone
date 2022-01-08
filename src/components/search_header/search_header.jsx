import React, { memo, useRef } from "react";
import styles from "./search_header.module.css";

const SearchHeader = memo((props) => {
  const inputRef = useRef();

  const handleSearch = () => {
    props.onSearch(inputRef.current.value);
  };

  const onClick = () => {
    handleSearch();
  };

  const onEnter = (event) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <img className={styles.img} src="/images/logo.png" alt="logo" />
        <h1 className={styles.title}>Youtube</h1>
      </div>
      <input
        ref={inputRef}
        className={styles.input}
        type="text"
        placeholder="Search..."
        onKeyPress={onEnter}
      />
      <button className={styles.button} type="submit" onClick={onClick}>
        <img className={styles.buttonImg} src="/images/search.png" alt="" />
      </button>
    </header>
  );
});

export default SearchHeader;
