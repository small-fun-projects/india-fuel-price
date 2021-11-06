import React, { useEffect, useState } from 'react';
import fuelApis from '../../apis';
import Select from '../../components/Select';

const HomePage = () => {

  const [stateList, setStateList] = useState([]);
  const [selectedState, setSelectedState] = useState({ key: '', value: '' });

  useEffect(() => {
    fuelApis.getStateDropdown().then(data => {
      setStateList(data);
      setSelectedState(data[0]);
    });
  }, [])

  useEffect(() => {
    console.log('state list ', stateList);
  }, [stateList])

  const onStateSelectionChange = (item) => {
    setSelectedState(item);
  }

  return (
    <div>
      <section>
        <Select
          options={stateList}
          onChange={onStateSelectionChange}
          selectedItem={selectedState}
        />
      </section>
    </div>
  )
}
export default HomePage;