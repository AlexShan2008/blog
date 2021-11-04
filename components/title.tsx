// import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'

type Props = {
  text: string
}

const Title = ({ text }: Props) => {
  return (
    <>
      <Typography className="high-light py-6" variant="h3">
        {text}
      </Typography>
      {/* <Divider light /> */}
    </>
  )
}

export default Title
