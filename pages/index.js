import { Container, Box, Heading } from '@chakra-ui/react'

function Page() {
  return (
    <Container>
      <Box borderRadius="lg" bg="red" p={3} mb={6} align="center">
        Hello, I&apos;am a full-stack developer based in Perú!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Jhersy Developer
          </Heading>
          <p>Designer / FrontEnd / BackEnd</p>
        </Box>
      </Box>
    </Container>
  )
}

export default Page
