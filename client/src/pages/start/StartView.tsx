import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useParams } from "react-router-dom";


interface Question {
  question: string;
  options: {
    a: string;
    b: string;
    c: string;
    d: string;
    e: string;
  };
  correct_answer: string;
}

const StartView: React.FC = () => {
  const { courses } = useParams<{ courses: string }>(); 

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [topic, setTopic] = useState(courses || 'História do Brasil');
  const [questionData, setQuestionData] = useState<Question | null>(null);

  async function generateQuestion(topic: string): Promise<Question> {
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
    return data.question;
  }

  useEffect(() => {
    const fetchQuestion = async () => {
      try {
        const response = await generateQuestion(topic);
        setQuestionData(response); // Armazena o objeto de pergunta completo
      } catch (error) {
        console.error('Error generating question:', error);
      }
    };

    if (topic) {
      fetchQuestion();
    }
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

      {/* Exibindo a pergunta */}
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
        {questionData ? questionData.question : 'Carregando pergunta...'}
      </Typography>

      {/* Exibindo as opções de resposta */}
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
          {questionData && (
            <>
              <Button variant="outlined">{questionData.options.a}</Button>
              <Button variant="outlined">{questionData.options.b}</Button>
              <Button variant="outlined">{questionData.options.c}</Button>
              <Button variant="outlined">{questionData.options.d}</Button>
              <Button variant="outlined">{questionData.options.e}</Button>
            </>
          )}
        </Box>
      </Box>
    </Box>
  );
};

export { StartView };
