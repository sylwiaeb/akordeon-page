var AKO = {};

AKO.toogleAll = function () {

    $('.change-panels-state').click(function() {
        $('.header').toggleClass('header-closed').next().slideToggle();
        $('.caption').text($(this).text() == 'Rozwiń wszystkie' ? 'Zwiń wszystkie' : 'Rozwiń wszystkie');
        $(this).toggleClass('show-all');
        return false;
    });
};

AKO.toggleContent = function () {
    var containers = $('.content section'),
        headers = $('.header'),
        i;

    headers.click(function (e) {
        for (i = 0; i < containers.length; i++) {
            if ($(this).hasClass('header-closed')) {
                containers.slideUp();
                headers.addClass('header-closed');
            }
        }
        $(e.target).toggleClass('header-closed');
        $(e.target.hash).slideToggle();
        window.location.hash = e.target.hash;
        return false;
    });
};

AKO.toggleFromUrl = function () {
    var url = window.location.hash,
        containers = ['.section-1', '.section-2'],
        i,j, el;

    $('document').ready(function() {
        setTimeout(function() {
            console.log($('a[href="'+ url +'"]')[0].hash);
//            if ($('a[href="'+ url +'"]')[0].hash == url) {
//                $($('a[href="'+ url +'"]')[0]).trigger('click');
//                console.log('e');
//            }
//            else {
                for (i = 0; i < containers.length; i++) {
                    el =  $('section', containers[i]);
                    for (j = 0; j < el.length; j++) {
                        if ('#' + $(el)[j].id == url) {
                            $('a[href="#'+ $(containers[i])[0].id + '"]').trigger('click');
                            $($($(el)[j])[0].previousElementSibling).trigger('click');
                        }
                    }
                }
//            }
        },10);
    });
};

AKO.switchMenu = function () {
    var menuItems = $('#tabs li'),
        menuItemActiveId,
        containers = ['.section-1', '.section-2'],
        i;

    menuItems.click(function (e) {
        $('a', menuItems).removeClass('selected');
        $('a', $(this)).addClass('selected');
        menuItemActiveId = e.target.hash;

        for (i = 0; i < containers.length; i++) {
            $(containers[i]).hide();
        }
        $(menuItemActiveId).slideDown();
    });
};

AKO.markCheckbox = function () {
    $('#checkbox-1').click(function () {
        if ($(this).prop('checked')) {
            $(this).attr({checked: 'checked'});
        }
        else {
            $(this).removeAttr('checked');
        }
    });
};

AKO.init = function () {
    AKO.toggleFromUrl();
    AKO.toogleAll();
    AKO.switchMenu();
    AKO.toggleContent();
    AKO.markCheckbox();

};


