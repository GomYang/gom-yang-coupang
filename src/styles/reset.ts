/**
 * Eric Meyer의 reset css
 * https://meyerweb.com/eric/tools/css/reset/
 */
export default {
  '*[hidden]': {
    display: 'none',
  },
  'article, aside, details, figcaption, figure, footer, header, hgroup, main, menu, nav, section':
    {
      display: 'block',
    },
  'blockquote, q': {
    quotes: 'none',
  },
  'blockquote:before, blockquote:after, q:before, q:after': {
    content: '',
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    content: 'none',
  },
  body: {
    lineHeight: '1',
  },
  'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, main, menu, nav, output, ruby, section, summary, time, mark, audio, video':
    {
      border: '0',
      font: 'inherit',
      fontSize: '100%',
      margin: '0',
      padding: '0',
      verticalAlign: 'baseline',
    },
  'ol, ul': {
    listStyle: 'none',
  },
  table: {
    borderSpacing: '0',
  },
}
