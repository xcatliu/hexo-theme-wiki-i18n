(function () {
  var form = document.getElementById('header-search-form');
  var input = document.getElementById('header-search-input');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var text = input.value.trim();
    if (text === '') {
      return;
    }
    var googleSearchPrefix = 'https://www.google.com/#newwindow=1&q=';
    var siteUrl = window.HEXO_DATA.config.url;
    window.open(googleSearchPrefix + 'site:' + siteUrl + '+' + text, '_blank');
  });

  var select = document.getElementById('header-lang-select');
  select.addEventListener('change', function (e) {
    e.preventDefault();
    var option = e.target.querySelector('[value="' + e.target.value + '"]');
    location.href = option.dataset.href;
  });
}());
