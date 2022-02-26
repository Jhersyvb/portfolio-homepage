import { ChevronRightIcon } from '@chakra-ui/icons'
import {
  Container,
  Box,
  Heading,
  Image,
  useColorModeValue,
  Link,
  Button,
  SimpleGrid,
  List,
  ListItem,
  Icon
} from '@chakra-ui/react'
import NextLink from 'next/link'
import { BioSection, BioYear } from '../components/bio'
import Paragraph from '../components/paragraph'
import Section from '../components/section'
import Layout from '../components/layouts/article'
import { GridItem } from '../components/grid-item'
import { IoLogoFacebook, IoLogoTwitter, IoLogoGithub } from 'react-icons/io5'

import thumbTwitterClone from '../public/images/works/twitter-clone.png'
import thumbLinkedInClone from '../public/images/works/linkedin-clone.png'

function Page() {
  return (
    <Layout>
      <Container>
        <Box
          borderRadius="lg"
          bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
          p={3}
          mb={6}
          align="center"
        >
          Hello, I&apos;am a full-stack developer based in Perú!
        </Box>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Jhersy Developer
            </Heading>
            <p>Designer / FrontEnd / BackEnd</p>
          </Box>
          <Box
            flexShrink={0}
            mt={{ base: 4, md: 0 }}
            ml={{ md: 6 }}
            align="center"
          >
            <Image
              src="/images/jhersy.jpg"
              borderColor="whiteAlpha.800"
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-block"
              borderRadius="full"
              alt="Profile Image"
            />
          </Box>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <Paragraph>
            Jhersy is a FullStack developer with passion for building apps and
            digital services{' '}
            <NextLink href="https://github.com/jhersyvb" passHref>
              <Link>Github</Link>
            </NextLink>
            .
          </Paragraph>
          <Box align="center" my={4}>
            <NextLink href="/works" passHref>
              <Button rightIcon={<ChevronRightIcon />} colorScheme="teal">
                My Portfolio
              </Button>
            </NextLink>
          </Box>
        </Section>
        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>1990</BioYear>
            Born in Huánuco, Perú.
          </BioSection>
          <BioSection>
            <BioYear>2012</BioYear>
            Completed the program Systems Engineering in Hermilio Valdizan
            University.
          </BioSection>
          <BioSection>
            <BioYear>2016-present</BioYear>
            Works at NOVA SYSTEM
          </BioSection>
        </Section>
        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            I ♥
          </Heading>
          <Paragraph>Drawing, Music and Watching series and movies</Paragraph>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            On the web
          </Heading>
          <List>
            <ListItem>
              <Link href="https://github.com/jhersyvb" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoGithub} />}
                >
                  @jhersyvb
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://twitter.com/jhersyvb" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoTwitter} />}
                >
                  @jhersyvb
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Link href="https://facebook.com/jhersyvb" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="teal"
                  leftIcon={<Icon as={IoLogoFacebook} />}
                >
                  @jhersyvb
                </Button>
              </Link>
            </ListItem>
          </List>

          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            <GridItem
              href="https://twitter-clone-jhersyvb.vercel.app"
              title="Twitter Clone"
              thumbnail={thumbTwitterClone}
            >
              Build using Next.js and Firebase
            </GridItem>
            <GridItem
              href="https://linkedin-clone-jhersyvb.vercel.app"
              title="LinkedIn Clone"
              thumbnail={thumbLinkedInClone}
            >
              Build with Next.js and MongoDB
            </GridItem>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
