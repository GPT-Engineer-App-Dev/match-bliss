import { Box, Text, VStack, Input, Button, FormControl, FormLabel, FormHelperText } from "@chakra-ui/react";
import { useState } from "react";

const ProfileCreation = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [interests, setInterests] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (!name || !age || !gender || !interests || !profilePicture) {
      setError("Please fill in all the required fields.");
      return;
    }
    // Logic to save profile information
    console.log("Profile information saved:", { name, age, gender, interests, profilePicture });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setProfilePicture(file);
  };

  return (
    <Box p={4}>
      <Text fontSize="xl" mb={4}>Create Your Profile</Text>
      <FormControl id="name" isRequired>
        <FormLabel>Name</FormLabel>
        <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </FormControl>
      <FormControl id="age" isRequired>
        <FormLabel>Age</FormLabel>
        <Input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
      </FormControl>
      <FormControl id="gender" isRequired>
        <FormLabel>Gender</FormLabel>
        <Input type="text" value={gender} onChange={(e) => setGender(e.target.value)} />
      </FormControl>
      <FormControl id="interests" isRequired>
        <FormLabel>Interests</FormLabel>
        <Input type="text" value={interests} onChange={(e) => setInterests(e.target.value)} />
      </FormControl>
      <FormControl id="profilePicture" isRequired>
        <FormLabel>Profile Picture</FormLabel>
        <Input type="file" onChange={handleFileChange} />
        <FormHelperText>Upload a profile picture.</FormHelperText>
      </FormControl>
      {error && <Text color="red">{error}</Text>}
      <Button colorScheme="teal" mt={4} onClick={handleSubmit}>Submit</Button>
    </Box>
  );
};

export default ProfileCreation;