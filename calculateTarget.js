const arr = [{
  fixedProfit: 680000000,
  incomeProfit: 0,
  accProfit: 0,
}];

const initAssets = 680000000;
const years = [0, 0.25, 1, 1, 0.75];
const rate = 0.2;
const accIncome = 2500000;
const targetAssets = 1500000000;

for (let i = 1; i <= 4; i += 1) {
  let fixedProfit = 0;
  let incomeProfit = 0;
  let accProfit = 0;

  fixedProfit = (1 + years[i] * rate) * arr[i - 1].fixedProfit;
  incomeProfit = years[i] * (1 + rate / 2) + arr[i - 1].incomeProfit * (1 + rate);
  if (i === 1) {
    accProfit = 0;
  } else {
    accProfit = (accIncome * (i - 1)) * 12 * (1 + rate / 2) + arr[i - 1].accProfit * rate;
  }

  arr.push({ fixedProfit, incomeProfit, accProfit });
}

arr.shift();

const income = (targetAssets - arr[arr.length - 1].accProfit - arr[arr.length - 1].fixedProfit)
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
    return Math.round(item.total - initAssets).toLocaleString();
  }
  return Math.round(item.total - targetArray[index - 1].total).toLocaleString();
});

console.log(resultArray);
