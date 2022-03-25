import React, { Fragment } from "react";
import { withTheme } from "styled-components";
import { withTranslation } from 'react-i18next';
import "./styles/Footer.css";
import styled from "styled-components";
import { StyledPaperFooter } from "../toggle/StyledComponents";

const FooterAlt = props => {
  const {t} = props; 
  return (
    <Fragment>
      <StyledPaperFooter>
        <MobileDiv>
        <div data-v-0b206a1c="" className="h5footer">
            <ul data-v-0b206a1c="" className="h5footer-list">
              <li data-v-0b206a1c="" className="h5footer-list-li">
                <img data-v-0b206a1c="" src="img/logo-cgc.png" alt=""/>
                <span data-v-0b206a1c="" className="text">{t("footer.cgc")}<br/>CGC</span>
              </li>
              <li data-v-0b206a1c="" className="h5footer-list-li">
                <img data-v-0b206a1c="" src="img/pagcor.png" alt=""/>
                <span data-v-0b206a1c="" className="text">{t("footer.pagcor")}<br/>PAGCOR</span>
              </li>
              <li data-v-0b206a1c="" className="h5footer-list-li">
                <img data-v-0b206a1c="" src="img/bvi.png" alt=""/>
                <span data-v-0b206a1c="" className="text">{t("footer.bvi")}<br/>BVI</span>
              </li>
            </ul>
            <span data-v-0b206a1c="" className="text">{t("footer.des")}<br/></span>
            <span data-v-0b206a1c="" className="txt">{t("footer.copyright")}</span>
          </div>
        </MobileDiv>
        <ResponsiveDiv>
          <div data-v-b08becf8="" className="pcfooter">
            <div data-v-b08becf8="" className="pcfooter-box">
              <div data-v-b08becf8="" className="text">{t("footer.des")}</div>
              <ul data-v-b08becf8="" className="list-icon">
                <li data-v-b08becf8="" className="list-icon-li">
                  <img data-v-b08becf8="" src="img/logo-cgc.png" alt="icon"/>
                  <p data-v-b08becf8="">{t("footer.cgc")}<br/>CGC</p>
                </li>
                <li data-v-b08becf8="" className="list-icon-li">
                  <img data-v-b08becf8="" src="img/pagcor.png" alt="icon"/>
                  <p data-v-b08becf8="">{t("footer.pagcor")}<br/>PAGCOR</p>
                </li>
                <li data-v-b08becf8="" className="list-icon-li">
                  <img data-v-b08becf8="" src="img/bvi.png" alt="icon"/>
                  <p data-v-b08becf8="">{t("footer.bvi")}<br/>BVI</p>
                </li>
              </ul>
              <p data-v-b08becf8="" className="txt">{t("footer.copyright")}</p>
            </div>      
          </div>
        </ResponsiveDiv>        
      </StyledPaperFooter>
    </Fragment>
  );
};

const ResponsiveDiv = styled.div`
  @media only screen and (max-width: 1000px) {
    display: none;
  }
`;
const MobileDiv = styled.div`
  @media only screen and (min-width: 1000px) {
    display: none;
  }
`;

export default withTheme(withTranslation() (FooterAlt));
