import BookIcon from '@mui/icons-material/Book'
import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import Container from './container'
import Copyright from './copyright'
import Link from '@/components/link'

const Footer = () => {
  return (
    <Container>
      <div className="p-5 md:py-10 flex flex-col lg:flex-row  items-start md:items-center">
        <div className="flex flex-col justify-center flex-1">
          <h3 className="font-bold mb-2">
            <EmailIcon fontSize="large" />
          </h3>
          <h5>
            <a
              href="mailto:alex.shantong.gmail.com"
              className="hover:underline"
            >
              alex.shantong@gmail.com
            </a>
          </h5>
        </div>
        <div className="flex flex-col justify-center flex-1">
          <h3 className="font-bold mb-2">
            <GitHubIcon fontSize="large" />
          </h3>
          <h5>
            <Link
              href="https://github.com/AlexShan2008"
              className="hover:underline"
              target="_blank"
              rel="noreferrer"
              underline="none"
              color="inherit"
            >
              AlexShan2008
            </Link>
          </h5>
        </div>
        <div className="flex flex-col justify-center flex-1">
          <h3 className="font-bold mb-2">Follow Me</h3>
          <h5 className="flex items-center">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/alex-shan-0227b7118/"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              target="_blank"
              href="https://juejin.cn/user/1609340753290088"
              rel="noreferrer"
            >
              <img className="w-20" src="/assets/blog/juejin.svg"></img>
            </a>
          </h5>
        </div>
        <div className="flex flex-col justify-center flex-1">
          <Copyright />
        </div>
      </div>
    </Container>
  )
}

export default Footer
