import React from 'react';

import styles from './NationInfo.module.scss';

function NationInfo(props) {
    const blessBonus = props.blessBonus;
    
    const blessBonusLabel   = blessBonus    ? `+${blessBonus}`                          : "";

    return (
	<div className={styles.container}>
          <p>
	    {blessBonusLabel ? "Nation bless bonuses:" : ""}
	    <span className={styles.blesses}>{blessBonusLabel}</span>
          </p>
	</div>
    );
}

export default NationInfo;
