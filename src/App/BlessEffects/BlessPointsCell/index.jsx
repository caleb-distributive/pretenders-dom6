import React from 'react';

import styles from './BlessPointsCell.module.scss';

function BlessPointsCell(props) {
    const paths = {
      f: props.effect.f,
      a: props.effect.a,
      w: props.effect.w,
      e: props.effect.e,
      s: props.effect.s,
      d: props.effect.d,
      n: props.effect.n,
      g: props.effect.g,
      b: props.effect.b
    };

    const largest = {
      path: null,
      value: 0
    };
    const secondLargest = {
      path: null,
      value: 0
    };

    for (const [path, value] of Object.entries(paths)) {
      if (value > 0 && value > largest.value) {
        secondLargest.path  = largest.path;
        secondLargest.value = largest.value;
        largest.path        = path;
        largest.value       = value;
      }
      else if (value > 0 && value > secondLargest.value) {
        secondLargest.path  = path;
        secondLargest.value = value;
      }
    }
    
    let largestPoints = (<span className={styles[`bless_points_${largest.path}`]}>{largest.value}</span>);
    let secondLargestPoints = null;
    if (secondLargest.value)
      secondLargestPoints = (<span className={styles[`bless_points_${secondLargest.path}`]}>{secondLargest.value}</span>)

    return (
	<td className={styles.cell}>
    <span key={0}>{largestPoints}</span>
    {secondLargestPoints ? 
    <span key={1}>{", "}{secondLargestPoints}</span>
    : null
    }
	</td>
    );
}

export default BlessPointsCell;
