export default {
    initUI() {
        $(".preloader").fadeOut();

        var set = function () {
            var width = (window.innerWidth > 0) ? window.innerWidth : this.screen.width;
            if (width < 1170) {
                $("#main-wrapper").attr("data-sidebartype", "mini-sidebar");
            } else {
                $("#main-wrapper").attr("data-sidebartype", "full");
            }
        };
        $(window).ready(set);
        $(window).on("resize", set);
  
        $(".left-sidebar").hover(
            function() {
                $(".navbar-header").addClass("expand-logo");
            },
            function() {
                $(".navbar-header").removeClass("expand-logo");
            }
        );
        // this is for close icon when navigation open in mobile view
        $(".nav-toggler").on('click', function() {
            $("#main-wrapper").toggleClass("show-sidebar");
            $(".nav-toggler i").toggleClass("ti-menu");
        });
        $(".search-box a, .search-box .app-search .srh-btn").on('click', function() {
            $(".app-search").toggle(200);
            $(".app-search input").focus();
        });
  
        $(function() {
            $(".service-panel-toggle").on('click', function() {
                $(".customizer").toggleClass('show-service-panel');
  
            });
            $('.page-wrapper').on('click', function() {
                $(".customizer").removeClass('show-service-panel');
            });
        });
        $('.floating-labels .form-control').on('focus blur', function(e) {
            $(this).parents('.form-group').toggleClass('focused', (e.type === 'focus' || this.value.length > 0));
        }).trigger('blur');
  
        $(function() {
                $('[data-toggle="tooltip"]').tooltip()
            })
        $(function() {
            $('[data-toggle="popover"]').popover()
        })
  
        $("body, .page-wrapper").trigger("resize");
        $(".page-wrapper").delay(20).show();
  
        $('a[data-action="collapse"]').on('click', function(e) {
            e.preventDefault();
            $(this).closest('.card').find('[data-action="collapse"] i').toggleClass('ti-minus ti-plus');
            $(this).closest('.card').children('.card-body').collapse('toggle');
        });
        // Toggle fullscreen
        $('a[data-action="expand"]').on('click', function(e) {
            e.preventDefault();
            $(this).closest('.card').find('[data-action="expand"] i').toggleClass('mdi-arrow-expand mdi-arrow-compress');
            $(this).closest('.card').toggleClass('card-fullscreen');
        });
        // Close Card
        $('a[data-action="close"]').on('click', function() {
            $(this).closest('.card').removeClass().slideUp('fast');
        });
        $(document).on('click', '.mega-dropdown', function(e) {
            e.stopPropagation()
        });
  
        $(".show-left-part").on('click', function() {
            $('.left-part').toggleClass('show-panel');
            $('.show-left-part').toggleClass('ti-menu');
        });
    }
}