import {
  Box,
  Button,
  Card,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  Heading,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
function NavBar(props) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  return (
    <div>
      <Card
        bg={"#1f1f1f"}
        color={"white"}
        position={"sticky"}
        w={"100%"}
        zIndex={10}
      >
        <HStack justifyContent={"space-between"} p={3}>
          <Box>
            <Heading fontSize={"30px"} color={"#469276"}>Foodis</Heading>
          </Box>
          
          <HStack cursor={"pointer"}>
            <Link to={"/recipeApp"}>
              <Text fontSize={"20px"}>Home</Text>
            </Link>
            <Heading fontSize={"20px"} ref={btnRef} colorScheme="teal" onClick={onOpen}>
              Fav
            </Heading>
            <Drawer
              isOpen={isOpen}
              placement="right"
              onClose={onClose}
              finalFocusRef={btnRef}
              size={"xl"}
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton color={"black"}/>
                <DrawerHeader>Create your account</DrawerHeader>

                <DrawerBody color={"black"}>
                    {props.data}
                </DrawerBody>

                <DrawerFooter>
                  <Button variant="outline" mr={3} onClick={onClose}>
                    Cancel
                  </Button>
                  <Button colorScheme="blue">Save</Button>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </HStack>
        </HStack>
      </Card>
    </div>
  );
}

export default NavBar;