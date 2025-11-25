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
      <div class="feature-cards-left">
        <div class="feature-card card-float-1">
          <div class="card-connector connector-left"></div>
          <div class="feature-card-icon icon-avatar">
            <span>👩</span>
          </div>
          <div class="feature-card-content">
            <div class="feature-card-title">Mom landed in New York</div>
            <div class="feature-card-subtitle">6:32am (22m early) and ☀️ 88°</div>
          </div>
        </div>
        <div class="feature-card card-float-2">
          <div class="card-connector connector-left"></div>
          <div class="feature-card-icon icon-blue">
            <span>✈️</span>
          </div>
          <div class="feature-card-content">
            <div class="feature-card-title"><strong>AUS ✈ JFK • Departed Gate</strong></div>
            <div class="feature-card-subtitle">Taxiing for 13m, for take off at 5:34PM.</div>
          </div>
        </div>
        <div class="feature-card card-float-3">
          <div class="card-connector connector-left"></div>
          <div class="feature-card-icon icon-coral">
            <span>△</span>
          </div>
          <div class="feature-card-content">
            <div class="feature-card-title">Check In is now open</div>
            <div class="feature-card-subtitle">You can check-in at delta.com</div>
          </div>
        </div>
        <div class="feature-card card-float-4">
          <div class="card-connector connector-left"></div>
          <div class="feature-card-icon icon-green">
            <span>✓</span>
          </div>
          <div class="feature-card-content">
            <div class="feature-card-title"><strong>AUS ✈ JFK • Landed</strong></div>
            <div class="feature-card-subtitle">It's 6:32am (22m early) and ☀️ 88°</div>
          </div>
        </div>

        <div class="feature-card card-float-5">
          <div class="card-connector connector-left"></div>
          <div class="feature-card-icon icon-yellow">
            <span>🧳 6</span>
          </div>
          <div class="feature-card-content">
            <div class="feature-card-title"><strong>Baggage Claim</strong></div>
            <div class="feature-card-subtitle">Assigned to Belt 6</div>
          </div>
        </div>
      </div>
      <div class="iphone-container">
        <img height="650" src="@/config/assets/iphone.png" alt="iPhone showing app interface">
      </div>
      <div class="feature-cards-right">
        <div class="feature-card card-float-1">
          <div class="card-connector connector-right"></div>
          <div class="feature-card-icon icon-brown">
            <span>🚪</span>
          </div>
          <div class="feature-card-content">
            <div class="feature-card-title"><strong>Gate changed</strong></div>
            <div class="feature-card-subtitle">Changed to ORD Terminal 2 • Gate 7</div>
          </div>
        </div>
        <div class="feature-card card-float-2">
          <div class="card-connector connector-right"></div>
          <div class="feature-card-icon icon-yellow-soft">
            <span>☀️</span>
          </div>
          <div class="feature-card-content">
            <div class="feature-card-title">AUS ✈ JFK • 70° ☀️</div>
            <div class="feature-card-subtitle">Good morning! Your flight today is on time.</div>
          </div>
        </div>
        <div class="feature-card card-float-3">
          <div class="card-connector connector-right"></div>
          <div class="feature-card-icon icon-orange">
            <span>➚</span>
          </div>
          <div class="feature-card-content">
            <div class="feature-card-title text-coral"><strong>AUS ✈ JFK • Delayed 45m</strong></div>
            <div class="feature-card-subtitle">↗ FRA 6:30pm (45m late)</div>
          </div>
        </div>
        <div class="feature-card card-float-4">
          <div class="card-connector connector-right"></div>
          <div class="feature-card-icon icon-gray-light">
            <span>↻</span>
          </div>
          <div class="feature-card-content">
            <div class="feature-card-title">AUS ✈ JFK • Flight changed</div>
            <div class="feature-card-subtitle">New Departure: 8:28pm (was 11:30pm)</div>
          </div>
        </div>
        <div class="feature-card card-float-5">
          <div class="card-connector connector-right"></div>
          <div class="feature-card-icon icon-yellow-soft">
            <span>🧳</span>
          </div>
          <div class="feature-card-content">
            <div class="feature-card-title"><strong>Baggage Claim</strong></div>
            <div class="feature-card-subtitle">Assigned to Belt 6</div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <button @click="downloadOnAppStore()">Download on App Store</button>
      <button @click="downloadOnGooglePlay()">Download on Google Play</button>
      <img height="100" src="@/config/assets/app_store.svg" alt="Apple App Store Badge">
      <img height="100" src="@/config/assets/google_play.svg" alt="Google Play Store Badge">
    </section>
    <section class="feature-showcase">
      <h2 class="showcase-title">Lerne die App kennen.</h2>
      <div class="showcase-carousel">
        <div class="showcase-card">
          <span class="showcase-tag">Produktivität</span>
          <h3 class="showcase-card-title">Alles an einem Ort.<br />Immer griffbereit.</h3>
          <div class="showcase-image-container">
            <img src="@/config/assets/iphone.png" alt="Feature 1">
          </div>
        </div>
        <div class="showcase-card">
          <span class="showcase-tag">Organisation</span>
          <h3 class="showcase-card-title">Smart sortiert.<br />Automatisch organisiert.</h3>
          <div class="showcase-image-container">
            <img src="@/config/assets/iphone.png" alt="Feature 2">
          </div>
        </div>
        <div class="showcase-card">
          <span class="showcase-tag">Sicherheit</span>
          <h3 class="showcase-card-title">Privat und sicher.<br />Von Anfang an.</h3>
          <div class="showcase-image-container">
            <img src="@/config/assets/iphone.png" alt="Feature 3">
          </div>
        </div>
        <div class="showcase-card">
          <span class="showcase-tag">Synchronisation</span>
          <h3 class="showcase-card-title">Überall dabei.<br />Auf allen Geräten.</h3>
          <div class="showcase-image-container">
            <img src="@/config/assets/iphone.png" alt="Feature 4">
          </div>
        </div>
        <div class="showcase-card">
          <span class="showcase-tag">Suche</span>
          <h3 class="showcase-card-title">Blitzschnell finden.<br />Nie mehr suchen.</h3>
          <div class="showcase-image-container">
            <img src="@/config/assets/iphone.png" alt="Feature 5">
          </div>
        </div>
      </div>
      <div class="carousel-navigation">
        <button class="carousel-nav-btn" @click="scrollCarousel(-1)">‹</button>
        <button class="carousel-nav-btn" @click="scrollCarousel(1)">›</button>
      </div>
    </section>

    <Footer></Footer>
  </div>
