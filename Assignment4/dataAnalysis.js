fetch('http://localhost:3000/users')
    .then(response => response.json())
    .then(data => {
        // Current date for comparison
        const currentDate = new Date();

        // Filter Active Users: Users with posts in the past week
        const activeUsers = data.filter(user => {
            return user.posts.some(post => {
                const postDate = new Date(post.timestamp);
                const differenceInDays = (currentDate - postDate) / (1000 * 60 * 60 * 24);
                return differenceInDays <= 7;
            });
        });

        // Extract Popular Posts: Filter posts with likes >= 10
        const popularPosts = activeUsers.flatMap(user =>
            user.posts.filter(post => post.likes >= 10)
        );

        // Calculate Total Likes from all posts
        const totalLikesFromAllPosts = data.reduce((totalLikes, user) => {
            return totalLikes + user.posts.reduce((sum, post) => {
                return sum + post.likes; }, 0);
        }, 0);

        // Calculate Average Likes per Active User (based on popular posts)
        const averageLikes = popularPosts.length > 0 ? totalLikesFromAllPosts / activeUsers.length : 0;

        // Results
        console.log(`Active Users: ${activeUsers.length}`);
        console.log(`Total Popular Posts: ${popularPosts.length}`);
        console.log(`Total Likes from All Posts: ${totalLikesFromAllPosts}`); 
        console.log(`Average Likes per Active User: ${averageLikes.toFixed(2)}`);
    })
    .catch(error => console.error('Error fetching data:', error));
