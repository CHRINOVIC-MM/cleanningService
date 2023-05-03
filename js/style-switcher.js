

const themeColor = () =>{
    const hueSlider = document.querySelector(".js-hue-slider");
    const html = document.querySelector('html');

    const setHue = (value)=>{
        html.style.setProperty('--hue', value);
        document.querySelector('.js-hue').innerHTML = value
    }
    hueSlider.addEventListener('input', ()=>{
        setHue(this.value);

        localStorage.setItem('--hue', this.value);
    });

    if(localStorage.getItem('--hue') !== null){
        setHue(localStorage.getItem('--hue'));
    }
}

themeColor();