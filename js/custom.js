
$(document).ready(function () {

    $('.showcaseImg').hover(function () {
        $(this).css('opacity', '1');
        var innerButton = $(this).children('.btn')
        innerButton.css('border-radius', '20px')
        innerButton.html('See Itinerary')
        innerButton.addClass('afterbtn')
        var imageBubble = $(this).parents().children('img')
        var TextBubble = $(this).parents().children('.imagePreviewTexts')
        imageBubble.css('display','block');
        TextBubble.css('display','block');
    }, function () {
        $(this).css('opacity', '0.5');
        var btn = ` <i class="fa fa-eye"></i>`;
        var innerButton = $(this).children('.btn');
        innerButton.html(btn);
        innerButton.removeClass('afterbtn');
        var imageBubble = $(this).parents().children('img')
        var TextBubble = $(this).parents().children('.imagePreviewTexts')
        imageBubble.css('display','none');
        TextBubble.css('display','none');
    });


    $('.readmore').click(function () {
        var text = `On the road for 6 months, I never thought I would survive the harsh heat and seclusion of the Australian outback. I have never been so nervous about not having enough water or an empty tank it is the scariest moment in my life.
        But I do not regret having to seize this opportunity to explore the wonders of Australia from a different prespective away from tourism videos.`
        $('.articleContent').html(text)
    })
});
