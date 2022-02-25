import Layout from '../components/layouts/article'
import Section from '../components/section'
import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import { WorkGridItem } from '../components/grid-item'
import thumbTwitterClone from '../public/images/works/twitter-clone.png'
import thumbLinkedInClone from '../public/images/works/linkedin-clone.png'

const Works = () => {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>
        <SimpleGrid columns={[1, 1, 2]} gap={6}>
          <Section>
            <WorkGridItem
              id="twitter-clone"
              title="Twitter Clone"
              thumbnail={thumbTwitterClone}
            >
              Build using Next.js, Tailwind CSS, Firebase v9, NextAuth, Recoil
            </WorkGridItem>
          </Section>
          <Section>
            <WorkGridItem
              id="linkedin-clone"
              title="LinkedIn Clone"
              thumbnail={thumbLinkedInClone}
            >
              Build using Next.js 12, Middleware, Tailwind CSS, MongoDB,
              NextAuth, Recoil
            </WorkGridItem>
          </Section>
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Works
