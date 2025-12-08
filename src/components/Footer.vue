<template>
    <footer class="footer">
        <div class="footer-container">
            <div class="footer-content">
                <div class="footer-column">
                    <div class="footer-logo">
                        <img :src="'/assets/' + config.appIcon" :alt="'Logo of ' + config.appName">
                    </div>
                </div>
                <div class="footer-column">
                    <h3 class="footer-title">{{ config.appName }}</h3>
                    <ul class="footer-links">
                        <li v-for="link in section1.links" :key="link.name"><a :href="link.href" class="footer-link">{{
                            link.name
                                }}</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3 class="footer-title">Resources</h3>
                    <ul class="footer-links">
                        <li><a href="#" class="footer-link">Help</a></li>
                        <li><a href="#" class="footer-link">Blog</a></li>
                        <li><router-link to="/terms-of-use" class="footer-link">Terms of use</router-link></li>
                        <li><router-link to="/privacy-policy" class="footer-link">Privacy policy</router-link></li>
                        <li><a href="#" class="footer-link">Media Kit</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3 class="footer-title">{{ section3.title }}</h3>
                    <ul class="footer-links">
                        <li v-for="link in section3.links" :key="link.name"><a :href="link.href" class="footer-link">{{
                            link.name
                                }}</a></li>
                    </ul>
                </div>
                <div class="footer-column">
                    <h3 class="footer-title">Follow us</h3>
                    <div class="social-links">
                        <a :href="social.link" class="social-link" v-for="social in config.socialLinks"
                            :aria-label="social.platform[0].toUpperCase() + social.platform.slice(1).toLowerCase()">
                            <svg v-if="social.platform.toLowerCase() === 'x'" width="20" height="20" viewBox="0 0 20 20"
                                fill="currentColor">
                                <path
                                    d="M18.9 2.3c-.7.3-1.4.5-2.2.6.8-.5 1.4-1.3 1.7-2.2-.7.4-1.5.7-2.3.9-.7-.8-1.7-1.3-2.8-1.3-2.1 0-3.8 1.7-3.8 3.8 0 .3 0 .6.1.9-3.2-.2-6-1.7-7.9-4-.3.5-.5 1.1-.5 1.8 0 1.3.7 2.5 1.7 3.2-.6 0-1.2-.2-1.7-.5v.1c0 1.8 1.3 3.4 3 3.8-.3.1-.7.1-1 .1-.3 0-.5 0-.8-.1.5 1.6 2 2.8 3.8 2.8-1.3 1-3 1.6-4.8 1.6-.3 0-.6 0-.9-.1 1.7 1.1 3.8 1.8 6 1.8 7.2 0 11.1-6 11.1-11.1v-.5c.8-.6 1.5-1.3 2-2.1z" />
                            </svg>
                            <svg v-if="social.platform.toLowerCase() === 'facebook'" width="20" height="20"
                                viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    d="M18 1H2C1.4 1 1 1.4 1 2v16c0 .6.4 1 1 1h8.5v-7h-2.3V9.8h2.3V8.5c0-2.3 1.4-3.6 3.5-3.6 1 0 1.9.1 2.2.1v2.5h-1.5c-1.2 0-1.4.6-1.4 1.4v1.8h2.8l-.4 2.7h-2.4V19H18c.6 0 1-.4 1-1V2c0-.6-.4-1-1-1z" />
                            </svg>
                            <svg v-if="social.platform.toLowerCase() === 'mastodon'" width="20" height="20"
                                viewBox="0 0 20 20" fill="currentColor">
                                <path
                                    d="M16.5 3c1.4 0 2.5 1.1 2.5 2.5v9c0 1.4-1.1 2.5-2.5 2.5h-13C2.1 17 1 15.9 1 14.5v-9C1 4.1 2.1 3 3.5 3h13M14.2 6.5c-.7 0-1.2.5-1.2 1.2v2.6h2.4V7.7c0-.7-.5-1.2-1.2-1.2zm-8.4 0c-.7 0-1.2.5-1.2 1.2v2.6H7V7.7c0-.7-.5-1.2-1.2-1.2zm1.2 5.2c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5v3.1h-5v-3.1z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div class="footer-divider"></div>
            <div class="footer-bottom">
                <p class="footer-copyright">© {{ year }} {{ config.copyrightCompany }}. All rights reserved.</p>
                <!--<p class="footer-trademark">All trademarks are the property of their respective owners.</p>-->
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
import { inject } from 'vue'

const config: any = inject('config')
const year = new Date().getFullYear();

const section1 = {
    title: 'Product',
    links: [{ name: 'Try for Free', href: '/try-for-free' }, { name: 'Get on Setapp', href: '/get-on-setapp' }, { name: 'Use Cases', href: '/use-cases' }, { name: 'Updates', href: '/updates' }, { name: 'Pricing', href: '/pricing' }]
}

const section3 = {
    title: 'More',
    links: [{ name: 'About', href: '/about' }, { name: 'Contact', href: '/contact' }, { name: 'Beta', href: '/beta' }, { name: 'Suggest a feature', href: '/suggest-feature' }, { name: 'Jobs', href: '/jobs' }]
}
</script>

<style scoped>
.footer {
    background: #1d1d1d;
    color: #f5f5f5;
    padding: 80px 0 40px 0;
}

.footer-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 24px;
}

.footer-content {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 48px;
    margin-bottom: 48px;
}

.footer-column {
    display: flex;
    flex-direction: column;
}

.footer-logo {
    width: 48px;
    height: 48px;
    background: linear-gradient(135deg, #FF9500 0%, #FF6B00 100%);
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: 700;
    font-size: 24px;
    overflow: hidden;
}

.footer-logo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.footer-title {
    font-size: 15px;
    font-weight: 600;
    margin: 0 0 16px 0;
    color: #fff;
    text-transform: capitalize;
}

.footer-links {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.footer-link {
    color: #ccc;
    text-decoration: none;
    font-size: 14px;
    transition: color 0.2s;
}

.footer-link:hover {
    color: #fff;
}

.social-links {
    display: flex;
    gap: 20px;
}

.social-link {
    color: #ccc;
    transition: color 0.2s;
    display: flex;
    align-items: center;
    justify-content: center;
}

.social-link:hover {
    color: #fff;
}

.footer-divider {
    height: 1px;
    background: rgba(255, 255, 255, 0.1);
    margin-bottom: 32px;
}

.footer-bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    gap: 24px;
}

.footer-copyright,
.footer-trademark {
    font-size: 13px;
    color: #bbb;
    margin: 0;
}

@media (max-width: 768px) {
    .footer-content {
        grid-template-columns: repeat(2, 1fr);
        gap: 32px;
    }

    .footer-bottom {
        flex-direction: column;
        align-items: flex-start;
    }
}
</style>
