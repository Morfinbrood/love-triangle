/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
  let count = 0;
  let offset_arr = preferences.slice("null");
  offset_arr.unshift(0);
  offset_arr.forEach(function (item, i, arr) {
    if (i > 0) {
      let spich1_love = item;
      let spich2_love = arr[spich1_love];
      let spich3_love = arr[spich2_love];
      if (spich3_love === i && spich1_love !== spich2_love && spich2_love !== spich3_love) {
        count++;
      }
    }
  })
  return count / 3;
};
