<h1>CLOC Evaluator</h1>
<p>
 This project was for CS4800 a Software Engineering course at CSU Stanislaus.  The project consisted of a program
 that would read the lines of code in a file.  The main objective of this project was to practice  writing technical documentation for our
 proposed project.  The following section shows my documentation for this project.
</p>

<ol>
 <li>
  Specification <br />
     The purpose of CLOC Evaluator is to determine the lines of code a given file has.    When the user first visits web application they will be able to upload a file through a button in the interface.  To determine when a user has uploaded a file, an event handler will be attached to the button through JavaScript.  Once, the event handler detects that a file has been uploaded, the JavaScript file will read the file and split it into an array of lines.  The application will then iterate over this array counting how many lines there are in the file.  For this application a valid line is a line that is not blank and more than six characters.  The reason why I chose to not validate lines that are less than six characters is because many programming languages have certain keywords that are around six characters that are just for semantic purposes and don’t add to the complexity of the program. Finally, the result of the counter will be passed to interface where it will be displayed.
 </li>
 <li>
   Validation <br />
   To ensure that the web application worked correctly, it was tested with a test file.  The number of lines of code this test file had was already predetermined, so If the web application matched then it was working correctly. The results can be seen below.  The file on the left is a Java file called Test.java.  Remembering the criteria for what constitutes a line of code there are only 12 lines of code in this file.  On the right you will see the web application which has the same result, and thus validates this application.
  
 </li>
</ol>
