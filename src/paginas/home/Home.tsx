import { Grid, Box, Typography, Button } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import ModalPostagens from "../../componentes/postagens/modalPostagem/ModalPostagem";
import TabPostagem from "../../componentes/postagens/tabpostagem/TabPostagem";
import { TokenState } from "../../store/tokens/TokensReducer";
import "./Home.css";
import fthome from "../../assets/fthome.png" 

function Home() {
  let navigate = useNavigate();
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  useEffect(() => {
    if (token === "") {
      toast.error("Você precisa estar logado");
      navigate("/login");
    }
  }, [token]);

  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        className="caixa"
      >
        <Grid alignItems="center" item xs={6}>
          <Box paddingX={20}>
            <Typography
              variant="h3"
              gutterBottom
              color="textPrimary"
              component="h3"
              align="center"
              className="titulo"
            >
              Seja bem-vindo!
            </Typography>
            <Typography
              variant="h5"
              gutterBottom
              color="textPrimary"
              component="h5"
              align="center"
              className="titulo"
            >
              Compartilhe aqui sua jornada Dev!
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center">
            <Box marginRight={1}>
              <ModalPostagens />
            </Box>
            <Link to="/postagens" className="text-decorator-none">
            <Button variant='outlined' className='botao' style={{  backgroundColor: 'blue', color: 'blue'}}>
              Ver Postagens
              </Button>
              </Link>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <img
            src={fthome}
            alt=""
            width="600px"
            height="350px"
          />
        </Grid>
        <Grid xs={12} className="postagens">
          <TabPostagem />
        </Grid>
      </Grid>
    </>
  );
}

export default Home;