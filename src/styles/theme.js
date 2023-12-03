export const sizes = {
  // onlymobile: '480',
  mobile: '480',
  tablet: '768',
  desktop: '1440',
};

export const theme = Object.freeze({
  colors: {
    primary: '#173D33',
    accent: '#97D28B',
    white: '#FFFFFF',

    mainBackground: '#F3F5FA',
    grayBackground: '#EAEDF1',
    menuBackground: 'rgba(23, 61, 51, 0.75)',

    gray: 'rgba(23, 61, 51, 0.25)',
    burger: '#DCEFD8',

    backdrop: 'rgba(23, 61, 51, 0.25)',

    validationError: '#D28B8B',
  },

  sizes: sizes,

  devices: {
    onlymobile: `max-width: ${sizes.onlymobile}px`,
    mobile: `min-width: ${sizes.mobile}px`,
    tablet: `min-width: ${sizes.tablet}px`,
    desktop: `min-width: ${sizes.desktop}px`,
    retina: 'min-device-pixel-ratio: 2',
  },

  baseTransition: '250ms cubic-bezier(0.4, 0, 0.2, 1)',
});
