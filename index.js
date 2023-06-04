const sections = document.querySelectorAll('.section');
const secBtns = document.querySelectorAll('.social_network');
const secBtn = document.querySelectorAll('.fa_icons');
const allSections = document.querySelector('.main-content');


window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) 
        {
            secBtn.forEach(btn => {
                if (btn.getAttribute('data-id') === id) {
                  btn.classList.add('active-btn');
                } else {
                  btn.classList.remove('active-btn');
                }
              });
              
        };
    });
}


