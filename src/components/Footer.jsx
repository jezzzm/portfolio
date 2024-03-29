import React from "react";
import styled from "@emotion/styled";
import colors from "styles/colors";
// import Logo from "components/_ui/Logo";
// import spooch from "images/oscar-icon.png"

const FooterContainer = styled("div")`
  padding-top: 3.75em;
  padding-bottom: 3em;
  display: flex;
  flex-direction: column;
  align-items: center;

  svg {
    max-width: 50px;
  }
`;

const FooterAuthor = styled("a")`
  font-size: 0.75em;
  color: ${colors.grey700};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-decoration: none;
  margin-top: 1.5em;

  &:hover {
    color: ${colors.blue900};
  }
`;

const Footer = () => (
  <FooterContainer>
    <FooterAuthor href="https://zej.com.au">
      © {new Date().getFullYear()} — Jeremy Milledge
    </FooterAuthor>
  </FooterContainer>
);

export default Footer;
