function foot() {
    const foot_div = document.createElement('div');
    foot_div.classList.add('foot_div');
    const copyright = document.createElement('p');
    copyright.textContent = 'Copyright@ Harry Borison ::'

    const instargram = createLink('instargram', 'https://www.instagram.com/', );
    const facebook = createLink('facebook', 'https://www.facebook.com');
    const twitter = createLink('twitter', 'https://www.twitter.com');

    foot_div.appendChild(copyright);
    foot_div.appendChild(instargram);
    foot_div.appendChild(facebook);
    foot_div.appendChild(twitter);
    return foot_div;
}

function createLink(name, address) {
    const link = document.createElement('a');
    link.textContent = name;
    link.href = address;
    return link;
}



export default foot;