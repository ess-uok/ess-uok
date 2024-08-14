const newsSegments = [
    { id: 1, title: 'Arduino Work Shop', content: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.' },
    { id: 2, title: 'Evolve', content: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.' },
    { id: 3, title: '3D model Workshop', content: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.' },
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
