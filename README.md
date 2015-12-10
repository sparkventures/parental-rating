# Parental Rating Utils

## Installation

```
npm install parental-rating
```

## Usage

### compare(ratingA, ratingB)

> Compare two profile ratings together.

- Returns `<0` if a is a lower rating then b.
- Returns `0` if a is equal to b.
- Returns `>0` if a is a greater rating then b.

``` javascript
import {compare} from 'parental-rating';

compare('G', 'PG') < 0 // true

compare('M', 'M') == 0 // true

compare('R', 'PG') > 0 // true
```

### canWatch(profileRating, contentRating)

> Returns true when `profileRating` is allow to watch `contentRating`.
> Returns false otherwise.

``` javascript
import {canWatch} from 'parental-rating';

canWatch('G', 'PG') // false

canWatch('M', 'M') // true

canWatch('R', 'PG') // true
```

### getHighestRating(ratings)

> Returns the highest rating given an array of ratings.

``` javascript
getHighestRating(['PG', 'G', 'M', 'G']) // 'M'
```

## License

MIT
