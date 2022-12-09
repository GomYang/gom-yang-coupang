/* eslint-disable import/order */
/* eslint-disable sort-keys-fix/sort-keys-fix */
import {
  whiteA,
  grayDark,
  blueDark,
  redDark,
  greenDark,
  amberDark,
} from '@radix-ui/colors'

import { createTheme } from './stitches.config'

export default createTheme('darkTheme', {
  colors: {
    ...whiteA,
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
    ...amberDark,
    background: 'pink',
    text: '$grayDark12',
    textLight: '$grayDark11',
    textOnBackground: '$grayDark1',
    boxIside: '$grayDark2',
    boxOutline: '$grayDark10',
    subDevider: '$grayDark7',
    devider: '$grayDark8',
    icon: '$grayDark10',
    primaryRed: '#ae0000',
    primaryGreen: '$greenDark11',
    primaryYellow: '$amberDark10',
    primaryBlue: '$blueDark10',
    hoverBlue: '$blueDark11',
    danger: '$redDark11',
  },
  boxShadow: {
    thin: '0 1px 1px 0 $whiteA2',
    smooth: '0 4px 5px $whiteA4',
  },
})
