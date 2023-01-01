import { gray, blue, red, green, amber, blackA } from '@radix-ui/colors'
import { createStitches } from '@stitches/react'

export const { createTheme, styled, theme } = createStitches({
  media: {
    desktop: '(min-width: 1024px)',
    tablette: '(min-width: 768px)',
  },
  theme: {
    boxShadow: {
      smooth: '0 4px 5px rgb(0 0 0 / 30%)',
      thin: '0 1px 1px 0 rgb(0 0 0 / 10%)',
    },
    colors: {
      ...blackA,
      ...gray,
      ...blue,
      ...red,
      ...green,
      ...amber,
      background: '$gray1',
      boxIside: '$gray2',
      boxOutline: '$gray10',
      danger: '$red11',
      devider: '$gray8',
      hoverBlue: '$blue11',
      icon: '$gray10',
      primaryBlue: '$blue10',
      primaryGreen: '$green11',
      primaryRed: '#ae0000',
      primaryYellow: '$amber10',
      subDevider: '$gray7',
      text: '$gray12',
      textLight: '$gray11',
      textOnBackground: '$gray1',
    },
    fontSizes: {
      default: '$md',
      xs: '12px',
      // eslint-disable-next-line sort-keys-fix/sort-keys-fix
      sm: '14px',
      // eslint-disable-next-line sort-keys-fix/sort-keys-fix
      md: '16px',
      // eslint-disable-next-line sort-keys-fix/sort-keys-fix
      lg: '30px',
    },
    space: {
      xxs: '4px',
      // eslint-disable-next-line sort-keys-fix/sort-keys-fix
      xs: '8px',
      // eslint-disable-next-line sort-keys-fix/sort-keys-fix
      sm: '12px',
      // eslint-disable-next-line sort-keys-fix/sort-keys-fix
      md: '16px',
      // eslint-disable-next-line sort-keys-fix/sort-keys-fix
      lg: '32px',
      xlg: '40px',
    },
  },
})
