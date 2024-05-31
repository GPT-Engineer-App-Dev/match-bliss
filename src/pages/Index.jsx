import { Container, Text, VStack, Box, HStack, Link, Button, Heading, Stack, Flex, IconButton } from "@chakra-ui/react";
import { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Index = () => {
  const [recommendedMatches, setRecommendedMatches] = useState([]);

  const fetchRecommendedMatches = () => {
    // Dummy data for recommended matches
    const dummyMatches = [
      { id: 1, name: 'Match 1', age: 25, gender: 'Female', interests: ['Hiking', 'Reading'] },
      { id: 2, name: 'Match 2', age: 30, gender: 'Male', interests: ['Cooking', 'Traveling'] },
      { id: 3, name: 'Match 3', age: 28, gender: 'Female', interests: ['Painting', 'Music'] },
    ];
    setRecommendedMatches(dummyMatches);
  };

  useEffect(() => {
    fetchRecommendedMatches();
  }, []);

  return (
    <Container maxW="container.xl" p={0}>
      {/* Navigation Bar */}
      <Box as="nav" bg="teal.500" color="white" py={4}>
        <HStack justifyContent="space-between" px={8}>
          <Text fontSize="xl" fontWeight="bold">MyWebsite</Text>
          <HStack spacing={8}>
            <Link href="#home" _hover={{ textDecoration: "none", color: "teal.200" }}>Home</Link>
            <Link href="#about" _hover={{ textDecoration: "none", color: "teal.200" }}>About</Link>
            <Link href="#features" _hover={{ textDecoration: "none", color: "teal.200" }}>Features</Link>
            <Link href="#contact" _hover={{ textDecoration: "none", color: "teal.200" }}>Contact</Link>
          </HStack>
        </HStack>
      </Box>

      {/* Hero Section */}
      <Box as="section" bg="gray.100" py={20} textAlign="center">
        <Heading as="h1" size="2xl" mb={4}>Welcome to MyWebsite</Heading>
        <Text fontSize="xl" mb={8}>Your journey to excellence starts here.</Text>
        <Button colorScheme="teal" size="lg">Get Started</Button>
      </Box>

      {/* Features Section */}
      <Box as="section" id="features" py={20} px={8}>
        <Heading as="h2" size="xl" mb={8} textAlign="center">Features</Heading>
        <VStack spacing={8}>
          <Text fontSize="lg">Feature 1: Description of feature 1.</Text>
          <Text fontSize="lg">Feature 2: Description of feature 2.</Text>
          <Text fontSize="lg">Feature 3: Description of feature 3.</Text>
        </VStack>
      </Box>

      {/* Testimonials Section */}
      <Box as="section" bg="gray.100" py={20} px={8}>
        <Heading as="h2" size="xl" mb={8} textAlign="center">Testimonials</Heading>
        <VStack spacing={8}>
          <Text fontSize="lg">"This is the best service ever!" - Customer A</Text>
          <Text fontSize="lg">"I can't imagine my life without it." - Customer B</Text>
          <Text fontSize="lg">"Absolutely wonderful experience." - Customer C</Text>
        </VStack>
      </Box>

      {/* Recommended Matches Section */}
      <Box as="section" bg="gray.100" py={20} px={8}>
        <Heading as="h2" size="xl" mb={8} textAlign="center">Recommended Matches</Heading>
        <VStack spacing={8}>
          {recommendedMatches.map((match) => (
            <Box key={match.id} borderWidth="1px" borderRadius="lg" p={4}>
              <Text>Name: {match.name}</Text>
              <Text>Age: {match.age}</Text>
              <Text>Gender: {match.gender}</Text>
              <Text>Interests: {match.interests.join(', ')}</Text>
            </Box>
          ))}
        </VStack>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="teal.500" color="white" py={8}>
        <Flex justifyContent="center" mb={4}>
          <IconButton as="a" href="https://facebook.com" aria-label="Facebook" icon={<FaFacebook />} size="lg" variant="ghost" color="white" />
          <IconButton as="a" href="https://twitter.com" aria-label="Twitter" icon={<FaTwitter />} size="lg" variant="ghost" color="white" />
          <IconButton as="a" href="https://instagram.com" aria-label="Instagram" icon={<FaInstagram />} size="lg" variant="ghost" color="white" />
        </Flex>
        <Text textAlign="center">&copy; 2023 MyWebsite. All rights reserved.</Text>
      </Box>
    </Container>
  );
};

export default Index;