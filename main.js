$(document).ready(function() {
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const reposElement = document.querySelector('#repos');
    const avatarElement = document.querySelector('#avatar');
    const followingElement = document.querySelector('#following');
    const followersElement = document.querySelector('#followers');
    const linkElement = document.querySelector('#link');


        fetch('https://api.github.com/users/nanahmattos').then(function(resposta){
            return resposta.json();
        })

        .then(function(resposta){
        nameElement.innerText = resposta.name;
        usernameElement.innerText = resposta.login;
        reposElement.innerText = resposta.public_repos;
        linkElement.href = resposta.html_url;
        avatarElement.src = resposta.avatar_url;
        followingElement.innerText = resposta.following;
        followersElement.innerText = resposta.followers;
        linkElement.href = resposta.html_url;
        })

        .catch(function(erro){
            alert("Tente novamente mais tarde");
        })
        
    })

