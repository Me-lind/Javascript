fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(data => {
        const users = data;

        // Current date for comparison
        const currentDate = new Date();

        // Filter Active Users: Users with posts in the past week
        const activeUsers = users.filter(user => {
            return user.posts.some(post => { const postDate = new Date(post.timestamp);
                const differenceInDays = (currentDate - postDate) / (1000 * 60 * 60 * 24);
                return differenceInDays <= 7;
            });
        });

        // Extract Popular Posts: Filter posts with likes >= 10
        const popularPosts = activeUsers.map(user =>user.posts.filter(post => post.likes >= 10));

        // Calculate Average Likes per User
        const totalLikes = popularPosts.reduce((sum, post) => sum + post.likes, 0);
        const averageLikes = popularPosts.length > 0 ? totalLikes / activeUsers.length : 0;

        // Results
        console.log(`Active Users: ${activeUsers.length}`);
        console.log(`Total Popular Posts: ${popularPosts.length}`);
        console.log(`Average Likes per Active User: ${averageLikes.toFixed(2)}`);
    })
    .catch(error => console.error('Error fetching data:', error));
