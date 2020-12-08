import { Grid } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import React from 'react'

const useStyles = makeStyles(
  theme => ({
    container: {
      width: '100%',
      display: 'grid',
      gridTemplateColumns: 'auto 300px auto',
      gridTemplateRows: 'auto',
      [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: 'auto 600px auto'
      },
      [theme.breakpoints.up('md')]: {
        gridTemplateColumns: 'auto 768px auto'
      },
      [theme.breakpoints.up('lg')]: {
        gridTemplateColumns: 'auto 1024px auto'
      }
    },
    left: {
      width: 'calc(100% + 1px)',
      gridColumn: '1 / 2 ',
      gridRow: 1,
      backgroundColor: ({ bgColor }) => eval(bgColor),
      visibility: ({ leftVisible }) => (leftVisible ? 'visible' : 'hidden'),
      marginRight: -1
    },
    center: {
      gridColumn: '2 / 3 ',
      gridRow: 1
    },
    right: {
      width: 'calc(100% + 1px)',
      gridColumn: '3 / 4 ',
      gridRow: 1,
      backgroundColor: ({ bgColor }) => eval(bgColor),
      visibility: ({ rightVisible }) => (rightVisible ? 'visible' : 'hidden'),
      marginLeft: -1
    },
    angleBlock: {
      backgroundColor: ({ bgColor }) => eval(bgColor),
      clipPath: ({ polygon }) => polygon,
      width: theme.custom.setSpace('sm') * 10,
      height: theme.custom.setSpace('sm'),
      float: ({ float }) => float
    }
  }),
  {
    name: 'AngleBand'
  }
)

interface Props {
  bgColor: string
  bottom?: boolean
  left?: boolean
  right?: boolean
  top?: boolean
}

export const AngleBand: React.FC<Props> = ({
  bgColor,
  bottom,
  left,
  right,
  top
}): JSX.Element => {
  const classes = useStyles({
    leftVisible: left,
    rightVisible: right,
    bgColor,
    float: left ? 'left' : right ? 'right' : '',
    polygon: setPolygon()
  })

  function setPolygon() {
    if (top && left) return 'polygon(0 0, 100% 100%, 100% 102%, 0% 102%)'
    if (top && right) return 'polygon(0 100%, 100% 0, 100% 102%, 0 102%)'
    if (left) return 'polygon(0 0, 100% 0, 0 100%)'
    if (right) return 'polygon(0 0, 100% 0, 100% 100%)'
  }

  return (
    <Grid className={classes.container}>
      <Grid className={classes.left} />
      <Grid className={classes.center}>
        <Grid className={classes.angleBlock} />
      </Grid>
      <Grid className={classes.right} />
    </Grid>
  )
}