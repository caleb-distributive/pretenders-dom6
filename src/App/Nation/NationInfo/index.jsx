import React from 'react';

import styles from './NationInfo.module.scss';

function NationInfo(props) {
    const blessBonus = props.blessBonus;
    const { order, productivity, heat, growth, fortune, magic} = props.defaultScales;
    
    const blessBonusLabel   = blessBonus    ? `+${blessBonus}`                          : "";

    const orderLabel        = order         ? `Default order: ${        order}`         : "";
    const productivityLabel = productivity  ? `Default productivity: ${ productivity}`  : "";
    const heatLabel         = heat          ? `Default temperature: ${  heat}`          : "";
    const growthLabel       = growth        ? `Default growth: ${       growth}`        : "";
    const fortuneLabel      = fortune       ? `Default fortune: ${      fortune}`       : "";
    const magicLabel        = magic         ? `Default magic: ${        magic}`         : "";
    return (
	<div className={styles.container}>
          <p>
	    {blessBonusLabel ? "Nation bless bonuses:" : ""}
	    <span className={styles.blesses}>{blessBonusLabel}</span>
          </p>
          <p className={styles.order}>
	    {orderLabel}
          </p>
          <p className={styles.productivity}>
	    {productivityLabel}
          </p>
          <p className={styles.heat}>
	    {heatLabel}
          </p>
          <p className={styles.growth}>
	    {growthLabel}
          </p>
          <p className={styles.fortune}>
	    {fortuneLabel}
          </p>
          <p className={styles.magic}>
	    {magicLabel}
          </p>
	</div>
    );
}

export default NationInfo;
