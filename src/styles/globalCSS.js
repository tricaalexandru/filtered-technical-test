import { injectGlobal } from 'styled-components';

const globalCSS = injectGlobal`
  @font-face {
    font-family: system;
    font-style: normal;
    font-weight: 300;
    src: local(".SFNSText-Light"), local(".HelveticaNeueDeskInterface-Light"), local(".LucidaGrandeUI"), local("Ubuntu Light"), local("Segoe UI Light"), local("Roboto-Light"), local("DroidSans"), local("Tahoma");
  }

  html {
    box-sizing: border-box;
  }

  * {
    box-sizing: inherit;
  }

  *:before {
    box-sizing: inherit;
  }

  *:after {
    box-sizing: inherit;
  }

  body {
    font-family: "system";
    font-size: 16px;
    margin: 0;
  }
`;

export default globalCSS;
