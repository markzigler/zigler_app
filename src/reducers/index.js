import { combineReducers } from 'redux';
import authReducer from './AuthReducer';
import appReducer from './app';
import marketListReducer from './marketList';
import orderHistoryListReducer from './orderHistory';
import myPortfolioListReducer from './myPortfolio';
import loaderReducer from './loader';
import shareDetailReducer from './shareDetail'
export default function getRootReducer() {
  return combineReducers({
    app:appReducer,
    loader:loaderReducer,
    auth: authReducer,
    marketList:marketListReducer,
    orderHistoryList:orderHistoryListReducer,
    myPortfolioList:myPortfolioListReducer,
    shareDetail:shareDetailReducer
  });
}
