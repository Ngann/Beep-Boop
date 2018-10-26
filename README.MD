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
* If numbers contains a 0, replace all digits with Beep:
  * Expect romNum("10") === ("Beep")
* If numbers contains a 1, replace all digits with Boop:
  * Expect romNum("21") === ("Boop")
* If numbers divisible by 3, replace numbers with "I'm sorry, Dave. I'm afraid I can't do that.":
  * Expect romNum("30") === ("I'm sorry, Dave. I'm afraid I can't do that.")
* Example: If a user inputs a 5, the program should display a list of values: "Beep!", "Boop!", 2, "I'm Sorry...", 4, 5



## Technologies Used

_HTMl, CSS, jQuery, Bootstrap, and JavaScript_

### License

*MIT License*

Copyright (c) 2018 **_Ngan Nguyen_**
