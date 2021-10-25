import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getTransactionDetailsAction } from '../Billing/ducks';
import TransactionComplete from './TransactionComplete';
export const mapStateToProps = ({ billing }) => ({
    transactionDetails: billing.transactionDetails,
});
export const mapDispatchToProps = (dispatch) => bindActionCreators({
    getTransactionDetailsAction: getTransactionDetailsAction,
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(TransactionComplete);