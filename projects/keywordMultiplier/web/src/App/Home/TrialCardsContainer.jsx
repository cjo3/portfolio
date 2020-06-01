import React from 'react'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/styles'
import { FadeIn } from '@colin30/shared/react/components/FadeIn'
import { defaultPadding } from '@colin30/shared/react/theming'
import { TrialCard } from './TrialCard'

const useStyles = makeStyles(theme => ({
  trialsSection: {
    backgroundColor: theme.palette.secondary[200],
    ...defaultPadding(theme.breakpoints, theme.custom.setSpace)
  },
  trialsContainer: {
    marginTop: theme.custom.setSpace('sm'),
    [theme.breakpoints.down('xs')]: {
      marginTop: theme.custom.setSpace()
    }
  },
  mainHeading: {
    ...theme.typography.mainHeading,
    marginBottom: 0
  }
}))

export const TrialCardsContainer = ({ trials }) => {
  const classes = useStyles()
  return (
    <Grid container component="section" className={classes.trialsSection}>
      <Grid item xs={12}>
        <Grid
          container
          direction="column"
          wrap="nowrap"
          alignItems="flex-start"
          justify="flex-start">
          <FadeIn
            direction="y"
            position={-100}
            component={<Typography variant="subtitle2">Results</Typography>}
          />
          <FadeIn
            direction="x"
            position={-100}
            component={
              <Typography variant="h4" className={classes.mainHeading}>
                Trial Card Display
              </Typography>
            }
          />
        </Grid>
      </Grid>
      <Grid
        container
        direction="row"
        wrap="wrap"
        className={classes.trialsContainer}>
        {trials.items.map(trial => (
          <TrialCard
            trial={trial}
            isShown={trials.shown.includes(trial.id)}
            isLastShown={trials.shown.length === 1}
            key={trial.id}
          />
        ))}
      </Grid>
    </Grid>
  )
}