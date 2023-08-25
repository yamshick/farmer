import { InputParam } from "ui/input-param";
import { sizeOptions } from "../ui/input-param";

export const WorkDayInput = ({
  daysInVillage,
  setDaysInVillage,
  workDayTimeHours,
  setWorkDayTimeHours,
  workDaysPerMonth,
  setWorkDaysPerMonth,
}) => {
  return (
    <div>
      <InputParam
        type="number"
        leftCaption="Время нахождения в деревне"
        rightCaption="дней"
        value={daysInVillage}
        onChange={setDaysInVillage}
        size={sizeOptions.SMALL}
      />
      <InputParam
        type="number"
        leftCaption="Часов работы в день"
        rightCaption="час"
        value={workDayTimeHours}
        onChange={setWorkDayTimeHours}
        size={sizeOptions.SMALL}
      />
      {/* <InputParam
        type="number"
        leftCaption="Рабочих дней в месяце"
        rightCaption="дней"
        value={workDaysPerMonth}
        onChange={setWorkDaysPerMonth}
      /> */}
    </div>
  );
};
