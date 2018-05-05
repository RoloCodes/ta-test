(function() {
  
  const optionsCollection = document.querySelector('.option-list > select')
  const optionsArray = Array.from(optionsCollection)
  console.log(optionsCollection)
  console.log(optionsArray)

  new autoComplete({
    selector: '.auto-complete',
    minchars: 2,
    source: function(term, suggest) {
      term = term.toLowerCase()
    }
  })

})()
