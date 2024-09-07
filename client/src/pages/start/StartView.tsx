import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useParams } from "react-router-dom";


const StartView: React.FC = () => {
  const { courses } = useParams<{ courses: string }>(); // Tipo do parâmetro 'courses'

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0); // Estado para controlar o índice da pergunta atual

  async function generateQuestion(topic: string): Promise<any> {
    const response = await fetch('http://127.0.0.1:5000/generate-question', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ topic }),
    });
  
    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }
  
    const data = await response.json();
    console.log(data, "retonro")
    return data;
  }
  
  
  const [topic, setTopic] = useState('História do Brasil');
  const [question, setQuestion] = useState('');
  
  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await generateQuestion(topic);
        console.log(response, "response")
      } catch (error) {
        console.error('Error generating question:', error);
      }
    };
  
    fetchQuestion();
  }, [topic]);

  return (
    <Box
      width={"100%"}
      height={"100%"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Box
        display={"flex"}
        padding={"0px 12px"}
        width={"100%"}
        height={"100px"}
      >
        <i
          style={{ fontSize: "60px", color: "#849efa" }}
          className="material-icons"
        >
          chevron_left
        </i>
      </Box>
      <Typography
        textAlign={"center"}
        color={"white"}
        variant="body1"
        style={{ fontFamily: "rubik" }}
        lineHeight={"150%"}
        fontWeight={"500"}
        fontSize={"20px"}
        height={"200px"}
      >
      </Typography>

      <Box
        height={"100%"}
        bgcolor={"white"}
        width={"100%"}
        borderRadius={"22px"}
        padding={"22px 0px"}
      >
        <Box
          padding={"22px 0px"}
          gap={"25px"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
    
        </Box>
      </Box>
    </Box>
  );
};

export { StartView };
