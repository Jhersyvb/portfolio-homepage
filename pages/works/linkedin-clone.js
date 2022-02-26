import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="LinkedIn Clone">
      <Container>
        <Title>
          LinkedIn Clone <Badge>2022</Badge>
        </Title>
        <P>
          Build using Next.js 12, Middleware, Tailwind CSS, MongoDB, NextAuth,
          Recoil
        </P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://linkedin-clone-jhersyvb.vercel.app/">
              https://linkedin-clone-jhersyvb.vercel.app/{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>
              Next.js, Middleware, Tailwind CSS, MongoDB, NextAuth, Recoil
            </span>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/Jhersyvb/linkedin-clone">
              https://github.com/Jhersyvb/linkedin-clone{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage
          src="/images/works/linkedin-clone.png"
          alt="LinkedIn Clone"
        />
      </Container>
    </Layout>
  )
}

export default Work
