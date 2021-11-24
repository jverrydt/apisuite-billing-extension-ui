import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import {
  getBillingSettingsAction,
  getCreditPacksAction,
  getSubscriptionPlansAction,
  getUserDetailsAction,
  getUserInvoiceNoteAction,
  getUserTransactionsAction,
  purchaseCreditsAction,
  setUserInvoiceNoteAction,
  startSubscriptionAction,
  cancelSubscriptionAction,
  clearSubscriptionInfoAction,
  editPaymentInfoAction,
} from './ducks'
import Billing from './Billing'
import { BillingStore } from './types'

export const mapStateToProps = ({ auth, billing }) => ({
  creditPacks: billing.creditPacks,
  subscriptions: billing.subscriptions,
  invoiceNote: billing.invoiceNote,
  allUserDetails: billing.allUserDetails,
  transactions: billing.transactions as BillingStore['transactionDetails'],
  dialogInfo: billing.subscriptionsDialogInfo,
  hasRetrievedAllCreditPacks: billing.hasRetrievedAllCreditPacks,
  hasRetrievedAllSubscriptions: billing.hasRetrievedAllSubscriptions,
  settings: billing.settings,
  successfullySubscribedToPlan: billing.successfullySubscribedToPlan,
  user: auth.user,
})

export const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      getBillingSettingsAction,
      getCreditPacksAction,
      getSubscriptionPlansAction,
      getUserDetailsAction,
      getUserInvoiceNoteAction,
      getUserTransactionsAction,
      purchaseCreditsAction,
      setUserInvoiceNoteAction,
      startSubscriptionAction,
      cancelSubscriptionAction,
      clearSubscriptionInfoAction,
      editPaymentInfoAction,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(Billing)
