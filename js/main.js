const blogs = document.querySelector('#blogs');
const hamburgerMenu = document.querySelector('.hamburger-menu-icon');
const hamburgerMenuLinks = document.querySelector('.hamburger-menu-links');

fetch('http://localhost:5000/posts')
	.then(response => response.json())
	.then(data => {
		data.forEach(data => {

			const div = document.createElement('div');
			const h1 = document.createElement('h1');
			const h3 = document.createElement('h3');
			const p = document.createElement('p');

			console.log(data['author']);
			h1.innerHTML = data.title;
			h3.innerHTML = data.author;
			p.innerHTML = data.content;
			div.append(h1, h3, p);
			blogs.append(div);
		})
	});

hamburgerMenu.onclick = () => {
	const menuStyle = hamburgerMenuLinks.style.display;
	if (menuStyle === 'none') {
		hamburgerMenuLinks.style.display = 'block'
	} else {
		hamburgerMenuLinks.style.display = 'none'
	}
}
	
