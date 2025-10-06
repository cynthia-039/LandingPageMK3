document.addEventListener('DOMContentLoaded', () => {
    // Handling sidebar menu clicks
    const menuItems = document.querySelectorAll('.main-menu li');
    const contentSections = document.querySelectorAll('.dashboard-body');
    const streakValueElement = document.querySelector('.stats-section .stat-card:nth-child(4) .stat-value');

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove 'active' class from all menu items
            menuItems.forEach(i => i.classList.remove('active'));
            
            // Add 'active' class to the clicked item
            item.classList.add('active');

            // Hide all content sections
            contentSections.forEach(section => section.classList.remove('active-content'));

            // Show the corresponding content section
            const targetId = item.getAttribute('data-content-id');
            const targetContent = document.getElementById(targetId);
            if (targetContent) {
                targetContent.classList.add('active-content');
            }
        });
    });

    // Function to update streak chart based on stat card value
    function updateStreakChart() {
        // Get the value from the 'Streak (Days)' stat card
        const streakValue = parseInt(streakValueElement.textContent);
        
        // Find the corresponding bar in the chart (assuming the 5th bar represents 'TH' or today's value)
        const streakBar = document.querySelector('.streak-chart .chart-bar:nth-child(5)');

        if (streakBar) {
            // Update the bar's height and label
            streakBar.style.height = `${streakValue * 8}px`; // Adjust multiplier as needed for visual scale
            streakBar.querySelector('span').textContent = streakValue;
        }
    }

    // Call the function on page load to initialize the chart
    updateStreakChart();
});