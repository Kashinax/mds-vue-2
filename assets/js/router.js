urlApi = "https://back.ruben-lecomte.fr/wp-json";

function getPage(slug) {
    var posts = [];
    $.ajax({
        type: 'GET',
        url: urlApi + '/wp/v2/pages?slug=' + slug,
        async: false,
        success: function (res) {
            posts = res;
        },
        error: function (response) {
            // Show error message
            alert(response.responseJSON.message);
        }
    }).always(function () {
        // e.g. Remove 'loading' class.
        $('.chargement').addClass('fini');
    });
    return posts;
}