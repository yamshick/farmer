import { Box } from "@mui/material";
import { InputParam } from "ui/input-param";
import { sizeOptions } from "../ui/input-param";

export const VillageGoodsInput = ({
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
  ////////////
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
      <Box
        display="flex"
        justifyContent={"center"}
        alignItems="center"
        gap="5px"
      >
        <InputParam
          type="number"
          leftCaption="Цена яблок в магазине"
          rightCaption="руб/кг"
          value={applesStorePriceRubKb}
          onChange={onApplesStorePriceRubKbChange}
          size={sizeOptions.SMALL}
        />
        <InputParam
          type="number"
          leftCaption="Скорость сбора яблок"
          rightCaption="кг/час "
          value={canCollectApplesKgInHour}
          onChange={onCanCollectApplesKgInHourChange}
          size={sizeOptions.SMALL}
        />
      </Box>
      <Box
        display="flex"
        justifyContent={"center"}
        alignItems="center"
        gap="5px"
      >
        <InputParam
          type="number"
          leftCaption="Цена сушеных яблок в магазине"
          rightCaption="руб/кг "
          value={driedApplesStorePriceRubKg}
          onChange={setDriedApplesStorePriceRubKg}
          size={sizeOptions.SMALL}
        />
        <InputParam
          type="number"
          leftCaption="Скорость нарезки яблок"
          rightCaption="кг/час "
          value={canCutApplesKgInHour}
          onChange={setCanCutApplesKgInHour}
          size={sizeOptions.SMALL}
        />
      </Box>
      <Box
        display="flex"
        justifyContent={"center"}
        alignItems="center"
        gap="5px"
      >
        <InputParam
          type="number"
          leftCaption="Цена консервированных груш в магазине"
          rightCaption="руб/кг "
          value={conservedApplesStorePriceRubKg}
          onChange={setConservedApplesStorePriceRubKg}
          size={sizeOptions.SMALL}
        />
        <InputParam
          type="number"
          leftCaption="Скорость консервации яблок"
          rightCaption="кг/час "
          value={canConserveApplesKgInHours}
          onChange={setCanConserveApplesKgInHours}
          size={sizeOptions.SMALL}
        />
      </Box>
      <Box
        display="flex"
        justifyContent={"center"}
        alignItems="center"
        gap="5px"
      >
        <InputParam
          type="number"
          leftCaption="Цена чая в магазине"
          rightCaption="руб/кг "
          value={teaStorePriceRubKg}
          onChange={setTeaStorePriceRubKg}
          size={sizeOptions.SMALL}
        />
        <InputParam
          type="number"
          leftCaption="Скорость сбора ягодного чая"
          rightCaption="кг/час "
          value={canCollectFruitTeaKgInHour}
          onChange={setCanCollectFruitTeaKgInHour}
          size={sizeOptions.SMALL}
        />
      </Box>
      <Box
        display="flex"
        justifyContent={"center"}
        alignItems="center"
        gap="5px"
      >
        <InputParam
          type="number"
          leftCaption="Всего яблок на деревьях"
          rightCaption="кг "
          value={totalApplesOnTreesKg}
          onChange={setTotalApplesOnTreesKg}
          size={sizeOptions.SMALL}
        />
        <InputParam
          type="number"
          leftCaption="Всего слив на деревьях"
          rightCaption="кг "
          value={totalPlumsOnTreesKg}
          onChange={setTotalPlumsOnTreesKg}
          size={sizeOptions.SMALL}
        />
        <InputParam
          type="number"
          leftCaption="Всего чайных листьев на кустах"
          rightCaption="кг"
          value={totalTeaGrassKg}
          onChange={setTotalTeaGrassKg}
          size={sizeOptions.SMALL}
        />
      </Box>
      <Box
        display="flex"
        justifyContent={"center"}
        alignItems="center"
        gap="5px"
      >
        <InputParam
          type="number"
          leftCaption="Суммарный литраж имеющихся банок"
          rightCaption="л "
          value={totalJarsLitres}
          onChange={setTotalJarsLitres}
          size={sizeOptions.SMALL}
        />
        <InputParam
          type="number"
          leftCaption="Вместимость балкона"
          rightCaption="кг"
          value={balconyCapacityKg}
          onChange={setBalconyCapacityKg}
          size={sizeOptions.SMALL}
        />
      </Box>
    </Box>
  );
};
