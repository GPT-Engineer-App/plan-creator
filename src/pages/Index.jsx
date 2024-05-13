import { useState } from "react";
import { Container, VStack, Input, HStack, List, ListItem, IconButton, Text } from "@chakra-ui/react";
import { FaTrash, FaPlus } from "react-icons/fa";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddTodo = () => {
    if (inputValue.trim() !== "") {
      setTodos([...todos, inputValue]);
      setInputValue("");
    }
  };

  const handleRemoveTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleAddTodo();
    }
  };

  return (
    <Container centerContent maxW="container.md" padding={4}>
      <VStack spacing={4} width="100%">
        <Text fontSize="2xl" fontWeight="bold">
          Todo List
        </Text>
        <HStack width="100%">
          <Input placeholder="Add a new task" value={inputValue} onChange={handleInputChange} onKeyPress={handleKeyPress} />
          <IconButton aria-label="Add todo" icon={<FaPlus />} onClick={handleAddTodo} />
        </HStack>
        <List width="100%" spacing={2}>
          {todos.map((todo, index) => (
            <ListItem key={index} padding={2} boxShadow="md" display="flex" justifyContent="space-between" alignItems="center">
              <Text>{todo}</Text>
              <IconButton aria-label="Delete todo" icon={<FaTrash />} onClick={() => handleRemoveTodo(index)} />
            </ListItem>
          ))}
        </List>
      </VStack>
    </Container>
  );
};

export default Index;
