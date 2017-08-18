function removeDomain(id, token, confirmText) {
    if (window.confirm(confirmText)) {
        $.ajax({
            type: 'DELETE',
            url: OC.generateUrl('/settings/domains/{id}', {id: id}),
            data: {
                requesttoken: token
            }
        }).success(function() {
            // TODO: Don't do a full page reload
            location.reload(true);
        });
    }
}

$(document).ready(function () {
    $('.removeDomainButton').on('click', function () {
        var id = $(this).attr('data-id');
        var confirmText = $(this).attr('data-confirm');
        var token = OC.requestToken;
        removeDomain(id, token, confirmText);
	});
});
