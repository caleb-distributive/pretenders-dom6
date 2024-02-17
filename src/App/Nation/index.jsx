import React from 'react';
import ResetAllButton from './ResetAllButton';
import Select from 'react-select';
import styles from './Nation.module.scss';

function Nation(props) {
    const {
        nations, nationId, changeNation,
        resetAllPoints
    } = props;

    const handleSelection = (selectedNation) => {
      setSelectedNation(selectedNation);
      changeNation(selectedNation.value);
    }
  
  const options = Object.keys(nations).map(nId => {
    return ({
      value: nId,
      label: `${nations[nId].era ? nations[nId].era : ""} ${nations[nId].name}: ${nations[nId].epithet ? nations[nId].epithet : ""}`
    });
  });

  const [selectedNation, setSelectedNation ] = React.useState(options[0])

    return (
	<div className={styles.container}>
	  <div className={styles.body}>
      <Select styles={{
        control: (baseStyles) => ({
          ...baseStyles,
          fontSize: "13px",
          width: "max-content",
          minWidth:"300px"
        }),
        option: (baseStyles) => ({
          ...baseStyles,
          color: 'black',
          fontSize: "13px"
        }),
        menu: (baseStyles) => ({
          ...baseStyles,
          width: "max-content",
          minWidth:"100%"
        })
      }}
        options={options}
        value={selectedNation}
        onChange={handleSelection}
      />
	    <ResetAllButton
              resetAllPoints={resetAllPoints}
              />
	  </div>
	</div>
    );
}

export default Nation;
