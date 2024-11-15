import React, { useEffect, useState } from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";


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
  const navigate = useNavigate();
  let topic = courses || ""
  const [questionData, setQuestionData] = useState<Question | null>(null);

  async function generateQuestion(topic: string): Promise<Question> {
    const response = await fetch('https://perguntacerta-questions.fly.dev/generate-question', {
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



  const fetchQuestion = async () => {
    try {
      const response = await generateQuestion(topic);
      setQuestionData(response);
    } catch (error) {
      console.error('Error generating question:', error);
    }
  };

  useEffect(() => {
    if (topic) {
      fetchQuestion();
    }
  }, [topic]);

  const verifyIfIsCorrectAnswer = (answer: String) => {
    if (answer === questionData?.correct_answer) {
      alert("mensagem correta")
      fetchQuestion()
    } else {
      alert("mensagem errada")
      fetchQuestion();
    }

  }

  return (
    <Box
      width={"100%"}
      height={"100%"}
      display={"flex"}
      flexDirection={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      bgcolor={"#4F3C8E"}
    >
      <Box
        display={"flex"}
        padding={"0px 12px"}
        width={"100%"}
        height={"100px"}
      >
        <i
          style={{ cursor:"pointer", fontSize: "60px", color: "#849efa" }}
          className="material-icons"
          onClick={()=> navigate("/perfil")}
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
        {questionData ? questionData.question : 'Carregando pergunta...'}
      </Typography>

    
        <Box
          padding={"22px 0px"}
          gap={"25px"}
          display={"flex"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          {questionData && (
            <Box display={"flex"} gap={"35px"} flexDirection={"column"} width={"328px"}>

              <Button style={{ borderRadius: "10px", border: "1px solid" }} onClick={() => verifyIfIsCorrectAnswer(questionData.options.a)} variant="outlined">{questionData.options.a}</Button>
              <Button style={{ borderRadius: "10px", border: "1px solid" }} onClick={() => verifyIfIsCorrectAnswer(questionData.options.b)} variant="outlined">{questionData.options.b}</Button>
              <Button style={{ borderRadius: "10px", border: "1px solid" }} onClick={() => verifyIfIsCorrectAnswer(questionData.options.c)} variant="outlined">{questionData.options.c}</Button>
              <Button style={{ borderRadius: "10px", border: "1px solid" }} onClick={() => verifyIfIsCorrectAnswer(questionData.options.d)} variant="outlined">{questionData.options.d}</Button>
              <Button style={{ borderRadius: "10px", border: "1px solid" }} onClick={() => verifyIfIsCorrectAnswer(questionData.options.e)} variant="outlined">{questionData.options.e}</Button>
            </Box>
          )}
        
      </Box>
    </Box>
  );
};

export { StartView };
