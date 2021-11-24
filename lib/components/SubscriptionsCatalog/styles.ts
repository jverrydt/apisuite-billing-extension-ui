import { makeStyles } from '@apisuite/fe-base'

export default makeStyles((theme) => ({
  notSelectedSubscriptionContainer: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: theme.shape.borderRadius,
    cursor: 'pointer',
    display: 'flex',
    height: 70,
    margin: '0px 12px 12px 0px',
    position: 'relative',
    maxWidth: 280,
    padding: 15,
    width: '100%',
  },

  notSelectedSubscriptionIcon: {
    color: theme.palette.text.secondary,
    fontSize: 24,
    marginRight: 12,
  },

  selectedSubscriptionContainer: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.action.focus}`,
    borderRadius: theme.shape.borderRadius,
    cursor: 'pointer',
    display: 'flex',
    height: 70,
    margin: '0px 12px 12px 0px',
    maxWidth: 280,
    padding: 15,
    width: '100%',
    position: 'relative',
  },

  selectedSubscriptionIcon: {
    color: theme.palette.action.focus,
    fontSize: 24,
    marginRight: 12,
  },

  subscriptionDetailsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    width: 220,
  },

  subscriptionCatalogEntriesContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },

  disabledSubscriptionContainer: {
    background: theme.palette.action.disabledBackground,
    opacity: theme.palette.action.disabledOpacity,
    borderRadius: 4,
    bottom: 0,
    cursor: 'default',
    left: 0,
    position: 'absolute',
    right: 0,
    top: 0,
  },

  disabledSubscriptionIcon: {
    color: theme.palette.action.disabled,
    fontSize: 24,
    marginRight: 12,
  },
}))
