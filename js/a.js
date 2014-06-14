var AKO = {};

AKO.tabs = function () {
    $('#tabs').tabs();

    $('#tabs').bind('click', function(e) {
        window.location.hash = e.target.hash;
        $('.selected').removeClass('selected');
        $(e.target).addClass('selected');
    });
};

AKO.accordition = function () {
    $('#life-insurance').accordion(
        {
            header: 'a.header',
            heightStyle: 'content',
            collapsible: true,
            active: false,
            navigation: true,
            icons: {
                header: 'icon-down-open',
                activeHeader: 'icon-up-open'
            },
            activate: function (event, ui) {
                $(ui.oldPanel.context).removeClass('header-open');
                $(ui.newPanel.context).addClass('header-open');

            }
        }
    );
};
AKO.toogleAll = function () {
    $('.change-panels-state').click(function() {
        $('.ui-accordion-header:not(.ui-state-active)').toggleClass('header-open').next().slideToggle();
        $('.title').text($(this).text() == 'Rozwiń wszystkie' ? 'Zwiń wsyzstkie' : 'Rozwiń wszystkie');
        $(this).toggleClass('show-all');
        return false;
    });

};

AKO.init = function () {
    AKO.tabs();
    AKO.accordition();
    AKO.toogleAll();
};