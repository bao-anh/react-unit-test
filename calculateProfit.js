const TARGET_YEAR = 5;
const INTEREST_RATE = 0.2;

const INIT_INCOMES = 15000000;
const ACCUMULATE_INCOME_PER_YEAR = 5000000;
const INIT_AMOUNT = 200000000;

const PARENT_INCOMES = 5000000;
const DECREASE_INCOME_PER_YEAR = 1000000;
const PARENT_INIT_AMOUNT = 250000000;

const calculateProfit = (totalAmount = INIT_AMOUNT, income = INIT_INCOMES, year = TARGET_YEAR) => {
  if (year === 0) return totalAmount;
  const newIncome = income + ACCUMULATE_INCOME_PER_YEAR * (TARGET_YEAR - year);
  const newTotalAmount = (totalAmount + newIncome * 12) * (1 + INTEREST_RATE);
  return calculateProfit(newTotalAmount, newIncome, year - 1);
};

const calculateParentProfit = (totalAmount = PARENT_INIT_AMOUNT, income = PARENT_INCOMES, year = TARGET_YEAR) => {
  if (year === 0) return totalAmount;
  let newIncome = income - DECREASE_INCOME_PER_YEAR * (TARGET_YEAR - year);
  newIncome = newIncome > 0 ? newIncome : 0;
  const newTotalAmount = (totalAmount + newIncome * 12) * (1 + INTEREST_RATE);
  return calculateParentProfit(newTotalAmount, newIncome, year - 1);
};

const calculateTotalFamilyProfit = () => {
  const myProfit = Math.round(calculateProfit());
  const parentProfit = Math.round(calculateParentProfit());
  return (myProfit + parentProfit).toLocaleString();
};

console.log(calculateTotalFamilyProfit());
