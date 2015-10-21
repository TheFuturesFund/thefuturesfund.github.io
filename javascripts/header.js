function layoutHeader() {
  // Layout Brand
  var brand = $('h1#brand')
  var brandTop = $(window).width() / 8.0 - brand.height() / 2.0
  var brandLeft = ($(window).width() - brand.width()) / 2.0
  brand.css({ 
    top: brandTop + 'px',
    left: brandLeft + 'px'
  })


  // Layout Subtitles
  var programs = ['performing', 'digital', 'literary', 'visual']
  var subtitleTopOffset = $(window).width() / 4.0
  for (var i = 0; i < programs.length; i++) {
    var program = programs[i]
    var label = $('li#header-subtitle-' + program)
    label.css({ top: subtitleTopOffset + 'px' })
  }
}

$(document).ready(function() {
  layoutHeader()
})
$(window).resize(layoutHeader)
