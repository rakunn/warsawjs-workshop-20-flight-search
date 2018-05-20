import React from "react";
import styles from "./Flight.css";

const Flight = ({ flight }) => (
  <div className={styles.flight}>
    <p className={styles.price}>{flight.price} PLN</p>
    <div className={styles.path}>
      <p>{flight.outboundPath[0].airportFrom}</p>
      <p>{flight.outboundPath[flight.outboundPath.length - 1].airportTo}</p>
    </div>

    <div className={styles["path-back"]}>
      <p>{flight.inboundPath[0].airportFrom}</p>
      <p>{flight.inboundPath[flight.inboundPath.length - 1].airportTo}</p>
    </div>
  </div>
);

export default Flight;