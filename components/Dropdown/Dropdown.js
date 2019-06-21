class Dropdown {
  constructor(element) {
    
    // Assign this.element to the dropdown element
    this.element = element.querySelector(".dropdown");
    
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = element.querySelector(".dropdown-button");
    
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = element.querySelector(".dropdown-content");
    this.content =  new Content(this.content);
    // Add a click handler to the button reference and call the toggleContent method.
    this.element.addEventListener('click', () => {
      this.tabClick ()})

  }
    tabClick (){
      this.content.toggleContent();
    }
    
}
    class Content {
      constructor(content){
        this.contentTab = content;
      }
    toggleContent() {
      this.contentTab.classList.toggle('dropdown-hidden');
    }
    }

      
    
 


// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));