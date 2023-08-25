import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import "./app.css";
import { DataInput } from "./data-input/data-input";
import { Header } from "./ui/header";
import { VillageProjects } from "./village-projects/village-projects";
import { generateVillageProjects } from "./utils/village-projects";
import { OptimalStrategy } from "./optimal-strategy/optimal-strategy";
import { CollapsableBox } from "./ui/collapsable-box";
import { WorkDayInput } from "./data-input/work-day-input";
import { CentralizedBox } from "./ui/centralized-box";

const calculateGasConsumption = ({
  gasPriceRubL,
  totalWayKm,
  gasConsumptionL100Km,
}) => {
  return (gasPriceRubL * totalWayKm * gasConsumptionL100Km) / 100;
};

const calculateWorkDayProfit = ({ workDayTimeHours, profitPerHour }) =>
  workDayTimeHours * profitPerHour;
const calculateMonthlySalary = ({
  workDayTimeHours,
  profitPerHour,
  workDaysPerMonth,
}) => workDayTimeHours * profitPerHour * workDaysPerMonth;

export const App = () => {
  const [gasPriceRubL, onGasPriceRubLChange] = React.useState(55);
  const [totalWayKm, onTotalWayKmChange] = React.useState(1000);
  const [gasConsumptionL100Km, onGasConsumptionChange] = React.useState(5);
  const [totalConsumption, setTotalConsumption] = React.useState(
    calculateGasConsumption({
      gasPriceRubL,
      totalWayKm,
      gasConsumptionL100Km,
    })
  );

  React.useEffect(() => {
    setTotalConsumption(
      calculateGasConsumption({
        gasPriceRubL,
        totalWayKm,
        gasConsumptionL100Km,
      })
    );
  }, [gasPriceRubL, totalWayKm, gasConsumptionL100Km]);

  const [daysInVillage, setDaysInVillage] = React.useState(14);
  const [workDayTimeHours, setWorkDayTimeHours] = React.useState(8);
  const [workDaysPerMonth, setWorkDaysPerMonth] = React.useState(22);

  const [applesStorePriceRubKb, onApplesStorePriceRubKbChange] =
    React.useState(100);
  const [canCollectApplesKgInHour, onCanCollectApplesKgInHourChange] =
    React.useState(100);
  const [rawApplesCollectingWorkDayValue, setRawApplesCollectingWorkDayValue] =
    useState(
      applesStorePriceRubKb * canCollectApplesKgInHour * workDayTimeHours
    );
  useEffect(() => {
    setRawApplesCollectingWorkDayValue(
      applesStorePriceRubKb * canCollectApplesKgInHour * workDayTimeHours
    );
  }, [applesStorePriceRubKb, canCollectApplesKgInHour, workDayTimeHours]);

  const [driedApplesStorePriceRubKg, setDriedApplesStorePriceRubKg] =
    React.useState(380);
  const [canCutApplesKgInHour, setCanCutApplesKgInHour] = useState(15);
  const [
    driedApplesCollectingWorkDayValue,
    setDriedApplesCollectingWorkDayValue,
  ] = useState(
    (driedApplesStorePriceRubKg - applesStorePriceRubKb) *
      canCutApplesKgInHour *
      workDayTimeHours
  );
  useEffect(() => {
    setDriedApplesCollectingWorkDayValue(
      (driedApplesStorePriceRubKg - applesStorePriceRubKb) *
        canCutApplesKgInHour *
        workDayTimeHours
    );
  }, [
    applesStorePriceRubKb,
    driedApplesStorePriceRubKg,
    canCutApplesKgInHour,
    workDayTimeHours,
  ]);

  const [conservedApplesStorePriceRubKg, setConservedApplesStorePriceRubKg] =
    useState(620);
  const [canConserveApplesKgInHours, setCanConserveApplesKgInHours] =
    useState(30);
  const [
    conservedApplesCollectingWorkDayValue,
    setConservedApplesCollectingWorkDayValue,
  ] = useState(
    (conservedApplesStorePriceRubKg - applesStorePriceRubKb) *
      canConserveApplesKgInHours *
      workDayTimeHours
  );
  useEffect(() => {
    setConservedApplesCollectingWorkDayValue(
      (conservedApplesStorePriceRubKg - applesStorePriceRubKb) *
        canConserveApplesKgInHours *
        workDayTimeHours
    );
  }, [
    applesStorePriceRubKb,
    conservedApplesStorePriceRubKg,
    canConserveApplesKgInHours,
    workDayTimeHours,
  ]);

  const [fruitTeaStorePriceRubKg, setFruitTeaStorePriceRubKg] = useState(2000);
  const [teaStorePriceRubKg, setTeaStorePriceRubKg] = useState(1700);
  const [canCollectFruitTeaKgInHour, setCanCollectFruitTeaKgInHour] =
    useState(1);

  const [totalApplesOnTreesKg, setTotalApplesOnTreesKg] = useState(50 * 5 * 20);
  const [totalPlumsOnTreesKg, setTotalPlumsOnTreesKg] = useState(20);
  const [totalTeaGrassKg, setTotalTeaGrassKg] = useState(10);
  const [totalJarsLitres, setTotalJarsLitres] = useState(100);
  const [balconyCapacityKg, setBalconyCapacityKg] = useState(100);

  const [villageProjects, setVillageProjects] = useState([]);

  useEffect(() => {
    setVillageProjects(
      generateVillageProjects({
        daysInVillage,
        workDayTimeHours,
        workDaysPerMonth,
        /// ===================
        applesStorePriceRubKb,
        canCollectApplesKgInHour,
        driedApplesStorePriceRubKg,
        canCutApplesKgInHour,
        conservedApplesStorePriceRubKg,
        canConserveApplesKgInHours,
        teaStorePriceRubKg,
        canCollectFruitTeaKgInHour,
      })
    );
  }, [
    daysInVillage,
    workDayTimeHours,
    workDaysPerMonth,
    applesStorePriceRubKb,
    canCollectApplesKgInHour,
    driedApplesStorePriceRubKg,
    canCutApplesKgInHour,
    conservedApplesStorePriceRubKg,
    canConserveApplesKgInHours,
    teaStorePriceRubKg,
    canCollectFruitTeaKgInHour,
  ]);
  return (
    <CentralizedBox>
      <Box display="flex" justifyContent="center">
        <Header title="Деревенске проекты" />
      </Box>
      <Box display="flex" justifyContent="center" alignItems="top" gap="10px">
        <CentralizedBox style={{ border: "solid 1px", borderRadius: "5px" }}>
          <CollapsableBox title={"Параметры рабочего дня"} isOpen={true}>
            <WorkDayInput
              daysInVillage={daysInVillage}
              setDaysInVillage={setDaysInVillage}
              workDayTimeHours={workDayTimeHours}
              setWorkDayTimeHours={setWorkDayTimeHours}
              workDaysPerMonth={workDaysPerMonth}
              setWorkDaysPerMonth={setWorkDaysPerMonth}
            />
          </CollapsableBox>
          <OptimalStrategy
            gasPriceRubL={gasPriceRubL}
            onGasPriceRubLChange={onGasPriceRubLChange}
            totalWayKm={totalWayKm}
            onTotalWayKmChange={onTotalWayKmChange}
            gasConsumptionL100Km={gasConsumptionL100Km}
            onGasConsumptionChange={onGasConsumptionChange}
            totalConsumption={totalConsumption}
            //////////////////////////////
            daysInVillage={daysInVillage}
            setDaysInVillage={setDaysInVillage}
            workDayTimeHours={workDayTimeHours}
            setWorkDayTimeHours={setWorkDayTimeHours}
            workDaysPerMonth={workDaysPerMonth}
            setWorkDaysPerMonth={setWorkDaysPerMonth}
            //////////////////////////////
            applesStorePriceRubKb={applesStorePriceRubKb}
            onApplesStorePriceRubKbChange={onApplesStorePriceRubKbChange}
            canCollectApplesKgInHour={canCollectApplesKgInHour}
            onCanCollectApplesKgInHourChange={onCanCollectApplesKgInHourChange}
            rawApplesCollectingWorkDayValue={rawApplesCollectingWorkDayValue}
            driedApplesStorePriceRubKg={driedApplesStorePriceRubKg}
            setDriedApplesStorePriceRubKg={setDriedApplesStorePriceRubKg}
            canCutApplesKgInHour={canCutApplesKgInHour}
            setCanCutApplesKgInHour={setCanCutApplesKgInHour}
            driedApplesCollectingWorkDayValue={
              driedApplesCollectingWorkDayValue
            }
            conservedApplesStorePriceRubKg={conservedApplesStorePriceRubKg}
            setConservedApplesStorePriceRubKg={
              setConservedApplesStorePriceRubKg
            }
            canConserveApplesKgInHours={canConserveApplesKgInHours}
            setCanConserveApplesKgInHours={setCanConserveApplesKgInHours}
            conservedApplesCollectingWorkDayValue={
              conservedApplesCollectingWorkDayValue
            }
            fruitTeaStorePriceRubKg={fruitTeaStorePriceRubKg}
            setFruitTeaStorePriceRubKg={setFruitTeaStorePriceRubKg}
            teaStorePriceRubKg={teaStorePriceRubKg}
            setTeaStorePriceRubKg={setTeaStorePriceRubKg}
            canCollectFruitTeaKgInHour={canCollectFruitTeaKgInHour}
            setCanCollectFruitTeaKgInHour={setCanCollectFruitTeaKgInHour}
            ////////////////////
            totalApplesOnTreesKg={totalApplesOnTreesKg}
            totalPlumsOnTreesKg={totalPlumsOnTreesKg}
            totalTeaGrassKg={totalTeaGrassKg}
            totalJarsLitres={totalJarsLitres}
            balconyCapacityKg={balconyCapacityKg}
          />
          <VillageProjects villageProjects={villageProjects} />
        </CentralizedBox>
        <CentralizedBox style={{ border: "solid 1px", borderRadius: "5px" }}>
          <CollapsableBox title={"Детали"}>
            <DataInput
              gasPriceRubL={gasPriceRubL}
              onGasPriceRubLChange={onGasPriceRubLChange}
              totalWayKm={totalWayKm}
              onTotalWayKmChange={onTotalWayKmChange}
              gasConsumptionL100Km={gasConsumptionL100Km}
              onGasConsumptionChange={onGasConsumptionChange}
              totalConsumption={totalConsumption}
              //////////////////////////////
              daysInVillage={daysInVillage}
              setDaysInVillage={setDaysInVillage}
              workDayTimeHours={workDayTimeHours}
              setWorkDayTimeHours={setWorkDayTimeHours}
              workDaysPerMonth={workDaysPerMonth}
              setWorkDaysPerMonth={setWorkDaysPerMonth}
              //////////////////////////////
              applesStorePriceRubKb={applesStorePriceRubKb}
              onApplesStorePriceRubKbChange={onApplesStorePriceRubKbChange}
              canCollectApplesKgInHour={canCollectApplesKgInHour}
              onCanCollectApplesKgInHourChange={
                onCanCollectApplesKgInHourChange
              }
              driedApplesStorePriceRubKg={driedApplesStorePriceRubKg}
              setDriedApplesStorePriceRubKg={setDriedApplesStorePriceRubKg}
              canCutApplesKgInHour={canCutApplesKgInHour}
              setCanCutApplesKgInHour={setCanCutApplesKgInHour}
              conservedApplesStorePriceRubKg={conservedApplesStorePriceRubKg}
              setConservedApplesStorePriceRubKg={
                setConservedApplesStorePriceRubKg
              }
              canConserveApplesKgInHours={canConserveApplesKgInHours}
              setCanConserveApplesKgInHours={setCanConserveApplesKgInHours}
              fruitTeaStorePriceRubKg={fruitTeaStorePriceRubKg}
              setFruitTeaStorePriceRubKg={setFruitTeaStorePriceRubKg}
              teaStorePriceRubKg={teaStorePriceRubKg}
              setTeaStorePriceRubKg={setTeaStorePriceRubKg}
              canCollectFruitTeaKgInHour={canCollectFruitTeaKgInHour}
              setCanCollectFruitTeaKgInHour={setCanCollectFruitTeaKgInHour}
              ////////////////
              totalApplesOnTreesKg={totalApplesOnTreesKg}
              setTotalApplesOnTreesKg={setTotalApplesOnTreesKg}
              totalPlumsOnTreesKg={totalPlumsOnTreesKg}
              setTotalPlumsOnTreesKg={setTotalPlumsOnTreesKg}
              totalTeaGrassKg={totalTeaGrassKg}
              setTotalTeaGrassKg={setTotalTeaGrassKg}
              totalJarsLitres={totalJarsLitres}
              setTotalJarsLitres={setTotalJarsLitres}
              balconyCapacityKg={balconyCapacityKg}
              setBalconyCapacityKg={setBalconyCapacityKg}
            />
          </CollapsableBox>
        </CentralizedBox>
      </Box>
    </CentralizedBox>
  );
};
