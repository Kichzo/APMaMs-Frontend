<template>
    <!-- Features section -->
    <section class="features-section">
        <div class="features-container">

            <!-- Section heading -->
            <h2 class="features-title">Comprehensive Platform Features</h2>
            <p class="features-subtitle">
                Everything you need to manage strategic plans, activities, and organizational workflows in one unified
                platform.
            </p>

            <!-- Feature cards grid -->
            <div class="features-grid">
                <div v-for="feature in features" :key="feature.title" class="feature-card">
                    <!-- Icon container with dynamic background -->
                    <div class="feature-icon" :style="{ backgroundColor: feature.iconBg }">
                        <i :class="feature.icon"></i>
                    </div>

                    <!-- Feature content -->
                    <h3 class="feature-title">{{ feature.title }}</h3>
                    <p class="feature-description">{{ feature.description }}</p>

                    <!-- Call-to-action link -->
                    <a href="#" class="feature-link">
                        Learn more <i class="fa-solid fa-arrow-right"></i>
                    </a>
                </div>
            </div>

        </div>
    </section>
</template>

<script setup>
/* Static feature list rendered in the grid */
const features = [
    {
        title: 'Activity Management',
        description: 'Create, submit, and track activity proposals with integrated calendar scheduling to prevent overlapping events and activity overload',
        iconBg: '#DFF6E6',
        icon: 'fa-solid fa-mountain-sun'
    },
    {
        title: 'Action Planning',
        description: 'Develop and monitor action plans with clear objectives, timelines, and progress tracking aligned with institutional goals',
        iconBg: '#FCE6E6',
        icon: 'fa-solid fa-layer-group'
    },
    {
        title: 'Financial Tracking',
        description: 'Manage budgets, track expenses, monitor funding sources, and maintain complete financial transparency for all activities',
        iconBg: '#FFF4E5',
        icon: 'fa-solid fa-chart-simple'
    },
    {
        title: 'Approval Workflows',
        description: 'Streamlined approval processes with automated notifications, status tracking, and comprehensive audit logs',
        iconBg: '#F9F9D6',
        icon: 'fa-solid fa-user-check'
    },
    {
        title: 'Monitoring Dashboard',
        description: 'Real-time visibility of all activities, progress reports, and organizational performance metrics in one centralized view',
        iconBg: '#E9F5E9',
        icon: 'fa-solid fa-chart-line'
    },
    {
        title: 'Organizational Profiles',
        description: 'Manage organizational information, member roles, responsibilities, and maintain complete documentation',
        iconBg: '#E1F8FA',
        icon: 'fa-solid fa-users-viewfinder'
    }
]
</script>

<style scoped>
/* Section spacing and background */
.features-section {
    padding: 100px 0;
    background: #ffffff;
}

/* Content width control */
.features-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 40px;
}

/* Section title */
.features-title {
    font-family: 'serif';
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
    margin-bottom: 20px;
    color: #000;
}

/* Supporting description text */
.features-subtitle {
    font-family: 'serif';
    font-size: 1.25rem;
    text-align: center;
    max-width: 800px;
    margin: 0 auto 80px;
    color: #444;
    line-height: 1.5;
}

/* Card layout grid */
.features-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 32px;
}

/* Individual feature card */
.feature-card {
    background: #ebf2fa;
    border-radius: 24px;
    padding: 40px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
    transition: transform 0.3s ease;
}

/* Subtle lift on hover */
.feature-card:hover {
    transform: translateY(-8px);
}

/* Icon wrapper */
.feature-icon {
    width: 60px;
    height: 60px;
    border-radius: 14px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 24px;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.08);
}

/* Icon styling */
.feature-icon i {
    font-size: 26px;
    color: #555;
}

/* Feature heading */
.feature-title {
    font-family: 'serif';
    font-size: 1.8rem;
    font-weight: bold;
    margin-bottom: 16px;
    color: #000;
}

/* Feature description */
.feature-description {
    font-size: 1.1rem;
    line-height: 1.6;
    color: #333;
    margin-bottom: 24px;
    flex-grow: 1;
}

/* CTA link styling */
.feature-link {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-weight: bold;
    font-size: 1.2rem;
    color: #000;
    text-decoration: none;
}

/* Prevent browser default visited color */
.feature-link:visited {
    color: #000;
}

/* Hover feedback */
.feature-link:hover {
    text-decoration: underline;
}

.feature-link:active {
    color: #000;
}

/* Responsive layout adjustments */
@media (max-width: 1024px) {
    .features-grid {
        grid-template-columns: repeat(2, 1fr);
    }
}

@media (max-width: 768px) {
    .features-grid {
        grid-template-columns: 1fr;
    }

    .features-container {
        padding: 0 20px;
    }
}
</style>
