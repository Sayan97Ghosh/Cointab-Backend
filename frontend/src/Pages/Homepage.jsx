import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
  import "../Components/Navbar.css";
  
  export default function Homepage() {

    // logout

    const handleLogout = () =>{
        alert("Are You sure want to logout ? ")
        window.localStorage.clear();
        window.location.reload();
    }

    const data = JSON.parse(localStorage.getItem("data"));

    return (
      <Center py={6}>
        <Box
          maxW={'270px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
          <Image
            h={'120px'}
            w={'full'}
            src={
              'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            }
            objectFit={'cover'}
          />
          <Flex justify={'center'} mt={-12}>
            <Avatar
              size={'xl'}
              src={
                'https://pinnacle.works/wp-content/uploads/2022/06/dummy-image.jpg'
              }
              alt={'Author'}
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>
  
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
               {data.user}
              </Heading>
              <Text color={'gray.500'}>Frontend Developer</Text>
            </Stack>
            <Button
            onClick={handleLogout}
              w={'full'}
              mt={8}
             className='login_button'
              colorScheme='blue'
              rounded={'md'}
              _hover={{
                transform: 'translateY(-2px)',
                boxShadow: 'lg',
              }}>
              Log Out
            </Button>

          </Box>
        </Box>
      </Center>
    );
  }