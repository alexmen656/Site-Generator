<template>
  <div class="home">
    <Header></Header>
    <section class="hero">
      <!-- <div class="hero-image">
        <--  <img src="/hero-devices.png" alt="Paste app on multiple devices" />--
  </div>-->
      <div class="hero-content">
        <h1 class="hero-title" v-html="config.headline"></h1>
        <p class="hero-description" v-html="config.description"></p>
        <button class="cta-button-large">{{ config.ctaButtonText }}</button>
      </div>
    </section>
    <section class="iphone-section">
      <img height="500" src="@/config/assets/iphone.png" alt="iPhone showing Pocketz app interface">
    </section>
    <section>
      <button @click="downloadOnAppStore()">Download on App Store</button>
      <button @click="downloadOnGooglePlay()">Download on Google Play</button>
      <img height="100" src="@/config/assets/app_store.svg" alt="Apple App Store Badge">
      <img height="100" src="@/config/assets/google_play.svg" alt="Google Play Store Badge">
    </section>
    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
//import { useRouter } from 'vue-router';
import { inject } from 'vue'

const config: any = inject('config')
//const router = useRouter();

const downloadOnAppStore = () => {
  //router.push()
  location.href = config.appStoreLink
}

const downloadOnGooglePlay = () => {
  //router.push()
  location.href = config.googlePlayLink
}
</script>

<style scoped>
.iphone-section {
  display: flex;
  justify-content: center;
}

.home {
  min-height: 100vh;
  background: #fff;
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

.hero {
  padding-top: 80px;
  text-align: center;
}

.hero-image {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 24px;
}

.hero-image img {
  width: 100%;
  height: auto;
  display: block;
}

.hero-content {
  max-width: 900px;
  margin: 60px auto;
  padding: 0 24px;
}

.hero-title {
  font-size: 64px;
  font-weight: 700;
  line-height: 1.1;
  color: #000;
  margin: 0 0 24px 0;
  letter-spacing: -0.02em;
}

.hero-description {
  font-size: 22px;
  line-height: 1.5;
  color: #333;
  margin: 0 0 40px 0;
  font-weight: 400;
}

.cta-button-large {
  background: #007AFF;
  color: white;
  border: none;
  padding: 14px 32px;
  border-radius: 24px;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;
}

.cta-button-large:hover {
  background: #0051D5;
}

@media (max-width: 768px) {
  .nav-center {
    display: none;
  }

  .hero-title {
    font-size: 40px;
  }

  .hero-description {
    font-size: 18px;
  }
}
</style>
