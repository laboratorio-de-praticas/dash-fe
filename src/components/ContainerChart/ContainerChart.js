"use client";

import styles from "./ContainerChart.module.css";


function ContainerChart({children}) {
    return(
        <div className={styles.containerChart}>
                {children}
        </div>
    );
}
export default ContainerChart;
