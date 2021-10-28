import Head from 'next/head'
import { getAllPosts } from '../../lib/api'
import { CMS_NAME } from '../../lib/constants'
import Post from '../../types/post'
import Container from '@/components/container'
import Layout from '@/components/layout'

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
        <Container>Contact</Container>
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
