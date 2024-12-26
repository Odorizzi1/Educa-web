import { Box, Modal, Typography, useMediaQuery } from "@mui/material";
import HeaderPerson from "../../components/organisms/headerPerson/HeaderPerson";
import Courses from "../../components/templates/courses/Courses";
import { useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { Button, TextField } from "../../components/atoms";

import { useParams } from "react-router-dom";
import { registerUserInfo } from "../../services/API/UserInfoService";
import { useAuth } from "../../context/AuthContext";
import { routes } from "../../services/API/envs";
const PerfilView = () => {

  const [open, setOpen] = useState(true)
  const [loading, setLoading] = useState(false);
  const [firstName, setFirstName] = useState("")
  const [username, setUserName] = useState("")
  const { userId } = useParams()

  const { token } = useAuth();
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

  const isMobile = useMediaQuery("(max-width:1040px)");

  return (
    <Box
      width={"100%"}
      position="relative"
      height={"100%"}
      justifyContent={"space-evenly"}
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
    >

      <Box width={!isMobile ? "510px" : "320px"}>
        <HeaderPerson userName={username} />

      </Box>
      <Box width={!isMobile ? "510px" : "320px"}>
        <Courses />
      </Box>



      {!isMobile ?
        <Box
          component="div"
          position="absolute"
          top="50%"
          right="-20%"
          width="45%"
          height="120%"
          bgcolor="#A5D6A7"
          borderRadius="50%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          sx={{
            transform: "translateY(-50%)",
          }}
        >
          <img
            style={{
              width: "40%",
              height: "auto",
              transform: "translateX(-36%)",
            }}
            src="/teacherSet.png"
            alt="Teacher"

          />
        </Box> : undefined
      }


      {!username ?
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
              <Button onClick={sendFirstName}>Enviar</Button>
            }

          </Box>
        </Modal>
        : undefined}

    </Box>
  );
};

export { PerfilView };
