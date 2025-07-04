import tokens from '../../tokens/tokens.json'

export const theme = {
  colors: {
    primary: {
      50: tokens.light.color.primary['50'].$value,
      100: tokens.light.color.primary['100'].$value,
      200: tokens.light.color.primary['200'].$value,
      300: tokens.light.color.primary['300'].$value,
      400: tokens.light.color.primary['400'].$value,
      500: tokens.light.color.primary['500'].$value,
      600: tokens.light.color.primary['600'].$value,
      700: tokens.light.color.primary['700'].$value,
      800: tokens.light.color.primary['800'].$value,
      900: tokens.light.color.primary['900'].$value,
    },
    neutral: {
      0: tokens.light.color.neutral['0'].$value,
      50: tokens.light.color.neutral['50'].$value,
      100: tokens.light.color.neutral['100'].$value,
      200: tokens.light.color.neutral['200'].$value,
      300: tokens.light.color.neutral['300'].$value,
      400: tokens.light.color.neutral['400'].$value,
      500: tokens.light.color.neutral['500'].$value,
      600: tokens.light.color.neutral['600'].$value,
      700: tokens.light.color.neutral['700'].$value,
      800: tokens.light.color.neutral['800'].$value,
      900: tokens.light.color.neutral['900'].$value,
    },
    success: {
      50: tokens.light.color.success['50'].$value,
      100: tokens.light.color.success['100'].$value,
      200: tokens.light.color.success['200'].$value,
      300: tokens.light.color.success['300'].$value,
      400: tokens.light.color.success['400'].$value,
      500: tokens.light.color.success['500'].$value,
      600: tokens.light.color.success['600'].$value,
      700: tokens.light.color.success['700'].$value,
      800: tokens.light.color.success['800'].$value,
      900: tokens.light.color.success['900'].$value,
    },
    warning: {
      50: tokens.light.color.warning['50'].$value,
      100: tokens.light.color.warning['100'].$value,
      200: tokens.light.color.warning['200'].$value,
      300: tokens.light.color.warning['300'].$value,
      400: tokens.light.color.warning['400'].$value,
      500: tokens.light.color.warning['500'].$value,
      600: tokens.light.color.warning['600'].$value,
      700: tokens.light.color.warning['700'].$value,
      800: tokens.light.color.warning['800'].$value,
      900: tokens.light.color.warning['900'].$value,
    },
    error: {
      50: tokens.light.color.error['50'].$value,
      100: tokens.light.color.error['100'].$value,
      200: tokens.light.color.error['200'].$value,
      300: tokens.light.color.error['300'].$value,
      400: tokens.light.color.error['400'].$value,
      500: tokens.light.color.error['500'].$value,
      600: tokens.light.color.error['600'].$value,
      700: tokens.light.color.error['700'].$value,
      800: tokens.light.color.error['800'].$value,
      900: tokens.light.color.error['900'].$value,
    },
    info: {
      50: tokens.light.color.info['50'].$value,
      100: tokens.light.color.info['100'].$value,
      200: tokens.light.color.info['200'].$value,
      300: tokens.light.color.info['300'].$value,
      400: tokens.light.color.info['400'].$value,
      500: tokens.light.color.info['500'].$value,
      600: tokens.light.color.info['600'].$value,
      700: tokens.light.color.info['700'].$value,
      800: tokens.light.color.info['800'].$value,
      900: tokens.light.color.info['900'].$value,
    },
    brand: tokens.light.color.brand.$value,
    'brand-hover': tokens.light.color['brand-hover'].$value,
    surface: tokens.light.color.surface.$value,
    'surface-inverse': tokens.light.color['surface-inverse'].$value,
    'on-surface': tokens.light.color['on-surface'].$value,
    'on-surface-inverse': tokens.light.color['on-surface-inverse'].$value,
  },
  fonts: {
    body: tokens.light.font.family.body.$value,
    heading: tokens.light.font.family.heading.$value,
    mono: tokens.light.font.family.mono.$value,
  },
  fontSizes: {
    xs: tokens.light.font.size.xs.$value + 'px',
    sm: tokens.light.font.size.sm.$value + 'px',
    base: tokens.light.font.size.base.$value + 'px',
    lg: tokens.light.font.size.lg.$value + 'px',
    xl: tokens.light.font.size.xl.$value + 'px',
    '2xl': tokens.light.font.size['2xl'].$value + 'px',
    '3xl': tokens.light.font.size['3xl'].$value + 'px',
    '4xl': tokens.light.font.size['4xl'].$value + 'px',
    '5xl': tokens.light.font.size['5xl'].$value + 'px',
    '6xl': tokens.light.font.size['6xl'].$value + 'px',
    '7xl': tokens.light.font.size['7xl'].$value + 'px',
    '8xl': tokens.light.font.size['8xl'].$value + 'px',
    '9xl': tokens.light.font.size['9xl'].$value + 'px',
  },
  fontWeights: {
    thin: tokens.light.font.weight.thin.$value,
    extralight: tokens.light.font.weight.extralight.$value,
    light: tokens.light.font.weight.light.$value,
    normal: tokens.light.font.weight.normal.$value,
    medium: tokens.light.font.weight.medium.$value,
    semibold: tokens.light.font.weight.semibold.$value,
    bold: tokens.light.font.weight.bold.$value,
    extrabold: tokens.light.font.weight.extrabold.$value,
    black: tokens.light.font.weight.black.$value,
  },
  lineHeights: {
    none: tokens.light.font.lineHeight.none.$value,
    tight: tokens.light.font.lineHeight.tight.$value,
    snug: tokens.light.font.lineHeight.snug.$value,
    normal: tokens.light.font.lineHeight.normal.$value,
    relaxed: tokens.light.font.lineHeight.relaxed.$value,
    loose: tokens.light.font.lineHeight.loose.$value,
  },
  letterSpacing: {
    tighter: tokens.light.font.letterSpacing.tighter.$value + 'em',
    tight: tokens.light.font.letterSpacing.tight.$value + 'em',
    normal: tokens.light.font.letterSpacing.normal.$value + 'em',
    wide: tokens.light.font.letterSpacing.wide.$value + 'em',
    wider: tokens.light.font.letterSpacing.wider.$value + 'em',
    widest: tokens.light.font.letterSpacing.widest.$value + 'em',
  },
  spacing: {
    0: tokens.light.space['0'].$value,
    1: tokens.light.space['1'].$value,
    2: tokens.light.space['2'].$value,
    3: tokens.light.space['3'].$value,
    4: tokens.light.space['4'].$value,
    5: tokens.light.space['5'].$value,
  },
  radius: {
    sm: tokens.light.radius.sm.$value,
    md: tokens.light.radius.md.$value,
    lg: tokens.light.radius.lg.$value,
  },
}

export const darkTheme = {
  colors: {
    success: {
      500: tokens.dark.color.success['500'].$value,
      600: tokens.dark.color.success['600'].$value,
      700: tokens.dark.color.success['700'].$value,
    },
    warning: {
      500: tokens.dark.color.warning['500'].$value,
      600: tokens.dark.color.warning['600'].$value,
      700: tokens.dark.color.warning['700'].$value,
    },
    error: {
      500: tokens.dark.color.error['500'].$value,
      600: tokens.dark.color.error['600'].$value,
      700: tokens.dark.color.error['700'].$value,
    },
    info: {
      500: tokens.dark.color.info['500'].$value,
      600: tokens.dark.color.info['600'].$value,
      700: tokens.dark.color.info['700'].$value,
    },
    brand: tokens.dark.color.brand.$value,
    'brand-hover': tokens.dark.color['brand-hover'].$value,
    surface: tokens.dark.color.surface.$value,
    'surface-inverse': tokens.dark.color['surface-inverse'].$value,
    'on-surface': tokens.dark.color['on-surface'].$value,
    'on-surface-inverse': tokens.dark.color['on-surface-inverse'].$value,
  },
}

export type Theme = typeof theme
export type DarkTheme = typeof darkTheme 