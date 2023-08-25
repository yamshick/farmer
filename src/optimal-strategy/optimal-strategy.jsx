import { Box, Divider, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { solveLp } from "utils/lp-solver";
import { formatNumberWithSpaces } from "../utils/formatters";

const model = {
  optimize: "profit",
  opType: "max",
  constraints: {
    // "totalApplesKg": {"max": 20 * 5 * 50},
    days: { max: 14 },
    totalApplesKg: { max: 20 * 5 * 50 },
    totalPlumsKg: { max: 10 },
    totalTeaKg: { max: 10 },
    totalJarsLitres: { max: 100 },
  },
  variables: {
    apples: {
      profit: 16_000,
      days: 1,
      totalApplesKg: 1,
      totalTeaKg: 0,
    },
    driedApples: {
      profit: 44_100,
      days: 1,
      totalTeaKg: 0,
      totalApplesKg: 1,
      // "totalJarsLitres": 2,
    },
    conservedApples: {
      // "profit": 46_000,
      profit: 102_600,
      days: 1,
      totalApplesKg: 1,
      totalPlumsKg: 1,
      totalJarsLitres: 3,
    },
    tea: {
      profit: 13_600,
      days: 1,
      totalTeaKg: 1,
      totalApplesKg: 0,
    },
  },
};

const updateConfig = ({
  gasPriceRubL,
  onGasPriceRubLChange,
  totalWayKm,
  onTotalWayKmChange,
  gasConsumptionL100Km,
  onGasConsumptionChange,
  totalConsumption,
  //////////////////////////////
  daysInVillage,
  setDaysInVillage,
  workDayTimeHours,
  setWorkDayTimeHours,
  workDaysPerMonth,
  setWorkDaysPerMonth,
  //////////////////////////////
  applesStorePriceRubKb,
  canCollectApplesKgInHour,
  driedApplesStorePriceRubKg,
  canCutApplesKgInHour,
  conservedApplesStorePriceRubKg,
  canConserveApplesKgInHours,
  // fruitTeaStorePriceRubKg,
  teaStorePriceRubKg,
  canCollectFruitTeaKgInHour,
  /////////////
  totalApplesOnTreesKg,
  totalPlumsOnTreesKg,
  totalTeaGrassKg,
  totalJarsLitres,
  balconyCapacityKg,
}) => ({
  optimize: "profit",
  opType: "max",
  constraints: {
    days: { max: daysInVillage },
    totalApplesKg: { max: totalApplesOnTreesKg },
    totalPlumsKg: { max: totalPlumsOnTreesKg },
    totalTeaKg: { max: totalTeaGrassKg },
    totalJarsLitres: { max: totalJarsLitres },
    balconyCapacityKg: { max: balconyCapacityKg },
  },
  variables: {
    apples: {
      profit:
        workDayTimeHours * applesStorePriceRubKb * canCollectApplesKgInHour,
      days: 1,
      totalApplesKg: 1,
      totalPlumsKg: 0,
      totalTeaKg: 0,
      totalJarsLitres: 0,
      balconyCapacityKg: 1,
    },
    driedApples: {
      profit:
        workDayTimeHours * driedApplesStorePriceRubKg * canCutApplesKgInHour,
      days: 1,
      totalApplesKg: 1,
      totalPlumsKg: 0,
      totalTeaKg: 0,
      totalJarsLitres: 0,
      balconyCapacityKg: 1,
    },
    conservedApples: {
      // "profit": 46_000,
      profit:
        workDayTimeHours *
        conservedApplesStorePriceRubKg *
        canConserveApplesKgInHours,
      days: 1,
      totalApplesKg: 1,
      totalPlumsKg: 0.5,
      totalTeaKg: 0,
      totalJarsLitres: 2.5,
      balconyCapacityKg: 1,
    },
    tea: {
      profit:
        workDayTimeHours * teaStorePriceRubKg * canCollectFruitTeaKgInHour,
      days: 1,
      totalApplesKg: 0,
      totalPlumsKg: 0,
      totalTeaKg: 1,
      totalJarsLitres: 0,
      balconyCapacityKg: 1,
    },
  },
});

export const OptimalStrategy = ({
  gasPriceRubL,
  onGasPriceRubLChange,
  totalWayKm,
  onTotalWayKmChange,
  gasConsumptionL100Km,
  onGasConsumptionChange,
  totalConsumption,
  //////////////////////////////
  daysInVillage,
  setDaysInVillage,
  workDayTimeHours,
  setWorkDayTimeHours,
  workDaysPerMonth,
  setWorkDaysPerMonth,
  //////////////////////////////
  applesStorePriceRubKb,
  onApplesStorePriceRubKbChange,
  canCollectApplesKgInHour,
  onCanCollectApplesKgInHourChange,
  driedApplesStorePriceRubKg,
  setDriedApplesStorePriceRubKg,
  canCutApplesKgInHour,
  setCanCutApplesKgInHour,
  conservedApplesStorePriceRubKg,
  setConservedApplesStorePriceRubKg,
  canConserveApplesKgInHours,
  setCanConserveApplesKgInHours,
  fruitTeaStorePriceRubKg,
  setFruitTeaStorePriceRubKg,
  teaStorePriceRubKg,
  setTeaStorePriceRubKg,
  canCollectFruitTeaKgInHour,
  setCanCollectFruitTeaKgInHour,
  ////
  rawApplesCollectingWorkDayValue,
  driedApplesCollectingWorkDayValue,
  conservedApplesCollectingWorkDayValue,
  //////////////////////////////////////
  totalApplesOnTreesKg,
  totalPlumsOnTreesKg,
  totalTeaGrassKg,
  totalJarsLitres,
  balconyCapacityKg,
}) => {
  const [config, setConfig] = useState(model);
  useEffect(() => {
    setConfig(
      updateConfig({
        gasPriceRubL,
        onGasPriceRubLChange,
        totalWayKm,
        onTotalWayKmChange,
        gasConsumptionL100Km,
        onGasConsumptionChange,
        totalConsumption,
        //////////////////////////////
        daysInVillage,
        setDaysInVillage,
        workDayTimeHours,
        setWorkDayTimeHours,
        workDaysPerMonth,
        setWorkDaysPerMonth,
        //////////////////////////////
        applesStorePriceRubKb,
        onApplesStorePriceRubKbChange,
        canCollectApplesKgInHour,
        onCanCollectApplesKgInHourChange,
        driedApplesStorePriceRubKg,
        setDriedApplesStorePriceRubKg,
        canCutApplesKgInHour,
        setCanCutApplesKgInHour,
        conservedApplesStorePriceRubKg,
        setConservedApplesStorePriceRubKg,
        canConserveApplesKgInHours,
        setCanConserveApplesKgInHours,
        fruitTeaStorePriceRubKg,
        setFruitTeaStorePriceRubKg,
        teaStorePriceRubKg,
        setTeaStorePriceRubKg,
        canCollectFruitTeaKgInHour,
        setCanCollectFruitTeaKgInHour,
        //////////////////
        totalApplesOnTreesKg,
        totalPlumsOnTreesKg,
        totalTeaGrassKg,
        totalJarsLitres,
        balconyCapacityKg,
      })
    );
  }, [
    gasPriceRubL,
    onGasPriceRubLChange,
    totalWayKm,
    onTotalWayKmChange,
    gasConsumptionL100Km,
    onGasConsumptionChange,
    totalConsumption,
    //////////////////////////////
    daysInVillage,
    setDaysInVillage,
    workDayTimeHours,
    setWorkDayTimeHours,
    workDaysPerMonth,
    setWorkDaysPerMonth,
    //////////////////////////////
    applesStorePriceRubKb,
    onApplesStorePriceRubKbChange,
    canCollectApplesKgInHour,
    onCanCollectApplesKgInHourChange,
    driedApplesStorePriceRubKg,
    setDriedApplesStorePriceRubKg,
    canCutApplesKgInHour,
    setCanCutApplesKgInHour,
    conservedApplesStorePriceRubKg,
    setConservedApplesStorePriceRubKg,
    canConserveApplesKgInHours,
    setCanConserveApplesKgInHours,
    fruitTeaStorePriceRubKg,
    setFruitTeaStorePriceRubKg,
    teaStorePriceRubKg,
    setTeaStorePriceRubKg,
    canCollectFruitTeaKgInHour,
    setCanCollectFruitTeaKgInHour,
    /////
    rawApplesCollectingWorkDayValue,
    driedApplesCollectingWorkDayValue,
    conservedApplesCollectingWorkDayValue,
    ///////////
    totalApplesOnTreesKg,
    totalPlumsOnTreesKg,
    totalTeaGrassKg,
    totalJarsLitres,
    balconyCapacityKg,
  ]);
  const result = solveLp(config);
  console.log(result);

  const activities = [
    {
      title: "Сбор яблок",
      duration: result.apples,
      workDayValue: rawApplesCollectingWorkDayValue,
    },
    {
      title: "Сушение яблок",
      duration: result.driedApples,
      workDayValue: driedApplesCollectingWorkDayValue,
    },
    {
      title: "Консервация яблок со сливами",
      duration: result.conservedApples,
      workDayValue: conservedApplesCollectingWorkDayValue,
    },
    {
      title: "Сбор чая",
      duration: result.tea,
      // workDayValue: teaCol
    },
  ];

  const expectedIncome = formatNumberWithSpaces(
    Math.floor(result.result - totalConsumption)
  );

  return (
    <Box>
      <Typography variant="h4">Оптимальная стратегия</Typography>
      {activities
        .filter(({ duration }) => duration)
        .map((activity, idx) => (
          <Typography key={idx} variant="h6">
            {activity.title}
            {": "}
            {Math.floor(activity.duration)}
            {" дней"}
          </Typography>
        ))}
      {/* <Typography variant="h6">
        <pre>{JSON.stringify(result, null, 2)}</pre>
      </Typography> */}
      <Typography variant="h6" sx={{ color: "green" }}>
        Ожидаемый доход: {expectedIncome}
        {" руб"}
      </Typography>
      <Typography variant="h4">Детали:</Typography>
      <Typography variant="h6">
        {activities
          .filter(({ duration }) => duration)
          .map((activity, idx) => (
            <Box key={idx}>
              <Typography variant="h6">
                <p style={{ fontWeight: "bold" }}>{activity.title}</p>
                <p>
                  Ценность рабочего дня:{" "}
                  {formatNumberWithSpaces(activity.workDayValue)}
                  {" руб"}
                </p>
                <p>
                  Доход: {activity.duration}
                  {" дней * "}
                  {formatNumberWithSpaces(activity.workDayValue || 0)}
                  {" руб / день = "}
                  {formatNumberWithSpaces(
                    activity.duration * (activity.workDayValue || 0)
                  )}
                  {" руб "}
                </p>
              </Typography>
              <Divider />
            </Box>
          ))}
      </Typography>
    </Box>
  );
};
