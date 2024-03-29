import Head from 'next/head'
import ReviewCard from '@/components/card'
import Container from '@/components/container'
import Layout from '@/components/layout'
import Title from '@/components/title'
import { getAllPosts } from '../../lib/api'
import { projects } from '../../lib/projects'
import Post from '../../types/post'

type Props = {
  allPosts: Post[]
}

const Projects = ({ allPosts }: Props) => {
  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1)
  return (
    <>
      <Layout>
        <Head>
          <title>AlexShan&apos;s Blog</title>
        </Head>
        <Container>
          <Title text="Projects" />
          <div className="flex">
            {projects.map((card, index) => (
              <ReviewCard key={index} {...card} />
            ))}
          </div>
        </Container>
      </Layout>
    </>
  )
}

export default Projects

export const getStaticProps = async () => {
  const allPosts = getAllPosts([
    'title',
    'date',
    'slug',
    'author',
    'coverImage',
    'excerpt',
  ])

  return {
    props: { allPosts },
  }
}
