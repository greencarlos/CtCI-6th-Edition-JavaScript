var oneAway = function (string1, string2) {
  // insert a char for str1 -> remove a char for str2
  var checkOneMissing = function (first, second) {
    if (first.length !== second.length - 1) {
      return false;
    } else {
      var mulligan = false;
      var fP = 0; // first Pointer
      var sP = 0; // second Pointer
      while (fP < first.length) {
        if (first[fP] !== second[sP]) {
          if (mulligan) {
            return false;
          } else {
            mulligan = true;
            sP++; // second length is longer
          }
        } else {
          fP++;
          sP++;
        }
      }
      return true;
    }
  };

  var checkOneDiff = function (first, second) {
    if (first.length !== second.length) {
      return false;
    } else {
      var mulligan = false;
      var fP = 0; // first Pointer
      var sP = 0; // second Pointer
      while (fP < first.length) {
        if (first[fP] !== second[sP]) {
          if (mulligan) {
            return false; // more than one mismatch
          } else {
            mulligan = true; // use up mulligan
          }
        }
        fP++;
        sP++;
      }
      return true;
    }
  };
  // insert a char for str1 -> remove a char for str2
  // check one diff

  // console log checks
  // console.log(string1, string2, 'checkMiss', checkOneMissing(string1, string2));
  // console.log(string2, string1, 'checkMiss', checkOneMissing(string2, string1));
  // console.log(string1, string2, 'checkDiff', checkOneDiff(string1, string2));

  return (
    checkOneMissing(string1, string2) ||
    checkOneMissing(string2, string1) ||
    checkOneDiff(string1, string2)
  );
};

/**
* @param: {string} str1
* @param: {string} str2
* @result: {boolean}

Time O(n) & Space O(n)

Create a frequency counter of the first string
Iterate over the second string and remove counts from the first freq table
Iterate over the hashTable and check if elements are < 0 or > 2
- If so return false

otherwise return true

**/

const oneAway = function (str1, str2) {
  let count = 0;
  const freq1 = str1.split("").reduce((a, c) => {
    a[c] = (a[c] || 0) + 1;
    return a;
  }, {});

  for (let chr of str2) {
    if (freq1[chr]) {
      freq1[chr]--;
    }
  }

  for (let key in freq1) {
    if (freq1[key] >= 1 || freq1[key] < 0) {
      count++;
    }
  }

  return count === 1 || count === 0;
};

// Test
console.log(oneAway("pale", "ple"), true);
console.log(oneAway("pales", "pale"), true);
console.log(oneAway("pale", "bale"), true);
console.log(oneAway("pale", "bake"), false);
