document.addEventListener('DOMContentLoaded', function() {
    // 1. Check authentication
    const userData = JSON.parse(localStorage.getItem('userData'));
    if (!userData) {
        window.location.href = 'index.html';
        return;
    }

    // 2. Display user info
    console.log('Welcome, ' + userData.name);
    
    // 3. Initialize product click handlers
    document.querySelectorAll('.quick-view').forEach(button => {
        button.addEventListener('click', function() {
            const productCard = this.closest('.product-card');
            const productId = productCard.dataset.productId;
            const productName = productCard.querySelector('h3').textContent;
            const productImage = productCard.querySelector('.product-image img').src;
            
            // Store product data for VR page
            localStorage.setItem('selectedProduct', JSON.stringify({
                id: productId,
                name: productName,
                image: productImage,
                // Add other product details as needed
                price: productCard.querySelector('.price').textContent.trim()
            }));
            
            // Redirect to VR page
            window.location.href = 'vr-tryon.html';
        });
    });

    // 4. Keep modal functions if still needed elsewhere
    window.closeVRPreview = function() {
        document.getElementById('vrModal').style.display = 'none';
        document.querySelector('.loading-animation').style.display = 'flex';
        document.querySelector('.vr-viewport').innerHTML = '';
    };
});

// Remove the separate showVRPreview function since we've integrated it above