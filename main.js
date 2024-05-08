window.addEventListener('DOMContentLoaded', function(){
    const slider = document.getElementById('slider');
    const circle = slider.querySelector('.circle');
    const valueDisplay = slider.querySelector('.value');
    let isDragging = false;

    function movecircle(clientX){
        const sliderRect = slider.getBoundingClientRect();
        let position = clientX - sliderRect.left - (circle.offsetWidth / 2);
        if (position < 0){
            position = 0;
        } 
        else if (position > sliderRect.width - circle.offsetWidth){
            position = sliderRect.width - circle.offsetWidth;
        }
        circle.style.left = `${position}px`;
        const value = Math.round((position / (sliderRect.width - circle.offsetWidth)) * 100);
        valueDisplay.textContent = value;
    }
    
    
    function startDrag(e){
        isDragging = true;
        movecircle(e.clientX);
    }
    function endDrag(){
        isDragging = false;
    }
    function drag(e){
        if (isDragging) {
            movecircle(e.clientX);
        }
    }

    slider.addEventListener('mousedown', startDrag);
    window.addEventListener('mouseup', endDrag);
    window.addEventListener('mousemove', drag);
});