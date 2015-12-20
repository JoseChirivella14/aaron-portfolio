$(function() {
    var heroImages = $('.hero-images');
    var contentIndex = -1;

    function showNextContent() {
        ++contentIndex;
        heroImages.eq(contentIndex % heroImages.length)
            .fadeIn(2000)
            .delay(2000)
            .fadeOut(2000, showNextContent);
    }
    showNextContent();
});
