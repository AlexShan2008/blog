import EmailIcon from '@mui/icons-material/Email'
import GitHubIcon from '@mui/icons-material/GitHub'
import GradeIcon from '@mui/icons-material/Grade'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import Container from './container'
import Copyright from './copyright'
const Footer = () => {
  return (
    <Container>
      <div className="py-10 flex flex-col lg:flex-row items-center">
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
            <a
              href="https://github.com/AlexShan2008"
              className="hover:underline"
            >
              AlexShan2008
            </a>
          </h5>
        </div>
        <div className="flex flex-col justify-center flex-1">
          <h3 className="font-bold mb-2">Follow Me</h3>
          <h5>
            <a href="https://www.linkedin.com/in/alex-shan-0227b7118/">
              <LinkedInIcon />
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
