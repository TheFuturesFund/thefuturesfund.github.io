function layoutPromoBanner() {
  // Get the banner
  var banner = $('div#promo-banner')

  // Layout Brand
  var brand = $('h1#promo-banner-brand')
  var brandTop = $(window).width() / 8.0 - brand.height() / 2.0 + banner.position().top
  var brandLeft = ($(window).width() - brand.width()) / 2.0
  brand.css({ 
    top: brandTop + 'px',
    left: brandLeft + 'px'
  })


  // Layout Subtitles
  var programs = ['performing', 'digital', 'literary', 'visual']
  var subtitleTopOffset = $(window).width() / 4.0 + banner.position().top
  for (var i = 0; i < programs.length; i++) {
    var program = programs[i]
    var label = $('li#promo-banner-subtitle-' + program)
    label.css({ top: subtitleTopOffset + 'px' })
  }
}

$(document).ready(function() {
  layoutPromoBanner()
})
$(window).resize(layoutPromoBanner)