</template>

<script setup lang="ts">
import Header from '../components/Header.vue';
import Footer from '../components/Footer.vue';
import { inject } from 'vue'

const config: any = inject('config')

const downloadOnAppStore = () => {
  location.href = config.appStoreLink
}

const downloadOnGooglePlay = () => {
  location.href = config.googlePlayLink
}

const scrollCarousel = (direction: number) => {
  const carousel = document.querySelector('.showcase-carousel')
  if (carousel) {
    const scrollAmount = 340 * direction
    carousel.scrollBy({ left: scrollAmount, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.iphone-section {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 20px;
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  min-height: 700px;
  overflow: visible;
}

.feature-cards-left,
.feature-cards-right {
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: absolute;
  z-index: 1;
  top: 50%;
  transform: translateY(-50%);
}

.feature-cards-left {
  right: calc(50% + 250px);
  align-items: flex-end;
}

.feature-cards-right {
  left: calc(50% + 250px);
  align-items: flex-start;
}

.feature-cards-left .card-float-1 {
  transform: translateX(90px);
  opacity: 0.4;
}

.feature-cards-left .card-float-2 {
  transform: translateX(40px);
  opacity: 1;
}

.feature-cards-left .card-float-3 {
  transform: translateX(70px);
  opacity: 0.5;
}

.feature-cards-left .card-float-4 {
  transform: translateX(20px);
  opacity: 0.9;
}

.feature-cards-left .card-float-5 {
  transform: translateX(60px);
  opacity: 0.6;
}

.feature-cards-right .card-float-1 {
  transform: translateX(-30px);
  opacity: 0.95;
}

.feature-cards-right .card-float-2 {
  transform: translateX(-80px);
  opacity: 0.45;
}

.feature-cards-right .card-float-3 {
  transform: translateX(-50px);
  opacity: 1;
}

.feature-cards-right .card-float-4 {
  transform: translateX(-100px);
  opacity: 0.35;
}

.feature-cards-right .card-float-5 {
  transform: translateX(-70px);
  opacity: 0.5;
}

.feature-card {
  display: flex;
  align-items: center;
  gap: 12px;
  background: rgb(255, 255, 255);
  border-radius: 16px;
  padding: 14px 18px;
  box-shadow:
    rgba(0, 0, 0, 0.04) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0.02) 0px 1px 1px 0.5px,
    rgba(0, 0, 0, 0.02) 0px 3px 3px 1.5px,
    rgba(0, 0, 0, 0.02) 0px 6px 6px -3px,
    rgba(0, 0, 0, 0.02) 0px 12px 12px -6px,
    rgba(0, 0, 0, 0.02) 0px 24px 24px -12px;
  max-width: 300px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease;
  position: relative;
}

.card-connector {
  position: absolute;
  top: 0;
  height: 100%;
  width: 420px;
  background: linear-gradient(to right, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.6) 60%, rgba(255, 255, 255, 0) 100%);
  z-index: -1;
  pointer-events: none;
}

.connector-left {
  left: 100%;
  border-radius: 0 16px 16px 0;
}

.connector-right {
  right: 100%;
  background: linear-gradient(to left, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0.6) 60%, rgba(255, 255, 255, 0) 100%);
  border-radius: 16px 0 0 16px;
}

.feature-card:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow:
    rgba(0, 0, 0, 0.06) 0px 0px 0px 1px,
    rgba(0, 0, 0, 0.04) 0px 2px 2px 1px,
    rgba(0, 0, 0, 0.04) 0px 4px 4px 2px,
    rgba(0, 0, 0, 0.04) 0px 8px 8px -4px,
    rgba(0, 0, 0, 0.04) 0px 16px 16px -8px,
    rgba(0, 0, 0, 0.04) 0px 32px 32px -16px;
  z-index: 10;
  opacity: 1 !important;
}

