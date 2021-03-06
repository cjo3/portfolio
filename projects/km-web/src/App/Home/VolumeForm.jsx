import clsx from 'clsx'
import { Form } from 'formik'
import PropTypes from 'prop-types'
import React from 'react'

import { StripeBanner } from '@cjo3/shared/react/components/StripeBanner'
import { Button, Grid, Paper, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import CachedIcon from '@material-ui/icons/Cached'
import CloseIcon from '@material-ui/icons/Close'
import HttpsIcon from '@material-ui/icons/Https'
import PaymentIcon from '@material-ui/icons/Payment'
import RestorePageIcon from '@material-ui/icons/RestorePage'

import { VolumeFormKEOptions } from './VolumeFormKEOptions'
import { VolumeFormPricing } from './VolumeFormPricing'
import { VolumeFormStripe } from './VolumeFormStripe'
import { VolumeFormTerms } from './VolumeFormTerms'
import { VolumeFormTrialReview } from './VolumeFormTrialReview'

const useStyles = makeStyles(theme => ({
  form: {
    ...theme.custom.setGrid(12, 'auto', theme.custom.setSpace('sm')),
    width: '100%',
    marginTop: theme.custom.setSpace('sm'),
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.custom.setSpace()
    }
  },
  gridPosition1: {
    gridColumn: '1 / 9',
    gridRow: 1,
    [theme.breakpoints.down('sm')]: {
      gridColumn: '1 / 13',
      gridRow: 1
    }
  },
  gridPosition2: {
    gridColumn: '1 / 9',
    gridRow: 2,
    [theme.breakpoints.down('sm')]: {
      gridColumn: '1 / 13',
      gridRow: 2
    }
  },
  gridPosition3: {
    gridColumn: '1 / 9',
    gridRow: 3,
    [theme.breakpoints.down('sm')]: {
      gridColumn: '1 / 13',
      gridRow: 3
    }
  },
  gridPosition4: {
    gridColumn: '9 / 13',
    gridRow: '1 / 6',
    [theme.breakpoints.down('sm')]: {
      gridColumn: '1 / 13',
      gridRow: 4
    }
  },
  gridPosition5: {
    gridColumn: '1 / 9',
    gridRow: 4,
    [theme.breakpoints.down('sm')]: {
      gridColumn: '1 / 13',
      gridRow: 5
    }
  },
  gridPosition6: {
    gridColumn: '1 / 9',
    gridRow: 5,
    [theme.breakpoints.down('sm')]: {
      gridColumn: '1 / 13',
      gridRow: 6
    }
  },
  formSection: {
    padding: theme.custom.setSpace('sm'),
    overflow: 'hidden',
    [theme.breakpoints.down('xs')]: {
      padding: theme.custom.setSpace()
    }
  },
  pricingSection: {
    backgroundColor: theme.palette.grey[700],
    overflow: 'unset'
  },
  pricingSticky: {
    width: '100%',
    position: 'sticky',
    top: 0,
    overflow: 'hidden'
  },
  formSectionTitle: {
    ...theme.typography.bold,
    textTransform: 'uppercase',
    fontSize: theme.typography.fontSize * 1.25,
    color: theme.palette.primary[200],
    marginBottom: theme.custom.setSpace()
  },
  noBottomMargin: {
    marginBottom: 0
  },
  pricingTitle: {
    color: theme.palette.secondary[50]
  },
  formActionButton: {
    ...theme.custom.buttons.formButton,
    ...theme.custom.setFlex()
  },
  formActionButtonSubmit: {
    'backgroundColor': theme.palette.pass[500],
    '&:hover': {
      backgroundColor: theme.palette.pass[400]
    }
  },
  formActionButtonReset: {
    'backgroundColor': theme.palette.fail[500],
    '&:hover': {
      backgroundColor: theme.palette.fail[400]
    }
  },
  formActionButtonClose: {
    'backgroundColor': theme.palette.primary[200],
    '&:hover': {
      backgroundColor: theme.palette.primary[300]
    }
  },
  formButtonIcon: {
    fontSize: theme.typography.fontSize * 1.5,
    marginRight: theme.custom.setSpace() / 2,
    position: 'relative',
    top: -1
  },
  lockIcon: {
    fontSize: theme.typography.fontSize * 1.5,
    position: 'relative',
    top: 3
  },
  stripeButton: {
    ...theme.custom.setFlex(),
    'border': 'none',
    'padding': 0,
    'margin': 0,
    'backgroundColor': 'white',
    'transition': 'background-color 250ms ease-out',
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: theme.palette.primary[50]
    }
  },
  stripeIcon: {
    height: theme.custom.setSpace('sm')
  }
}))

