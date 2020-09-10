$(function(){
    var timeoutCanvas;

    function toggleMenuCanvas(type){
        if(type == 'show'){
            $('.navbar-collapse').removeClass('hide-offcanfas');
            $('.navbar-collapse').toggleClass('show');
            $('.navbar').toggleClass('offcanvas-active');
        }else{
            if(timeoutCanvas){
                clearTimeout(timeoutCanvas);
                $('.navbar-collapse').removeClass('show');
                $('.navbar-collapse').removeClass('hide-offcanfas');
            }

            $('.navbar-collapse').addClass('hide-offcanfas');
            timeoutcanvas = setTimeout(() => {
                $('.navbar-collapse').removeClass('show');
                $('.navbar-collapse').removeClass('hide-offcanfas');
            }, 190);
            $('.navbar').removeClass('offcanvas-active');
        }
    }
    
    document.addEventListener('touchstart', handleTouchStart, false);        
    document.addEventListener('touchmove', handleTouchMove, false);

    var xDown = null;                                                        
    var yDown = null;

    function getTouches(evt) {
    return evt.touches ||             // browser API
            evt.originalEvent.touches; // jQuery
    }                                                     

    function handleTouchStart(evt) {
        const firstTouch = getTouches(evt)[0];                                      
        xDown = firstTouch.clientX;                                      
        yDown = firstTouch.clientY;                                      
    };                                                

    function handleTouchMove(evt) {
        if ( ! xDown || ! yDown ) {
            return;
        }

        var xUp = evt.touches[0].clientX;                                    
        var yUp = evt.touches[0].clientY;

        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;

        if ( Math.abs( xDiff ) > Math.abs( yDiff ) ) {/*most significant*/
            if ( xDiff > 0 ) {
                /* left swipe */ 
                toggleMenuCanvas('show');
            } else {
                /* right swipe */
                toggleMenuCanvas('hide');
            }                       
        } else {
            if ( yDiff > 0 ) {
                /* up swipe */ 
            } else { 
                /* down swipe */
            }                                                                 
        }
        /* reset values */
        xDown = null;
        yDown = null;                                             
    };
})