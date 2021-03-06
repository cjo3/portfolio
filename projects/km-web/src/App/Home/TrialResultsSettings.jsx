import PropTypes from 'prop-types'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { FadeIn } from '@cjo3/shared/react/components/FadeIn'
import { defaultPadding } from '@cjo3/shared/react/themes/theming'
import {
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Switch,
  Typography
} from '@material-ui/core'
import { makeStyles, withStyles } from '@material-ui/core/styles'
import DeleteSweepIcon from '@material-ui/icons/DeleteSweep'
import FileCopyIcon from '@material-ui/icons/FileCopy'

import { types } from '../../store/types'
import { whiteSpaceOptions } from './fields'

const CustomSwitch = withStyles(theme => ({
  switchBase: {
    'color': theme.palette.primary[50],
    '&$checked': {
      color: 'white'
    },
    '&$checked + $track': {
      backgroundColor: theme.palette.primary[100]
    }
  },
  checked: {},
  track: {}
}))(Switch)

const useStyles = makeStyles(theme => {
  const button = {
    ...theme.custom.setFlex(),
    'border': 'none',
    'margin': `${theme.custom.setSpace()}px ${theme.custom.setSpace()}px 0 0`,
    'padding': theme.custom.setSpace() / 2,
    'fontSize': 13,
    'borderRadius': theme.custom.borderRadius,
    'cursor': 'pointer',
    'color': theme.palette.bodyColor,
    'transition': 'all 250ms ease-out',
    '&:focus': {
      outline: 'none'
    }
  }

  return {
    mainHeading: theme.typography.mainHeading,
    subHeading: theme.typography.subHeading,
    manageTrials: {
      ...defaultPadding(theme.breakpoints, theme.custom.setSpace)
    },
    settingsCopy: {
      marginBottom: theme.custom.setSpace() / 2
    },
    switchGroupLabel: {
      marginRight: 0
    },
    icon: {
      fontSize: theme.typography.fontSize * 1.5,
      marginRight: theme.custom.setSpace() / 4
    },
    toggleText: {
      fontSize: theme.typography.fontSize,
      color: theme.palette.bodyColor,
      margin: 0
    },
    copyAllButton: {
      ...button,
      'backgroundColor': theme.palette.primary[200],
      '&:hover': {
        backgroundColor: theme.palette.pass[500]
      }
    },
    deleteAllButton: {
      ...button,
      'backgroundColor': theme.palette.primary[200],
      '&:hover': {
        backgroundColor: theme.palette.fail[500]
      }
    },
    disabledButton: {
      ...button,
      color: theme.palette.primary[700],
      backgroundColor: theme.palette.primary[400],
      cursor: 'unset'
    },
    whiteSpaceSelector: {
      margin: `${theme.custom.setSpace()}px 0`
    },
    optionLabel: {
      fontSize: 15,
      color: theme.typography.bodyColor
    },
    selectInput: {
      fontSize: 15,
      color: theme.typography.bodyColor
    }
  }
})

export const TrialResultsSettings = ({ buttonsDisabled }) => {
  const classes = useStyles()

  const keywordsOnly = useSelector(state => state.app.copyKeywordsOnly)

  const whiteSpaceSelection = useSelector(
    state => state.app.whiteSpaceSelection
  )

  const dispatch = useDispatch()

  const copyAllHandler = () => dispatch({ type: types.COPY_ALL_TRIALS })

  const askDeleteTrials = () => dispatch({ type: types.ASK_DELETE_ALL_TRIALS })

  const keywordsOnlyHandler = () =>
    dispatch({
      type: types.TOGGLE_COPY_KEYWORDS_ONLY
    })

  const whiteSpaceSelectorHandler = event =>
    dispatch({
      type: types.CHANGE_WHITESPACE_SELECTION,
      selection: event.target.value
    })

  const hideTldsHandler = () =>
    dispatch({
      type: types.TOGGLE_HIDE_TLDS
    })

  const tldsHidden = useSelector(state => state.app.tldsHidden)

  return (
    <Grid item xs={12} sm={6} className={classes.manageTrials}>
      <Grid container direction="column">
        <FadeIn direction="y" position={-100}>
          <Typography
            component="h4"
            variant="subtitle2"
            className={classes.subHeading}>
            Display &amp; Output Settings
          </Typography>
        </FadeIn>
        <FadeIn direction="x" position={-100}>
          <Typography
            variant="h4"
            component="h3"
            className={classes.mainHeading}>
            Manage your Trial Results
          </Typography>
        </FadeIn>
        <FadeIn direction="y" position={100}>
          <Typography variant="body1" className={classes.settingsCopy}>
            Use the options below to adjust the display and output settings of
            your keyword variation trials here.
          </Typography>
        </FadeIn>
        <FadeIn
          direction="x"
          position={100}
          outerClass={classes.whiteSpaceSelector}>
          <FormControl fullWidth>
            <InputLabel>Whitespace Replacement</InputLabel>
            <Select
              classes={{
                root: classes.toggleText
              }}
              value={whiteSpaceSelection}
              onChange={whiteSpaceSelectorHandler}>
              {whiteSpaceOptions.map(option => (
                <MenuItem
                  key={option.key}
                  value={option.value}
                  className={classes.toggleText}>
                  {option.label}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </FadeIn>
        <FadeIn direction="x" position={-100}>
          <Grid container>
            <FormGroup row>
              <FormControlLabel
                className={classes.switchGroupLabel}
                control={
                  <CustomSwitch
                    name="copykeywordsOnly"
                    color="primary"
                    checked={keywordsOnly}
                    onChange={keywordsOnlyHandler}
                  />
                }
                label={
                  <Typography variant="body1" className={classes.toggleText}>
                    Copy Keywords Only
                  </Typography>
                }
              />
            </FormGroup>
          </Grid>
        </FadeIn>
        <FadeIn direction="x" position={100}>
          <Grid container>
            <FormGroup row>
              <FormControlLabel
                className={classes.switchGroupLabel}
                control={
                  <CustomSwitch
                    name="hideTlds"
                    color="primary"
                    checked={tldsHidden}
                    onChange={hideTldsHandler}
                  />
                }
                label={
                  <Typography variant="body1" className={classes.toggleText}>
                    Hide TLDs
                  </Typography>
                }
              />
            </FormGroup>
          </Grid>
        </FadeIn>

        <Grid container justify="flex-start" alignItems="center">
          <FadeIn direction="x" position={-100}>
            <button
              type="button"
              onClick={copyAllHandler}
              disabled={buttonsDisabled}
              className={
                buttonsDisabled ? classes.disabledButton : classes.copyAllButton
              }>
              <FileCopyIcon className={classes.icon} />
              Copy All
            </button>
          </FadeIn>
          <FadeIn direction="x" position={100}>
            <button
              type="button"
              onClick={askDeleteTrials}
              disabled={buttonsDisabled}
              className={
                buttonsDisabled
                  ? classes.disabledButton
                  : classes.deleteAllButton
              }>
              <DeleteSweepIcon className={classes.icon} />
              Delete All
            </button>
          </FadeIn>
        </Grid>
      </Grid>
    </Grid>
  )
}

TrialResultsSettings.propTypes = {
  buttonsDisabled: PropTypes.bool.isRequired
}
