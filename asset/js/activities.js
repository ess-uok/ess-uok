const newsSegments = [
    { id: 1, title: 'Arduino Work Shop', content: 'Join our Arduino Workshop series, presented by the Electronic Students Society (ESS) at the University of Kelaniya, to delve into the exciting world of microcontrollers and electronics. This workshop is perfect for beginners and enthusiasts eager to learn about Arduino programming and circuit design. Participants will gain practical experience through hands-on projects, developing their skills in creating interactive and automated systems. From understanding the basics to crafting innovative solutions, this series offers a comprehensive introduction to Arduino. Embrace the opportunity to enhance your technical expertise and explore the limitless possibilities of electronic innovation in a collaborative learning environment.' },
    { id: 2, title: 'Evolve', content: 'The main aim of the school category is to provide a platform for school students to show their talents. Awareness sessions are held for both categories, which are led by industry experts to refine their skills and add that extra sparkle to their projects helping them take a step towards becoming a professional or even an expert in the industry.The Evolve 24 is all about presenting opportunities to all talented students.' },
    { id: 3, title: '3D model Workshop', content: 'Embark on a creative journey with our comprehensive 3D Blender Workshop series, organized by the Electronic Students Society (ESS) at the University of Kelaniya. This workshop is designed for both beginners and enthusiasts looking to explore the dynamic world of 3D modeling and animation. Participants will gain hands-on experience, transforming their ideas into stunning visual creations. From mastering the basics of Blender to crafting intricate designs, this series provides a platform for innovation and skill enhancement. Join us to unlock your potential, enhance your digital artistry, and bring your imagination to life in a supportive and engaging learning environment!' },
    { id: 4, title: 'News Segment 4', content: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.' },
    { id: 5, title: 'News Segment 5', content: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.' },
];

const segmentsPerPage = 3;
let currentPage = 1;

function displaySegments() {
    const newsContainer = document.getElementById('newsContainer');
    newsContainer.innerHTML = '';

    const indexOfLastSegment = currentPage * segmentsPerPage;
    const indexOfFirstSegment = indexOfLastSegment - segmentsPerPage;
    const currentSegments = newsSegments.slice(indexOfFirstSegment, indexOfLastSegment);

    currentSegments.forEach(segment => {
        const segmentDiv = document.createElement('div');
        segmentDiv.classList.add('news-segment');

        const img = document.createElement('img');
        img.src = `/asset/img/news${segment.id}.jpg`;
        img.alt = 'News';
        img.classList.add('news-image');
        img.width = 450 ; 
        img.height = 350;

        img.style.width = '100%'; // specify the desired width in pixels
        img.style.height = '350px';

        const contentDiv = document.createElement('div');
        contentDiv.classList.add('news-content');

        const title = document.createElement('p');
        title.classList.add('news-title');
        title.textContent = segment.title;

        const content = document.createElement('p');
        content.textContent = segment.content;

        contentDiv.appendChild(title);
        contentDiv.appendChild(content);
        segmentDiv.appendChild(img);
        segmentDiv.appendChild(contentDiv);
        newsContainer.appendChild(segmentDiv);
    });
}

function displayPagination() {
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    const pageCount = Math.ceil(newsSegments.length / segmentsPerPage);

    for (let i = 1; i <= pageCount; i++) {
        const button = document.createElement('button');
        button.textContent = i;
        button.classList.add(currentPage === i ? 'active' : '');
        button.addEventListener('click', () => {
            currentPage = i;
            displaySegments();
            displayPagination();
        });
        pagination.appendChild(button);
    }
}

displaySegments();
displayPagination();
