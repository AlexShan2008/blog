import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Head from 'next/head'
import Container from '@/components/container'
import Layout from '@/components/layout'
import Link from '@/components/link'
import Title from '@/components/title'
import { getAllPosts } from '../../lib/api'
import { contacts } from '../../lib/contacts'
import Post from '../../types/post'

type Props = {
  allPosts: Post[]
}

export interface IContactCardProps {
  id: string
  type: string
  nickname: string
  link: string
  linkName?: string
}

const Contact = ({ allPosts }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>AlexShan&apos;s Blog</title>
        </Head>
        <Container>
          <Title text="Contacts" />

          <div className="flex">
            {contacts.map((contact) => (
              <Card key={contact.id} className="mx-6" sx={{ minWidth: 325 }}>
                <CardContent>
                  <Typography variant="h5">{contact.type}</Typography>
                  <Typography variant="body1">{contact.nickname}</Typography>

                  <CardActions>
                    <Link href={contact.link}>
                      {contact.linkName || contact.link}
                    </Link>
                  </CardActions>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </Layout>
    </>
  )
}

export default Contact

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
