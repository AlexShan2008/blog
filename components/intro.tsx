import Link from './link'

const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-16 mb-16 md:mb-12">
      <div className="flex-1">
        <img className="portrait" src="/assets/portrait.webp" alt="protrait" />
      </div>
      <div className="flex-1">
        <h2 className="font-bold text-7xl mb-5">Hello, 你好！</h2>
        <section>
          <h4 className="font-bold text-xl mb-2">A Bit About Me</h4>
          <p className="text-base mb-5">
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            I'm a front-end developer. Aiming to be a problem terminator,
            through strong sense of responsibility and learning and working
            tirelessly.
          </p>
        </section>
        <div className="flex">
          <Link
            href="/resume"
            className="p-1 no-underline title font-bold"
            underline="none"
          >
            <div className="link-wrapper bg-yellow-200">Resume</div>
          </Link>
          <Link
            href="/projects"
            className="p-1 no-underline title font-bold"
            underline="none"
          >
            <div className="link-wrapper bg-blue-200">Projects</div>
          </Link>
          <Link
            href="/contact"
            className="p-1 no-underline title font-bold"
            underline="none"
          >
            <div className="link-wrapper bg-green-200">Contact</div>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Intro
