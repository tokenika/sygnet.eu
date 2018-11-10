$(function () {
    if($(window).width() >= 1200){
        $.scrollify({
            section: ".main-section",
            interstitialSection: '.footer',
            scrollbars: false,
            before: function (i, section) {
                var ref = section[i].attr("data-section-name");
                $(".pagination .active").removeClass("active");
                $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
            },
            afterRender: function () {
                var pagination = "<ul class=\"pagination\">";
                var activeClass = "";
                $(".main-section").each(function (i) {
                    activeClass = "";
                    if (i === 0) {
                        activeClass = "active";
                    }
                    pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(
                            this).attr("data-section-name") +
                        "\"><span class=\"hover-text\">" + $(this).attr(
                            "data-section-name").charAt(0).toUpperCase() + $(this).attr(
                            "data-section-name").slice(1) + "</span></a></li>";
                });
                pagination += "</ul>";
                $("#main").append(pagination);
                $(".pagination a").on("click", $.scrollify.move);
            }
        });
    }
});

$(window).on('resize', function() {
    if($(window).width() >= 1200){
        $.scrollify({
            section: ".main-section",
            interstitialSection: '.footer',
            scrollbars: false,
            before: function (i, section) {
                var ref = section[i].attr("data-section-name");
                $(".pagination .active").removeClass("active");
                $(".pagination").find("a[href=\"#" + ref + "\"]").addClass("active");
            },
            afterRender: function () {
                var pagination = "<ul class=\"pagination\">";
                var activeClass = "";
                $(".main-section").each(function (i) {
                    activeClass = "";
                    if (i === 0) {
                        activeClass = "active";
                    }
                    pagination += "<li><a class=\"" + activeClass + "\" href=\"#" + $(
                            this).attr("data-section-name") +
                        "\"><span class=\"hover-text\">" + $(this).attr(
                            "data-section-name").charAt(0).toUpperCase() + $(this).attr(
                            "data-section-name").slice(1) + "</span></a></li>";
                });
                pagination += "</ul>";
                $("#main").append(pagination);
                $(".pagination a").on("click", $.scrollify.move);
            }
        });
    } else {
        $.scrollify.destroy();
    }
});