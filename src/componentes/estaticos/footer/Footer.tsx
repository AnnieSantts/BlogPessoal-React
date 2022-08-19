import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import { Grid, Box, Typography } from "@mui/material";
import "./Footer.css";
import { useSelector } from "react-redux";
import { TokenState } from "../../../store/tokens/TokensReducer";

function Footer() {
  const token = useSelector<TokenState, TokenState["tokens"]>(
    (state) => state.tokens
  );

  var footerComponent;

  if (token != "") {
    footerComponent = (
      <Grid className="box2"
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid alignItems="center" item xs={12} style={{backgroundColor: "black"}}>
          <Box className="box1" style={{backgroundColor: "black"}}>
            <Box
              paddingTop={0.5}
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Typography
                variant="h5"
                align="center"
                gutterBottom
                className="textos"
              >
                Siga-me nas redes sociais!
              </Typography>
              <Box display="flex" alignItems="center" justifyContent="center">
                <a
                  href="https://www.linkedin.com/school/generationbrasil/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <GithubIcon className="github-icon" />
                </a>
                <a
                  href="https://www.instagram.com/generationbrasil/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <LinkedInIcon className="linkedin-icon" />
                </a>
                <a
                  href="https://www.linkedin.com/school/generationbrasil/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <InstagramIcon className="instagram-icon" />
                </a>
              </Box>
            </Box>
          </Box>
          <Box className="box2">
            <Box>
              <Typography
                variant="subtitle2"
                align="center"
                gutterBottom
              >
                Todos os direitos reservados
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    );
  }
  return <>{footerComponent}</>;
}

export default Footer;