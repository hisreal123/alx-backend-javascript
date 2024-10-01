export default function getSumOfHoods(
  initialNumber,
  expansion1989 = 89,
  expansion2019 = 19
) {
    if(expansion1989 === 89 || expansion2019 === 19) expansion1989 = 89; expansion2019 = 19; return initialNumber + expansion1989 + expansion2019;
}

