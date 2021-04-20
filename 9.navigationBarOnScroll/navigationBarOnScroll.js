const header = document.querySelector('header');
const main = document.querySelector('main');
const links = document.querySelectorAll('a');
const logo = document.querySelector('.fa-mountain');
const bars = document.querySelector('.fa-bars');
const navigation = document.querySelector('#navigation');

window.addEventListener('scroll', function(e) {
    // console.log('scroll ',window.pageYOffset);
    // console.log('header height: ',header.getBoundingClientRect().height)
    let scroll_height = window.pageYOffset;
    let header_height = header.getBoundingClientRect().height
    if(scroll_height > header_height)
    {

        if(window.innerWidth == 360) {
            console.log('360');
            logo.style.marginRight = '60px';
            bars.style.color = '#000';
            
        }
        else if( window.innerWidth == 375)
        {
            console.log('375');
            logo.style.marginRight = '60px';
            bars.style.color = '#000';
        }
        
        else 
        {
            logo.style.marginRight = '125px';
            
        }

        



        header.style.position = 'fixed';
        header.style.width = '100vw';
        header.style.backgroundColor = '#fff';
        header.style.borderBottom = '1px solid rgb(230, 230, 230)';
        
        logo.style.textAlign = 'right';
        links.forEach(link => link.style.color = '#000');

        
        
        //border-bottom: 1px solid rgb(231, 231, 231);
        
    } 
    else if(scroll_height === 0)
    {

        if(window.innerWidth === 360 || window.innerWidth === 375) {
            console.log('360');
            links.forEach(link => link.style.color = '#000');
            bars.style.color = '#fff';            
        } 
        else {
            links.forEach(link => link.style.color = '#fff');
        }
        console.log('same');
        header.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        
        header.style.borderBottom = 'none';
        
    }

    
    
})

bars.addEventListener('click', function(e) {
    
    navigation.classList.toggle('show');
    const nav = navigation.classList
    if(nav.contains('show'))
    {
        console.log('show');
        navigation.style.display = 'block';
        header.style.backgroundColor = '#fff';
        bars.style.color = '#000';
    }
    else 
    {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0)';
        navigation.style.display = 'none';
    }
    console.log(navigation);
    
})