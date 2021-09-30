import moment from 'moment';

export const toMoney = (money) => `${parseInt(money, 10).toLocaleString()} đ`;

export const getRemainDay = (startDate, dueDate) => `${moment(dueDate).diff(moment(startDate), 'days')} days left`;

export const getPercentCompleteInvestmentPlan = (
  investmentTarget,
  initSelfAssets,
  initParentAssets,
  currentSelfAssets,
  currentParentAssets,
) => {
  const initAssets = initSelfAssets + initParentAssets;
  const currentAssets = currentSelfAssets + currentParentAssets;
  const percent = ((currentAssets - initAssets) / (investmentTarget - initAssets)) * 100;
  if (percent < 0) return 0;
  return percent.toFixed(1);
};
