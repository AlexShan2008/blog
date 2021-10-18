import * as React from 'react'
import MuiLink from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import ProTip from './pro-tip'

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      <MuiLink color="inherit" href="https://mui.com/">
        Your Website
      </MuiLink>{' '}
      {new Date().getFullYear()}.
      <ProTip />
    </Typography>
  )
}
