// Event data
const eventData = {
    featured: [
        {
            id: 1,
            title: "Lakeside Camping at Pawna",
            category: "Travel & Adventure",
            date: { month: "NOV", day: "25-26" },
            time: "6:30 PM - 7:30 PM",
            location: "Adventure Geek - Explore the Unexplored",
            price: "NGN 1,400",
            interested: 14,
            type: "adventure",
            free: false
        },
        {
            id: 2,
            title: "Sound Of Christmas 2023",
            category: "Cultural & Arts",
            date: { month: "DEC", day: "02" },
            time: "4:00 PM - 5:30 PM",
            location: "Victoria Island, Lagos",
            price: "NGN 499",
            interested: 16,
            type: "cultural",
            free: false
        },
        {
            id: 3,
            title: "Meet the Royal College of Art in Lagos 2023",
            category: "Educational & Business",
            date: { month: "DEC", day: "02" },
            time: "10 AM - 5 PM",
            location: "Ikeja, Lagos",
            price: "FREE",
            interested: 0,
            type: "education",
            free: true
        },
        {
            id: 4,
            title: "Global Engineering Education Expo 2023",
            category: "Educational & Business",
            date: { month: "DEC", day: "03" },
            time: "10 AM - 2 PM",
            location: "Landmark VI, Lagos",
            price: "FREE",
            interested: 48,
            type: "education",
            free: true
        },
        {
            id: 5,
            title: "Cricket Business Meetup",
            category: "Sports & Fitness",
            date: { month: "DEC", day: "08" },
            time: "6:00 PM - 9:30 PM",
            location: "TBS, Lagos",
            price: "NGN 399",
            interested: 0,
            type: "sports",
            free: false
        },
        {
            id: 6,
            title: "Valentine's Day Sail on a Yacht in Lagos",
            category: "Travel & Adventure",
            date: { month: "FEB", day: "14" },
            time: "7 AM - 8 PM",
            location: "Lagos",
            price: "NGN 2,999",
            interested: 160,
            type: "adventure",
            free: false
        }
    ],
    hot: [
        {
            id: 7,
            title: "The Road to Jobs and Internships: Starting with LinkedIn",
            category: "Educational & Business",
            date: { month: "JAN", day: "13" },
            time: "6 PM - 7:30 PM",
            location: "Online",
            price: "NGN 49",
            interested: 21,
            type: "education",
            free: false
        },
        {
            id: 8,
            title: "Online Zumba Dance Fitness Class over ZOOM",
            category: "Sports & Fitness",
            date: { month: "NOV", day: "29" },
            time: "7 PM - 8 PM",
            location: "Online",
            price: "NGN 7",
            interested: 0,
            type: "sports",
            free: false
        },
        {
            id: 9,
            title: "Easy book folding: Christmas edition",
            category: "Cultural & Arts",
            date: { month: "DEC", day: "12" },
            time: "4 PM - 5:30 PM",
            location: "Online",
            price: "FREE",
            interested: 10,
            type: "cultural",
            free: true
        },
        {
            id: 10,
            title: "Voices from the Rome Synod: An evening with Austin Ivereigh",
            category: "Cultural & Arts",
            date: { month: "DEC", day: "14" },
            time: "1 PM - 2 PM",
            location: "Online",
            price: "FREE",
            interested: 37,
            type: "cultural",
            free: true
        },
        {
            id: 11,
            title: "HackerX - Zurich (Full-Stack) 11/29 Virtual Event",
            category: "Technology & Innovation",
            date: { month: "NOV", day: "29" },
            time: "11:30 AM - 1:30 PM",
            location: "Online",
            price: "USD 5- 50",
            interested: 15,
            type: "technology",
            free: false
        },
        {
            id: 12,
            title: "FRIENDS OF THE METAVERSE: Season of Innovation 2023",
            category: "Technology & Innovation",
            date: { month: "DEC", day: "07" },
            time: "10:30 AM - 5 PM",
            location: "Online",
            price: "USD 0 - 150",
            interested: 10,
            type: "technology",
            free: false
        }
    ]
};