export const VolumeForm = ({
  closeDialogHandler,
  customResetHandler,
  formikProps,
  keOptions,
  trialId
}) => {
  const classes = useStyles()

  const checkIfPristine = touchedFields => Object.keys(touchedFields).length < 1

  return (
    <Form className={classes.form}>
      <Paper className={clsx(classes.gridPosition1, classes.formSection)}>
        <Typography component="h5" className={classes.formSectionTitle}>
          Keyword List Review
        </Typography>
        <VolumeFormTrialReview trialId={trialId} />
      </Paper>
      <Paper className={clsx(classes.gridPosition2, classes.formSection)}>
        <Typography component="h5" className={classes.formSectionTitle}>
          Keyword Metric Options
        </Typography>
        <VolumeFormKEOptions keOptions={keOptions} />
      </Paper>
      <Paper className={clsx(classes.gridPosition3, classes.formSection)}>
        <Grid container justify="space-between" alignItems="center">
          <Typography
            component="h5"
            className={clsx(classes.formSectionTitle, classes.noBottomMargin)}>
            Secure Payment <HttpsIcon className={classes.lockIcon} />
          </Typography>
          <StripeBanner
            fillColor="#00bcd4"
            className={classes.stripeButton}
            iconClass={classes.stripeIcon}
          />
        </Grid>
        <VolumeFormStripe />
      </Paper>
      <Paper
        className={clsx(
          classes.gridPosition4,
          classes.formSection,
          classes.pricingSection
        )}>
        <div className={classes.pricingSticky}>
          <Typography
            component="h5"
            className={clsx(classes.formSectionTitle, classes.pricingTitle)}>
            Pricing
          </Typography>
          <VolumeFormPricing trialId={trialId} />
        </div>
      </Paper>
      <Paper className={clsx(classes.gridPosition5, classes.formSection)}>
        <Typography component="h5" className={classes.formSectionTitle}>
          Terms &amp; Conditions
        </Typography>
        <VolumeFormTerms />
      </Paper>
      <div className={classes.gridPosition6}>
        <Grid container spacing={3}>
          <Grid item xs={4}>
            <Button
              type="submit"
              variant="contained"
              disabled={
                !formikProps.isValid || checkIfPristine(formikProps.touched)
              }
              className={clsx(
                classes.formActionButton,
                classes.formActionButtonSubmit
              )}>
              {formikProps.isSubmitting ? (
                <CachedIcon className={classes.formButtonIcon} />
              ) : (
                <PaymentIcon className={classes.formButtonIcon} />
              )}
              {formikProps.isSubmitting ? 'Ordering' : 'Order'}
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              type="reset"
              variant="contained"
              onClick={event => {
                customResetHandler(event, formikProps.setFieldValue)
              }}
              className={clsx(
                classes.formActionButton,
                classes.formActionButtonReset
              )}
              disabled={checkIfPristine(formikProps.touched)}>
              <RestorePageIcon className={classes.formButtonIcon} />
              Reset
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              type="button"
              variant="contained"
              onClick={closeDialogHandler}
              className={clsx(
                classes.formActionButton,
                classes.formActionButtonClose
              )}>
              <CloseIcon className={classes.formButtonIcon} />
              Close
            </Button>
          </Grid>
        </Grid>
      </div>
    </Form>
  )
}

VolumeForm.propTypes = {
  closeDialogHandler: PropTypes.func.isRequired,
  customResetHandler: PropTypes.func.isRequired,
  formikProps: PropTypes.object.isRequired,
  keOptions: PropTypes.object.isRequired,
  trialId: PropTypes.string.isRequired
}
