import React from 'react';
import NationScalesInfo from './NationScalesInfo';
import ScalesPicker from './ScalesPicker';
import ResetScalesButton from './ResetScalesButton';

import styles from './Dominion.module.scss';

function Dominion(props) {
    const {
        resetScalesPoints,
        defaultScales,
        changeDominion,
        changeOrder,
        changeProductivity,
        changeHeat,
        changeGrowth,
        changeFortune,
        changeMagic,
        dominion,
        scalelimits,
        scales,
    } = props;

    return (
	      <div className={styles.container}>
	        <NationScalesInfo
	          defaultScales={defaultScales}
            scalelimits={scalelimits}
	        />
	        < ScalesPicker
            changeDominion={changeDominion}
            changeOrder={changeOrder}
            changeProductivity={changeProductivity}
            changeHeat={changeHeat}
            changeGrowth={changeGrowth}
            changeFortune={changeFortune}
            changeMagic={changeMagic}
            dominion={dominion}
            scalelimits={scalelimits}
	          scales={scales}
	        />
 	        <ResetScalesButton
            resetScalesPoints={resetScalesPoints}
	        />
	      </div>
    );
}

export default Dominion;
