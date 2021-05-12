import React, { useState } from 'react'
import MoreVertIcon from '@material-ui/icons/MoreVert'

import {
  Button,
  IconButton,
  Menu,
  MenuItem,
  useTranslation,
} from '@apisuite/fe-base'
import { convertDate } from '../../util/convertDate'
import { CustomizableDialog } from '../CustomizableDialog/CustomizableDialog'
import { SubscriptionsTableProps } from './types'
import useStyles from './styles'

const SubscriptionsTable: React.FC<SubscriptionsTableProps> = ({
  arrayOfSubs,
  onCancelSubscription,
}) => {
  const classes = useStyles()

  const trans = useTranslation()

  const [cancelSubDialogOpen, setCancelSubDialogOpen] = useState(false)

  const t = (str: string) => {
    return trans.t(`extensions.billing.${str}`)
  }

  const [anchorElement, setAnchorElement] = React.useState(null)
  const open = Boolean(anchorElement)

  const handleMenuClick = (event) => {
    setAnchorElement(event.currentTarget)
  }

  const handleMenuClose = (idx: number) => () => {
    setAnchorElement(null)

    if (idx === 2) {
      setCancelSubDialogOpen(true)
    }
  }

  const menuOptions = [
    'Subscription options',
    'Edit payment information',
    'Cancel subscription plan',
  ]

  const handleConfirmCancelSubscription = () => {
    setCancelSubDialogOpen(false)
    onCancelSubscription()
  }

  return (
    <>
      <div className={classes.subsTableWrapper}>
        <table className={classes.subsTable}>
          <tr className={classes.subsTableHeader}>
            <th>{t('subscriptionsTable.title')}</th>
            <th>{t('subscriptionsTable.subtitle')}</th>
            <th />
          </tr>

          {arrayOfSubs.map((sub, index) => {
            return (
              <tr
                className={classes.subsTableEntry}
                key={`subTableEntry${index}`}
              >
                <td>{sub.subName}</td>
                <td>
                  {convertDate(trans.i18n.language, sub.subNextBillingDate)}
                </td>
                <td>
                  <IconButton onClick={handleMenuClick}>
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchorElement}
                    keepMounted
                    open={open}
                    onClose={handleMenuClose(-1)}
                  >
                    {menuOptions.map((menuOption, index) => (
                      <MenuItem
                        // We want to disable the first option (because we're using it as a title),
                        // and the second option as well (because we have yet to implement it).
                        disabled={!index || index === 1}
                        key={menuOption}
                        onClick={handleMenuClose(index)}
                      >
                        {menuOption}
                      </MenuItem>
                    ))}
                  </Menu>
                </td>
              </tr>
            )
          })}
        </table>
      </div>

      <CustomizableDialog
        icon="warning"
        open={cancelSubDialogOpen}
        onClose={() => setCancelSubDialogOpen(false)}
        title={t('subscriptionsTable.cancel.title')}
        text={t('subscriptionsTable.cancel.text')}
        subText={t('subscriptionsTable.cancel.subText')}
        actions={[
          <Button
            variant="outlined"
            key="cancel-sub-cancel"
            onClick={() => setCancelSubDialogOpen(false)}
          >
            {t('subscriptionsTable.cancel.cta')}
          </Button>,
          <Button
            className={classes.confirmCancelCTA}
            key="cancel-sub-confirm"
            onClick={handleConfirmCancelSubscription}
          >
            {t('subscriptionsTable.cancel.confirmCTA')}
          </Button>,
        ]}
      />
    </>
  )
}

export default SubscriptionsTable