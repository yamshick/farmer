import { Box } from "@mui/material";
import { InputParam } from "ui/input-param";
import { sizeOptions } from "../ui/input-param";
import { Typography } from "@mui/material";

export const GasInput = ({
  gasPriceRubL,
  onGasPriceRubLChange,
  totalWayKm,
  onTotalWayKmChange,
  gasConsumptionL100Km,
  onGasConsumptionChange,
  totalConsumption,
}) => {
  return (
    <Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        gap="10px"
      >
        <InputParam
          type="number"
          leftCaption="Цена бензина"
          rightCaption="руб"
          value={gasPriceRubL}
          onChange={onGasPriceRubLChange}
          size={sizeOptions.SMALL}
        />
        <InputParam
          type="number"
          leftCaption="Расход бензина VW POLO"
          rightCaption="л / 100 км"
          value={gasConsumptionL100Km}
          onChange={onGasConsumptionChange}
          size={sizeOptions.SMALL}
        />
        <InputParam
          type="number"
          leftCaption="Километраж поездки"
          rightCaption="км"
          value={totalWayKm}
          onChange={onTotalWayKmChange}
          size={sizeOptions.SMALL}
        />
      </Box>
      <Typography variant="h5">
        Общий расход: {totalConsumption}
        {" руб"}
      </Typography>
    </Box>
  );
};
