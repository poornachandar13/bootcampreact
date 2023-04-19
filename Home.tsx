import {
  Card,
  CardHeader,
  Heading,
  Container,
  CardBody,
  Text,
  Spinner,
  Button,
  VStack,
  
} from "@chakra-ui/react";
import { useBoards, useCreateBoard,useDeleteBoard} from "../services/useBoards";


export default function Home() {
  const { data: boards } = useBoards();
  const create = useCreateBoard();
  const remove = useDeleteBoard();
  const { mutate, isLoading: isCreating } = useCreateBoard();
  const onCreateBoard = () => mutate("");
  const onDeleteBoard = () => mutate("poorna");
  return (
    <Container py="8" flex="1" maxW="100%">
      <Heading size={"md"} mb={4}>
        Boards
        <Button >Newboard</Button> 
        

      </Heading>
      <VStack spacing={4}>

        {boards?.map((board: any) => (
          <Card key={board.id} w="200px" h="100px" size={"sm"}>
            <CardHeader>
              <Heading onClick={()=> remove.mutate(board.id)} size="xs">{board.name}</Heading>
            </CardHeader>
          </Card>
        ))}
        <Card
          cursor="pointer"
          display="flex"
          alignItems={"center"}
          w="200px"
          h="100px"
          size={"sm"}
          align="center"
          onClick={onCreateBoard}
        >
        
          <CardBody>
            {isCreating ? (
              <Spinner />
            ) : (
              <Text fontSize={"md"}>Create New Board</Text>
            )}
          </CardBody>
        </Card>
      </VStack>
    </Container>
  );

  
}
