import { Box, Typography } from "@mui/material";
import { calculateWorkDayProfit } from "./profit";
import {
  blue600,
  green600,
  grey600,
  orange600,
  purple600,
  yellow600,
} from "../ui/theme";
import { formatNumberWithSpaces } from "./formatters";

const Description = ({ price, velocity, workDayTimeHours }) => {
  return (
    <Box>
      <Typography variant="h6">
        Розничная цена:{" "}
        <span style={{ color: grey600 }}>
          {price}
          {" руб / кг"}
        </span>
      </Typography>
      <Typography variant="h6">
        Производительность:{" "}
        <span style={{ color: purple600 }}>
          {velocity}
          {" кг / час"}
        </span>
      </Typography>
      <Typography variant="h6">
        Стоимость {workDayTimeHours || 0}-часового рабочего дня:
      </Typography>
      <Typography variant="h6">
        <span style={{ color: grey600 }}>
          {" "}
          {price}
          {" руб / кг "}
        </span>
        {" * "}
        <span style={{ color: purple600 }}>
          {velocity}
          {" кг / час "}
        </span>
        {"* "}
        {workDayTimeHours}
        {" час "} ={" "}
        {formatNumberWithSpaces(price * velocity * workDayTimeHours)}
        {" руб"}
      </Typography>
    </Box>
  );
};

const DriedApplesDescription = ({
  rawPrice,
  driedPrice,
  velocity,
  workDayTimeHours,
}) => {
  return (
    <Box>
      <Typography variant="h6">
        Розничная цена сырых яблок:{" "}
        <span style={{ color: blue600 }}>
          {rawPrice}
          {" руб / кг"}
        </span>
      </Typography>
      <Typography variant="h6">
        Розничная цена сушеных яблок:{" "}
        <span style={{ color: grey600 }}>
          {driedPrice}
          {" руб / кг"}
        </span>
      </Typography>
      <Typography variant="h6">
        Скорость резки яблок на дольки:{" "}
        <span style={{ color: purple600 }}>
          {velocity}
          {" кг / час"}
        </span>
      </Typography>
      <Typography variant="h6">
        Стоимость {workDayTimeHours || 0}-часового рабочего дня:
      </Typography>
      <Typography variant="h6">
        {" ("}
        <span style={{ color: grey600 }}>{driedPrice}</span>
        {" - "}
        <span style={{ color: blue600 }}>{rawPrice}</span>
        {" ) руб / кг "}
        {" * "}
        <span style={{ color: purple600 }}>
          {velocity}
          {" кг / час "}
        </span>
        {"* "}
        {workDayTimeHours}
        {" час "} ={" "}
        {formatNumberWithSpaces(
          (driedPrice - rawPrice) * velocity * workDayTimeHours
        )}
        {" руб"}
      </Typography>
    </Box>
  );
};

const ConservedApplesDescription = ({
  rawPrice,
  conservedPrice,
  velocity,
  workDayTimeHours,
}) => {
  return (
    <Box>
      <Typography variant="h6">
        Розничная цена сырых яблок:{" "}
        <span style={{ color: blue600 }}>
          {rawPrice}
          {" руб / кг"}
        </span>
      </Typography>
      <Typography variant="h6">
        Розничная цена консервированных яблок:{" "}
        <span style={{ color: grey600 }}>
          {conservedPrice}
          {" руб / кг"}
        </span>
      </Typography>
      <Typography variant="h6">
        Производительность:{" "}
        <span style={{ color: purple600 }}>
          {velocity}
          {" кг / час"}
        </span>
      </Typography>
      <Typography variant="h6">
        Стоимость {workDayTimeHours || 0}-часового рабочего дня:
      </Typography>
      <Typography variant="h6">
        {" ("}
        <span style={{ color: grey600 }}>{conservedPrice}</span>
        {" - "}
        <span style={{ color: blue600 }}>{rawPrice}</span>
        {" ) руб / кг "}
        {" * "}
        <span style={{ color: purple600 }}>
          {velocity}
          {" кг / час "}
        </span>
        {"* "}
        {workDayTimeHours}
        {" час "} ={" "}
        {formatNumberWithSpaces(
          (conservedPrice - rawPrice) * velocity * workDayTimeHours
        )}
        {" руб"}
      </Typography>
    </Box>
  );
};

