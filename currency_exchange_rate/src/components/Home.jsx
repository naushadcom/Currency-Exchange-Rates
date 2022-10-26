import { Flex, Button, Image, Heading, Box } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();
  return (
    <Box style={{border:"10px solid green",padding:"40px",margin:"20px 20px 20px 20px",height:"650px"}} >
    <Box style={{border:"5px solid green",padding:"10px",height:"550px"}}>
    <Heading style={{fontSize:"60px",color:"Green"}}>Currency Exchange Rate</Heading>
    <Image  style={{height:"150px",margin:"auto",marginTop:"50px"}}
        src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco,dpr_1/z8oughsbaidegeia86vm"
        alt=""
      />
    <Flex
    // w={"100vw"}
    // h={"100vh"}
    marginTop={"20px"}
    justifyContent={"center"}
    alignItems={"center"}
    >
     
      
      <Button
        m={"1rem"}
        variant="solid"
        colorScheme={"green"}
        onClick={() => navigate("/signup")}
      >
        Signup
      </Button>
      <Button
        m={"1rem"}
        variant="solid"
        colorScheme={"green"}
        onClick={() => navigate("/login")}
      >
        Login
      </Button>
    </Flex>
    </Box>
    </Box>
  );
}
