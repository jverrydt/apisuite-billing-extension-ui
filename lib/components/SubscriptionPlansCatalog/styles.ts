import { makeStyles } from '@apisuite/fe-base'

export default makeStyles((theme) => ({
  enabledLeftDetailsContainer: {
    '& > :first-child': {
      color: theme.palette.text.hint,
      fontSize: 14,
      fontWeight: 400,
      marginBottom: -6,
    },

    '& > :last-child': {
      color: theme.palette.text.primary,
      fontSize: 16,
      fontWeight: 500,
    },
  },

  disabledLeftDetailsContainer: {
    '& > :first-child': {
      color: theme.palette.action.disabled,
      fontSize: 14,
      fontWeight: 400,
      marginBottom: -6,
    },

    '& > :last-child': {
      color: theme.palette.action.disabled,
      fontSize: 16,
      fontWeight: 500,
    },
  },

  noActiveSubscriptionText: {
    color: theme.palette.text.hint,
    fontSize: 16,
    fontWeight: 400,
    marginBottom: 40,
  },

  notSelectedSubscriptionPlanContainer: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: theme.palette.dimensions.borderRadius,
    cursor: 'pointer',
    display: 'flex',
    height: 70,
    margin: '0px 12px 12px 0px',
    position: 'relative',
    maxWidth: 280,
    padding: 15,
    width: '100%',
  },

  notSelectedSubscriptionPlanIcon: {
    color: theme.palette.text.primary,
    fontSize: 24,
    marginRight: 12,
  },

  enabledRightDetailsContainer: {
    '& > :first-child': {
      color: theme.palette.text.primary,
      fontSize: 16,
      fontWeight: 500,
      marginBottom: -6,
    },

    '& > :last-child': {
      color: theme.palette.text.hint,
      fontSize: 14,
      fontWeight: 400,
    },
  },

  disabledRightDetailsContainer: {
    '& > :first-child': {
      color: theme.palette.action.disabled,
      fontSize: 16,
      fontWeight: 500,
      marginBottom: -6,
    },

    '& > :last-child': {
      color: theme.palette.action.disabled,
      fontSize: 14,
      fontWeight: 400,
    },
  },

  selectedSubscriptionPlanContainer: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.action.focus}`,
    borderRadius: theme.palette.dimensions.borderRadius,
    cursor: 'pointer',
    display: 'flex',
    height: 70,
    margin: '0px 12px 12px 0px',
    maxWidth: 280,
    padding: 15,
    width: '100%',
    position: 'relative',
  },

  selectedSubscriptionPlanIcon: {
    color: theme.palette.action.focus,
    fontSize: 24,
    marginRight: 12,
  },

  subscriptionPlanDetailsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: 220,
    width: '100%',
  },

  subscriptionPlansCatalogEntriesContainer: {
    display: 'flex',
    marginBottom: 40,
  },

  subscriptionSelectionTitle: {
    color: theme.palette.text.primary,
    fontSize: 18,
    fontWeight: 500,
    marginBottom: 24,
  },

  disabledSubscriptionPlanContainer: {
    backgroundColor: theme.palette.action.disabled,
    borderRadius: 4,
    bottom: 0,
    cursor: 'default',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },

  disabledSubscriptionPlanIcon: {
    color: theme.palette.action.disabled,
    fontSize: 24,
    marginRight: 12,
  },
}))