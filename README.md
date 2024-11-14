# voice-lessons
Browse a catalog of singing lessons and, optionally, join a class.

This catalog is exposed via <a href="http://0.0.0.0:3000/raw.xml">a REST endpoint</a> that returns the catalog of courses as an XML document.

# Two implementations
This app demonstrates two ways to handle XML data in an HTML document:

1. Apply <a href="http://0.0.0.0:3000/courses.xsl">an XSL stylesheet</a> to the XML, <a href="http://0.0.0.0:3000/courses.xml">using the web browser's built-in rendering engine</a>, or
2. Convert the XML to JSON on the server, when a <a href="http://0.0.0.0:3000/courses.html">standard HTML document is requested</a><sup>1</sup>.

### XML Transformation
<a href="http://0.0.0.0:3000/raw.xml">Raw XML data</a> is transformed into an XHTML-like document according to <a href="http://0.0.0.0:3000/courses.xsl">the XSL stylesheet</a> applied to it. The result is viewed <a href="http://0.0.0.0:3000/courses.xml">here</a>.

### Server-generated web page
Special HTMX attributes are inseerted into a standard<sup>1</sup> HTML5 document so that a server application endpoint<sup>2</sup> is invoked. <a href="http://0.0.0.0:3000/courses.html">Here is the (alternate) web page.</a>

<hr>

<sup>1</sup>A special AJAX library called <a href="http://htmx.org">HTMX</a> is used to invoke endpoints exposed by the servrer application.

<sup>2</sup>Server application was written with MojoJS for the NodeJS programming language.
