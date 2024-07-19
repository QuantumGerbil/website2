document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        console.log('Form submitted:', { name, email, message });

        alert('Thanks for your message! I\'ll get back to you faster than you can say "Totoro"!');

        contactForm.reset();
    });

    // Ghibli-inspired animation for project items
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        project.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 6px 12px rgba(0, 0, 0, 0.15)';
            this.style.transition = 'all 0.3s ease';
        });

        project.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
        });
    });

    // Easter egg: Totoro cursor
    let totoroMode = false;
    document.addEventListener('keydown', function(e) {
        if (e.key === 't' || e.key === 'T') {
            totoroMode = !totoroMode;
            document.body.style.cursor = totoroMode ? 'url(totoro-cursor.png), auto' : 'default';
        }
    });

    // Blog post data
    const blogPosts = [
        {
            title: "The Importance of FOSS in Archival Work",
            content: "Exploring how Free and Open Source Software is revolutionizing digital archiving...",
            image: "https://picsum.photos/300/200",
            views: "1.2k"
        },
        {
            title: "Linux for Archivists: A Beginner's Guide",
            content: "Getting started with Linux in your archival workflow...",
            image: "https://picsum.photos/300/250",
            views: "2.5k"
        },
        {
            title: "Rust vs C++: Which to Choose for Archival Tools?",
            content: "Comparing Rust and C++ for developing custom archival software...",
            image: "https://picsum.photos/300/180",
            views: "3.1k"
        },
        {
            title: "Studio Ghibli's Approach to Preserving Animation History",
            content: "Lessons from Studio Ghibli on preserving digital and traditional animation...",
            image: "https://picsum.photos/300/220",
            views: "4.7k"
        }
    ];

const container = document.getElementById('masonry-container');

    // Create and append blog post cards
    blogPosts.forEach(post => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="view-count" aria-label="View count">
                <i class="fas fa-eye" aria-hidden="true"></i>
                <span>${post.views}</span>
            </div>
            <div class="card-image-container">
                <img src="${post.image}" alt="Illustration for ${post.title}" class="card-image">
            </div>
            <div class="user-info">
                <img src="https://i.pravatar.cc/60?img=1" alt="Bryan Morgan avatar" class="user-avatar">
                <div class="user-banner">
                    <span class="username">@BryanMorgan</span>
                </div>
            </div>
            <div class="card-content">
                <h2>${post.title}</h2>
                <p>${post.content}</p>
                <a href="#" aria-label="Read full article about ${post.title}">Read more</a>
            </div>
        `;
        container.appendChild(card);
    });

    // Masonry layout function
    function masonryLayout() {
        const cards = Array.from(container.querySelectorAll('.card'));
        const containerWidth = container.offsetWidth;
        const cardWidth = cards[0].offsetWidth;
        const gap = 20; // Gap between cards
        const columns = Math.floor((containerWidth + gap) / (cardWidth + gap));
        const columnHeights = Array(columns).fill(0);

        cards.forEach((card) => {
            card.style.position = 'absolute';
            const shortestColumn = columnHeights.indexOf(Math.min(...columnHeights));
            const x = shortestColumn * (cardWidth + gap);
            const y = columnHeights[shortestColumn];

            card.style.transform = `translate(${x}px, ${y}px)`;
            columnHeights[shortestColumn] += card.offsetHeight + gap;
        });

        container.style.height = `${Math.max(...columnHeights)}px`;
    }

    // Initial layout
    window.addEventListener('load', () => {
        container.style.position = 'relative';
        masonryLayout();
    });

    // Reflow on window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(masonryLayout, 100);
    });
});
