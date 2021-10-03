import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
import * as api from '../../services/api';
import { COLORS } from '../../constants/styles';
import { AInvestmentInfo, AInvestmentStatistic } from '../../components/molecules';
import { AInvestmentHistory } from '../../components/organisms';
import StyledInvestmentDetail from './styled';
import { HISTORY_TYPE, HISTORY_OWNER, DATE_FORMAT } from '../../constants/format';

const InvestmentDetail = () => {
  const params = useParams();

  const [newHistory, setNewHistory] = useState(null);
  const [histories, setHistories] = useState(null);
  const [investment, setInvestment] = useState(null);
  const [assetData, setAssetData] = useState(null);
  const [incomeData, setIncomeData] = useState(null);

  const getInvestmentInfo = async () => {
    const response = await api.getInvestmentInfoById(params.id);
    setInvestment(response.data);
    return response.data;
  };

  const getAssetChartData = () => {
    const {
      startDate,
      targetYears,
      currentAssets,
      targetAssets,
    } = investment;

    const startYear = moment(startDate).format('YYYY');
    const labels = [];
    for (let i = 0; i <= targetYears; i += 1) {
      labels.push(+startYear + i);
    }
    const datasets = [
      {
        label: 'Reality',
        data: currentAssets,
        backgroundColor: COLORS.BLUE500,
      },
      {
        label: 'Target',
        data: targetAssets,
        backgroundColor: COLORS.RED500,
      },
    ];
    setAssetData({
      labels,
      datasets,
    });
  };

  const getIncomeChartData = () => {
    const { targetIncomes, currentIncomes, targetYears } = investment;

    const labels = [];
    for (let i = 1; i <= targetYears; i += 1) {
      labels.push(`Year ${i}`);
    }

    const datasets = [
      {
        label: 'Reality',
        data: currentIncomes,
        backgroundColor: COLORS.BLUE500,
      },
      {
        label: 'Target',
        data: targetIncomes,
        backgroundColor: COLORS.RED500,
      },
    ];
    setIncomeData({
      labels,
      datasets,
    });
  };

  const getHistoryData = async (investmentId) => {
    const response = await api.getHistoryByInvestmentId(investmentId);
    setHistories(response.data);
  };

  useEffect(() => {
    getInvestmentInfo();
  }, []);

  useEffect(() => {
    if (!investment) return;
    getAssetChartData();
    getIncomeChartData();
    getHistoryData(investment.id);
  }, [investment]);

  const onChangeNewHistory = (field, value) => {
    const newCurrentHistory = {
      ...newHistory,
      [field]: value,
    };
    setNewHistory(newCurrentHistory);
  };

  const onCancelHistory = () => {
    setNewHistory(null);
  };

  const handleCalculateTotalAssets = (offsetAmount) => {
    const { date } = newHistory;
    const { startDate, currentAssets } = investment;

    const getYearOffset = moment(date).format('YYYY') - moment(startDate).format('YYYY');
    const newCurrentAssets = [...currentAssets];
    newCurrentAssets[getYearOffset] += offsetAmount;

    return newCurrentAssets;
  };

  const handleCalculateIndividualAssets = (offsetAmount) => {
    const { owner } = newHistory;
    const { currentSelfAssets, currentParentAssets } = investment;

    let newCurrentSelfAssets = currentSelfAssets;
    let newCurrentParentAssets = currentParentAssets;
    const isOwnerSelf = owner === HISTORY_OWNER[0].value;
    if (isOwnerSelf) {
      newCurrentSelfAssets += offsetAmount;
    } else {
      newCurrentParentAssets += offsetAmount;
    }

    return { newCurrentSelfAssets, newCurrentParentAssets };
  };

  const handleUpdateInvestmentInfo = async () => {
    const { type, amount } = newHistory;
    const { id: investmentId } = investment;
    const isTypeUp = type === HISTORY_TYPE[0].value;
    const offsetAmount = isTypeUp ? parseInt(amount, 10) : -parseInt(amount, 10);

    const newCurrentAssets = handleCalculateTotalAssets(offsetAmount);
    const { newCurrentSelfAssets, newCurrentParentAssets } = handleCalculateIndividualAssets(offsetAmount);

    await api.updateInvestmentInfoById(investmentId, {
      ...investment,
      currentAssets: newCurrentAssets,
      currentSelfAssets: newCurrentSelfAssets,
      currentParentAssets: newCurrentParentAssets,
    });
  };

  const onAddHistory = async () => {
    const { date, owner } = newHistory;
    const { id: investmentId } = investment;

    const newCurrentHistory = {
      ...newHistory,
      owner,
      date: date.format(DATE_FORMAT),
      id: uuidv4(),
      investmentId,
    };

    await handleUpdateInvestmentInfo();
    await api.postHistory(newCurrentHistory);
    await getInvestmentInfo();
    onCancelHistory();
  };

  const handleAddNewEmptyHistory = () => {
    if (newHistory !== null) return;
    setNewHistory({
      type: HISTORY_TYPE[0].value,
      owner: HISTORY_OWNER[0].value,
      amount: '',
      date: moment(),
      reason: '',
    });
  };

  if (!investment) return null;
  return (
    <StyledInvestmentDetail>
      <div className="investment-detail">
        <div className="investment-detail__left-info">
          <AInvestmentInfo
            investment={investment}
            onDeleteInvestment={() => {}}
            onEditInvestment={() => {}}
            onAccessInvestment={() => {}}
          />
          <AInvestmentHistory
            histories={histories}
            newHistory={newHistory}
            onAddHistory={onAddHistory}
            onChangeNewHistory={onChangeNewHistory}
            onCancelHistory={onCancelHistory}
            handleAddNewEmptyHistory={handleAddNewEmptyHistory}
          />
        </div>
        <div className="investment-detail__right-info">
          <AInvestmentStatistic
            assetData={assetData}
            incomeData={incomeData}
          />
        </div>
      </div>
    </StyledInvestmentDetail>
  );
};

export default InvestmentDetail;
