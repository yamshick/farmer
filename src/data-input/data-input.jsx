import { Box } from "@mui/material";
import { CollapsableBox } from "../ui/collapsable-box";
import { GasInput } from "./gas";
import { VillageGoodsInput } from "./village-goods";
import { WorkDayInput } from "./work-day-input";

export const DataInput = ({
  gasPriceRubL,
  onGasPriceRubLChange,
  totalWayKm,
  onTotalWayKmChange,
  gasConsumptionL100Km,
  onGasConsumptionChange,
  totalConsumption,
  ////////////////////////////////////
  daysInVillage,
  setDaysInVillage,
  workDayTimeHours,
  setWorkDayTimeHours,
  workDaysPerMonth,
  setWorkDaysPerMonth,
  ////////////////////////////////////
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
  //////////////
  totalApplesOnTreesKg,
  setTotalApplesOnTreesKg,
  totalPlumsOnTreesKg,
  setTotalPlumsOnTreesKg,
  totalTeaGrassKg,
  setTotalTeaGrassKg,
  totalJarsLitres,
  setTotalJarsLitres,
  balconyCapacityKg,
  setBalconyCapacityKg,
}) => {
  return (
    <Box>
      {/* <CollapsableBox title={"Параметры рабочего дня"}>
        <WorkDayInput
          daysInVillage={daysInVillage}
          setDaysInVillage={setDaysInVillage}
          workDayTimeHours={workDayTimeHours}
          setWorkDayTimeHours={setWorkDayTimeHours}
          workDaysPerMonth={workDaysPerMonth}
          setWorkDaysPerMonth={setWorkDaysPerMonth}
        />
      </CollapsableBox> */}
      <CollapsableBox title={"Параметры продуктов деревни"}>
        <VillageGoodsInput
          applesStorePriceRubKb={applesStorePriceRubKb}
          onApplesStorePriceRubKbChange={onApplesStorePriceRubKbChange}
          canCollectApplesKgInHour={canCollectApplesKgInHour}
          onCanCollectApplesKgInHourChange={onCanCollectApplesKgInHourChange}
          driedApplesStorePriceRubKg={driedApplesStorePriceRubKg}
          setDriedApplesStorePriceRubKg={setDriedApplesStorePriceRubKg}
          canCutApplesKgInHour={canCutApplesKgInHour}
          setCanCutApplesKgInHour={setCanCutApplesKgInHour}
          conservedApplesStorePriceRubKg={conservedApplesStorePriceRubKg}
          setConservedApplesStorePriceRubKg={setConservedApplesStorePriceRubKg}
          canConserveApplesKgInHours={canConserveApplesKgInHours}
          setCanConserveApplesKgInHours={setCanConserveApplesKgInHours}
          fruitTeaStorePriceRubKg={fruitTeaStorePriceRubKg}
          setFruitTeaStorePriceRubKg={setFruitTeaStorePriceRubKg}
          teaStorePriceRubKg={teaStorePriceRubKg}
          setTeaStorePriceRubKg={setTeaStorePriceRubKg}
          canCollectFruitTeaKgInHour={canCollectFruitTeaKgInHour}
          setCanCollectFruitTeaKgInHour={setCanCollectFruitTeaKgInHour}
          ////////////
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
      <CollapsableBox title={"Параметры расхода бензина"}>
        <GasInput
          gasPriceRubL={gasPriceRubL}
          onGasPriceRubLChange={onGasPriceRubLChange}
          totalWayKm={totalWayKm}
          onTotalWayKmChange={onTotalWayKmChange}
          gasConsumptionL100Km={gasConsumptionL100Km}
          onGasConsumptionChange={onGasConsumptionChange}
          totalConsumption={totalConsumption}
        />
      </CollapsableBox>
    </Box>
  );
};
