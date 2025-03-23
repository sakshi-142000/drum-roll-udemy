var n=document.querySelectorAll('.drum').length;

for(var i=0; i<n; i++){
    document.querySelectorAll('.drum')[i].addEventListener('click', function(){
        var drumId=this.innerHTML;
        playSound(drumId);
        buttonShadow(drumId);
    });
}

document.addEventListener('keypress', function(event){
    var key=event.key;
    playSound(key);
    buttonShadow(key);
});

function playSound(key){
    var soundTrack='sounds/'
    switch (key){
        case 'w':
            soundTrack+='tom-1.mp3';
            break;
        case 'a':
            soundTrack+='tom-2.mp3';
            break;
        case 's':
            soundTrack+='tom-3.mp3';
            break;
        case 'd':
            soundTrack+='tom-4.mp3';
            break;
        case 'j':
            soundTrack+='snare.mp3';
            break;
        case 'k':
            soundTrack+='kick-bass.mp3';
            break;
        case 'l':
            soundTrack+='crash.mp3';
            break;
    }
    var sound= new Audio(soundTrack);
    sound.play();
}

function buttonShadow(key){
    var activeButton=document.querySelector('.'+key);
    activeButton.classList.add('pressed');

    setTimeout(function(){
        activeButton.classList.remove('pressed');
    }, 100);
}
