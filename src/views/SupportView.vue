<template>
    <div class="support">
        <Header></Header>
        <section class="hero-section">
            <div class="hero-content">
                <h1 class="hero-title">How can we help?</h1>
                <div class="search-container">
                    <div class="search-box">
                        <svg class="search-icon" width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M9 17A8 8 0 1 0 9 1a8 8 0 0 0 0 16zM18 18l-4-4" stroke="currentColor"
                                stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <input type="text" placeholder="Search for a topic or question" class="search-input" />
                    </div>
                </div>
            </div>
        </section>
        <section class="getting-started">
            <div class="section-container">
                <h2 class="section-title">Getting started</h2>

                <div class="cards-grid">
                    <div class="card">
                        <div class="card-icon">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <circle cx="24" cy="24" r="20" stroke="currentColor" stroke-width="2" />
                                <path d="M24 14v10m0 0v10m0-10h10m-10 0H14" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" />
                            </svg>
                        </div>
                        <h3 class="card-title">Explore Paste</h3>
                    </div>
                    <div class="card">
                        <div class="card-icon">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <rect x="8" y="12" width="32" height="22" rx="2" stroke="currentColor"
                                    stroke-width="2" />
                                <path d="M8 18h32M16 34h16" stroke="currentColor" stroke-width="2"
                                    stroke-linecap="round" />
                            </svg>
                        </div>
                        <h3 class="card-title">Paste on Mac</h3>
                    </div>
                    <div class="card">
                        <div class="card-icon">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <rect x="16" y="8" width="16" height="32" rx="2" stroke="currentColor"
                                    stroke-width="2" />
                                <circle cx="24" cy="36" r="1.5" fill="currentColor" />
                            </svg>
                        </div>
                        <h3 class="card-title">Paste on iPhone</h3>
                    </div>
                    <div class="card">
                        <div class="card-icon">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                                <rect x="12" y="10" width="24" height="28" rx="2" stroke="currentColor"
                                    stroke-width="2" />
                                <circle cx="24" cy="34" r="1.5" fill="currentColor" />
                            </svg>
                        </div>
                        <h3 class="card-title">Paste on iPad</h3>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue';
</script>

<style scoped>
.support {
    min-height: 100vh;
    background: #F5F5F7;
}

.navbar {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
    z-index: 100;
    padding: 12px 0;
}

.nav-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-left {
    flex: 1;
}

.logo {
    display: flex;
    align-items: center;
    gap: 8px;
}

.logo-icon {
    width: 32px;
    height: 32px;
    background: linear-gradient(135deg, #FF9500 0%, #FF6B00 100%);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 700;
    font-size: 20px;
}

.logo-text {
    font-size: 20px;
    font-weight: 600;
    color: #000;
}

.nav-center {
    display: flex;
    gap: 32px;
    flex: 2;
    justify-content: center;
}

.nav-link {
    color: #000;
    text-decoration: none;
    font-size: 15px;
    font-weight: 400;
    transition: color 0.2s;
}

.nav-link:hover {
    color: #007AFF;
}

.nav-right {
    flex: 1;
    display: flex;
    justify-content: flex-end;
}

.cta-button {
    background: #007AFF;
    color: white;
    border: none;
    padding: 8px 20px;
    border-radius: 20px;
    font-size: 15px;
    font-weight: 500;
    cursor: pointer;
    transition: background 0.2s;
}

.cta-button:hover {
    background: #0051D5;
}

.hero-section {
    padding-top: 120px;
    padding-bottom: 80px;
    background: #F5F5F7;
    text-align: center;
}

.hero-content {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 24px;
}

.hero-title {
    font-size: 56px;
    font-weight: 700;
    color: #000;
    margin: 0 0 40px 0;
    letter-spacing: -0.02em;
}

.search-container {
    display: flex;
    justify-content: center;
}

.search-box {
    width: 100%;
    max-width: 480px;
    background: white;
    border-radius: 12px;
    padding: 16px 20px;
    display: flex;
    align-items: center;
    gap: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.search-icon {
    color: #999;
    flex-shrink: 0;
}

.search-input {
    flex: 1;
    border: none;
    outline: none;
    font-size: 16px;
    color: #000;
}

.search-input::placeholder {
    color: #999;
}

.getting-started {
    background: white;
    padding: 80px 0 120px 0;
}

.section-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
}

.section-title {
    font-size: 40px;
    font-weight: 700;
    color: #000;
    margin: 0 0 48px 0;
    text-align: center;
    letter-spacing: -0.02em;
}

.cards-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
    gap: 32px;
    max-width: 1000px;
    margin: 0 auto;
}

.card {
    text-align: center;
    padding: 32px 24px;
    transition: transform 0.2s;
    cursor: pointer;
}

.card:hover {
    transform: translateY(-4px);
}

.card-icon {
    width: 64px;
    height: 64px;
    margin: 0 auto 20px;
    color: #000;
    display: flex;
    align-items: center;
    justify-content: center;
}

.card-title {
    font-size: 18px;
    font-weight: 500;
    color: #000;
    margin: 0;
}

@media (max-width: 768px) {
    .nav-center {
        display: none;
    }

    .hero-title {
        font-size: 36px;
    }

    .section-title {
        font-size: 32px;
    }

    .cards-grid {
        grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
        gap: 24px;
    }
}
</style>