export const generateRawApplesCollectingProject = ({
  daysInVillage,
  workDayTimeHours,
  workDaysPerMonth,
  applesStorePriceRubKb,
  canCollectApplesKgInHour,
}) => {
  const profitPerHour = applesStorePriceRubKb * canCollectApplesKgInHour;
  const dayValue = calculateWorkDayProfit({
    workDayTimeHours,
    profitPerHour,
  })
    .toString()
    .replace(/(\d)(?=(\d{3})+$)/g, "$1 ");
  return {
    title: `Сбор яблок.`,
    subTitle: `Ценность рабочего дня: ${dayValue} руб`,
    description: () => (
      <Description
        price={applesStorePriceRubKb}
        velocity={canCollectApplesKgInHour}
        workDayTimeHours={workDayTimeHours}
      />
    ),
  };
};

export const generateDryingApplesProject = ({
  daysInVillage,
  workDayTimeHours,
  workDaysPerMonth,
  applesStorePriceRubKb,
  driedApplesStorePriceRubKg,
  canCutApplesKgInHour,
}) => {
  const profitPerHour =
    (driedApplesStorePriceRubKg - applesStorePriceRubKb) * canCutApplesKgInHour;
  const dayValue = calculateWorkDayProfit({
    workDayTimeHours,
    profitPerHour,
  })
    .toString()
    .replace(/(\d)(?=(\d{3})+$)/g, "$1 ");
  return {
    title: `Сушение яблок.`,
    subTitle: `Ценность рабочего дня: ${dayValue} руб`,
    description: () => (
      <DriedApplesDescription
        rawPrice={applesStorePriceRubKb}
        driedPrice={driedApplesStorePriceRubKg}
        velocity={canCutApplesKgInHour}
        workDayTimeHours={workDayTimeHours}
      />
    ),
  };
};

export const generateConservingApplesProject = ({
  daysInVillage,
  workDayTimeHours,
  workDaysPerMonth,
  applesStorePriceRubKb,
  conservedApplesStorePriceRubKg,
  canConserveApplesKgInHours,
}) => {
  const profitPerHour =
    (conservedApplesStorePriceRubKg - applesStorePriceRubKb) *
    canConserveApplesKgInHours;
  const dayValue = calculateWorkDayProfit({
    workDayTimeHours,
    profitPerHour,
  })
    .toString()
    .replace(/(\d)(?=(\d{3})+$)/g, "$1 ");
  return {
    title: `Консервация яблок со сливами.`,
    subTitle: `Ценность рабочего дня: ${dayValue} руб`,
    description: () => (
      <ConservedApplesDescription
        rawPrice={applesStorePriceRubKb}
        conservedPrice={conservedApplesStorePriceRubKg}
        velocity={canConserveApplesKgInHours}
        workDayTimeHours={workDayTimeHours}
      />
    ),
  };
};

export const generateCollectingTeaProject = ({
  daysInVillage,
  workDayTimeHours,
  workDaysPerMonth,
  teaStorePriceRubKg,
  canCollectFruitTeaKgInHour,
}) => {
  const profitPerHour = teaStorePriceRubKg * canCollectFruitTeaKgInHour;
  const dayValue = calculateWorkDayProfit({
    workDayTimeHours,
    profitPerHour,
  })
    .toString()
    .replace(/(\d)(?=(\d{3})+$)/g, "$1 ");
  return {
    title: `Сбор чая.`,
    subTitle: `Ценность рабочего дня: ${dayValue} руб`,
    description: () => (
      <Description
        price={teaStorePriceRubKg}
        velocity={canCollectFruitTeaKgInHour}
        workDayTimeHours={workDayTimeHours}
      />
    ),
  };
};

export const generateVillageProjects = ({
  daysInVillage,
  workDayTimeHours,
  workDaysPerMonth,
  ////////////////////////////////////////////
  applesStorePriceRubKb,
  canCollectApplesKgInHour,
  driedApplesStorePriceRubKg,
  canCutApplesKgInHour,
  conservedApplesStorePriceRubKg,
  canConserveApplesKgInHours,
  teaStorePriceRubKg,
  canCollectFruitTeaKgInHour,
}) => {
  return [
    generateRawApplesCollectingProject({
      daysInVillage,
      workDayTimeHours,
      workDaysPerMonth,
      applesStorePriceRubKb,
      canCollectApplesKgInHour,
    }),
    generateDryingApplesProject({
      daysInVillage,
      workDayTimeHours,
      workDaysPerMonth,
      applesStorePriceRubKb,
      driedApplesStorePriceRubKg,
      canCutApplesKgInHour,
    }),
    generateConservingApplesProject({
      daysInVillage,
      workDayTimeHours,
      workDaysPerMonth,
      applesStorePriceRubKb,
      conservedApplesStorePriceRubKg,
      canConserveApplesKgInHours,
    }),
    generateCollectingTeaProject({
      daysInVillage,
      workDayTimeHours,
      workDaysPerMonth,
      teaStorePriceRubKg,
      canCollectFruitTeaKgInHour,
    }),
  ];
};
