import React, { useState } from "react";
import { Box, VStack, HStack, Text, Heading, Input, Button, Avatar, Divider, Spacer } from "@chakra-ui/react";
import { FaSearch, FaPhone, FaVideo, FaEllipsisV, FaPaperPlane } from "react-icons/fa";

const contacts = [
  { id: 1, name: "John Doe", lastMessage: "Hey there!", avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWxlJTIwYXZhdGFyfGVufDB8fHx8MTcwOTczMzU4OHww&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 2, name: "Jane Smith", lastMessage: "How are you?", avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBhdmF0YXJ8ZW58MHx8fHwxNzA5NzMzNTg5fDA&ixlib=rb-4.0.3&q=80&w=1080" },
  { id: 3, name: "Mike Johnson", lastMessage: "Let's meet up!", avatar: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxtYWxlJTIwYXZhdGFyfGVufDB8fHx8MTcwOTczMzU4OHww&ixlib=rb-4.0.3&q=80&w=1080" },
];

const ChatItem = ({ name, lastMessage, avatar, onClick }) => (
  <HStack onClick={onClick} _hover={{ bg: "gray.100", cursor: "pointer" }} p={2}>
    <Avatar size="md" name={name} src={avatar} />
    <VStack align="start" spacing={0}>
      <Text fontWeight="bold">{name}</Text>
      <Text fontSize="sm" color="gray.500">
        {lastMessage}
      </Text>
    </VStack>
  </HStack>
);

const ChatWindow = ({ contact }) => {
  const [inputMessage, setInputMessage] = useState("");

  return (
    <VStack h="100%" spacing={4} p={4}>
      <HStack w="100%">
        <Avatar size="md" name={contact.name} src={contact.avatar} />
        <Text fontWeight="bold">{contact.name}</Text>
        <Spacer />
        <FaPhone />
        <FaVideo />
        <FaEllipsisV />
      </HStack>
      <VStack flex={1} w="100%" bg="gray.100" p={4} overflowY="auto">
        {/* Render chat messages here */}
      </VStack>
      <HStack w="100%">
        <Input placeholder="Type a message" value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} />
        <Button colorScheme="blue">
          <FaPaperPlane />
        </Button>
      </HStack>
    </VStack>
  );
};

const Index = () => {
  const [selectedContact, setSelectedContact] = useState(null);

  return (
    <HStack h="100vh" spacing={0}>
      <VStack w="30%" bg="white" p={4}>
        <HStack w="100%">
          <Heading size="lg">Chats</Heading>
          <Spacer />
          <FaSearch />
        </HStack>
        <Divider />
        <VStack w="100%" overflowY="auto">
          {contacts.map((contact) => (
            <ChatItem key={contact.id} {...contact} onClick={() => setSelectedContact(contact)} />
          ))}
        </VStack>
      </VStack>
      <Box flex={1}>
        {selectedContact ? (
          <ChatWindow contact={selectedContact} />
        ) : (
          <VStack h="100%" justify="center" spacing={4}>
            <Heading>Select a chat to start messaging</Heading>
          </VStack>
        )}
      </Box>
    </HStack>
  );
};

export default Index;
