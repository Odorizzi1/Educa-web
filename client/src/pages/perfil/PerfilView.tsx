import { Box, Modal, Typography } from "@mui/material";
import HeaderPerson from "../../components/organisms/headerPerson/HeaderPerson";
import BoxDialog from "../../components/organisms/boxDialog/BoxDialog";
import Courses from "../../components/templates/courses/Courses";
import { useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { Button, TextField } from "../../components/atoms";

import { useParams } from "react-router-dom";
import { registerUserInfo } from "../../services/API/UserInfoService";
import { useAuth } from "../../context/AuthContext";
import { routes } from "../../services/API/envs";
import { COLORS } from "../../components/utils/colors";
const PerfilView = () => {

  const [open, setOpen] = useState(true)
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("")
  const [username, setUserName] = useState("")
  const { userId } = useParams()

  const { token} = useAuth();
  let parseId: number;
  if (userId) {
    parseId = parseInt(userId)
  }

  useEffect(() => {
   
      fetchUserInfo(parseId);
    
  }, [username]);

  const fetchUserInfo = async (userId: number) => {
    try {
      const response = await fetch(`${routes.API_URL}/users/userinfo?userId=${userId}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch user information");
      }

      const data = await response.json();
      setUserName(data.firstname);
    } catch (error) {
      console.error(error);
    }
  };

  const sendFirstName = async () => {
    try {

      setLoading(true)
      if (!token) {
        return
      }
      await registerUserInfo(firstName, parseId, token);
      await fetchUserInfo(parseId);

      setLoading(false)
      setOpen(false)
    } catch (err: any) {

    }
  };

  return (
    <Box
      bgcolor={`${COLORS.Primary}`}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      width={"100%"}
      height={"100%"}
      flexDirection={"column"}
      gap={"40px"}
      padding={"20px 0px"}
    >
      <HeaderPerson userName={username} />

      <BoxDialog text="Conteúdos novos diariamente, aprender nunca foi tão divertido!" />

      <Courses />


      {!username?
        <Modal
          onClose={() => setOpen(false)}
          aria-labelledby="modal-title"
          aria-describedby="modal-description"
          open={open}
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: 'white',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: 24,
              width: "280px",
              height: "300px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-evenly",
              flexDirection: "column",
              '&:focus': {
                outline: 'none',
              },

            }}
          >
            <Typography fontFamily={"poppins"} id="modal-title" variant="h6">
              Como você gostaria de ser chamado?
            </Typography>

            <TextField onChange={(e) => setFirstName(e.target.value)} />

            {loading ?
              <CircularProgress
                size={50}
                thickness={5}
                color="primary"
              /> :
              <Button  onClick={sendFirstName}>Enviar</Button>
            }

          </Box>
        </Modal>
        : undefined}

    </Box>
  );
};

export { PerfilView };
