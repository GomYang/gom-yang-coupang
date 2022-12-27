/**
 * stitches 사용에 대한 샘플 파일입니다. 기본 페이지 제작이 완료되면 삭제할 수 있습니다.
 */
import { styled, theme } from '@/styles'

const SampleButton = styled('button', {
  '&:disabled': {
    opacity: '30%',
  },
  '&:hover': {
    backgroundColor: theme.colors.hoverBlue,
  },

  backgroundColor: theme.colors.primaryBlue,
  borderRadius: theme.space.xxs,
  color: theme.colors.textOnBackground,
  fontSize: theme.fontSizes.md,
  padding: theme.space.xs,

  variants: {
    designType: {
      alert: {
        '&:hover': {
          backgroundColor: theme.colors.red7,
        },
        backgroundColor: theme.colors.primaryRed,
      },
      primary: {
        '&:hover': {
          backgroundColor: theme.colors.hoverBlue,
        },
        backgroundColor: theme.colors.primaryBlue,
      },
    },
  },
})

export default SampleButton
