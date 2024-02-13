import React from 'react';

import styles from './NationScalesInfo.module.scss';

function NationScalesInfo(props) {

    const orderLabel        = props.defaultScales.order         ? `Default order: ${        props.defaultScales.order         >=0 ? "+" : ""}${ props.defaultScales.order       }`  : "";
    const productivityLabel = props.defaultScales.productivity  ? `Default productivity: ${ props.defaultScales.productivity  >=0 ? "+" : ""}${ props.defaultScales.productivity}`  : "";
    const heatLabel         = props.defaultScales.heat          ? `Default heat: ${         props.defaultScales.heat          >=0 ? "+" : ""}${ props.defaultScales.heat        }`  : "";
    const growthLabel       = props.defaultScales.growth        ? `Default growth: ${       props.defaultScales.growth        >=0 ? "+" : ""}${ props.defaultScales.growth      }`  : "";
    const fortuneLabel      = props.defaultScales.fortune       ? `Default fortune: ${      props.defaultScales.fortune       >=0 ? "+" : ""}${ props.defaultScales.fortune     }`  : "";
    const magicLabel        = props.defaultScales.magic         ? `Default magic: ${        props.defaultScales.magic         >=0 ? "+" : ""}${ props.defaultScales.magic       }`  : "";

    const orderLimitLabel         = props.scalelimits.order         ? `Order scale limit: ${        props.scalelimits.order         >=0 ? "+" : ""}${ props.scalelimits.order       }`  : "";
    const productivityLimitLabel  = props.scalelimits.productivity  ? `Productivity scale limit: ${ props.scalelimits.productivity  >=0 ? "+" : ""}${ props.scalelimits.productivity}`  : "";
    const heatLimitLabel          = props.scalelimits.heat          ? `Heat scale limit: ${         props.scalelimits.heat          >=0 ? "+" : ""}${ props.scalelimits.heat        }`  : "";
    const growthLimitLabel        = props.scalelimits.growth        ? `Growth scale limit: ${       props.scalelimits.growth        >=0 ? "+" : ""}${ props.scalelimits.growth      }`  : "";
    const fortuneLimitLabel       = props.scalelimits.fortune       ? `Fortune scale limit: ${      props.scalelimits.fortune       >=0 ? "+" : ""}${ props.scalelimits.fortune     }`  : "";
    const magicLimitLabel         = props.scalelimits.magic         ? `Magic scale limit: ${        props.scalelimits.magic         >=0 ? "+" : ""}${ props.scalelimits.magic       }`  : "";

    return (
	<div className={styles.container}>
          <p className={styles.order}>
      { orderLabel }
          </p>
          <p className={styles.productivity}>
      { productivityLabel}
          </p>
          <p className={styles.heat}>
	    { heatLabel}
          </p>
          <p className={styles.growth}>
	    { growthLabel }
          </p>
          <p className={styles.fortune}>
      { fortuneLabel }
          </p>
          <p className={styles.magic}>
      { magicLabel }
          </p>
          <p className={styles.order}>
      { orderLimitLabel }
          </p>
          <p className={styles.productivity}>
      { productivityLimitLabel}
          </p>
          <p className={styles.heat}>
	    { heatLimitLabel }
          </p>
          <p className={styles.growth}>
	    { growthLimitLabel }
          </p>
          <p className={styles.fortune}>
      { fortuneLimitLabel }
          </p>
          <p className={styles.magic}>
      { magicLimitLabel }
          </p>
	</div>
    );
}

export default NationScalesInfo;
