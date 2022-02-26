import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'

import TwitterClone from '../public/images/works/twitter-clone.png'
import LinkedInClone from '../public/images/works/linkedin-clone.png'

const Posts = () => {
  return (
    <Layout title="Posts">
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Popular Posts
        </Heading>
        <Section delay={0.1}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              title="My First Workflow"
              thumbnail={TwitterClone}
              href="https://twitter-clone-jhersyvb.vercel.app/"
            />
            <GridItem
              title="My Second Project"
              thumbnail={LinkedInClone}
              href="https://linkedin-clone-jhersyvb.vercel.app/"
            />
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Posts
