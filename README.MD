# _BeepBoop_

#### _A website to convert numbers to a range of Numbers, October 26, 2018_

#### By _Ngan Nguyen_

## Description

_The website takes a number inputted by the user and returns range of numbers from 0 to the user inputted number with exception defined in behavior specs_

## Setup/Installation Requirements

* Clone from the repository
* Open index.html in a browser

## Known Bugs

No known bugs

## Support and contact details

_ngan@email.com_

## Behavioral Specs
* Replace 0 with Beep:
  * Expect number("0") === ("Beep")
  * Expect number("209") === ("Beep")
* Replace 1 with Boop:
  * Expect number("1") === ("Boop")
  * Expect number("310") === ("Boop")
* If numbers divisible by 3, replace numbers with "I'm sorry, Dave. I'm afraid I can't do that.":
  * Expect number("30") === ("I'm sorry, Dave. I'm afraid I can't do that.")
* Example: If a user inputs a 5, the program should display a list of values: "Beep!", "Boop!", 2, "I'm Sorry...", 4, 5



## Technologies Used

_HTMl, CSS, jQuery, Bootstrap, and JavaScript_

### License

*MIT License*

Copyright (c) 2018 **_Ngan Nguyen_**
