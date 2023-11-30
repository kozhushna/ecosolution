import { css } from '@emotion/react';
import { theme } from './theme';

import ttfFiraSansRegular from '../fonts/FiraSans-Regular.ttf';
import ttfFiraSansLight from '../fonts/FiraSans-Light.ttf';
import ttfOswaldRegular from '../fonts/Oswald-Regular.ttf';
import ttfOswaldBold from '../fonts/Oswald-Bold.ttf';
import otfSaigonRegular from '../fonts/CASaygonTextTrial-Regular.otf';
import otfFontsprinf from '../fonts/Fontspring-DEMO-allroundgothic-thick.otf';

export const GlobalStyles = css`
  @font-face {
    font-family: 'FiraSans';
    font-weight: 400;
    font-style: normal;
    src: url('${ttfFiraSansRegular}') format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'FiraSans';
    font-weight: 300;
    font-style: normal;
    src: url('${ttfFiraSansLight}') format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Oswald';
    font-weight: 400;
    font-style: normal;
    src: url('${ttfOswaldRegular}') format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'Oswald';
    font-weight: 700;
    font-style: normal;
    src: url('${ttfOswaldBold}') format('truetype');
    font-display: swap;
  }

  @font-face {
    font-family: 'CA Saygon Text';
    font-weight: 400;
    font-style: normal;
    src: url('${otfSaigonRegular}') format('opentype');
    font-display: swap;
  }

  @font-face {
    font-family: 'FONTSPRING DEMO - All Round Gothic Thick';
    font-weight: 500;
    font-style: normal;
    src: url('${otfFontsprinf}') format('opentype');
    font-display: swap;
  }

  html {
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    min-height: 100vh;
    margin: 0;
    font-family: 'FiraSans', sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: normal;
    background-color: ${theme.colors.mainBackground};
    color: ${theme.colors.primary};
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
    padding: 0;
  }

  ul,
  ol {
    list-style: none;
    padding-left: 0;
    margin: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`;
