import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import moment from 'moment';
import * as api from '../../services/api';
import { COLORS } from '../../constants/styles';
import { AInvestmentInfo, AInvestmentStatistic } from '../../components/molecules';
import { AInvestmentHistory } from '../../components/organisms';
import StyledInvestmentDetail from './styled';
import { HISTORY_TYPE, HISTORY_OWNER } from '../../constants/format';

const InvestmentDetail = () => {
  const params = useParams();

  const [newHistory, setNewHistory] = useState(null);
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

  useEffect(() => {
    getInvestmentInfo();
  }, []);

  useEffect(() => {
    if (!investment) return;
    getAssetChartData();
    getIncomeChartData();
  }, [investment]);

  const onChangeNewHistory = (field, value) => {
    const newCurrentHistory = {
      ...newHistory,
      [field]: value,
    };
    setNewHistory(newCurrentHistory);
  };

  const onAddHistory = () => {
    if (newHistory !== null) return;
    setNewHistory({
      type: HISTORY_TYPE[0].value,
      owner: HISTORY_OWNER[0].value,
      amount: '',
      date: moment(),
      reason: '',
    });
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

  const onCancelHistory = () => {
    setNewHistory(null);
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
