function toggleStylesheet() {
    var defaultStylesheet = document.getElementsByTagName('link')[0];
    var alternateStylesheet = document.getElementsByTagName('link')[1];
    
    if (defaultStylesheet.disabled) {
      defaultStylesheet.disabled = false;
      alternateStylesheet.disabled = true;
    } else {
      defaultStylesheet.disabled = true;
      alternateStylesheet.disabled = false;
    }
  }
  toggleStylesheet();
  toggleStylesheet();
  toggleStylesheet();
  
  
  