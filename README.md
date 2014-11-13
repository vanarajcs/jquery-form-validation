Jquery-Validation
=================

Jquery validation with simplicity

####Required Validation####

Just Add "data-validate" attribute and pass the value is "[required]"

####Email Validation####

Just Add "data-validate" attribute and pass the value is "[required,email]"

####Numeric Validation####

Just Add "data-validate" attribute and pass the value is "[required,email]"

####Float Validation####

Just Add "data-validate" attribute and pass the value is "[required,float]"

####How to submit the form####
This requires a common parent Id
```
function submit() {
  var validate = validation(id);
    if(validate == true) {
        // process here
    }
}
```

