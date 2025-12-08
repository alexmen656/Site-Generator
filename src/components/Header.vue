<template>
    <nav class="navbar">
        <div class="nav-container">
            <div class="nav-left">
                <div @click="router.push('/')" class="logo">
                    <span class="logo-icon"><img :src="'/src/config/assets/' + config.appIcon"
                            :alt="'Logo of ' + config.appName"></span>
                    <span class="logo-text">{{ config.appName }}</span>
                </div>
            </div>
            <div class="nav-center">
                <a :href="link.href" class="nav-link" v-for="link in config.links" :key="link.name">{{ link.name }}</a>
            </div>
            <div class="nav-right">
                <a :href="os == 'android' ? config.androidLink : config.iosLink"><button class="cta-button">{{
                    config.ctaButtonText }}</button></a>
            </div>
        </div>
    </nav>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import { inject } from 'vue'

const config: any = inject('config')
const router = useRouter();

function getOS() {
    const ua = navigator.userAgent || navigator.vendor || (window as any).opera || '';

    if (/android/i.test(ua)) return "android";
    if (/iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream) return "ios";

    return "unknown";
}


const os = getOS();
console.log("Detected OS:", os);
</script>

<style scoped>
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
    cursor: pointer;
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
    overflow: hidden;
}

.logo-icon img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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

@media (max-width: 768px) {
    .nav-center {
        display: none;
    }
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

.cta-button a {
    color: white;
    text-decoration: none;
    font-size: 15px;
    font-weight: 500;
    transition: background 0.2s;

}

.cta-button:hover {
    background: #0051D5;
}
</style>