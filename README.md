# Mr. Roboger's Neighborhood

#### _JavaScript, JQuery, For Loop and Array Week 3 Epicodus 10/23/2020_

## Description
The web application takes a number from a user and returns a range of numbers from 0 to the user inputted number with the following exceptions:

Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"
These exceptions are written from least to most important. The first exception will apply unless the second exception does, and the same with the second and third. So, for example,

The number 13 should be replaced with "Won't you be my neighbor?"
The number 21 should be replaced with "Boop".
The number 32 should be replaced with "Won't you be my neighbor?"



## Specifications

| Behavior | Input | Output |
|------------------------|-----------------|---------------------|
| It will accept the user input and return unchanged | 5 | 5 |
| The program will take number from user and return a range of numbres from zero to the user input. | 5 | 0,1,2,3,4,5 |
| It will use the input for our loop | 5 | i<=5 | 
| It the loop it will push index into an array | i <=5 | 0, 1, 2, 3, 4, 5 |
| It will then take that through an if else statement | 0, 1, 2, 3, 4, 5 | 0, Beep!, Boop!, Won't you be my neighbor?, 4, 5 |





## Setup/Installation Requirements

### View Online

_To view my live website, visit [https://github.com/riley-mc/codereview3](https://github.com/riley-mc/codereview3)_

### Open Locally

_Go to my GitHub repository here, {{[https://github.com/riley-mc/codereview3](https://github.com/riley-mc/codereview3),}} and click on the green 'Code' button to clone the repository, Open with GitHub Desktop OR Download the ZIP file_

##### To Clone:
1. _Push the green 'Clone' button and copy the URL._
2. _Open Terminal or GitBash and input the command:_ `git clone {{https://github.com/riley-mc/codereview3`}}
3. _To view the code, open the copied directory with VSS by inputing the command `code .` in your terminal._
4. _To view the website, open index.html in Chrome or your preferred browser._


## Known Bugs

## Support or Contact information

_Feel free to reach out to Riley McAdoo [riley.mcadoo@gmail.com] or DM me on Discord @riley#2607_

## Technologies Used

*_VSCode_
*_HTML_
*_CSS_
*_JavaScript_
*_jQuery_
*_Bootstrap_
*_Markdown_
*_Git_

Copyright (c) 2020 **_Riley McAdoo_**
This software is licensed under the MIT license.