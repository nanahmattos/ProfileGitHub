$(document).ready(function() {
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const reposElement = document.querySelector('#repos');
    const avatarElement = document.querySelector('#avatar');
    const followingElement = document.querySelector('#following');
    const followersElement = document.querySelector('#followers');
    const linkElement = document.querySelector('#link');

    $.ajax('https://api.github.com/users/nanahmattos').done(function(json) {

        nameElement.innerText = json.name;
        usernameElement.innerText = json.login;
        reposElement.innerText = json.public_repos;
        linkElement.href = json.html_url;
        avatarElement.src = json.avatar_url;
        followingElement.innerText = json.following;
        followersElement.innerText = json.followers;
        linkElement.href = json.html_url;
    })
})

