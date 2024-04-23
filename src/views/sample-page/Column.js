import { useMemo } from "react";
import styles from "./Column.module.css";

const Column = ({ text, propWidth, propMinWidth }) => {
  const columnStyle = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const textStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className={styles.column} style={columnStyle}>
      <button className={styles.tableHeaderCell}>
        <div className={styles.tableHeader}>
          <div className={styles.text} style={textStyle}>
            {text}
          </div>
        </div>
      </button>
      <div className={styles.tableCell}>
        <div className={styles.text1}>Text</div>
      </div>
      <div className={styles.tableCell1}>
        <div className={styles.text2}>Text</div>
      </div>
      <div className={styles.tableCell2}>
        <div className={styles.text3}>Text</div>
      </div>
      <div className={styles.tableCell3}>
        <div className={styles.text4}>Text</div>
      </div>
      <div className={styles.tableCell4}>
        <div className={styles.text5}>Text</div>
      </div>
      <div className={styles.tableCell5}>
        <div className={styles.text6}>Text</div>
      </div>
      <div className={styles.tableCell6}>
        <div className={styles.text7}>Text</div>
      </div>
      <div className={styles.tableCell7}>
        <div className={styles.text8}>Text</div>
      </div>
      <div className={styles.tableCell8}>
        <div className={styles.text9}>Text</div>
      </div>
      <div className={styles.tableCell9}>
        <div className={styles.text10}>Text</div>
      </div>
    </div>
  );
};

export default Column;
