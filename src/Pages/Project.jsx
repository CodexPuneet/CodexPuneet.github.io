import { Box, Button, Flex, Grid, Heading, Img, Link, Text,} from '@chakra-ui/react'
import React from 'react'
import { LinkIcon } from '@chakra-ui/icons'
import Nordstrom from "../Images/Nordstrom.png";
import Mentimeter from "../Images/Mentimeter.png";
import ShopQ from "../Images/ShopQ.png";
import Jio from "../Images/JioMart.png";


const Project = () => {
  const portfolios = [
    {
      id: 1,
      src: ShopQ,
      title:"ShopClues",
      about: "ShopClues is an Indian E-commerce marketplace, also an India's first e-commerce market that connects sellers and buyers online and offers a trusted and safe online environment for shopping.",
      git: "https://github.com/CodexPuneet/radioactive-muscle-5983",  
      deploy: "https://shopqmart.vercel.app/",
      techStack: [
        {
          "name": "JavaScript",
          "img":  "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
      
      },
        {
            "name": "React",
            "img": "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"
        },
        {
          "name": "Redux",
          "img": "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/redux-icon.png"
      },
        {
            "name": "NodeJs",
            "img": "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
        },
        
        {
          "name": "MongoDB",
          "img":  "https://cdn.iconscout.com/icon/free/png-256/mongodb-3521676-2945120.png"
      
      },
      {
        "name": "Express",
        "img":  "https://img.icons8.com/office/40/null/express-js.png"
    
    },
    {
      "name": "Mongoose",
      "img":  "data:image/png;base64,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"
  
  },
  
        {
            "name": "Chakra UI",
            "img":  "https://camo.githubusercontent.com/eec63163a5209f78e8b0e3d6ab82eb981d03c4453a7a466f4fdc063da09f2a4d/68747470733a2f2f692e696d6775722e636f6d2f454d796b5a62332e706e67"
        },
        {
            "name": "Vercel",
            "img":  "https://static-00.iconduck.com/assets.00/vercel-icon-512x449-3422jidz.png"
        }
        
    ]
    },
    {
      id: 2,
      src: Jio,
      title:"Jio Mart",
      about: "JioMart is an India's most convenient online grocery channel. No more hassles of sweating it out in crowded markets, grocery shops & supermarkets - now shop from the comfort of your -home office or on the move.",
      git: "https://github.com/CodexPuneet/naive-rings-3032",  
      deploy: "https://darling-sunshine-8dc7e8.netlify.app",
      techStack: [
        {
          "name": "JavaScript",
          "img":  "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
      
      },
        {
            "name": "React",
            "img": "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"
        },
        {
          "name": "Redux",
          "img": "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/redux-icon.png"
      },
        {
            "name": "NodeJs",
            "img": "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
        },
  
        {
            "name": "Chakra UI",
            "img":  "https://camo.githubusercontent.com/eec63163a5209f78e8b0e3d6ab82eb981d03c4453a7a466f4fdc063da09f2a4d/68747470733a2f2f692e696d6775722e636f6d2f454d796b5a62332e706e67"
        },
        {
            "name": "Netlify",
            "img":  "https://cdn.iconscout.com/icon/free/png-256/netlify-3445756-2878767.png"
        }
        
    ]
    }
    ,{
      id: 3,
      src: Nordstrom,
      title:"Nordstrom",
      about: "Nordstrom is a US based E-commerce company, it  is a leading fashion retailer offering compelling clothing, shoes and accessories for men, women and kids. Nordstrom is a one-stop shop for the whole family, and a fashion source for the modern world.",
      git: "https://github.com/CodexPuneet/unwritten-boat-734/tree/main/Nordstrom-App",  
      deploy: "https://cute-kheer-5d7d09.netlify.app/",
      techStack: [
        {
            "name": "React",
            "img": "https://cdn1.iconfinder.com/data/icons/programing-development-8/24/react_logo-512.png"
        },
        {
            "name": "NodeJs",
            "img": "https://seeklogo.com/images/N/nodejs-logo-FBE122E377-seeklogo.com.png"
        },
        {
            "name": "JavaScript",
            "img":  "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        
        },
        {
            "name": "Chakra UI",
            "img":  "https://camo.githubusercontent.com/eec63163a5209f78e8b0e3d6ab82eb981d03c4453a7a466f4fdc063da09f2a4d/68747470733a2f2f692e696d6775722e636f6d2f454d796b5a62332e706e67"
        },
        {
            "name": "Heroku",
            "img":  "https://cledara-public.s3.eu-west-2.amazonaws.com/heroku.png"
        }
        
    ]
    },
    {
      id: 4,
      src: Mentimeter,
      title:"Mentimeter",
      about: "Mentimeter is a Swedish company based in Stockholm that develops and maintains an eponymous app used to create presentations with real-time feedback.",
      git: "https://github.com/CodexPuneet/urbane-feeling-4162",  
      deploy: "https://mentimeterbypuneetcom.netlify.app/",
      techStack: [
        {
            "name": "HTML",
            "img": "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_960_720.png"
        },
        {
            "name": "CSS",
            "img": "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png"
        },
        {
            "name": "JavaScript",
            "img":  "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png"
        
        }  
    ]
    },
   
  ];

  return (
    <Box pt={{base:'10', md:'100'}} id='project'>
      <Heading textAlign={'center'} paddingBottom={{base:'0', md:'20'}} style={{color:'rgb(243, 14, 79)'}}>My Projects</Heading>
      
    {
      portfolios.map((project,id)=>{

        return <Grid w='80%' key={id}  templateColumns={{md:'repeat(1,1fr)',lg:'repeat(2,1fr)'}} gap={{lg:'4'}}  rounded='lg'   m='40px auto'  fontSize='14px' transition='all 0.3s ease-in-out' _hover={{transform:'scale(1.1)'}}>
        <Grid >
        <Img src={project.src} align="center" borderRadius='10px 10px 0 0'/>
          <Box >
        <Flex justifyContent={'center'} gap={4} mb={{md:'2',lg:'4'}} mt={4}>
        <Link href={project.git} style={{textDecoration:'none'}} target='_blank'>
        <Button color={'white'} bg='blue.400' _hover={{bg:"#ffff",color:"black"}}>
          <Img src='https://www.svgrepo.com/show/332084/github.svg' w={7} mr={2}/>
          Github</Button>
        </Link>
        <Link href={project.deploy} style={{textDecoration:'none'}} target='_blank'>
        <Button color={'white'}  bg='blue.400' _hover={{bg:"#ffff",color:"black"}}><LinkIcon mr={2}/>Deployed</Button>
        </Link>
        </Flex>
        </Box>
        </Grid>
         <Grid p={4}>
          <Box mt={{md:0,lg:0}}>
         <Heading textAlign={'center'} style={{color:' rgb(18, 195, 214)'}}>{project.title}</Heading>
          <Text fontSize={20} p={5}>{project.about}</Text>
          </Box>
          <Box>
          <Text fontWeight={'bold'} fontSize='20' style={{color:' rgb(18, 195, 214)'}}>Tech Stack</Text>
           <Flex wrap='wrap' w={{base:'100%',md:'70%',lg:'70%'}}>

            {
              project.techStack.map((tech,index)=>{
                return <Flex key={index} border= {'1.5px solid gray'} borderRadius={'30px'} p='5px 10px' m='1' fontSize='14px' transition='all 0.3s ease-in-out'  _hover={{transform:'translateY(-5px)'}}>
                <Img  src={tech.img} w='20px' h='20px'/>
                <Text>{tech.name}</Text>
               
                </Flex>
             
            })
          }
          </Flex>
          </Box>
           </Grid>
    
</Grid>
      })
    }
      
    

    </Box>
  )
}

export default Project