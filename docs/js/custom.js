// Added function to change value onclick
function changeValue(elementName, newValue){
  document.getElementsByName(elementName)[0].value=newValue;
  window.location.hash = "#comment-form";
};

        function focusInput() {
            document.getElementById("post-comment-field").focus();
        }
