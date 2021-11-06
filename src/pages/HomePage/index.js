import React, { useEffect, useState } from "react";
import fuelApis from "../../apis";
import FuelMeter from "../../components/FuelMeter";
import Select from "../../components/Select";
import * as styles from "./homepage.module.css";

const HomePage = () => {
  const [stateList, setStateList] = useState([]);
  const [selectedState, setSelectedState] = useState({ key: "", value: "" });
  const [fuelData, setFuelData] = useState([]);

  useEffect(() => {
    fuelApis.getStateDropdown().then((data) => {
      setStateList(data);
      setSelectedState(data[0]);
    });
  }, []);

  useEffect(() => {}, [stateList]);

  useEffect(() => {
    if (selectedState && selectedState.key && selectedState.value) {
      fuelApis.getPricesByState(selectedState.key).then((data) => {
        setFuelData(data);
      });
    }
  }, [selectedState]);

  const onStateSelectionChange = (item) => {
    setSelectedState(item);
  };

  return (
    <div className={styles.main}>
      <div className={styles.logo}>Fuel Price Tracker - India</div>
      <section className={styles.picker}>
        <Select
          options={stateList}
          onChange={onStateSelectionChange}
          selectedItem={selectedState}
        />
      </section>
      <section className={styles.meters}>
        <div>
          <FuelMeter fuelType="diesel" data={fuelData?.[0]} />
        </div>
        <div>
          <FuelMeter fuelType="petrol" data={fuelData?.[0]} />
        </div>
      </section>
      <section className={styles.attributions}>
        <p>Attributions</p>
        <a href="https://www.freepik.com/vectors/background">
          Background vector created by starline - www.freepik.com
        </a>
        <br />
        <a href="https://shailahir.com">Site created by Shailendra Ahir</a>
      </section>
    </div>
  );
};
export default HomePage;
