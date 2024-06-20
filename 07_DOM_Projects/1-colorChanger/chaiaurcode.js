const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach((button)=>{ 
    button.addEventListener('click',(e)=>{
        const color = e.target.id
        switch (color) {
            case 'grey':
                body.style.backgroundColor = e.target.id
                break;
            case 'white':
                body.style.backgroundColor = e.target.id
                break;
            case 'blue':
                body.style.backgroundColor = e.target.id
                break;
            case 'yellow':
                body.style.backgroundColor = e.target.id
                break;
            case 'purple':
                body.style.backgroundColor = e.target.id
                break;
        
            default:
                break;
        }
        
        
        
        // if(e.target.id === 'grey'){
        //     body.style.backgroundColor = e.target.id
        // }
        // if(e.target.id === 'white'){
        //     body.style.backgroundColor = e.target.id
        // }
        // if(e.target.id === 'blue'){
        //     body.style.backgroundColor = e.target.id
        // }
        // if(e.target.id === 'yellow'){
        //     body.style.backgroundColor = e.target.id
        // }
    })
})