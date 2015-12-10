export const PARENTAL_RATING = [
  'G', 'PG', 'M',
  'RP13', 'R13', 'R15', 'RP16', 'R16', 'R18',
  'R',
];

/**
 * compare
 * -------
 *
 * Compare two profile ratings together.
 * Returns <0 if a is a lower rating then b.
 * Returns 0 if a is equal to b.
 * Returns >0 if a is a greater rating then b.
 *
 * compare('PG', 'R) > 0 === true
 */
export function compare (a, b) {
  return PARENTAL_RATING.indexOf(a) - PARENTAL_RATING.indexOf(b);
}

/**
* canWatch
* --------
* Returns true when profileRating is allow to watch contentRating
* Returnsfalse otherwise
*/
export function canWatch (profileRating, contentRating) {
  return (compare(profileRating,contentRating)>= 0);
}

/**
* getHighestRating
* --------
* Returns the highest rating given an array of ratings
*/
export function getHighestRating (ratings) {
  return ratings.reduce((highestRating, currentRating) => {
      if(compare(currentRating, highestRating) > 0){
        return currentRating;
      }
      return highestRating;
    }, 'G');
}

