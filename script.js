function siteSearch() {
    let query = document.querySelectorAll('#year, #make, #model').value;
    var url = 'https://www.google.com/search?q=site:www.rockauto.com+' + encodeURIComponent(query);
    window.location.href = url;
}