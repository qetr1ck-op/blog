(function() {
var cx = '016073824135735695849:_l_1tqmypje';
var gcse = document.createElement('script');
gcse.type = 'text/javascript';
gcse.async = true;
gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;
var s = document.getElementsByTagName('script')[0];
s.parentNode.insertBefore(gcse, s);
})();
(function() {
    var elements = document.querySelectorAll('[data-open]');
    for (var i=0; i<elements.length; i++) {
        initOpen(elements[i]);
    }

    function initOpen(element) {
        var className = 'open';
        var target = document.getElementById(element.getAttribute('data-open'));
        var ulChildrenMap = function(fn) {
            var lists = target.getElementsByTagName('ul');
            for (var i=0; i<lists.length; i++) {
                fn(lists[i]);
            }
        };
        if (!target) return;

        // dirty hack for small screen ...
        var firstChildUl = target.getElementsByTagName('ul')[0];
        if (firstChildUl && window.getComputedStyle(firstChildUl).display === 'none') {
            target.classList.remove(className);
        }

        element.addEventListener('click', function() {
            var list = target.getElementsByTagName('ul')[0];
            if (target.classList.contains(className)) {
                target.classList.remove(className);
                ulChildrenMap(function(ul) { ul.style.display = 'none'; });
            } else {
                target.classList.add(className);
                ulChildrenMap(function(ul) { ul.style.display = 'block'; });
            }
        });
    }
})();