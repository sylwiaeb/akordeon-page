var AKO = {};

AKO.toogleAll = function () {
    var headerClosed = 'header-closed',
        showAll = 'show-all';

    $('.change-panels-state').click(function (e) {

        if ($(this).hasClass(showAll)) {

            $(this).removeClass(showAll);
            $('.header').addClass(headerClosed).next().slideUp();

        } else {

            $(this).addClass(showAll);
            $('.header').removeClass(headerClosed).next().slideDown();
        }

        $('.caption').text($(this).text() === 'Rozwiń wszystkie' ? 'Zwiń wszystkie' : 'Rozwiń wszystkie');

        e.preventDefault();
    });
};

AKO.toggleContent = function () {
    var containers = $('.content section'),
        containersLength = containers.length,
        headers = $('.header'),
        headerClosed = 'header-closed',
        i;

    headers.click(function (e) {
        for (i = 0; i < containersLength; i++) {
            if ($(this).hasClass(headerClosed)) {
                containers.slideUp();
                headers.addClass(headerClosed);
            }
        }
        $(e.target).toggleClass(headerClosed);
        $(e.target.hash).slideToggle();
        window.location.hash = e.target.hash;

        e.preventDefault();
    });
};

AKO.loadContentFromUrl = function () {
    var hashUrl = window.location.hash,
        containers = ['.section-1', '.section-2'],
        containersLength = containers.length,
        i,
        j,
        el;

        setTimeout(function () {

            if (!hashUrl) {
                $('a[href=#ubezpieczenia_na_zycie]').trigger('click');
            }

            for (i = 0; i < containersLength; i++) {
                el =  $('section', containers[i]);
                for (j = 0; j < el.length; j++) {
                    if ('#' + $(el)[j].id == hashUrl) {
                        $('a[href="#' + $(containers[i])[0].id + '"]').trigger('click');
                    }
                }
            }

            if (($('a[href="' + hashUrl + '"]')[0] && $('a[href="' + hashUrl + '"]')[0].hash) === hashUrl) {
                $($('a[href="' + hashUrl + '"]')[0]).trigger('click');
            }
        }, 10);
};

AKO.switchMenu = function () {
    var menuItems = $('#tabs li'),
        menuItemActiveId,
        containers = ['.section-1', '.section-2'],
        containersLength = containers.length,
        i;

    menuItems.click(function (e) {
        $('a', menuItems).removeClass('selected');
        $('a', this).addClass('selected');
        menuItemActiveId = e.target.hash;

        for (i = 0; i < containersLength; i++) {
            $(containers[i]).hide();
        }
        $(menuItemActiveId).slideDown();
        e.preventDefault();
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
    AKO.loadContentFromUrl();
    AKO.toogleAll();
    AKO.switchMenu();
    AKO.toggleContent();
    AKO.markCheckbox();
};
