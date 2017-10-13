# Vue component for simple sync and async pagination.

![Image of vue-robust-pagination](link here.png)

Get *vue-robust-pagination*
----------

Here several ways to get *vue-robust-pagination*:

**download**
Copypaste component in your project:
[Get vue-robust-pagination](link here)

**npm**

    npm install vue-robust-pagination


Usage
---------
In order to initialise *vue-robust-pagination*  you need to add *vue-robust-pagination* code to your project and place `<vue-robust-pagination></vue-robust-pagination>` component to your markdown.

Options
-------
*vue-robust-pagination*  accept following props:
pages – number of pages *(required)*
navigation – enables prev/next buttons *(false by default)*
initialactive – active page number
url – url prefix for pages. If pesent each page number contain `href` with following pattern: `href="url/pageNumber"`
onchange – callback function calls with pagenumber argument on page change.

Example:
----
**Sync:**
in html:

    <div id="app">
        <vue-robust-pagination
              :initialactive="30"
              url="/test/"
              :navigation="true"
              :pages="35">
        </vue-robust-pagination>
    </div>

in script:

     import 'vue-robust-pagination';

     new Vue({
       el: '#app',
     })


**Async:**
in html (async):

    <div id="app">
        <vue-robust-pagination @onchange="loadPage"></vue-robust-pagination>
    </div>

in script:

     import 'vue-robust-pagination';

     new Vue({
       el: '#app',
       methods: {
        loadPage(newPageNumber) {
          // get async content here for newPageNumber
        }
       }
     })


After this *vue-robust-pagination* will be added on the page.

License
=======

Copyright (c) 2017 Philipp Gaponenko (psr1919plus21@gmail.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
