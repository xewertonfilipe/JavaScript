const upperName = function(name) {
    return name.toUpperCase()
  }
  upperName("Ewerton") // EWERTON
  
  const lowerName = name => name.toLowerCase()
  lowerName("Filipe") // Filipe
  
  const countLetters = word => word.length
  countLetters("Filipe") // 6
  

class Menu {
    constructor(menu) {
        this.menuElement = document.querySelector(menu)
        this.activeClass = "active"
    }

    addActiveEvent() {
        this.menuElement.addEventListener("click", event => {
            event.target.classList.add(this.activeClass)
        })
    }
}

const menu = new Menu(".principal")
menu.addActiveEvent()