import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useParams } from "react-router-dom";

interface Question {
  question: string;
  correctAnswer: string;
  options: {
    [key: string]: string;
  };
}

const StartView: React.FC = () => {
  const { courses } = useParams<{ courses: string }>(); // Tipo do parâmetro 'courses'

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0); // Estado para controlar o índice da pergunta atual

  const questions: Question[] = [
    {
      question: "Qual o ano da Independência do Brasil?",
      correctAnswer: "a",
      options: {
        a: "1822",
        b: "1820",
        c: "1350",
        d: "1550",
        e: "2000",
      },
    },
    // Adicione mais perguntas conforme necessário
  ];

  const handleOptionClick = (option: string) => {
    // Lógica para verificar se a opção selecionada é a resposta correta
    const currentQuestion = questions[currentQuestionIndex];
    if (option === currentQuestion.correctAnswer) {
      alert("Resposta correta!");
    } else {
      alert("Resposta incorreta!");
    }

    // Avançar para a próxima pergunta
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      alert("Quiz concluído!");
      // Lógica para redirecionar ou reiniciar o quiz, se necessário
    }
  };

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
        {questions[currentQuestionIndex].question}
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
          {Object.keys(questions[currentQuestionIndex].options).map((key) => (
            <Button
              key={key}
              variant="contained"
              color="primary"
              onClick={() => handleOptionClick(key)}
              style={{
                width: "328px",
                height: "80px",
                backgroundColor: "#6A5AE0",
                borderRadius: "18px",
              }}
            >
              {questions[currentQuestionIndex].options[key]}
            </Button>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export { StartView };
