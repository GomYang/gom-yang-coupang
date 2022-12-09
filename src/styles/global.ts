/* eslint-disable sort-keys-fix/sort-keys-fix */
import reset from './reset'

export default {
  ...reset,
  body: {
    ...reset.body,
    fontFamily:
      'apple sd gothic neo, 맑은 고딕, malgun gothic, 나눔고딕, nanumgothic, 돋움, dotum, sans-serif',
  },
  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
  '*': {
    boxSizing: 'border-box',
  },
}
