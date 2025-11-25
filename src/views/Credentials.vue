<template>
    <div>

        <!-- Kian this Nav naay nav sa vue-->
        <nav class="nav">
            <div class="logo">
                SPMaMS<br />
                <span>Strategic Monitoring Planning</span>
            </div>

            <div class="nav-links">
                <a href="#">Sign In</a>
                <button class="btn-primary">Get Started</button>
            </div>
        </nav>

        <!-- Kian this is the tuyok2 picture shts see yt how to do that 5:20 ka nahunong-->
        <section class="hero">
            <div class="hero-left"></div>

            <div class="hero-content">
                <img src="./download.jpg" alt="" class="hero-img" />

                <div class="hero-text">
                    <h1>
                        Strategic Plan:<br />
                        Monitoring and<br />
                        Management System
                    </h1>
                    <p>
                        Centralize and streamline strategic planning, activity
                        management, and monitoring processes for academic organizations.
                        Enhance efficiency in workflow coordination and support
                        data-driven alignment with institutional goals.
                    </p>

                    <div class="hero-buttons">
                        <button class="btn-primary">Start Planning</button>
                        <button class="btn-outline">Learn More</button>
                    </div>
                </div>
            </div>

            <div class="wave"></div>
        </section>

        <!-- Kian this is the features shts nag google ka ani -->
        <section class="features">
            <h2>Comprehensive Platform Features</h2>
            <p>
                Everything you need to manage strategic plans, activities, and
                organizational workflows in one unified platform.
            </p>

            <div class="feature-grid">
                <div class="card" v-for="item in cards" :key="item.title">
                <h3>{{ item.title }}</h3>
                <p>{{ item.text }}</p>
                <a href="#">Learn more →</a>
                </div>
            </div>
        </section>

        <!-- Kian this is footer wla ka nag search ani -->
        <footer class="footer">
            <div class="footer-content">
                SPMaMS <br />
                2025
            </div>
        </footer>

    </div>
</template>

<script>
export default {
    name: "Home",
    data() {
        return {
            cards: [
                {
                    title: "Activity Management",
                    text: "Create, track, and evaluate activities with structured workflows and automated updates.",
                },
                {
                    title: "Strategic Planning",
                    text: "Develop and monitor strategic goals, KPIs, and initiatives for long-term alignment.",
                },
                    {
                    title: "Financial Tracking",
                    text: "Monitor budgets, fund requests, expenses, and financial reports in real time.",
                },
                    {
                    title: "Approval Workflows",
                    text: "Automated approval chains with clear roles, hierarchy, and instant notifications.",
                },
                    {
                    title: "Monitoring Dashboard",
                    text: "Real-time visibility of all activities, KPIs, statuses, and analytics.",
                },
                    {
                    title: "Organizational Profiles",
                    text: "Manage departments, organizations, and user roles in a structured system.",
                },
            ],
        };
    },
};
</script>

<style scoped>  
* {
    color:#000;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Segoe UI", sans-serif;
}

/*Kian NAVBAR ni */
.nav {
    padding: 20px 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 99999;
}

.logo {
    font-weight: bold;
    font-size: 20px;
    line-height: 1.2;
}

.logo span {
    font-weight: normal;
    font-size: 12px;
    opacity: 0.7;
}

.nav-links {
    display: flex;
    align-items: center;
    gap: 20px;
}

.nav-links a {
    text-decoration: none;
    color: #222;
    font-size: 14px;
}

.btn-primary {
    background: #0047bb;
    padding: 10px 20px;
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
}

.btn-outline {
    border: 1px solid #0047bb;
    padding: 10px 20px;
    border-radius: 6px;
    background: transparent;
    cursor: pointer;
}

/* Kian mao ni kato tuyok2 shts */
.hero {
    position: relative;
    padding: 60px;
}

.hero-left {
    position: absolute;
    top: 0;
    left: 0;
    width: 180px;
    height: 100%;
    background: #0130a0;
}

.hero-content {
    display: flex;
    align-items: center;
    gap: 50px;
    position: relative;
    z-index: 2;
}

.hero-img {
    width: 350px;
    border-radius: 6px;
}

.hero-text h1 {
    font-size: 38px;
    margin-bottom: 20px;
}

.hero-text p {
    font-size: 15px;
    line-height: 1.6;
    margin-bottom: 20px;
}

.hero-buttons {
    display: flex;
    gap: 15px;
}

/* Kian WAVE imo ex, like her dli ka kabalo unsaon ni */
.wave {
    width: 100%;
    height: 140px;
    background: #0130a0;
    margin-top: 40px;
    clip-path: ellipse(75% 60% at 50% 0%);
}

/* Kian FEATURES ni*/
.features {
    padding: 60px 60px;
    text-align: center;
}

.features h2 {
    font-size: 28px;
    margin-bottom: 10px;
}

.features p {
    opacity: 0.75;
    margin-bottom: 40px;
}

.feature-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 25px;
}

.card {
    background: #ffffff;
    border-radius: 10px;
    padding: 25px;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
    text-align: left;
}

.card h3 {
    margin-bottom: 10px;
}

.card p {
    font-size: 14px;
    opacity: 0.8;
    margin-bottom: 10px;
}

.card a {
    color: #0047bb;
    font-size: 14px;
    text-decoration: none;
}

/*Kian mao ni FOOTER */
.footer {
    background: #000;
    padding: 50px;
    color: white;
    text-align: left;
}

.footer-content {
    font-size: 14px;
    color: white;
    line-height: 1.6;
}

/*Kian mao ni RESPONSIVE. Ambot ga suon2 raka ani sa yt */
@media (max-width: 900px) {
    .hero-content {
        flex-direction: column;
        text-align: center;
    }

    .feature-grid {
        grid-template-columns: 1fr;
    }

    .hero-left {
        display: none;
    }

    .nav {
        padding: 15px 20px;
    }
}
</style>

