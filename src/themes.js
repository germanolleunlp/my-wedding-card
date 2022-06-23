import Colors from './Colors';

export const light = {
  name: 'light',
  colors: {
    backgroundOne: Colors.white,
    backgroundTwo: Colors.lightgray,
    backgroundOneInverted: Colors.black,
    backgroundAlphaOne: Colors.whiteAlphaLight,
    backgroundAlphaTwo: Colors.whiteAlphaDark,
    text: Colors.black,
    textInverted: Colors.white,
    border: Colors.black
  }
};

export const dark = {
  name: 'dark',
  colors: {
    backgroundOne: Colors.black,
    backgroundTwo: Colors.darkgray2,
    backgroundOneInverted: Colors.white,
    backgroundAlphaOne: Colors.blackAlphaLight,
    backgroundAlphaTwo: Colors.blackAlphaDark,
    text: Colors.white,
    textInverted: Colors.black,
    border: Colors.white
  }
};
