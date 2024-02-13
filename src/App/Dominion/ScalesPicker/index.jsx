import React from 'react';

import styles from './ScalesPicker.module.scss';

import ScalePicker from './ScalePicker';

function ScalesPicker(props) {
    const {
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

    const {
        order,
        productivity,
        heat,
        growth,
        fortune,
        magic
    } = scales;

    const handleDominion = (event) => {
        const level = parseInt(event.target.value, 10);
        changeDominion(level);
    };

    return (
        <div className={styles.container}>
	        <div className={styles.section}>
	          <div className={styles.picker_dominion}>
              <label className={styles.label_dominion}
		                 htmlFor="dominion-picker__input">
	              Dom
	            </label>
              <input type="number" name="dominion" onChange={handleDominion}
		                 min="1" max="10" value={dominion} id="dominion-picker__input"
		                 className={styles.input_dominion} />
	          </div>
	        </div>

	        <div className={styles.section}>

            <ScalePicker scaleValue={order}
                         label="Ord"
                         id="order-picker__input"
                         scalelimit={scalelimits.order}
                         changeScale={changeOrder}/>

            <ScalePicker scaleValue={productivity}
                         label="Prd"
                         id="productivity-picker__input"
                         scalelimit={scalelimits.productivity}
                         changeScale={changeProductivity}/>

            <ScalePicker scaleValue={heat}
                         label="Heat"
                         id="heat-picker__input"
                         scalelimit={scalelimits.heat}
                         changeScale={changeHeat}/>

            <ScalePicker scaleValue={growth}
                         label="Grw"
                         id="growth-picker__input"
                         scalelimit={scalelimits.growth}
                         changeScale={changeGrowth}/>

            <ScalePicker scaleValue={fortune}
                         label="Frt"
                         id="fortune-picker__input"
                         scalelimit={scalelimits.fortune}
                         changeScale={changeFortune}/>

            <ScalePicker scaleValue={magic}
                         label="Mgc"
                         id="magic-picker__input"
                         scalelimit={scalelimits.magic}
                         changeScale={changeMagic}/>
          </div>
        </div>
    );
}

export default ScalesPicker;
