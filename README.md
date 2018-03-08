# moonsheep-admin
Frontend code for Moonsheep App

JS/CSS uglified and compiled with Grunt

## How does the progress bar work
                  
The progress bar `data-width` attribute should carry the percentage of completion of the liberation/verification process. 
That number is then read and manipulated in the Moonsheep.progressBar() javascript function that is ran on jQuery(document).ready().

Please take a look at [/src/js/moonsheep.js](https://github.com/level73/moonsheep-admin/blob/master/src/js/moonsheep.js)
