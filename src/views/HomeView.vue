<template>
  <div class="home">
    <nav class="navbar">
      <div class="nav-container">
        <div class="nav-left">
          <div class="logo">
            <span class="logo-icon">P</span>
            <span class="logo-text">Paste</span>
          </div>
        </div>
        <div class="nav-center">
          <a href="#" class="nav-link">Use Cases</a>
          <a href="#" class="nav-link">Help</a>
          <a href="#" class="nav-link">Blog</a>
          <a href="#" class="nav-link">Updates</a>
          <a href="#" class="nav-link">Pricing</a>
        </div>
        <div class="nav-right">
          <button class="cta-button">Try for free</button>
        </div>
      </div>
    </nav>

    <section class="hero">
      <div class="hero-image">
        <!--  <img src="/hero-devices.png" alt="Paste app on multiple devices" />-->
      </div>

      <div class="hero-content">
        <h1 class="hero-title">
          Your clipboard,<br />
          supercharged and secure
        </h1>
        <p class="hero-description">
          Paste keeps everything you copy organized and searchable. Lightweight,<br />
          intuitive, packed with smart features, and private by design.
        </p>
        <button class="cta-button-large">Try for free</button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
</script>

<style scoped>
.home {
  min-height: 100vh;
  background: #fff;
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
