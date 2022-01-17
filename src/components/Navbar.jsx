import { Button, Center, Flex, Heading, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export const Navbar = () => {

    return (
        <>
        <Flex h={'60px'} bg={'#F5F5F5'}>
            <Center>
                <Heading ms={4}>Job Site</Heading>
            </Center>
            <Spacer />
            <Center>
                <Button mr={2} colorScheme={'telegram'}>Home</Button>
                <Button mr={2} colorScheme={'telegram'}>Dashboard</Button>
                <Button mr={4} colorScheme={'telegram'}><Link to={'/login'}>Login</Link></Button>
            </Center>

        </Flex>

        </>
    );
};