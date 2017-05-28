/* activate scrollspy menu */
$('body').scrollspy({
    target: '#navbar-collapsible',
    offset: 52
});

/* smooth scrolling sections */
$('a[href*=#]:not([href=#])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            $('html,body').animate({
                scrollTop: target.offset().top - 50
            }, 800);

            if (this.hash == "#home") {
                $('.scroll-up').hide();
            } else {
                $('.scroll-up').show();
            }

            // activte animations in this section
            target.find('.animate').delay(1200).addClass("animated");
            setTimeout(function () {
                target.find('.animated').removeClass("animated");
            }, 2000);

            return false;
        }
    }
});

/* Fechar menu navbar-collapse */
$('.navbar-collapse a').click(function () {
    $(".navbar-collapse").collapse('hide');
});

/* BtnEmail sweetalert and copy to clipboard */
$('.btn-clipboardTel').on('click', function () {
    // copying to clipboard
    var clipboard = new Clipboard('.btn-clipboardTel');

    // Alert sweetalert
    swal(
        '',
        '<i class="fa fa-sw fa-clipboard"></i> Telefone copiado para a área de transferência!',
        'success'
    )
});

/* BtnEmail sweetalert and copy to clipboard */
$('.btn-clipboardEmail').on('click', function () {
    // copying to clipboard
    var clipboard = new Clipboard('.btn-clipboardEmail');

    // Alert sweetalert
    swal(
        '',
        '<i class="fa fa-sw fa-clipboard"></i> E-mail copiado para a área de transferência!',
        'success'
    )
});
