function arrayDiff(a, b) {
  let result = a.filter(f => {
    return (b.includes(f)? null:f);
  });
  return result;
}