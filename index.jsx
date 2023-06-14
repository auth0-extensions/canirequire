import { render } from 'react-dom';
import ModulesList from './src/ModulesList.jsx';

let $searchInput = $('[name=modules-filter]');
let modulesList = render(<ModulesList />, $('#canirequire-modules')[0]);

$searchInput.on('input', function(e) {
  window.location.hash = $(this).val();
  let self = this;
  modulesList.setState(function (prev) {
    return Object.assign({}, prev, {filter: $(self).val(), limit: 12});
  });
});

function setInputState() {
  modulesList.setState({ filter: location.hash.replace('#', ''), limit: 12 });
  $searchInput.val(location.hash.replace('#', ''));
}

window.addEventListener('hashchange', setInputState);

setInputState();

let lock = false;
$(window).on('scroll', function() {
  if (lock) return;
  lock = true;
  requestAnimationFrame(function() {
    lock = false;
    if (!isElementInViewport($('#canirequire-search'))) {
      $('body').addClass('sticky-header');
    } else {
      $('body').removeClass('sticky-header');
    }
  })
});

function isElementInViewport (el) {
  if (typeof jQuery === "function" && el instanceof jQuery) {
      el = el[0];
  }

  var rect = el.getBoundingClientRect();

  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
      rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
  );
}