.card-faded:hover {
  opacity: 1 !important;
}

.card-prominent:hover {
  opacity: 1 !important;
}

.feature-card-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  font-size: 18px;
  background: #f5f5f5;
}

.icon-blue {
  background: linear-gradient(135deg, #4A90D9, #357ABD);
  color: white;
}

.icon-coral {
  background: #FF6B6B;
  color: white;
}

.icon-green {
  background: #4CD964;
  color: white;
}

.icon-yellow {
  background: linear-gradient(135deg, #FFD54F, #FFC107);
  color: #333;
}

.icon-yellow-soft {
  background: #FFE082;
  color: #333;
}

.icon-brown {
  background: #8D6E63;
  color: white;
}

.icon-orange {
  background: linear-gradient(135deg, #FF7043, #F4511E);
  color: white;
}

.icon-gray-light {
  background: #F5F5F5;
  color: #9E9E9E;
}

.icon-avatar {
  background: #E8E8E8;
  border-radius: 50%;
}

.feature-card-content {
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.feature-card-title {
  font-size: 14px;
  font-weight: 500;
  color: #1a1a1a;
  line-height: 1.3;
}

.feature-card-subtitle {
  font-size: 12px;
  color: #999;
  line-height: 1.4;
}

.text-faded {
  color: #BDBDBD;
}

.text-coral {
  color: #FF5252;
}

.text-coral-faded {
  color: #FF8A80;
}

.iphone-container {
  flex-shrink: 0;
  z-index: 5;
  position: relative;
}

.iphone-container img {
  display: block;
  filter: drop-shadow(0 25px 50px rgba(0, 0, 0, 0.15));
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

@media (max-width: 1200px) {
  .feature-cards-left {
    right: calc(50% + 140px);
  }

  .feature-cards-right {
    left: calc(50% + 140px);
  }

  .card-float-1,
  .card-float-2,
  .card-float-3,
  .card-float-4,
  .card-float-5 {
    transform: translateX(60px);
  }

  .feature-cards-right .card-float-1,
  .feature-cards-right .card-float-2,
  .feature-cards-right .card-float-3,
  .feature-cards-right .card-float-4,
  .feature-cards-right .card-float-5 {
    transform: translateX(-60px);
  }
}

@media (max-width: 1000px) {
  .iphone-section {
    flex-direction: column;
    gap: 30px;
    min-height: auto;
    padding: 40px 20px;
  }

  .feature-cards-left,
  .feature-cards-right {
    position: relative;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    left: auto;
    right: auto;
  }

  .card-float-1,
  .card-float-2,
  .card-float-3,
  .card-float-4,
  .card-float-5,
  .feature-cards-right .card-float-1,
  .feature-cards-right .card-float-2,
  .feature-cards-right .card-float-3,
  .feature-cards-right .card-float-4,
  .feature-cards-right .card-float-5 {
    transform: none;
  }

  .card-faded {
    opacity: 0.7;
  }
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

  .feature-card {
    padding: 12px 14px;
    max-width: 280px;
  }

  .feature-card-icon {
    width: 38px;
    height: 38px;
  }

  .iphone-container img {
    height: 450px;
  }
}

.feature-showcase {
  padding: 80px 40px;
  max-width: 1400px;
  margin: 0 auto;
}

.showcase-title {
  font-size: 48px;
  font-weight: 700;
  color: #1d1d1f;
  margin-bottom: 12px;
  /*40px*/
  letter-spacing: -0.02em;
}

.showcase-carousel {
  display: flex;
  gap: 12px;
  /*20*/
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -ms-overflow-style: none;
  padding-bottom: 20px;
  padding-top: 20px;
}

.showcase-carousel::-webkit-scrollbar {
  display: none;
}

.showcase-card {
  flex: 0 0 320px;
  background: linear-gradient(180deg, #1c1c1e 0%, #2c2c2e 100%);
  border-radius: 24px;
  padding: 28px 24px 8px 24px;
  scroll-snap-align: start;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  min-height: 480px;
  transition: transform 0.3s ease;
}

.showcase-card:hover {
  transform: scale(1.02);
}

.showcase-tag {
  font-size: 13px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 8px;
  text-transform: uppercase;
  letter-spacing: 0.02em;
}

.showcase-card-title {
  font-size: 24px;
  font-weight: 600;
  color: #ffffff;
  line-height: 1.25;
  margin: 0 0 16px 0;
  /*24*/
  letter-spacing: -0.01em;
}

.showcase-image-container {
  flex: 1;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  overflow: hidden;
  margin: 0 -24px;
}

.showcase-image-container img {
  width: 75%;
  height: auto;
  object-fit: contain;
  object-position: bottom;
  filter: drop-shadow(0 -10px 30px rgba(0, 0, 0, 0.3));
}

.carousel-navigation {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
  margin-top: 24px;
}

.carousel-nav-btn {
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: none;
  background: #f5f5f7;
  color: #1d1d1f;
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, transform 0.2s;
}

.carousel-nav-btn:hover {
  background: #e8e8ed;
  transform: scale(1.05);
}

.carousel-nav-btn:active {
  transform: scale(0.95);
}

@media (max-width: 768px) {
  .feature-showcase {
    padding: 60px 20px;
  }

  .showcase-title {
    font-size: 32px;
  }

  .showcase-card {
    flex: 0 0 280px;
    min-height: 400px;
  }

  .showcase-card-title {
    font-size: 20px;
  }
}
</style>