// DOM Elements
const header = document.querySelector('.header');
const searchInput = document.querySelector('.search-input');
const locationSelect = document.querySelector('.location-select');
const categoryItems = document.querySelectorAll('.category-item');
const filterButtons = document.querySelectorAll('.filter-btn');
const featuredEventsGrid = document.getElementById('featuredEvents');
const hotEventsGrid = document.getElementById('hotEvents');

// Header scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Create event card HTML
function createEventCard(event) {
    return `
        <div class="event-card fade-in" data-category="${event.type}" data-free="${event.free}">
            <div class="event-image">
                <div class="event-category">${event.category}</div>
                <button class="bookmark">☆</button>
            </div>
            <div class="event-content-wrapper">
                <div class="event-date-section">
                    <div class="event-date">
                        <div class="month">${event.date.month}</div>
                        <div class="day">${event.date.day}</div>
                    </div>
                </div>
                <div class="event-info-section">
                    <div class="event-content">
                        <h3 class="event-title">${event.title}</h3>
                        <div class="event-location">${event.location}</div>
                        <div class="event-time">${event.time}</div>
                        <div class="event-bottom-row">
                            <div class="event-price">${event.price}</div>
                            <div class="event-engagement">⭐ ${event.interested} interested</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Render events
function renderEvents(container, events) {
    container.innerHTML = events.map(createEventCard).join('');
    
    // Add click listeners to event cards
    container.querySelectorAll('.event-card').forEach(card => {
        card.addEventListener('click', (e) => {
            if (!e.target.classList.contains('bookmark')) {
                console.log('Event clicked:', card.querySelector('.event-title').textContent);
            }
        });
    });

    // Add bookmark functionality
    container.querySelectorAll('.bookmark').forEach(bookmark => {
        bookmark.addEventListener('click', (e) => {
            e.stopPropagation();
            bookmark.style.color = bookmark.style.color === 'red' ? '' : 'red';
        });
    });
}

// Filter events
function filterEvents(filter) {
    const events = document.querySelectorAll('.event-card');
    events.forEach(event => {
        event.style.display = 'block';
        
        if (filter === 'free' && event.dataset.free !== 'true') {
            event.style.display = 'none';
        } else if (filter !== 'all' && filter !== 'free') {
            // For demo purposes, showing all events for other filters
        }
    });
}

// Search functionality
searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const events = document.querySelectorAll('.event-card');
    
    events.forEach(event => {
        const title = event.querySelector('.event-title').textContent.toLowerCase();
        const category = event.querySelector('.event-category').textContent.toLowerCase();
        const location = event.querySelector('.event-location').textContent.toLowerCase();
        
        if (title.includes(query) || category.includes(query) || location.includes(query)) {
            event.style.display = 'block';
        } else {
            event.style.display = 'none';
        }
    });
});

// Category filtering
categoryItems.forEach(item => {
    item.addEventListener('click', () => {
        const category = item.dataset.category;
        console.log('Category clicked:', category);
        
        // Add visual feedback
        item.style.transform = 'scale(1.05)';
        setTimeout(() => {
            item.style.transform = '';
        }, 200);
    });
});

// Filter button functionality
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        
        const filter = button.dataset.filter;
        filterEvents(filter);
    });
});

// Location change
locationSelect.addEventListener('change', (e) => {
    console.log('Location changed to:', e.target.value);
    // For now in console, but if we move forward a search trigger
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderEvents(featuredEventsGrid, eventData.featured);
    renderEvents(hotEventsGrid, eventData.hot);
    
    // Add loading state simulation
    setTimeout(() => {
        document.querySelectorAll('.event-card').forEach((card, index) => {
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 100);
        });
    }, 500);
});

// Mobile menu toggle (basic implementation)
document.querySelector('.mobile-menu-btn').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add intersection observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.category-item, .event-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.6s ease';
        observer.observe(el);
    });
});
