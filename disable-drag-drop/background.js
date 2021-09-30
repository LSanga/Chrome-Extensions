//this function disable drag and drop on everything on the page
//to test, paste the code in the browser console

$('body').on('dragstart drop', function(e){
    e.preventDefault();
    return false;
});