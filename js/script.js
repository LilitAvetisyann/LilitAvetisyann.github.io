$(document).ready(function(){
    
// filtering


var filterActive;

function filterCategory(category) {
    if (filterActive != category) {
        
        // reset results list
        $('.filter-cat-results .f-cat').removeClass('active');
        
        // elements to be filtered
        $('.filter-cat-results .f-cat')
            .filter('[data-cat="' + category + '"]')
            .addClass('active');
        
        // reset active filter
        filterActive = category;
        $('.filtering button').removeClass('active');
    }
}

$('.f-cat').addClass('active');

$('.filtering button').click(function() {
    if ($(this).hasClass('cat-all')) {
        $('.filter-cat-results .f-cat').addClass('active');
        filterActive = 'cat-all';
        $('.filtering button').removeClass('active');
    } else {
        filterCategory($(this).attr('data-cat'));
    }
    $(this).addClass('active');
});

   
})













// ----TVER-------
$(document).ready(function(){
   
    $({counter:0}).animate({counter:3200},{
        duration : 2000,
        easing :'linear',
        step :function(){
            $('.number1').text(Math.ceil(this.counter))
        } 
    })
    $({counter:0}).animate({counter:120},{
        duration : 2000,
        easing :'linear',
        step :function(){
            $('.number2').text(Math.ceil(this.counter))
        } 
    })
    $({counter:0}).animate({counter:360},{
        duration : 2000,
        easing :'linear',
        step :function(){
            $('.number3').text(Math.ceil(this.counter))
        } 
    })
    $({counter:0}).animate({counter:5500},{
        duration : 2000,
        easing :'linear',
        step :function(){
            $('.number4').text(Math.ceil(this.counter))
        } 
    })


    // section open



    $(window).scroll(function(){
        $('section').each(function(){  
            var x = $(window).scrollTop() + $(window).height();
            var y = $(this).offset().top + $(this).height() / 2;

            if (x >= y){
                $(this).addClass('active')
             }

          })
   
    })

})

// ------MENU ANIMATION-------
