/* eslint-disable sort-keys-fix/sort-keys-fix */
/* eslint-disable import/prefer-default-export */
/**
 * stitches 사용에 대한 샘플 파일입니다. 기본 페이지 제작이 완료되면 삭제할 수 있습니다.
 */
import { styled, theme } from '@/styles'

// Use the colors in your styles
const SampleButton = styled('button', {
  color: theme.colors.textOnBackground,
  padding: theme.space.xs,
  borderRadius: theme.space.xxs,
  fontSize: theme.fontSizes.md,

  '&:disabled': {
    opacity: '30%',
  },

  backgroundColor: theme.colors.primaryBlue,
  '&:hover': {
    backgroundColor: theme.colors.hoverBlue,
  },

  variants: {
    designType: {
      primary: {
        backgroundColor: theme.colors.primaryBlue,
        '&:hover': {
          backgroundColor: theme.colors.hoverBlue,
        },
      },
      alert: {
        backgroundColor: theme.colors.primaryRed,
        '&:hover': {
          backgroundColor: theme.colors.red7,
        },
      },
    },
  },
})

export default SampleButton
