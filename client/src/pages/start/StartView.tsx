import React, { useEffect, useState } from "react";
import { Box, Typography, Button, Snackbar, CircularProgress } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { COLORS } from "../../components/utils/colors";


interface Question {
  question: string;
  options: {
    a: string;
    b: string;
    c: string;
    d: string;
    e: string;
  };
  correct_answer_letter: string;
}

const StartView: React.FC = () => {
  const { courses } = useParams<{ courses: string }>();
  const navigate = useNavigate();
  let topic = courses || ""
  const [questionData, setQuestionData] = useState<Question | null>(null);
  const [selected, setSelected] = useState<string | null>(null);
  const [notify, setNotify] = useState(false)
  const [errorNotify, setErrorNotify] = useState(false)
  const [loading, setLoading] = useState(false)


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
      setSelected(null)
      setLoading(true)
      const response = await generateQuestion(topic);
      setQuestionData(response);
      setLoading(false)

    } catch (error) {
      console.error('Error generating question:', error);
    }
  };

  useEffect(() => {
    if (topic) {
      fetchQuestion();
    }
    setSelected("")
  }, [topic]);

  const verifyIfIsCorrectAnswer = (answer: string) => {
    console.log(questionData?.correct_answer_letter)
    setSelected(answer)
  }

  const verifyQuestion = () => {
    if (selected?.trim() === questionData?.correct_answer_letter?.trim()) {
      console.log("Condição atingida");
      setNotify(true);
      console.log("é igual");
    } else {
      console.log("Condição não atingida");
      setErrorNotify(true);
    }
  }
  return (

    <Box bgcolor={`${COLORS.Primary}`} display={"flex"} flexDirection={"column"} width={"100%"} height={"100%"}  >
      <Box width={"100%"} justifyContent={"space-between"} display={"flex"} alignItems={"start"}>
        <i
          style={{ cursor: "pointer", fontSize: "60px", color: `${COLORS.Secondary}` }}
          className="material-icons"
          onClick={() => navigate("/perfil")}
        >
          chevron_left
        </i>
      </Box>
      <Box gap={"20px"} width={"100%"} height={"100%"} display={"flex"} flexDirection={"column"} alignItems={"center"}>

        {loading ? <CircularProgress />
          : <Typography color={"black"} fontWeight={400} fontSize={"20px"} fontFamily={"Poppins"}>
            <b>
              {questionData?.question}
            </b>

          </Typography>
        }

        {questionData && (
          <Box display={"flex"} gap={"35px"} flexDirection={"column"} width={"328px"}>

            <Button style={{
              height: '60px',
              backgroundColor: selected === "a" ? `${COLORS.Secondary}` : 'white',
              border: 'none',
              borderRadius: "15px",
              color: `black`,
              transition: 'background-color 0.5s ease',
            }} onClick={() => verifyIfIsCorrectAnswer("a")} variant="outlined">
              {questionData.options.a}
            </Button>
            <Button style={{
              height: '60px',
              borderRadius: "15px",
              color: `black`,
              backgroundColor: selected === "b" ? `${COLORS.Secondary}` : 'white',
              border: 'none',
              transition: 'background-color 0.5s ease',
            }} onClick={() => verifyIfIsCorrectAnswer("b")} variant="outlined">{questionData.options.b}
            </Button>
            <Button style={{
              height: '60px',
              borderRadius: "15px",
              color: `black`,
              backgroundColor: selected === "c" ? `${COLORS.Secondary}` : 'white',
              border: 'none',
              transition: 'background-color 0.5s ease',
            }} onClick={() => verifyIfIsCorrectAnswer("c")} variant="outlined">{questionData.options.c}
            </Button>
            <Button style={{
              height: '60px',
              borderRadius: "15px",
              color: `black`,
              backgroundColor: selected === "d" ? `${COLORS.Secondary}` : 'white',
              border: 'none',
              transition: 'background-color 0.5s ease',
            }} onClick={() => verifyIfIsCorrectAnswer("d")} variant="outlined">{questionData.options.d}
            </Button>
            <Button style={{
              height: '60px',
              borderRadius: "15px",
              color: `black`,
              backgroundColor: selected === "e" ? `${COLORS.Secondary}` : 'white',
              border: 'none',
              transition: 'background-color 0.5s ease',
            }} onClick={() => verifyIfIsCorrectAnswer("e")} variant="outlined">{questionData.options.e}
            </Button>
            <Box width={"328px"}>


              <Button onClick={() => verifyQuestion()} fullWidth style={{ borderRadius: "20px", height: "50px", backgroundColor: selected ? `${COLORS.Secondary}` : `${COLORS.Primary}`, color: "black", border: `1px solid ${COLORS.Secondary} ` }} variant="outlined">Continuar</Button>

              <Snackbar
                open={notify}
                autoHideDuration={6000}
                onClose={() => setNotify(false)}
                message="Resposta correta!"
                action={
                  <Button
                    color="secondary"
                    size="small"
                    onClick={
                      () => {
                        fetchQuestion()
                        setNotify(false)
                      }
                    }>
                    Próxima
                  </Button>
                }
              />
              <Snackbar
                open={errorNotify}
                autoHideDuration={6000}
                onClose={() => setErrorNotify(false)}
                message="Resposta errada, tente novamente!"
                action={
                  <Button color="secondary" size="small" onClick={() => setErrorNotify(false)}>
                    Tentar novamente
                  </Button>
                }
              />

            </Box>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export { StartView };
