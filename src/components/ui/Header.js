import React from 'react'
import { AppBar, Toolbar, useScrollTrigger } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'

import logo from '../../assets/logo.svg'

function ElevationScroll(props) {
  const { children } = props
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  })

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
  })
}

const useStyle = makeStyles(theme => ({
  toolBarMargin: {
    ...theme.mixins.toolbar,
    marginBottom: '3em'
  },
  logo: {
    height: '7em'
  }
}))

const Header = () => {
  const classes = useStyle()

  return (
    <>
      <ElevationScroll>
        <AppBar position={'fixed'} color={'primary'}>
          <Toolbar disableGutters>
            <img src={logo} className={classes.logo} alt={'company logo'} />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolBarMargin} />
    </>
  )
}

export default Header