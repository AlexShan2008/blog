import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import Container from './container'
import Copyright from './copyright'
import Link from '@/components/link'

const Footer = () => {
  return (
    <Container>
      <div className="p-5 md:py-6 flex flex-col lg:flex-row  items-center md:items-center border-top">
        <div className="flex flex-col items-center justify-center flex-1">
          <h5>
            <a
              href="mailto:alex.shantong.gmail.com"
              className="hover:underline"
            >
              <EmailIcon fontSize="medium" />
            </a>
          </h5>
        </div>
        <div className="flex flex-col items-center justify-center flex-1">
          <h5>
            <Link
              href="https://github.com/AlexShan2008"
              className="hover:underline"
              target="_blank"
              rel="noreferrer"
              underline="none"
              color="inherit"
            >
              <GitHubIcon fontSize="medium" />
            </Link>
          </h5>
        </div>
        <div className="flex flex-col items-center justify-center flex-1">
          <img className="w-24" src="/assets/logo.png" />
        </div>
        <div className="flex flex-col items-center justify-center flex-1">
          <h5 className="flex items-center">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/alex-shan-0227b7118/"
              rel="noreferrer"
            >
              <LinkedInIcon fontSize="medium" />
            </a>
          </h5>
        </div>
        <div className="flex flex-col items-center justify-center flex-1">
          <Copyright />
        </div>
      </div>
    </Container>
  )
}

export default Footer
