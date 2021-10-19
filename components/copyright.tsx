import * as React from 'react'
import MuiLink from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import ProTip from './pro-tip'

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      © {new Date().getFullYear()} By Alex Shan
      <br />
      <MuiLink color="inherit" href="https://alexshan.com/">
        https://alexshan.com/
      </MuiLink>{' '}
    </Typography>
  )
}
