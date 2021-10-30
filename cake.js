function cakes(recipe, available) {
  let result = Object.keys(recipe).map(key => {
    return Object.keys(available).includes(key)? Math.floor(available[key]/recipe[key]): 0;
  });
  return result.includes(0)? 0: Math.min(...result);
}

// 別解
const cakes = (needs, has) => Math.min(
  ...Object.keys(needs).map(key => Math.floor(has[key] / needs[key] || 0))
)