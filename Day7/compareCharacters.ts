export function compareCharacters(
  char1: string,
  char2: string,
  joker: boolean
) {
  const charOrderNoJoker = [
    "A",
    "K",
    "Q",
    "J",
    "T",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
  ];
  const charOrderJoker = [
    "A",
    "K",
    "Q",
    "T",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2",
    "J",
  ];
  let charOrder;
  joker ? (charOrder = charOrderJoker) : (charOrder = charOrderNoJoker);
  const index1 = charOrder.indexOf(char1);
  const index2 = charOrder.indexOf(char2);
  if (index1 > index2) {
    return -1;
  } else if (index1 < index2) {
    return 1;
  } else {
    return 0;
  }
}
