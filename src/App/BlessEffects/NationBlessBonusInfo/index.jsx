import React from 'react';

import styles from './NationBlessBonusInfo.module.scss';

function NationBlessBonusInfo(props) {
    const { blessBonus, blessPoints } = props;
	return (
	    <div className={styles.container}>
              <p>
		{blessBonus ? `Nation bless bonus: +${blessBonus}` : ""}
              </p>
              <p>
    {`Total bless points: ${blessPoints}`}
              </p>
	    </div>
	);
}

export default NationBlessBonusInfo;
