import * as React from 'react'
import Typography from '@mui/material/Typography'
import ProTip from './pro-tip'

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      © {new Date().getFullYear()} By Alex Shan
      <br />
    </Typography>
  )
}
