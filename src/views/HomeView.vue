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
      <!-- Left Feature Cards -->
      <div class="feature-cards-left">
        <div class="feature-card card-faded card-float-1">
          <div class="feature-card-icon icon-avatar">
            <span>👩</span>
          </div>
          <div class="feature-card-content">
            <div class="feature-card-title text-faded">Mom landed in New York</div>
            <div class="feature-card-subtitle">6:32am (22m early) and ☀️ 88°</div>
          </div>
        </div>

        <div class="feature-card card-prominent card-float-2">
          <div class="feature-card-icon icon-blue">
            <span>✈️</span>
          </div>
          <div class="feature-card-content">
            <div class="feature-card-title"><strong>AUS ✈ JFK • Departed Gate</strong></div>
            <div class="feature-card-subtitle">Taxiing for 13m, for take off at 5:34PM.</div>
          </div>
        </div>

        <div class="feature-card card-faded card-float-3">
          <div class="feature-card-icon icon-coral">
            <span>△</span>
          </div>
          <div class="feature-card-content">
            <div class="feature-card-title text-coral-faded">Check In is now open</div>
            <div class="feature-card-subtitle">You can check-in at delta.com</div>
          </div>
        </div>

        <div class="feature-card card-float-4">
          <div class="feature-card-icon icon-green">
            <span>✓</span>
          </div>
          <div class="feature-card-content">
            <div class="feature-card-title"><strong>AUS ✈ JFK • Landed</strong></div>
            <div class="feature-card-subtitle">It's 6:32am (22m early) and ☀️ 88°</div>
          </div>
        </div>

        <div class="feature-card card-float-5">
          <div class="feature-card-icon icon-yellow">
            <span>🧳 6</span>
          </div>
          <div class="feature-card-content">
            <div class="feature-card-title"><strong>Baggage Claim</strong></div>
            <div class="feature-card-subtitle">Assigned to Belt 6</div>
          </div>
        </div>
      </div>

      <!-- iPhone Image -->
      <div class="iphone-container">
        <img height="650" src="@/config/assets/iphone.png" alt="iPhone showing app interface">
      </div>

      <!-- Right Feature Cards -->
      <div class="feature-cards-right">
        <div class="feature-card card-float-1">
          <div class="feature-card-icon icon-brown">
            <span>🚪</span>
          </div>
          <div class="feature-card-content">
            <div class="feature-card-title"><strong>Gate changed</strong></div>
            <div class="feature-card-subtitle">Changed to ORD Terminal 2 • Gate 7</div>
          </div>
        </div>

        <div class="feature-card card-faded card-float-2">
          <div class="feature-card-icon icon-yellow-soft">
            <span>☀️</span>
          </div>
          <div class="feature-card-content">
            <div class="feature-card-title text-faded">AUS ✈ JFK • 70° ☀️</div>
            <div class="feature-card-subtitle">Good morning! Your flight today is on time.</div>
          </div>
        </div>

        <div class="feature-card card-float-3">
          <div class="feature-card-icon icon-orange">
            <span>➚</span>
          </div>
          <div class="feature-card-content">
            <div class="feature-card-title text-coral"><strong>AUS ✈ JFK • Delayed 45m</strong></div>
            <div class="feature-card-subtitle">↗ FRA 6:30pm (45m late)</div>
          </div>
        </div>

        <div class="feature-card card-faded card-float-4">
          <div class="feature-card-icon icon-gray-light">
            <span>↻</span>
          </div>
          <div class="feature-card-content">
            <div class="feature-card-title text-faded">AUS ✈ JFK • Flight changed</div>
            <div class="feature-card-subtitle">New Departure: 8:28pm (was 11:30pm)</div>
          </div>
        </div>

        <div class="feature-card card-faded card-float-5">
          <div class="feature-card-icon icon-yellow-soft">
            <span>🧳</span>
          </div>
          <div class="feature-card-content">
            <div class="feature-card-title text-faded"><strong>Baggage Claim</strong></div>
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
  align-items: center;
  padding: 80px 20px;
  position: relative;
  max-width: 1400px;
  margin: 0 auto;
  min-height: 700px;
}

.feature-cards-left,
.feature-cards-right {
  display: flex;
  flex-direction: column;
  gap: 20px;
  position: absolute;
  z-index: 0;
}

.feature-cards-left {
  left: 0;
  align-items: flex-end;
}

.feature-cards-right {
  right: 0;
  align-items: flex-start;
}

/* Floating positions - staggered like in the original */
.card-float-1 {
  transform: translateX(30px);
}

.card-float-2 {
  transform: translateX(60px);
}

.card-float-3 {
  transform: translateX(40px);
}

.card-float-4 {
  transform: translateX(20px);
}

.card-float-5 {
  transform: translateX(50px);
}

.feature-cards-right .card-float-1 {
  transform: translateX(-30px);
}

.feature-cards-right .card-float-2 {
  transform: translateX(-50px);
}

.feature-cards-right .card-float-3 {
  transform: translateX(-40px);
}

.feature-cards-right .card-float-4 {
  transform: translateX(-60px);
}

.feature-cards-right .card-float-5 {
  transform: translateX(-45px);
}

.feature-card {
  display: flex;
  align-items: center;
  gap: 12px;
  background: #fff;
  border-radius: 16px;
  padding: 14px 18px;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06), 0 4px 24px rgba(0, 0, 0, 0.04);
  max-width: 300px;
  transition: transform 0.3s ease, box-shadow 0.3s ease, opacity 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-2px) scale(1.02);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1), 0 8px 32px rgba(0, 0, 0, 0.06);
  z-index: 10;
}

/* Faded cards - reduced opacity like in original */
.card-faded {
  opacity: 0.5;
}

.card-faded:hover {
  opacity: 0.8;
}

/* Prominent card - full opacity with subtle highlight */
.card-prominent {
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.08), 0 8px 32px rgba(0, 0, 0, 0.04);
  opacity: 1;
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

/* Icon colors */
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

/* Text styles */
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

/* iPhone container - highest z-index */
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
    left: -20px;
  }

  .feature-cards-right {
    right: -20px;
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
</style>
