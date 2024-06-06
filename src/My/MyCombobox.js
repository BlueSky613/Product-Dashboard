import React from "react";
import { useDisclosure } from '@chakra-ui/react'
import { useState, useEffect } from "react";

import {
    Box,
    Button,
    ButtonGroup,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuIcon,
    MenuCommand,
    MenuDivider,

    useColorModeValue,

    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
  } from "@chakra-ui/react"

import { Grid, GridItem } from "@chakra-ui/react"


const MyCombobox = () => {

    const [selectedItem, setSelectedItem] = useState(null);
    const handleShow = (item) => {
        setSelectedItem(item);
        // setShow(true);
    };
    const { isOpen, onOpen, onClose } = useDisclosure()
    let bgButton = useColorModeValue(
        "linear-gradient(135deg, #868CFF 0%, #4318FF 100%)",
        "linear-gradient(135deg, #868CFF 0%, #4318FF 100%)",
      )
    let navbarPosition = "fixed"
    let colorButton = "white"
    return (
        
        <>
           
            <Grid h="200px"
            templateRows="repeat(1, 1fr)"
            templateColumns="repeat(6, 1fr)"
            gap={4}>
                <GridItem colSpan={2} h="20" bg="">
                    <Menu >
                        <MenuButton as={Button} colorScheme="pink" style={{fontSize:"30px", height:"80px", width:"80%"}}>
                            Competitor Website
                        </MenuButton>
                        <MenuList>
                            
                            {/* <MenuDivider /> */}
                            <MenuGroup title="Competitor Website">
                            <MenuItem onClick={() => {handleShow('Tugo'); onOpen();}}>Tugo</MenuItem>
                            <MenuItem onClick={() => {handleShow('Aristas'); onOpen();}}>Aristas</MenuItem>
                            <MenuItem onClick={() => {handleShow('Jamar'); onOpen();}}>Jamar</MenuItem>
                            <MenuItem onClick={() => {handleShow('Ikea'); onOpen();}}>Ikea</MenuItem>
                            <MenuItem onClick={() => {handleShow('Homecenter'); onOpen();}}>Homecenter</MenuItem>
                            <MenuItem onClick={() => {handleShow('Spring'); onOpen();}}>Spring</MenuItem>
                            </MenuGroup>
                        </MenuList>
                    </Menu>
                    
                </GridItem>
                <GridItem colSpan={2} h="20" bg="" >
                    <div style={{textAlign:"center", padding :"10px", width:"80%", borderRadius:"15px", height:"80px", color:"white" , fontSize:"40px", backgroundColor: "rgba(0, 128, 0, 0.3)" }}>
                        <span >{selectedItem}</span>

                    </div>
                </GridItem>

                <GridItem colSpan={2} h="80" bg="" >
                    <div style={{height:"80px"}}>
                        <Button
                            // _hover={{ boxShadow: "none" }}
                            _hover={{
                                bg: "blue.500",
                                color: "white",
                                boxShadow: "0px 0px 5px rgba(0, 0, 0, 0.3)",
                            }}
                            bg={bgButton}
                            color={colorButton}
                            fontSize="50px"
                            borderRadius="12px"
                            px="12px"
                            _active="none"
                            display={{
                                sm: "none",
                                lg: "flex",
                            }}
                            h="80px"
                        >
                            Xlsx Download
                        </Button>

                    </div>
                </GridItem>
            </Grid>     


            

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Selected Competitor</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <h1>Competitor website you selected : {selectedItem}</h1>
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="brand" mr={3} onClick={onClose}>
                    Close
                    </Button>
                    {/* <Button variant="ghost">Secondary Action</Button> */}
                </ModalFooter>
                </ModalContent>
            </Modal>    


        </>
        
    );
};
export default MyCombobox;