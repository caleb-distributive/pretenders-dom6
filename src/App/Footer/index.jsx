import React from 'react';

import styles from './Footer.module.scss';

function Footer(props) {
    const { version } = props;
    return (
	<footer className={styles.container}>
          <h1 className={styles.row}>
	    <span className={styles.page_title}>Pretenders Calculator for Dominions 6</span>
	  </h1>

	  <p className={styles.row}>
	    <span className={styles.caption}>Version: </span>
	    <span className={styles.value}>{version}</span>
	  </p>

          <p className={styles.row}>
	    <span className={styles.caption}>Source code: </span>
	    <a href="https://github.com/caleb-distributive/pretenders-dom6" className={styles.value}>https://github.com/caleb-distributive/pretenders-dom6</a>
	  </p>

          <p className={styles.row}>
	    Pretender cost seems wrong? Please create <a href="https://github.com/caleb-distributive/pretenders-dom6" className={styles.value}>a new issue</a> about it or mail me at 
      <address className={styles.mail}>zollqir@gmail.com</address>.
	  </p>
	</footer>
    );
}

export default Footer;
