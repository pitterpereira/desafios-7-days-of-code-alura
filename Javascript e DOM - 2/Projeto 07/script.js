document.querySelectorAll('.item').forEach(item => {
    item.addEventListener('dragstart', dragStart);
    item.addEventListener('dragend', dragEnd);
})

document.querySelectorAll('.area').forEach(area => {
    area.addEventListener('dragover', dragover);
    area.addEventListener('dragleave', dragleave);
    area.addEventListener('drop', drop);
})

document.querySelector('.neutralArea').addEventListener('dragover', MainDragover);
document.querySelector('.neutralArea').addEventListener('dragleave', MainDragleave);
document.querySelector('.neutralArea').addEventListener('drop', MainDrop);


let areas = {
    a: null, b: null, c: null

}

function dragStart(e) {

    e.currentTarget.classList.add('dragging')
}

function dragEnd(e) {
    e.currentTarget.classList.remove('dragging')
}

function dragover(e) {
    if (e.currentTarget.querySelector('.item') == null) {
        e.preventDefault();
        e.currentTarget.classList.add('hover');
    }

}
function dragleave(e) {
    e.currentTarget.classList.remove('hover')
}

function drop(e) {


    e.currentTarget.classList.remove('hover')


    if (e.currentTarget.querySelector('.item') == null) {
        let dragItem = document.querySelector('.item.dragging');

        e.currentTarget.appendChild(dragItem)
    }
    updateAreas();

}


function MainDragover(e) {

    e.preventDefault();
    e.currentTarget.classList.add('hover');

}
function MainDragleave(e) {
    e.currentTarget.classList.remove('hover')
}
function MainDrop(e) {

    e.currentTarget.classList.remove('hover')
    let dragItem = document.querySelector('.item.dragging');
    e.currentTarget.appendChild(dragItem)

    updateAreas()
}


function updateAreas() {

    document.querySelectorAll('.area').forEach(area => {
        let name = area.getAttribute('data-name');
        if (area.querySelector('.item') !== null) {
            areas[name] = area.querySelector('.item').innerHTML;
        }
        else {
            areas[name] = null
        }
    })


    if (areas.a == '1' && areas.b == '2' && areas.c == '3') {
        document.querySelector('.areas').classList.add('correct')
    }
    else {
        document.querySelector('.areas').classList.remove('correct')


    }

}