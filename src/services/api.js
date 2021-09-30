import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/',
  timeout: 6000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
  },
});

export const getAllInvestmentInfo = () => api.get('http://localhost:5000/investmentInfo');

export const postInvestmentInfo = (params) => api.post('http://localhost:5000/investmentInfo', params);

export const deleteInvestmentInfo = (id) => api.delete(`http://localhost:5000/investmentInfo/${id}`);
