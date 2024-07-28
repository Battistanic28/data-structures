# Intro to problem solving

### What is an algorithm?
- a process of set of steps required to accomplish a certain task.
- everything in programming involves some kind of algorithm

### 1. Understand the problem
- can you restate the problem in your own words?
- what are the inputs that go into the problem?
- what are the outputs and what should they look like?
- can the outputs be determined from the inputs? Do I have enought info to solve teh problem?
- How should I lsabel teh important pieces of data

### 2. Explore Concrete Examples
- start with simple examples
- pprogress to more complex examples
- explore examples with empty inputs
- explore examples with invalid inputs

<!-- 
Ex.
===================================================================================
Write a function which takes in a string and returns counts of each char in string.
===================================================================================

charCount("aaaa"); // {a:4}
charCount("hello"); // {h:1, e:1, l:2, o:1}
charCount("my phone number is 555-555-5555!"); // More complex input - do we ignore non alpha characters?
charCount(); // what do we want to return for empty or invalid input? Edge cases.
 -->

 ### 3. Break It Down
 - explicitly write out the steps you need to take
 - write pseudocode
 
 <!-- 
 Ex.
 case: only count numbers and lowercase letters

 function charCount(str) {
    - make object to return
    - str.toLowercase()
    - loop over string
    - return an object with keys that are lowercase alphanumeric characters. Values should be counts of the character occurance.
 }
  -->

  ### 4. Solve or Simplify
  - if you get stuck, do the stuff you know how to do.
  - identify the difficultyb 

  ### 5. Look back and Refactor
  - can you check the result?
  - is there another way to derive the result?
  - can you understand it at a glance?
  - can you improve performance? Time and space complexity.
  - in an interview, ask how others have solved the problem.    
