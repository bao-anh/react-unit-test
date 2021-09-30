import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { PlusOutlined } from '@ant-design/icons';
import { AButton } from '../../components/atoms';
import { AAddInvestment, AInvestmentInfo } from '../../components/molecules';
import StyledInvestments from './styled';

const Investments = () => {
  const [investments, setInvestments] = useState([]);
  const [newInvestment, setNewInvestment] = useState([]);

  const handleAddNewEmptyInvestment = () => {
    setNewInvestment([
      ...newInvestment,
      {
        id: uuidv4(),
        planName: '',
        investmentTarget: '',
        yearTarget: '',
        interestRate: '',
        currentSelfAssets: '',
        currentParentAssets: '',
        currentIncome: '',
        accumulateIncomePerYear: '',
      },
    ]);
  };

  const onCancelInvestment = (id) => {
    const newCurrentInvestments = newInvestment.filter((investment) => investment.id !== id);
    setNewInvestment(newCurrentInvestments);
  };

  const onAddInvestment = (id) => {
    const newCurrentInvestment = newInvestment.find((investment) => investment.id === id);
    setInvestments([...investments, newCurrentInvestment]);
    onCancelInvestment(id);
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

  const renderInvestmentInfo = () => investments.map((investment) => (
    <AInvestmentInfo
      key={investment.id}
      investment={investment}
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
