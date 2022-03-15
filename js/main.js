const btn = document.querySelector ('.btn');

btn.addEventListener('click', () => {
alert('Ты хороший котик');
})

const bag = document.querySelector('.bag');
bag.addEventListener('click', () => {
    bag.classList.toggle('hide')
})
const sectionTitle = document.querySelector('.section-title');
sectionTitle.addEventListener ('click', () => {
sectionTitle.innerHTML = 'Ты всё ещё хороший котик';
})

 


const dream = document.querySelector('span');
dream.addEventListener('mouseenter', () => {
dream.style.color = 'red';
})
dream.addEventListener('mouseout', () => {
    dream.style.color = '#fff';
    })