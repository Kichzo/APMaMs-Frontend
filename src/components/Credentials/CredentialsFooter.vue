<template>
    <footer class="site-footer">
        <div class="footer-container">
            <!-- Footer Grid -->
            <div class="footer-grid">
                <!-- Column 1 -->
                <div class="footer-column">
                    <h3 class="footer-title">APMaMS</h3>
                    <p class="footer-text">MSUN</p>
                    <p class="footer-text footer-description">
                        Action planning and activity management for student organizations
                    </p>
                </div>

                <!-- Column 2 -->
                <div class="footer-column">
                    <h3 class="footer-title">Platform</h3>
                    <ul class="footer-list">
                        <li><a href="#">Activity Management</a></li>
                        <li><a href="#">Action Plan</a></li>
                        <li><a href="#">Financial Tracking</a></li>
                        <li><a href="#">Reports</a></li>
                    </ul>
                </div>

                <!-- Column 3 -->
                <div class="footer-column">
                    <h3 class="footer-title">Resources</h3>
                    <ul class="footer-list">
                        <li><a href="#">Documentation</a></li>
                        <li><a href="#">User Guide</a></li>
                        <li><a href="#">Support</a></li>
                        <li><a href="#">FAQs</a></li>
                    </ul>
                </div>

                <!-- Column 4 -->
                <div class="footer-column">
                    <h3 class="footer-title">Contact</h3>
                    <ul class="footer-list">
                        <li>Mindanao State University</li>
                        <li>Naawan, Misamis Oriental</li>
                        <li>Philippines</li>
                    </ul>
                </div>
            </div>

            <!-- Copyright -->
            <div class="footer-bottom">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M8 0C3.582 0 0 3.582 0 8C0 12.418 3.582 16 8 16C12.418 16 16 12.418 16 8C16 3.582 12.418 0 8 0ZM8.146 4.992C6.934 4.992 6.219 5.912 6.219 7.494V8.554C6.219 10.125 6.922 11.016 8.146 11.016C9.125 11.016 9.787 10.43 9.875 9.598H11.17C11.07 11.139 9.816 12.158 8.14 12.158C6.049 12.158 4.871 10.822 4.871 8.555V7.482C4.871 5.221 6.072 3.844 8.141 3.844C9.822 3.844 11.076 4.898 11.17 6.416H9.875C9.787 5.625 9.107 4.992 8.146 4.992Z"
                        fill="white" />
                </svg>
                <span>
                    2025 APMaMS – Mindanao State University at Naawan. All rights reserved.
                </span>
            </div>
        </div>
    </footer>
</template>

<script setup>
</script>

<style scoped>
.site-footer {
    background-color: #000;
    color: #fff;
    padding: 3rem 1rem;
}

.footer-container {
    max-width: 1280px;
    margin: 0 auto;
}

/* Grid */
.footer-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
    margin-bottom: 3rem;
}

.footer-column {
    font-family: 'Judson', serif;
}

.footer-title {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 0.75rem;
}

.footer-text {
    font-size: 1rem;
    margin-bottom: 0.5rem;
}

.footer-description {
    line-height: 1.6;
}

/* Lists */
.footer-list {
    list-style: none;
    padding: 0;
    margin: 0;
}

.footer-list li {
    font-size: 1rem;
    margin-bottom: 0.5rem;
}

.footer-list a {
    color: #fff;
    text-decoration: none;
}

.footer-list a:hover {
    text-decoration: underline;
}

/* Bottom */
.footer-bottom {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    font-family: 'Judson', serif;
    font-size: 1rem;
}

/* Responsive */
@media (min-width: 640px) {
    .footer-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (min-width: 1024px) {
    .site-footer {
        padding: 4rem 2rem;
    }

    .footer-grid {
        grid-template-columns: repeat(4, 1fr);
        gap: 3rem;
    }

    .footer-bottom {
        justify-content: flex-start;
    }
}
</style>
