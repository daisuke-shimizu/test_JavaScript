function titleCase(title, minorWords) {
  if(title === '') return '';
  let titleList = title.split(' ').map(f => f.toUpperCase());
  const minorList = minorWords? minorWords.split(' ').map(f => f.toUpperCase()) : [];
  const toUpperFirstLetter = str => str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
  const resultList = titleList.slice(1).map((f) => {
    return minorList.includes(f)? f.toLowerCase() : toUpperFirstLetter(f);
  });
  return resultList.length != 0?
    `${toUpperFirstLetter(titleList[0])} ${resultList.join(' ')}`:
    `${toUpperFirstLetter(titleList[0])}`;
}

