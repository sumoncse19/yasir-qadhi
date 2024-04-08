<template>
    <DefaultLayout>
      <!-- <section class="mx-auto max-w-7xl grid sm:grid-cols-1 lg:grid-cols-2"> -->
      <section>
        <div class="hero min-h-72 bg-slate-900" :style="heroStyle">
          <div class="hero-overlay bg-opacity-60"></div>
          <div class="hero-content text-center text-neutral-content">
            <div class="text-left">
              <div class="">
                <h1 class="mb-5 text-5xl font-bold">Award and Honors</h1>
                <p class="mb-5 w-3/6">
                    Dr. Yasir Qadhi's contributions to Islamic scholarship and interfaith dialogue have been recognized through numerous awards and honors throughout his career.
                </p>
                <!-- <button class="btn bg-[#00838d] text-white">Details</button> -->
              </div>
            </div>
          </div>
        </div>
        <!-- <img src="../../assets/image/shared/shared-cover.jpeg" alt=""> -->
        <div class="mx-auto max-w-7xl mt-16 grid gap-10 sm:grid-cols-1 lg:grid-cols-2">
          <div class="card shadow-lg h-60">
            <a class="card1" href="#">
              <p class="text-xl md:text2xl lg:text-4xl font-bold text-primaryGreen mb-3">BISCA Awards</p>
              <!-- <h4 class="mb-5 font-bold text-xl lg:text-2xl">Yale University</h4> -->
              <p class="small text-justify">
                This prestigious award from the Islamic Circle of North America recognizes Dr. Qadhi's outstanding leadership and dedication to community service within the Muslim community.
                WWe recognise and celebrate Sh Dr Yasir Qadhi's lifetime achievements in teaching Islam and da'wah at the BISCA Awards 2023 supported by The British Board of Scholars & Imams (BBSI).
              </p>
              <div class="go-corner" href="#">
                <div class="go-arrow">→</div>
              </div>
            </a>
          </div>
          <div class="card shadow-lg h-60">
            <a class="card1" href="#">
              <p class="text-xl md:text2xl lg:text-4xl font-bold text-primaryGreen mb-3">ICNA Award</p>
              <!-- <h4 class="mb-5 font-bold text-xl lg:text-2xl">The Islamic University of Madinah</h4> -->
              <p class="small">
                Dr. Yasir Qadhi and the Prestigious ICNA Community Service Award: Recognizing a Life of Dedicated Service
                The ICNA Community Service Award acknowledges individuals who have made exceptional contributions to the Muslim community. Past recipients of this award include prominent figures like Imam Zaid Shakir, a pioneering Muslim chaplain in the US military, and Dr. Ingrid Mattson, a prominent scholar and interfaith leader.
              </p>
              <div class="go-corner" href="#">
                <div class="go-arrow">→</div>
              </div>
            </a>
          </div>
  
          <div class="card shadow-lg h-60">
            <a class="card1" href="#">
              <p class="text-xl md:text2xl lg:text-4xl font-bold text-primaryGreen mb-3">The Muslim 500</p>
              <!-- <h4 class="mb-5 font-bold text-xl lg:text-2xl">The University of Houston</h4> -->
              <p class="small text-justify">
                The Muslim 500, also known as "The World's 500 Most Influential Muslims," is an annual publication launched in 2009 by the Royal Islamic Strategic Studies Centre in Amman, Jordan.
                Dr. Qadhi has been consistently listed among the most influential Muslims in the world by The Muslim 500, a publication that recognizes individuals who have made significant contributions to Muslim life.
              </p>
              <div class="go-corner" href="#">
                <div class="go-arrow">→</div>
              </div>
            </a>
          </div>
        </div>
      </section>
    </DefaultLayout>
  </template>
  
  <script>
  import DefaultLayout from '@/layouts/DefaultLayout.vue'
  import backgroundImage from '../../assets/image/shared/shared-cover.jpeg'
  
  export default {
    components: {
      DefaultLayout
    },
    data() {
      return {
        heroStyle: {
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: '70px 0',
          // backgroundPosition: '86px 0',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }
      }
    }
  }
  </script>
  <!-- <script setup>
  import DefaultLayout from '@/layouts/DefaultLayout.vue'
  import backgroundImage  from '../../assets/image/shared/shared-cover.jpeg'
  const heroStyle = {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',     
        backgroundRepeat: 'no-repeat'
    }
  </script> -->
  <style>
  
  .card p.small {
    font-size: 14px;
  }
  
  .go-corner {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    width: 32px;
    height: 32px;
    overflow: hidden;
    top: 0;
    right: 0;
    background-color: #00838d;
    border-radius: 0 4px 0 32px;
  }
  
  .go-arrow {
    margin-top: -4px;
    margin-right: -4px;
    color: white;
    font-family: courier, sans;
  }
  
  .card1 {
    display: block;
    position: relative;
    /* max-width: 262px; */
    background-color: #f2f8f9;
    border-radius: 4px;
    padding: 32px 24px;
    margin: 12px;
    text-decoration: none;
    z-index: 0;
    overflow: hidden;
  }
  
  .card1:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: #00838d;
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(1);
    /* transform-origin: 50% 50%; */
    transform-origin: 99% 35%;
    transition: transform 0.25s ease-out;
  }
  
  .card1:hover:before {
    transform: scale(21);
  }
  
  .card1:hover p {
    transition: all 0.3s ease-out;
    color: rgba(255, 255, 255, 0.8);
  }
  
  .card1:hover h3 {
    transition: all 0.3s ease-out;
    color: #fff;
  }
  /* 
  .card2 {
    display: block;
    top: 0px;
    position: relative;
    max-width: 262px;
    background-color: #f2f8f9;
    border-radius: 4px;
    padding: 32px 24px;
    margin: 12px;
    text-decoration: none;
    z-index: 0;
    overflow: hidden;
    border: 1px solid #f2f8f9;
  }
  
  .card2:hover {
    transition: all 0.2s ease-out;
    box-shadow: 0px 4px 8px rgba(38, 38, 38, 0.2);
    top: -4px;
    border: 1px solid #ccc;
    background-color: white;
  }
  
  .card2:before {
    content: "";
    position: absolute;
    z-index: -1;
    top: -16px;
    right: -16px;
    background: #00838d;
    height: 32px;
    width: 32px;
    border-radius: 32px;
    transform: scale(2);
    transform-origin: 50% 50%;
    transition: transform 0.15s ease-out;
  }
  
  .card2:hover:before {
    transform: scale(2.15);
  }
  
  .card3 {
    display: block;
    top: 0px;
    position: relative;
    max-width: 262px;
    background-color: #f2f8f9;
    border-radius: 4px;
    padding: 32px 24px;
    margin: 12px;
    text-decoration: none;
    overflow: hidden;
    border: 1px solid #f2f8f9;
  }
  
  .card3 .go-corner {
    opacity: 0.7;
  }
  
  .card3:hover {
    border: 1px solid #00838d;
    box-shadow: 0px 0px 999px 999px rgba(255, 255, 255, 0.5);
    z-index: 500;
  }
  
  .card3:hover p {
    color: #00838d;
  }
  
  .card3:hover .go-corner {
    transition: opactiy 0.3s linear;
    opacity: 1;
  }
  
  .card4 {
    display: block;
    top: 0px;
    position: relative;
    max-width: 262px;
    background-color: #fff;
    border-radius: 4px;
    padding: 32px 24px;
    margin: 12px;
    text-decoration: none;
    overflow: hidden;
    border: 1px solid #ccc;
  }
  
  .card4 .go-corner {
    background-color: #00838d;
    height: 100%;
    width: 16px;
    padding-right: 9px;
    border-radius: 0;
    transform: skew(6deg);
    margin-right: -36px;
    align-items: start;
    background-image: linear-gradient(-45deg, #8f479a 1%, #dc2a74 100%);
  }
  
  .card4 .go-arrow {
    transform: skew(-6deg);
    margin-left: -2px;
    margin-top: 9px;
    opacity: 0;
  }
  
  .card4:hover {
    border: 1px solid #cd3d73;
  }
  
  .card4 h3 {
    margin-top: 8px;
  }
  
  .card4:hover .go-corner {
    margin-right: -12px;
  }
  
  .card4:hover .go-arrow {
    opacity: 1;
  } */
  </style>
  