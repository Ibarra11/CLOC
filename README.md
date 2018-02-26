<h1>CLOC Evaluator</h1>
<br />
<p>
 This project was for CS4800 a Software Engineering course at CSU Stanislaus.  The project consisted of a program
 that would read the lines of code in a file.  The main objective of this project was to practice  writing technical documentation for our
 proposed project.  The following section shows my documentation for this project.
</p>

<ol>
 <li>
  Specification
     The purpose of CLOC Evaluator is to determine the lines of code a given file has.    When the user first visits web application they will be able to upload a file through a button in the interface.  To determine when a user has uploaded a file, an event handler will be attached to the button through JavaScript.  Once, the event handler detects that a file has been uploaded, the JavaScript file will read the file and split it into an array of lines.  The application will then iterate over this array counting how many lines there are in the file.  For this application a valid line is a line that is not blank and more than six characters.  The reason why I chose to not validate lines that are less than six characters is because many programming languages have certain keywords that are around six characters that are just for semantic purposes and don’t add to the complexity of the program. Finally, the result of the counter will be passed to interface where it will be displayed.
 </li>
</ol>
