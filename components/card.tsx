import { useState } from 'react'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import FavoriteIcon from '@mui/icons-material/Favorite'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import ShareIcon from '@mui/icons-material/Share'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import CardMedia from '@mui/material/CardMedia'
import Collapse from '@mui/material/Collapse'
import { red } from '@mui/material/colors'
import IconButton from '@mui/material/IconButton'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import Link from '@/components/link'

interface IExpendMoreProps {
  expand?: boolean
  onClick?: () => void
}

type IRoles =
  | 'Frond-end developer'
  | 'Back-end developer'
  | 'Full-stack developer'
  | 'Project Manager'
  | 'UI/UX Designer'
  | 'QA Engineer'
  | 'DevOps Engineer'

const ExpandMore = styled((props: IExpendMoreProps) => {
  const { expand, ...other } = props
  return <IconButton {...other} />
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}))

export interface IReviewCardProps {
  id: string
  title: string
  subtitle?: string
  banner: string
  hasAvatar?: boolean
  hasMoreVertIcon?: boolean
  link?: string
  role: IRoles
  hasExpand?: boolean
  summary?: string
  stacks: string[]
  achievements: string[]
}

export default function ReviewCard(props: IReviewCardProps) {
  const {
    title,
    subtitle,
    banner,
    link,
    role,
    hasAvatar = false,
    hasMoreVertIcon = false,
    hasExpand = false,
    summary,
    stacks,
    achievements,
  } = props
  const [expanded, setExpanded] = useState(false)

  const handleExpandClick = () => {
    setExpanded(!expanded)
  }

  return (
    <Card className="mx-6" sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          hasAvatar && (
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              R
            </Avatar>
          )
        }
        action={
          hasMoreVertIcon && (
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          )
        }
        title={title}
        subheader={subtitle}
      />
      {link ? (
        <Link href={link} underline="none" target="_blank">
          <CardMedia
            component="img"
            height="194"
            image={banner}
            alt="Paella dish"
          />
        </Link>
      ) : (
        <CardMedia
          component="img"
          height="194"
          image={banner}
          alt="Paella dish"
        />
      )}

      {/* <CardContent>
        <Typography variant="body2" color="text.secondary">
          {summary}
        </Typography>
      </CardContent> */}
      <CardActions disableSpacing>
        {/* <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton> */}
        {/* <Link href={link} underline="none" target="_blank">
          <Button variant="text">LEARN MORE</Button>
        </Link> */}

        {hasExpand && (
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        )}
      </CardActions>

      {hasExpand && (
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography className="high-light" variant="body1" paragraph>
              Role:
            </Typography>

            <Typography variant="body2" paragraph>
              {role}
            </Typography>

            <Typography className="high-light" variant="body1" paragraph>
              Summary:
            </Typography>

            <Typography variant="body2" paragraph>
              {summary}
            </Typography>

            <Typography className="high-light" variant="body1" paragraph>
              Tech Stacks:
            </Typography>

            <Typography className="high-light" variant="body1" paragraph>
              {stacks.map((stack, index) => (
                <Typography key={index} variant="body2">
                  {stack}
                </Typography>
              ))}
            </Typography>

            <Typography className="high-light" variant="body1" paragraph>
              Achievements:
            </Typography>
            <Typography variant="body2" paragraph>
              {achievements.map((achievement, index) => (
                <Typography key={index} variant="body2">
                  {achievement}
                </Typography>
              ))}
            </Typography>
          </CardContent>
        </Collapse>
      )}
    </Card>
  )
}
