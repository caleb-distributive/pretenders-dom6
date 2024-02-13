import React from 'react';
import NationBlessBonusInfo from './NationBlessBonusInfo';
import BlessEffectsWindow from './BlessEffectsWindow';
import BlessEffectsRows from './BlessEffectsRows';

import {totalBlessPoints} from './blessPoints';

import {filterBlessEffects} from './filterBlessEffects';
import {getBlessEffects} from './getBlessEffects';

import styles from './BlessEffects.module.scss';

function BlessEffects(props) {
    const {
      showBlessList,
      closeBlessList,
      blessBonus,
      isBlessEffectsWindowOpen,
      f,a,w,e,s,d,n,g,b,
      scales
    } = props;
    const paths = {f,a,w,e,s,d,n,g,b};
    const blessPoints = totalBlessPoints(paths, blessBonus);
    const blessEffects = getBlessEffects();

    return(
	<div className={styles.container}>
	  <BlessEffectsWindow
	    isOpen={isBlessEffectsWindowOpen}
	    onClose={closeBlessList}
	    blessEffects={blessEffects}
	    />
	  <NationBlessBonusInfo
      blessBonus={blessBonus}
      blessPoints={blessPoints}
	    />
	  
	  <p>
	    Available Blesses
	    <button className={styles.open_button} onClick={showBlessList}>
	      Show all bless list
	    </button>
	  </p>
	  
	  <div className={styles.section}>
	    <table className={styles.table}>
	      <thead>
		<tr>
		  <th className={styles.table_header}>Bless Points</th>
		  <th className={styles.table_header}>Scales</th>
		  <th className={styles.table_header}>Name</th>
		  <th className={styles.table_header}>Short description</th>
		  <th className={styles.table_header}>Incarnate only?</th>
		</tr>
	      </thead>
	      <BlessEffectsRows effects={filterBlessEffects(blessEffects, paths, scales)} />
	    </table>
	  </div>
	  
	</div>
    );
}

export default BlessEffects;
