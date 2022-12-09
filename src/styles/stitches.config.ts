/* eslint-disable import/order */
/* eslint-disable sort-keys-fix/sort-keys-fix */
import { gray, blue, red, green, amber, blackA } from '@radix-ui/colors'

import { createStitches } from '@stitches/react'

export const { createTheme, styled, theme } = createStitches({
  theme: {
    media: {
      tablette: '(min-width: 768px)',
      desktop: '(min-width: 1024px)',
    },
    fontSizes: {
      default: '$md',
      xs: '12px',
      sm: '14px',
      md: '16px',
      lg: '30px',
    },
    space: {
      xxs: '4px',
      xs: '8px',
      sm: '12px',
      md: '16px',
      lg: '32px',
      xlg: '40px',
    },
    colors: {
      ...blackA,
      ...gray,
      ...blue,
      ...red,
      ...green,
      ...amber,
      background: '$gray1',
      text: '$gray12',
      textLight: '$gray11',
      textOnBackground: '$gray1',
      boxIside: '$gray2',
      boxOutline: '$gray10',
      subDevider: '$gray7',
      devider: '$gray8',
      icon: '$gray10',
      primaryRed: '#ae0000',
      primaryGreen: '$green11',
      primaryYellow: '$amber10',
      primaryBlue: '$blue10',
      hoverBlue: '$blue11',
      danger: '$red11',
    },
    boxShadow: {
      thin: '0 1px 1px 0 rgb(0 0 0 / 10%)',
      smooth: '0 4px 5px rgb(0 0 0 / 30%)',
    },
  },
})
