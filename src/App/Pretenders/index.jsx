import React from 'react';

import {filterPretendersByImprisonment} from './filterPretendersByImprisonment';

import {filterPretendersByChassis} from './filterPretendersByChassis';

import {pretenderCost} from './pretenderCost';
import { sum } from 'ramda';

import styles from './Pretenders.module.scss';

function Pretenders(props) {

  const {
      f, a, w, e, s, d, n, g, b,  
      nations,
      nationId,
      pretenders,
      dominion,
      imprisonment,
      pointsForImprisonment,
      chassis,
      scalesCosts,
      scales,
      scalelimits
  } = props;

  const paths = {f, a, w, e, s, d, n, g, b};
  
  const points = 450;

  const totalCostOfScales = sum(Object.values(scalesCosts));
  const pointsLeftWithoutPretenders = points + pointsForImprisonment - totalCostOfScales;

  const filteredPretenderIds = filterPretendersByChassis(
      pretenders,
      filterPretendersByImprisonment(
          pretenders,
          nations[nationId].pretenders,
          imprisonment
      ),
      chassis,
      scales,
      scalelimits
  );
    
  const pretenderRows = filteredPretenderIds.map(pretenderId => {
	const pretender = pretenders[pretenderId];
	return (
	    {
		pretenderId: pretenderId,
		name: pretender.name,
		pointsLeft: pointsLeftWithoutPretenders - pretenderCost(
                    pretender,
		    nations[nationId],
		    paths,
		    dominion
                ),
		dominion: pretender.startdom > dominion ? pretender.startdom : dominion,
		f: pretender.f > paths.f ? pretender.f : paths.f,
		a: pretender.a > paths.a ? pretender.a : paths.a,
		w: pretender.w > paths.w ? pretender.w : paths.w,
		e: pretender.e > paths.e ? pretender.e : paths.e,
		s: pretender.s > paths.s ? pretender.s : paths.s,
		d: pretender.d > paths.d ? pretender.d : paths.d,
		n: pretender.n > paths.n ? pretender.n : paths.n,
    g: pretender.g > paths.g ? pretender.g : paths.g,
		b: pretender.b > paths.b ? pretender.b : paths.b,
    scalelimits: {
      order:        pretender.moreorder,
      productivity: pretender.moreprod,
      heat:         pretender.moreheat,
      growth:       pretender.moregrowth,
      fortune:      pretender.moreluck,
      magic:        pretender.moremagic
    }
	    }
	);
    }).sort((a, b) => {
	if (a.pointsLeft < b.pointsLeft) {
	    return 1;
	}
	if (a.pointsLeft > b.pointsLeft) {
	    return -1;
	}
	return 0;
    }).map(data => {
      let scaleString = "";
      scaleString += data.scalelimits.order         ? `${scaleString.length > 0 ? "," : ""}Ord:  ${data.scalelimits.order       }` : "";
      scaleString += data.scalelimits.productivity  ? `${scaleString.length > 0 ? "," : ""}Prd:  ${data.scalelimits.productivity}` : "";
      scaleString += data.scalelimits.heat          ? `${scaleString.length > 0 ? "," : ""}Heat: ${data.scalelimits.heat        }` : "";
      scaleString += data.scalelimits.growth        ? `${scaleString.length > 0 ? "," : ""}Grw:  ${data.scalelimits.growth      }` : "";
      scaleString += data.scalelimits.fortune       ? `${scaleString.length > 0 ? "," : ""}Frt:  ${data.scalelimits.fortune     }` : "";
      scaleString += data.scalelimits.magic         ? `${scaleString.length > 0 ? "," : ""}Mgc:  ${data.scalelimits.magic       }` : "";

	return (
	    <tr key={data.pretenderId}>
	      <td className={styles.table_cell_name}>{data.name + " "}
	        <span className={styles.table_cell_id}>{"(id: " + data.pretenderId + ")"}</span>
	      </td>
	      <td className={styles.table_cell}>{data.pointsLeft}</td>
	      <td className={styles.table_cell}>{data.dominion}</td>
        <td className={styles.table_cell}>{scaleString}</td>
	      <td className={styles["table_cell" + (data.f > 0 ? "_fire"    : "") ]}>{data.f > 0 ? "F"+data.f : ""}</td>
	      <td className={styles["table_cell" + (data.a > 0 ? "_air"     : "") ]}>{data.a > 0 ? "A"+data.a : ""}</td>
	      <td className={styles["table_cell" + (data.w > 0 ? "_water"   : "") ]}>{data.w > 0 ? "W"+data.w : ""}</td>
	      <td className={styles["table_cell" + (data.e > 0 ? "_earth"   : "") ]}>{data.e > 0 ? "E"+data.e : ""}</td>
	      <td className={styles["table_cell" + (data.s > 0 ? "_astral"  : "") ]}>{data.s > 0 ? "S"+data.s : ""}</td>
	      <td className={styles["table_cell" + (data.d > 0 ? "_death"   : "") ]}>{data.d > 0 ? "D"+data.d : ""}</td>
	      <td className={styles["table_cell" + (data.n > 0 ? "_nature"  : "") ]}>{data.n > 0 ? "N"+data.n : ""}</td>
        <td className={styles["table_cell" + (data.g > 0 ? "_glamour" : "") ]}>{data.g > 0 ? "G"+data.g : ""}</td>
	      <td className={styles["table_cell" + (data.b > 0 ? "_blood"   : "") ]}>{data.b > 0 ? "B"+data.b : ""}</td>
	    </tr>
	);
    });
    
    return (
	<table className={styles.table} id="pretenders-table">
	  <thead id="pretenders-table__head">
	    <tr>
	      <th className={styles.table_header}>Name</th>
	      <th className={styles.table_header}>Points left</th>
	      <th className={styles.table_header}>Dominion</th>
        <th className={styles.table_header}>Scales</th>
	      <th className={styles.table_header} colSpan="8">Magic</th>
	    </tr>
	  </thead>
	  <tbody id="pretenders-table__body">
	    {pretenderRows}
	  </tbody>
	</table>
    );
}

export default Pretenders;
