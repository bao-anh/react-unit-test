import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import moment from 'moment';
import { fill } from 'lodash';
import { PlusOutlined } from '@ant-design/icons';
import * as api from '../../services/api';
import { AButton } from '../../components/atoms';
import { getTargetAssets } from '../../utils/investment';
import { AAddInvestment, AInvestmentInfo } from '../../components/molecules';
import StyledInvestments from './styled';

const Investments = () => {
  const history = useHistory();

  const [investments, setInvestments] = useState([]);
  const [newInvestment, setNewInvestment] = useState([]);

  const getInvestmentInfo = async () => {
    const response = await api.getAllInvestmentInfo();
    setInvestments(response.data);
  };

  useEffect(() => {
    getInvestmentInfo();
  }, []);

  const handleAddNewEmptyInvestment = () => {
    setNewInvestment([
      ...newInvestment,
      {
        id: uuidv4(),
        planName: '',
        investmentTarget: '',
        targetYears: '',
        interestRate: '',
        initSelfAssets: '',
        initParentAssets: '',
        initIncome: '',
        accumulateIncomePerYear: '',
      },
    ]);
  };

  const onCancelInvestment = (id) => {
    const newCurrentInvestments = newInvestment.filter((investment) => investment.id !== id);
    setNewInvestment(newCurrentInvestments);
  };

  const onAddInvestment = async (id) => {
    const newCurrentInvestment = newInvestment.find((investment) => investment.id === id);
    const {
      initSelfAssets,
      initParentAssets,
      initIncome,
      targetYears,
      investmentTarget,
      interestRate,
      accumulateIncomePerYear,
    } = newCurrentInvestment;

    const startDate = moment();
    const dueDate = moment().add(targetYears, 'years');

    const refinedInvestment = {
      ...newCurrentInvestment,
      interestRate: +interestRate,
      targetYears: +targetYears,
      initSelfAssets: +initSelfAssets,
      initParentAssets: +initParentAssets,
      initIncome: +initIncome,
      investmentTarget: +investmentTarget,
      currentSelfAssets: +initSelfAssets,
      currentParentAssets: +initParentAssets,
      currentIncome: +initIncome,
      accumulateIncomePerYear: +accumulateIncomePerYear,
      startDate,
      dueDate,
    };

    const initAssets = +initSelfAssets + +initParentAssets;
    const targetAssets = getTargetAssets(
      +initAssets,
      startDate,
      dueDate,
      +targetYears,
      +accumulateIncomePerYear,
      +investmentTarget,
      +interestRate,
    );

    const currentIncomes = fill(Array(+targetYears), +initIncome);
    const targetIncomes = currentIncomes.map((income, index) => income + accumulateIncomePerYear * (index + 1));

    onCancelInvestment(id);
    setInvestments([...investments, refinedInvestment]);
    await api.postInvestmentInfo({
      ...refinedInvestment,
      targetAssets,
      currentAssets: fill(Array(+targetYears), 0),
      targetIncomes,
      currentIncomes,
    });
  };

  const onDeleteInvestment = async (id) => {
    const newInvestments = investments.filter((investment) => investment.id !== id);
    setInvestments(newInvestments);
    await api.deleteInvestmentInfo(id);
  };

  const onEditInvestment = (id) => {
    const newInvestments = investments.map((investment) => {
      if (investment.id === id) {
        return {
          ...investment,
          isEdit: true,
        };
      }
      return investment;
    });
    setInvestments(newInvestments);
  };

  const onChangeNewInvestment = (id, field, value) => {
    const newCurrentInvestments = newInvestment.map((investment) => {
      if (investment.id === id) {
        return {
          ...investment,
          [field]: value,
        };
      }
      return investment;
    });
    setNewInvestment(newCurrentInvestments);
  };

  const onAccessInvestment = (id) => {
    history.push(`/investments/${id}`);
  };

  const renderInvestmentInfo = () => investments.map((investment) => (
    <AInvestmentInfo
      key={investment.id}
      investment={investment}
      onDeleteInvestment={onDeleteInvestment}
      onEditInvestment={onEditInvestment}
      onAccessInvestment={onAccessInvestment}
    />
  ));

  const renderAddInvestment = () => newInvestment.map((investment) => (
    <AAddInvestment
      key={investment.id}
      newInvestment={investment}
      onAddInvestment={() => onAddInvestment(investment.id)}
      onCancelInvestment={() => onCancelInvestment(investment.id)}
      onChangeNewInvestment={onChangeNewInvestment}
    />
  ));

  return (
    <StyledInvestments>
      {renderInvestmentInfo()}
      {renderAddInvestment()}
      <AButton
        className="investment__add-button"
        icon={<PlusOutlined />}
        shape="circle"
        size="large"
        onClick={handleAddNewEmptyInvestment}
      />
    </StyledInvestments>
  );
};

export default Investments;
