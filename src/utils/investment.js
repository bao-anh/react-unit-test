import moment from 'moment';

export const getTargetAssets = (
  initAssets,
  startDate,
  dueDate,
  targetYears,
  accumulateIncomePerYear,
  investmentTarget,
  interestRate,
) => {
  const arr = [{
    fixedProfit: initAssets,
    incomeProfit: 0,
    accProfit: 0,
  }];

  const years = [0];
  const accIncome = accumulateIncomePerYear / 2;

  for (let i = 0; i <= targetYears; i += 1) {
    if (i === 0) {
      const monthLeft = 12 - +moment(startDate).month();
      years.push(monthLeft / 12);
    } else if (i === targetYears) {
      const monthHave = +moment(dueDate).month();
      years.push(monthHave / 12);
    } else {
      years.push(1);
    }
  }

  for (let i = 1; i <= (targetYears + 1); i += 1) {
    let fixedProfit = 0;
    let incomeProfit = 0;
    let accProfit = 0;

    fixedProfit = (1 + years[i] * interestRate) * arr[i - 1].fixedProfit;
    incomeProfit = years[i] * (1 + interestRate / 2) + arr[i - 1].incomeProfit * (1 + interestRate);
    if (i === 1) {
      accProfit = 0;
    } else {
      accProfit = (accIncome * (i - 1)) * 12 * (1 + interestRate / 2) + arr[i - 1].accProfit * interestRate;
    }

    arr.push({ fixedProfit, incomeProfit, accProfit });
  }

  arr.shift();

  const income = (investmentTarget - arr[arr.length - 1].accProfit - arr[arr.length - 1].fixedProfit)
    / arr[arr.length - 1].incomeProfit;

  const targetArray = arr.map((item) => {
    const incomeProfit = item.incomeProfit * income;
    return {
      ...item,
      incomeProfit,
      total: item.fixedProfit + item.accProfit + incomeProfit,
    };
  });

  const resultArray = targetArray.map((item, index) => {
    if (index === 0) {
      return Math.round(item.total - initAssets);
    }
    return Math.round(item.total - targetArray[index - 1].total);
  });

  return resultArray;
};

export const foo = {};
