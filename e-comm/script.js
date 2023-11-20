
//javascript function if else..  for CONTACT FORM  


    function validator() {
        var firstName = document.myForm.firstName.value;
        var lastName = document.myForm.lastName.value;
        var userEmail = document.myForm.userEmail.value;

        //first name validatiion 
      
        if (firstName === "") {
          alert("First name is required. Please enter a valid first name.");
          document.myForm.firstName.focus();
          return false;
        }
      
        // (/) to define the start and end of the pattern.
        // ^ at the beginning of the pattern means that the match must start at the beginning of the string
        // [a-zA-Z] is a character set that specifies the range of characters allowed. 
        // .. it represents both uppercase and lowercase letters.
        // * means that there can be zero or more occurrences of the character set.
        // $ at the end of the pattern means that the match must end at the end of the string.
        
        
        if (!/^[a-zA-Z]*$/.test(firstName)) {
          alert("First name must contain only alphabetic characters. Please enter a valid first name.");
          document.myForm.firstName.focus();
          return false;
        }

      // last name validation 
        if (lastName === "") {
          alert("Last name is required. Please enter a valid last name.");
          document.myForm.lastName.focus();
          return false;
        }
      
        if (!/^[a-zA-Z]*$/.test(lastName)) {
          alert("Last name must contain only alphabetic characters. Please enter a valid last name.");
          document.myForm.lastName.focus();
          return false;
        }

        // email validation, use .test method to test for a match in a string... 
      
        if (userEmail === "") {
          alert("Email address is required. Please enter a valid email.");
          document.myForm.userEmail.focus();
          return false;
        }
      
        // Validate email using regular expression
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z.0-9-]+)*$/;
        if (!emailRegex.test(userEmail)) {
          alert("Email is not valid. Please enter a valid email address.");
          document.myForm.userEmail.focus();
          return false;
        }
      
        alert(userEmail + " Your email is valid");
      }
      
      