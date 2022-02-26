import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/work'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const Work = () => {
  return (
    <Layout title="Twitter Clone">
      <Container>
        <Title>
          Twitter Clone <Badge>2021</Badge>
        </Title>
        <P>Build using Next.js, Tailwind CSS, Firebase v9, NextAuth, Recoil</P>
        <List ml={4} my={4}>
          <ListItem>
            <Meta>Website</Meta>
            <Link href="https://twitter-clone-jhersyvb.vercel.app/">
              https://twitter-clone-jhersyvb.vercel.app/{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
          <ListItem>
            <Meta>Stack</Meta>
            <span>Next.js, Tailwind CSS, Firebase v9, NextAuth, Recoil</span>
          </ListItem>
          <ListItem>
            <Meta>Source</Meta>
            <Link href="https://github.com/Jhersyvb/linkedin-clone">
              https://github.com/Jhersyvb/twitter-clone{' '}
              <ExternalLinkIcon mx="2px" />
            </Link>
          </ListItem>
        </List>

        <WorkImage src="/images/works/twitter-clone.png" alt="Twitter Clone" />
      </Container>
    </Layout>
  )
}

export default Work
