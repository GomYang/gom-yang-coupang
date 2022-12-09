/* eslint-disable import/order */
/* eslint-disable sort-keys-fix/sort-keys-fix */

import { globalCss } from '@stitches/react'
import { theme } from './stitches.config'

import resetCss from './reset'

export default globalCss({
  ...resetCss,
  '*': {
    boxSizing: 'border-box',
  },
  html: {
    fontSize: theme.fontSizes.default,
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
  button: {
    background: 'none',
    border: 'none',
    padding: 0,
    cursor: 'pointer',
  },
  body: {
    ...resetCss.body,
    fontFamily:
      'apple sd gothic neo, 맑은 고딕, malgun gothic, 나눔고딕, nanumgothic, 돋움, dotum, sans-serif',
    backgroundColor: theme.colors.background,
  },
})
