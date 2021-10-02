import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/',
  timeout: 6000,
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Access-Control-Allow-Origin': '*',
  },
});

// INVESTMENT
// GET
export const getAllInvestmentInfo = () => api.get('http://localhost:5000/investmentInfo');
export const getInvestmentInfoById = (id) => api.get(`http://localhost:5000/investmentInfo/${id}`);
// POST
export const postInvestmentInfo = (params) => api.post('http://localhost:5000/investmentInfo', params);
// DELETE
export const deleteInvestmentInfo = (id) => api.delete(`http://localhost:5000/investmentInfo/${id}`);

// HISTORY
// GET
export const getHistoryByInvestmentId = (investmentId) => api
  .get(`http://localhost:5000/history?investmentId=${investmentId}`);
// POST
export const postHistory = (params) => api.post('http://localhost:5000/history', params);
