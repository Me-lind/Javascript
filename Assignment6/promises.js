const apiUrl = 'http://localhost:3000/products';

        // Fetch Events from API
        async function fetchEvents() {
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const events = await response.json();
                return events;
            } catch (error) {
                console.error('Error fetching event data:', error);
            }
        }

        // Render Events to the DOM
        // Render Events to the DOM using Document Fragment for performance optimization
function renderEvents(events) {
    const eventContainer = document.getElementById('event-container');
    eventContainer.innerHTML = ''; // Clear existing content

    const fragment = document.createDocumentFragment(); // Create a document fragment

    events.forEach(event => {
        const eventCard = document.createElement('div');
        eventCard.classList.add('event-card');
        eventCard.innerHTML = `
            <img data-src="${event.imageUrl}" alt="${event.title}" class="event-image">
            <h2><strong>${event.title}</strong></h2>
            <p>Date: ${event.date}</p>
            <p>Location: ${event.location}</p>
            <p><strong>Price: $${event.price}</strong></p>
            <button class="buynow-btn" data-id="${event.id}">Buy Now</button>
            <button class="favorite-btn" data-id="${event.id}">Add to Favorites</button>
        `;
        fragment.appendChild(eventCard); // Append each card to the fragment
    });

    eventContainer.appendChild(fragment); // Append the fragment once to the DOM
    lazyLoadImages(); // Trigger lazy loading
}


        // Lazy Loading Images
        function lazyLoadImages() {
            const images = document.querySelectorAll('img[data-src]');
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src;
                        observer.unobserve(img);
                    }
                });
            });

            images.forEach(img => {
                observer.observe(img);
            });
        }

        // Filter Events by Price
        function filterEventsByPrice(events, maxPrice) {
            return events.filter(event => event.price <= maxPrice);
        }

        // Filter Events by Date
        function filterEventsByDate(events, minDate) {
            return events.filter(event => new Date(event.date) >= new Date(minDate));
        }

        // Sort Events by Price
        function sortEventsByPrice(events, order = 'asc') {
            return events.sort((a, b) => {
                return order === 'asc' ? a.price - b.price : b.price - a.price;
            });
        }

        // Sort Events by Date
        function sortEventsByDate(events, order = 'asc') {
            return events.sort((a, b) => {
                return order === 'asc' ? new Date(a.date) - new Date(b.date) : new Date(b.date) - new Date(a.date);
            });
        }

        // Toggle Favorite Events
        function toggleFavorite(eventId) {
            let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
            if (favorites.includes(eventId)) {
                favorites = favorites.filter(id => id !== eventId);  // Remove from favorites
            } else {
                favorites.push(eventId);  // Add to favorites
            }
            localStorage.setItem('favorites', JSON.stringify(favorites));
        }

        // Get Favorite Events
        function getFavorites(events) {
            const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
            return events.filter(event => favorites.includes(event.id));
        }

        // Event Listeners
        document.getElementById('filter-price-btn').addEventListener('click', () => {
            const maxPrice = document.getElementById('price-input').value;
            fetchEvents().then(events => {
                const filteredEvents = filterEventsByPrice(events, maxPrice);
                renderEvents(filteredEvents);
            });
        });

        document.getElementById('filter-date-btn').addEventListener('click', () => {
            const minDate = document.getElementById('date-input').value;
            fetchEvents().then(events => {
                const filteredEvents = filterEventsByDate(events, minDate);
                renderEvents(filteredEvents);
            });
        });

        document.getElementById('sort-price-btn').addEventListener('click', () => {
            fetchEvents().then(events => {
                const sortedEvents = sortEventsByPrice(events);
                renderEvents(sortedEvents);
            });
        });

        document.getElementById('sort-date-btn').addEventListener('click', () => {
            fetchEvents().then(events => {
                const sortedEvents = sortEventsByDate(events);
                renderEvents(sortedEvents);
            });
        });

        document.getElementById('show-favorites-btn').addEventListener('click', () => {
            fetchEvents().then(events => {
                const favoriteEvents = getFavorites(events);
                renderEvents(favoriteEvents);
            });
        });

        // Listen to "Add to Favorites" button
        document.getElementById('event-container').addEventListener('click', (e) => {
            if (e.target.classList.contains('favorite-btn')) {
                const eventId = e.target.getAttribute('data-id');
                toggleFavorite(eventId);
            }
        });

        // Initial Load
        fetchEvents().then(events => renderEvents(events));