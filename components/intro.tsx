import Link from './link'

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div className="flex-1">
        <img className="portrait" src="/assets/portrait.webp" alt="protrait" />
      </div>
      <div className="flex-1 p-5">
        <h2 className="font-bold text-7xl mb-5">Hello, 你好！</h2>
        <section>
          {/* <h4 className="font-bold text-xl mb-2">A Bit About Me</h4> */}
          <p className="text-base mb-5">
            I am a front-end developer - who is also obsessed with outdoor
            activities. I strive to be a problem terminator, through strong
            sense of responsibility and relentless learning and working.
          </p>
        </section>
        <div className="flex">
          <Link
            href="/resume"
            className="p-1 no-underline title font-bold"
            underline="none"
            color="secondary"
          >
            <div className="link-wrapper  button">Resume</div>
          </Link>
          <Link
            href="/projects"
            className="p-1 no-underline title font-bold"
            underline="none"
            color="secondary"
          >
            <div className="link-wrapper  button">Projects</div>
          </Link>
          <Link
            href="/contact"
            className="p-1 no-underline title font-bold"
            underline="none"
            color="secondary"
          >
            <div className="link-wrapper  button">Contact</div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Intro
