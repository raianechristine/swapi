import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import fetchStarships from "store/actions/starship";

import Dashboard from "components/presentation/Dashboard";

const DashboardContainer = () => {
  const dispatch = useDispatch();

  const [calculationResult, setCalculationResult] = useState([]);
  const [distance, setDistance] = useState();

  const { isLoading, starships, isSuccess } = useSelector(
    ({ starship }) => starship
  );

  useEffect(() => {
    isSuccess && resupplyFrequency(distance);
  }, [isSuccess, distance]);

  const handleResupplyFrequency = (values) => {
    setDistance(values.distance);
    dispatch(fetchStarships());
  };

  const resupplyFrequency = (distance) => {
    let result = [];

    starships.map((starship) => {
      result.push({
        starship: starship.name,
        calc: calcResupplyFrequency(
          distance,
          starship.consumables,
          starship.MGLT
        ),
      });
    });

    setCalculationResult(result);
  };

  const calcResupplyFrequency = (distance, consumable, MGLT) => {
    let journeyStart = new Date().getTime();
    let journeyEnd = new Date();

    const consumablesPeriod = consumable.split(" ");

    if (consumablesPeriod[0] === "unknown" || MGLT === "unknown")
      return "unknown";

    switch (consumablesPeriod[1]) {
      case "day":
      case "days":
        journeyEnd = journeyEnd.setDate(
          journeyEnd.getDate() + parseInt(consumablesPeriod[0])
        );
        break;

      case "week":
      case "weeks":
        journeyEnd = journeyEnd.setDate(
          journeyEnd.getDate() + parseInt(consumablesPeriod[0]) * 7
        );
        break;

      case "month":
      case "months":
        journeyEnd = journeyEnd.setMonth(
          journeyEnd.getMonth() + parseInt(consumablesPeriod[0])
        );
        break;

      case "year":
      case "years":
        journeyEnd = journeyEnd.setFullYear(
          journeyEnd.getFullYear() + parseInt(consumablesPeriod[0])
        );
        break;
    }

    const milliseconds = Math.abs(new Date(journeyEnd) - journeyStart);
    const hours = milliseconds / 36e5;
    const mglt = parseInt(MGLT);

    return Math.round(distance / (mglt * hours));
  };

  return (
    <Dashboard
      handleResupplyFrequency={handleResupplyFrequency}
      isLoading={isLoading}
      calculationResult={calculationResult}
    />
  );
};

export default DashboardContainer;
