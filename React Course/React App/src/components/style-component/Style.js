import React from "react";
import styles from "./style.module.css";
import styled from 'styled-components';

const Button=styled.button`
  border:1px solid red;
  background:#dcdcdc;
  color:#000;
`;

function Style(props) {
  return (
    <div>
      <div className={styles.myname}>
        <h1 className={styles.title}> This is my style component</h1>
        <Button>
            Click
        </Button>
      </div>
    </div>
  );
}

export default Style;
