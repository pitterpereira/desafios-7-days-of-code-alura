document.body.addEventListener('keyup', (event) => {

    PlaySound(event.code.toLowerCase());
});

document.querySelector('.composer button').addEventListener('click', () => {


    let song = document.querySelector('#input').value;

    if (song !== '') {
        let songArray = song.split('');
        console.log(songArray)
        playSong(songArray);
    }


});


function PlaySound(sound) {

    let audioElement = document.querySelector(`#s_${sound.toLowerCase()}`);
    let keyElement = document.querySelector(`div[data-key="${sound}"]`)

    if (audioElement) {
        audioElement.currentTime = 0; //reset for repeat
        audioElement.play();
    }

    if (keyElement) {
        keyElement.classList.add('active');//yellow indicator for active

        setTimeout(() => {

            keyElement.classList.remove('active');
        }, 300)
    }


}

function playSong(notes) {
    let wait = 0
    for (let songNote of notes) {
        setTimeout(() => {
            PlaySound(`key${songNote}`);
        }, wait)


        wait += 250 //making 4 notes/sec rhythm
    }



}

