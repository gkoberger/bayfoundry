(function() {
  $(window).resize(function() {
    var height = $(window).height() - 1;
    if(height < 700) height = 700;
    $('.page').height(height);

    $('.page2 .partner').height(null);
    var heights = [];
    $('.page2 .partner').each(function() {
      heights.push($(this).height());
    });

    var max = Math.max.apply(this, heights);
    $('.page2 .partner').height(max);
    $('.page2 .container').css('padding-top', (height - max) / 2);

    $('.page3 .container').css('padding-top', (height - $('.page3 .container').height()) / 2);
  }).trigger('resize');

  $('.logo').sticky({topSpacing: 20});
  $('.logo').click(function(e) {
    e.preventDefault();
    $('body, html').animate({scrollTop: 0});
  });

  setTimeout(function() {
    $('.logo').addClass('on');
  }, 100);

  $(window).scroll(function() {
    var st = $(window).scrollTop();
    var ratio = st / $(window).height();
    var page = Math.floor(ratio);
    var color1, color2;
    if(page === 0) {
      color1 = 'rgb(139,169,169)';
      color2 = 'rgb(124,170,100)';
    } else {
      color1 = 'rgb(124,170,100)';
      color2 = 'rgb(207,176,101)';
    }
    $('body').css('background-color', fadeToColor(color1, color2, ratio % 1));
  });

  function fadeToColor(rgbColor1, rgbColor2, ratio) {
    var color1 = rgbColor1.substring(4, rgbColor1.length - 1).split(','),
    color2 = rgbColor2.substring(4, rgbColor2.length - 1).split(','),
    difference,
    newColor = [];

    for (var i = 0; i < color1.length; i++) {
      difference = color2[i] - color1[i];
      newColor.push(Math.floor(parseInt(color1[i], 10) + difference * ratio));
    }

    return 'rgb(' + newColor + ')';
  }
})();
