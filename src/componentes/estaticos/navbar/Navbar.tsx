import React from "react";
import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokensReducer";
import { Action, addToken } from "../../../store/tokens/Actions";
import "./Navbar.css";
import { toast } from "react-toastify";

function Navbar() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );
  const dispatch = useDispatch();
  let navigate = useNavigate();

  function goLogout() {
    dispatch(addToken(""));
    toast.info('Usuário deslogado!', {
      position: "top-right",
      autoClose: 2500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      });
    navigate("/login");
  }

  var navbarComponent;

  if (token != "") {
    navbarComponent =
      <AppBar position="static" >
        <Toolbar className="barra" variant="dense" style={{ display: "flex", justifyContent: "space-between", backgroundColor: "dark-blue" }}>
          <Box display="flex" justifyContent="start" style={{ cursor: "pointer" }} >

            <Link to="home" className='text-decorator-none'>
              <Box mx={1} style={{ cursor: "pointer" }}>
                <Typography variant="h6" color="inherit">
                  JornadaDev
                </Typography>
              </Box>
            </Link>

            <Link to="/postagens" className="text-decorator-none">
              <Box mx={1} style={{ cursor: "pointer" }}>
                <Typography variant="h6" color="inherit">
                  Postagens
                </Typography>
              </Box>
            </Link>

            <Link to='/tema' className='text-decorator-none'>
              <Box mx={1} style={{ cursor: "pointer" }}>
                <Typography variant="h6" color="inherit">
                  Temas
                </Typography>
              </Box>
            </Link>

            <Link to='/formularioTema' className='text-decorator-none'>
              <Box mx={1} style={{ cursor: "pointer" }}>
                <Typography variant="h6" color="inherit">
                  Cadastrar Tema
                </Typography>
              </Box>
            </Link>

            <Link to='/sobre' className='text-decorator-none'>
              <Box mx={1} style={{ cursor: "pointer" }}>
                <Typography variant="h6" color="inherit">
                  Sobre nós
                </Typography>
              </Box>
            </Link>
          </Box>


          <Box display="flex" justifyContent="start">

            <Link to="login" className='text-decorator-none'>
              <Box mx={1} style={{ cursor: "pointer", color: 'white' }}>
                <Typography variant="h6" color="inherit" onClick={goLogout}>
                  Logout
                </Typography>
              </Box>

            </Link>

          </Box>

        </Toolbar>
      </AppBar>
  }
  return (
    <>
      {navbarComponent}
    </>
  );
}

export default Navbar;


function dispatch(arg0: Action) {
  throw new Error('Function not implemented.');
}