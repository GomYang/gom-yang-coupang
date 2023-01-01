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
  boxShadow: {
    smooth: '0 4px 5px $whiteA4',
    thin: '0 1px 1px 0 $whiteA2',
  },
  colors: {
    ...whiteA,
    ...grayDark,
    ...blueDark,
    ...redDark,
    ...greenDark,
    ...amberDark,
    background: 'pink',
    boxIside: '$grayDark2',
    boxOutline: '$grayDark10',
    danger: '$redDark11',
    devider: '$grayDark8',
    hoverBlue: '$blueDark11',
    icon: '$grayDark10',
    primaryBlue: '$blueDark10',
    primaryGreen: '$greenDark11',
    primaryRed: '#ae0000',
    primaryYellow: '$amberDark10',
    subDevider: '$grayDark7',
    text: '$grayDark12',
    textLight: '$grayDark11',
    textOnBackground: '$grayDark1',
  },
})
