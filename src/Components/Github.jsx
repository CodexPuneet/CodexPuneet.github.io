import { Box, Center, Grid, Heading, Img } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from 'react-github-calendar';


function Github() {
  return (
    <Box>
      <Heading textAlign={"center"} mt={40} style={{ color: "rgb(243, 14, 79)" }}>
        Git Statistics
      </Heading>
      <Grid  w={'80%'} m='40px auto'  >
        <Center>
      <Img  p={5} src="http://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=CodexPuneet&theme=2077" />
      </Center>
      <GitHubCalendar 
      username="codexpuneet" 
      blockSize={20}
      blockMargin={5}
      color={'#20FF32'}/>
      
      <Center p={5}>

      <Img p={5} src="https://github-readme-stats.vercel.app/api?username=CodexPuneet&show_icons=true&theme=radical" />
      </Center>
      <Center>
      <Img p={5} src="https://github-readme-streak-stats.herokuapp.com/?user=CodexPuneet&theme=radical" />
      </Center>
      <Center>
      <Img  p={5} src="https://github-profile-trophy.vercel.app/?username=CodexPuneet&theme=radical" />
      </Center>
      <Center>
      <Img  p={5} src="https://github-readme-stats.vercel.app/api/top-langs/?username=CodexPuneet&layout=compact&theme=radical" />  
      </Center>
    </Grid>
    </Box>
  );
}

export default Github;