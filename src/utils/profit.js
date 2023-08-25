export const calculateWorkDayProfit = ({ workDayTimeHours, profitPerHour }) =>
  workDayTimeHours * profitPerHour;
export const calculateMonthlySalary = ({
  workDayTimeHours,
  profitPerHour,
  workDaysPerMonth,
}) => workDayTimeHours * profitPerHour * workDaysPerMonth;
