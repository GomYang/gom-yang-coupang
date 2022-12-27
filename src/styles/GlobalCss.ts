import { globalCss } from '@stitches/react'

import resetCss from './reset'
import { theme } from './stitches.config'

export default globalCss({
  ...resetCss,
  '*': {
    boxSizing: 'border-box',
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
  body: {
    ...resetCss.body,
    backgroundColor: theme.colors.background,
    fontFamily:
      'apple sd gothic neo, 맑은 고딕, malgun gothic, 나눔고딕, nanumgothic, 돋움, dotum, sans-serif',
  },
  button: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 0,
  },
  html: {
    fontSize: theme.fontSizes.default,
  },
})
