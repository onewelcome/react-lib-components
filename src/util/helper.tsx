export const generateID = (length = 15, stringToWeaveIn?: string) => {
  /** We will make sure to mesh the generate id and name property together to basically create a unique ID */
  let hashCharacters = [
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '0',
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
    'a',
    'b',
    'c',
    'd',
    'e',
    'f',
    'g',
    'h',
    'i',
    'j',
    'k',
    'l',
    'm',
    'n',
    'o',
    'p',
    'q',
    'r',
    's',
    't',
    'u',
    'v',
    'w',
    'x',
    'y',
    'z',
  ];

  let id = '';

  /** Generate an id of x characters in length */
  for (let i = 0; i < length && id.length < length; i++) {
    let stringCharacter =
      stringToWeaveIn && stringToWeaveIn[i] !== undefined && !/\s/.test(stringToWeaveIn[i])
        ? stringToWeaveIn[i]
        : '';
    id = id + stringCharacter + hashCharacters[Math.floor(Math.random() * hashCharacters.length)];
  }

  return id.slice(0, length);
};
