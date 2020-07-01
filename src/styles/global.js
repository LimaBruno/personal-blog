import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
    */

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        font: inherit;
        vertical-align: baseline;
        box-sizing: border-box;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure, 
    footer, header, hgroup, menu, nav, section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol, ul {
        list-style: none;
    }
    blockquote, q {
        quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
        content: '';
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    
    body {
        background: #16202c;
        line-height: 1;
        font-size: 100%;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
      }
    img {
    display: block;
        width: 100%;
        height: auto;
    }
    body.dark {
        --borders: #1fa1f2;
        --texts: #c8d6e5;
        --postColor: #fff;
        --highlight: #1fa1f2;
        --linksGeneral: #1fa1f2;
        --mediumBackground: #282a36;
        --background: #191921;
        --white: #fff;
        --black: #222;
        --progress-bar: #1fa1f2;
        --menuLinkColor: #1fa1f2;
        --backgroundMoblie: #282a36;
        --formColor: #b2bec3;
        --btnSendColor: #1fa1f2;
        --btnResetColor: #bf1650;
        --profileColor: #1fa1f2;
        --recommendPost: #006266;  
      }
      body.light {
        --borders: #b2bec3;
        --texts: #222f3e;
        --postColor: #222f3e;
        --highlight: #1fa1f2;
        --linksGeneral: #222f3e;
        --mediumBackground: #dfe4ea;
        --background: #fff;
        --white: #fff;
        --black: #222;
        --progress-bar: #222f3e;
        --menuLinkColor: #1fa1f2;
        --backgroundMoblie: #dfe4ea;
        --formColor: #d7d7d7;
        --btnColor: #1e272e;
        --btnSendColor: #1e272e;
        --btnResetColor: #bf1650;
        --profileColor: #222f3e;
        --recommendPost: #b2bec3;    
      }
    
`
export default GlobalStyle