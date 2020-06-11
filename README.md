# _Crypto Square Generator_

#### _{Brief description of application}, 6/11/2020_

#### By _**Noel Kirkland & Tristan Emmerson**_

## Description

_{This is a detailed description of your application. Its purpose and usage.  Give as much detail as needed to explain what the application does, and any other information you want users or other developers to have. }_

## Setup/Installation Requirements

* Open by downloading:
  1. _Open the following web address in your browser:
`https://github.com/NoelKirkland`_
  2. _Click on the button labeled_ Repositories
  3. _Navigate into the `REPO-EXTENSION` and click the green button labeled_ Clone or download.
  4. _Open the directory and double click the `index.html` file to have it open in your default browser_

* _Open by cloning:_
  1. _Open the following web address in your browser:
`https://github.com/NoelKirkland`_
  2. _Click on the button labeled_ Repositories
  3. _Navigate into the `REPO-EXTENSION` and click the green button labeled_ Clone or download.
  4. _Open the directory in your preferred text-editor_
  5. _Open the `index.html` file in your preferred browser_

* _Open in browser:_
  1. _Click the following web address to view the gh-pages published version to have it open in your default browser:
`https://noelkirkland.github.io/REPO-EXTENSION`_

_{Leave nothing to chance! You want it to be easy for potential users, employers and collaborators to run your app. Do I need to run a server? How should I set up my databases? Is there other code this app depends on?}_

## Secifications

| goal                                                                                 |         input         |                 output                |
|--------------------------------------------------------------------------------------|:---------------------:|:-------------------------------------:|
| 1. Collect input sentence from index file.                                           |       any string      |             ["any string"]            |
| 2. Scrub input text of non-alpha characters.                                         |        z3r0c00l       |                  zrcl                 |
| 3. Scrub text of whitespace.                                                         | we do not like spaces |           wedonotlikespaces           |
| 4. Split characters to individual array elements                                     | any string            | [a,n,y,s,t,r,i,n,g]                   |
| 5. Count characters.                                                                 | [a,n,y,s,t,r,i,n,g]   |                   9                   |
| 6. Compare character count to <= closest square number (testing ascend.)             | [a,n,y,s,t,r,i,n,g]   |                9-square               |
| 7. Create mapping formula for each closest square.                                   | [a,n,y,s,t,r,i,n,g]   |            Use 9-square map           |
| 8. Rearange characters according to associated square structure.                     | [a,n,y,s,t,r,i,n,g]   | [a,s,i,n,t,n,y,r,g]                   |
| 9. Seperate results by every five characters with one space.                         | [a,s,i,n,t,n,y,r,g]   |             "asint" "nyrg"            |
| 10. output results in index file.                                                    |     "asint" "nyrg"    | Can I tell you a secret? "asint nyrg" |

## Known Bugs

_{Are there issues that have not yet been resolved that you want to let users know you know?  Outline any issues that would impact use of your application.  Share any workarounds that are in place. }_

## Support and contact details

_If you run into any problems, or have any questions at all, feel free to reach out to Noel at noelkirkland@gmail.com or Tristan at tristan@stickerslug.com_

## Technologies Used

_{Tell me about the languages and tools you used to create this app. Assume that I know you probably used HTML and CSS. If you did something really cool using only HTML, point that out.}_

### License

*{Determine the license under which this application can be used.  See below for more details on licensing.}*

Copyright (c) 2016 **_Noel Kirkland & Co LLC_**
