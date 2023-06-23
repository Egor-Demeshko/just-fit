<script>
    import UpperBar from "$lib/components/UpperBar.svelte";
    import Menu from "$lib/components/Menu.svelte";

    export let data;
    let pageMeta = data.pageMeta.data[0].attributes;
</script>

<svelte:head>
    <title>{pageMeta.title}</title>
    <meta name="description" content={pageMeta.description}>
</svelte:head>

<UpperBar/>

<div class="what">
    <div class="what__wrapper">
      <div class="what__top">
        <svg id="top" viewBox="0 0 338 125">
          <path d="M14.06 11.9906C22.0507 4.29766 32.7113 0 43.8034 0H288C315.614 0 338 22.3858 338 50V74.4386C338 105.179 310.523 128.639 280.163 123.821L37.0812 85.2408C2.11039 79.6905 -11.4484 36.5483 14.06 11.9906V11.9906Z" fill="currentColor"/>
        </svg>
        <h1>Так что такое JF?</h1>
        <div class="what__avatar">
          <img src="/images/anastasiya.webp" alt="Владыко Анастасия, создатель площадки JF">
        </div>
      </div>

      <div  class="what__middle">
        <svg id="middle" viewBox="12 0 340 479">
          <path d="M26.06 121.009C34.0507 128.702 44.7113 133 55.8034 133L300 133C327.614 133 350 110.614 350 83V58.5614C350 27.8212 322.523 4.36095 292.163 9.17946L49.0812 47.7592C14.1104 53.3095 0.551564 96.4517 26.06 121.009V121.009Z" fill="currentColor"/>
          <path d="M13 87H350V469C350 474.523 345.523 479 340 479H63C35.3858 479 13 456.614 13 429V87Z" fill="currentColor"/></svg>
        <p class="what__text">
          Меня зовут Анастасия. Мне очень нравится носить белье пошитое по индивидуальным меркам.
          Такое белье очень удобное, не режет и не скользит. Мое главное желание сделать такое белье доступным.
          На платформе JF вы можете выбрать модель белья, пригласить специалиста для консультации и снятия мерок. Получить новое белье.
          А дополнительно получить уникальный id вашего личного размера. Это ваш номер телефона. На второй заказ вы сможете заказать белье из каталога уже без дополнительных мерок, вашего размера.
        </p>
      </div>
    </div>


    <div class="what__rest">
      <div class="what__item">
        <h2>Как я работаю</h2>
      </div>

      <div class="what__item">
        <h3>1. Оцените каталог</h3>
      </div>

      <div class="what__item">
        <h3>2. Занесите мерки в базу</h3>
        <div class="what__item-inner">
          <div class="what__buttons">
            <a class="what__reference" href="/measurements" target="_blank" aria-label="Перейти на страницу снятия мерок"><span>ВНЕСТИ МЕРКИ</span></a>
            <a class="what__reference" href="/contacts" target="_blank" aria-label="Перейти на страницу контактов"><span>ПЕРЕЙТИ НА СТРАНИЦУ КОНТАКТОВ</span></a>
          </div>
        </div>
      </div>

      <div class="what__item  what__item_grey">
        <p>Бесплатная консультация по выбору белья при снятии мерок</p>
      </div>

      <div class="what__item">
        <h3>3. Узнайте условия оплаты и доставки</h3>
        <div class="what__item-inner">
          <div class="what__buttons">
            <a class="what__reference" href="/delivery" target="_blank"><span>УСЛОВИЯ ОПЛАТЫ И ДОСТАВКИ</span></a>
          </div>
        </div>
      </div>

      <div class="what__item">
        <h3>4. Пора заказывать новое белье</h3>
        <div class="what__item-inner">
          <div class="what__buttons">
            <a class="what__reference" href="/" aria-label="Перейти на страницу каталога Just Fit"><span>КАТАЛОГ</span></a>
          </div>
        </div>
      </div>

      <div class="what__icons">
        <a class="what__icon what__icon_no-text-style" href="https://www.kufar.by/customer/U2FsdGVkX1-_8KbmCdjeVZuFIe0azjG8teUqhvyrDRw~" target="_blank" rel="nofollow"
        aria-label="перейти на страницу kufar">
          <span class="what__icon-name">KUFAR</span>
          <div class="" aria-disabled="true">
            <svg class="what__icon-inner" viewBox="0 0 44 50">
              <path id="kufar_inner" fill-rule="evenodd" clip-rule="evenodd" d="M22.7334 20.4023H22.7276C22.5205 20.2105 22.2498 20.1019 21.9675 20.0973C21.6853 20.0927 21.4112 20.1925 21.198 20.3775C20.0486 21.509 18.9133 22.6545 17.7922 23.8139C17.6404 24.0136 17.5585 24.2577 17.559 24.5085C17.559 24.7706 17.6458 25.0129 17.7938 25.2055C18.8522 26.2936 20.1636 27.5215 21.2418 28.5906H21.2451C21.432 28.764 21.6715 28.87 21.9255 28.8919C22.1795 28.9137 22.4336 28.8502 22.6474 28.7114C23.8182 27.5918 25.1387 26.2283 26.2591 25.06C26.3753 24.8601 26.4283 24.6298 26.411 24.3992C26.3938 24.1687 26.3071 23.9488 26.1624 23.7684C25.1147 22.6828 23.8058 21.464 22.7334 20.4023Z" fill="currentColor"/>
              <path id="kufar_outer" fill-rule="evenodd" clip-rule="evenodd" d="M32.4661 25.1465L35.4179 28.129L32.949 30.6211H32.9448C31.9402 29.6082 31.048 28.678 30.0318 27.6742C29.8295 27.5139 29.5789 27.4268 29.3207 27.427C29.0438 27.427 28.7907 27.5246 28.5931 27.6866C27.4363 28.8296 26.2914 29.9845 25.1584 31.1511C24.9986 31.3662 24.9187 31.6302 24.9326 31.8978C24.9465 32.1654 25.0532 32.4198 25.2345 32.6171L28.1011 35.5111L25.6322 38.0057H25.628C24.6474 37.016 23.7759 36.1139 22.7878 35.1316C22.576 34.9351 22.2978 34.8259 22.0089 34.8259C21.72 34.8259 21.4418 34.9351 21.23 35.1316H21.2209L18.3741 38.0074H18.3708L15.8985 35.5128C16.9147 34.4875 17.7994 33.6193 18.8049 32.584C18.9578 32.3897 19.0488 32.1442 19.0488 31.8787C19.0488 31.6621 18.9893 31.4604 18.8843 31.2867C17.8085 30.1763 16.4947 28.9104 15.3941 27.8247H15.3834C15.172 27.629 14.8947 27.5201 14.6066 27.5196C14.3186 27.5192 14.0409 27.6272 13.8289 27.8222L10.9787 30.7021H10.9738L8.5048 28.2075C9.49289 27.2095 10.3983 26.3223 11.3773 25.3144V25.3078C11.5534 25.1185 11.66 24.8751 11.6797 24.6173C11.6994 24.3595 11.6309 24.1027 11.4856 23.8889L8.50315 20.8792L10.9754 18.3846H10.9796C11.9701 19.385 12.8317 20.3169 13.8438 21.2942C14.0504 21.4754 14.3152 21.5762 14.5899 21.5783C14.8647 21.5805 15.131 21.4837 15.3404 21.3058C16.412 20.2326 17.6837 18.9675 18.7412 17.881C18.9117 17.6664 18.9997 17.3978 18.9894 17.124C18.9791 16.8501 18.8711 16.5889 18.685 16.3877L15.8199 13.4954L18.2922 11.0033H18.2964C19.277 11.993 20.1543 12.891 21.1407 13.8757H21.1482C21.3562 14.0677 21.6279 14.1761 21.911 14.1801C22.194 14.1841 22.4686 14.0833 22.682 13.8972L25.5495 11.0033H25.5544L28.0243 13.4962C26.994 14.5372 26.0481 15.4641 25.0294 16.5159C24.9015 16.7034 24.8323 16.9247 24.8303 17.1517C24.8284 17.3787 24.894 17.6012 25.0187 17.7909C26.0803 18.8906 27.4314 20.0945 28.5195 21.1694H28.541C28.7453 21.3596 29.0181 21.4737 29.3199 21.4737C29.6192 21.4737 29.8929 21.3596 30.098 21.1694H30.1096L32.9457 18.3085H32.9498L35.4188 20.8023C34.415 21.8152 33.4988 22.723 32.5 23.7442C32.3402 23.9414 32.2503 24.186 32.2443 24.4397C32.2383 24.6935 32.3158 24.942 32.4661 25.1465ZM43.9494 15.0135C43.9292 14.8043 43.8969 14.5964 43.8526 14.3909C43.7994 14.1363 43.7324 13.8848 43.6517 13.6376C43.5581 13.3439 43.4454 13.0567 43.3144 12.7777C43.071 12.26 42.7677 11.7726 42.4106 11.3257C42.2447 11.1216 42.0683 10.9262 41.8823 10.7403C41.7149 10.5709 41.5394 10.4098 41.3564 10.2574C41.2812 10.1983 41.2048 10.1407 41.1273 10.0846L41.0877 10.0549C41.0127 10.0025 40.9366 9.95173 40.8594 9.90273L40.5138 9.67121L25.5478 0.949593L25.2493 0.797452C25.1207 0.729307 24.9903 0.664516 24.8582 0.603142C24.6573 0.510217 24.4511 0.429319 24.2406 0.360875L24.1976 0.347646C24.1108 0.321186 24.0322 0.296381 23.9189 0.264961L23.8776 0.254212C23.517 0.15519 23.1494 0.0838729 22.7779 0.0408843C21.8886 -0.0517247 20.9899 0.019174 20.1262 0.250077C19.8982 0.311504 19.6736 0.384639 19.4531 0.469193C19.3539 0.506401 19.2588 0.546917 19.1679 0.589086L19.1282 0.609757C19.067 0.63539 19 0.66681 18.8991 0.717248L18.4989 0.92396L3.46598 9.68857L3.17492 9.87875C3.07405 9.94489 2.97235 10.0127 2.89545 10.0689C2.63885 10.2541 2.39746 10.4596 2.17361 10.6833C1.86767 10.9828 1.58877 11.3087 1.34014 11.6573C0.679331 12.5901 0.246335 13.6648 0.07589 14.7952C0.0630603 14.8919 0.0528587 14.989 0.0452965 15.0862L0.0436428 15.1053C0.0403354 15.1466 0.0353743 15.1921 0.0320669 15.2483L-0.00100708 15.8064L0.00726142 33.3109L0.020491 33.5754C0.0287595 33.7077 0.0362012 33.8384 0.0477771 33.9723L0.0519113 34.0054C0.0827081 34.3059 0.136613 34.6037 0.213147 34.8959L0.231338 34.9736C0.328114 35.3441 0.454193 35.7063 0.608381 36.0568C0.779539 36.4479 0.984598 36.8233 1.22108 37.178C1.61931 37.7679 2.09958 38.298 2.64739 38.7523C2.70693 38.8011 2.77969 38.8557 2.87974 38.9276L2.95581 38.9814C3.00046 39.0112 3.0509 39.0475 3.10464 39.0806L3.47838 39.3311L18.6106 48.1371L18.6767 48.1751C18.8007 48.2396 18.9248 48.3016 19.0521 48.3653L19.0992 48.3868C19.1794 48.4224 19.2787 48.4678 19.382 48.5092C19.5292 48.5712 19.6987 48.6299 19.9004 48.6886C20.0377 48.7333 20.1543 48.7655 20.2717 48.792C20.3933 48.8242 20.5156 48.8482 20.6603 48.8722L21.0423 48.9383L21.1978 48.9582C21.316 48.9689 21.4359 48.9764 21.5541 48.983L22.0676 49.0053L22.3058 48.9904C22.4389 48.9846 22.5703 48.9772 22.7076 48.9689L22.7738 48.9631C22.8755 48.9524 22.9929 48.9408 23.1111 48.9218C23.3575 48.883 23.6015 48.8306 23.842 48.7647C24.1381 48.6828 24.3415 48.6183 24.5283 48.5439C24.6185 48.5108 24.721 48.4695 24.8326 48.4166L25.4751 48.0974L40.5502 39.3088L40.7396 39.1864C40.8636 39.1038 40.9876 39.0211 41.1166 38.9293C41.272 38.8168 41.4267 38.6936 41.5821 38.5522C41.6813 38.4638 41.7764 38.3737 41.8517 38.2968C41.9749 38.1769 42.0774 38.0677 42.1576 37.9743C42.602 37.4809 42.975 36.9276 43.2656 36.3305C43.4657 35.9171 43.6286 35.4855 43.7452 35.0464C43.8187 34.7793 43.8692 34.5528 43.9072 34.3171C43.9254 34.2096 43.9362 34.1054 43.951 33.9649C43.9593 33.8855 43.9634 33.8061 43.9676 33.74L43.9899 33.3729V33.3952L43.9998 33.2687V15.9991L43.9775 15.4451C43.9706 15.3011 43.9618 15.1572 43.9494 15.0135Z" fill="currentColor"/>
            </svg>
        </div>
      </a>

        <a class="what__icon what__icon_no-text-style" href="https://www.instagram.com/just_fit_by/" target="_blank" rel="nofollow"
        aria-label="перейти на страницу Instagram">
          <span class="what__icon-name">INSTAGRAM</span>
            <div class="what__icon" aria-disabled="true">
              <svg class="what__icon-inner" viewBox="0 0 56 56">
                  <path id="instagram_logo" d="M28.1347 0.693359C20.6876 0.693359 19.753 0.72586 16.8281 0.85871C13.9089 0.992131 11.9163 1.4534 10.1727 2.1302C8.36924 2.82923 6.83938 3.76431 5.31522 5.28611C3.78993 6.80733 2.85304 8.33425 2.15038 10.1337C1.47056 11.8745 1.00783 13.8638 0.87644 16.7762C0.74619 19.6955 0.711914 20.6289 0.711914 28.0617C0.711914 35.4945 0.745048 36.4244 0.877583 39.3437C1.01183 42.2573 1.47399 44.246 2.15152 45.9862C2.85247 47.7862 3.78936 49.3132 5.31408 50.8344C6.83766 52.3568 8.36753 53.2941 10.1699 53.9932C11.9146 54.67 13.9077 55.1312 16.8263 55.2646C19.7513 55.3975 20.6853 55.43 28.1318 55.43C35.5795 55.43 36.5112 55.3975 39.4361 55.2646C42.3553 55.1312 44.3502 54.67 46.0949 53.9932C47.8978 53.2941 49.4254 52.3568 50.949 50.8344C52.4743 49.3132 53.4112 47.7863 54.1138 45.9868C54.7879 44.246 55.2507 42.2567 55.3878 39.3443C55.5192 36.425 55.5534 35.4945 55.5534 28.0617C55.5534 20.6289 55.5192 19.6961 55.3878 16.7768C55.2507 13.8632 54.7879 11.8745 54.1138 10.1343C53.4112 8.33425 52.4743 6.80733 50.949 5.28611C49.4237 3.76374 47.8984 2.82866 46.0932 2.1302C44.3451 1.4534 42.3513 0.992131 39.4321 0.85871C36.5072 0.72586 35.5761 0.693359 28.1267 0.693359H28.1347ZM25.6748 5.62536C26.4049 5.62422 27.2195 5.62536 28.1347 5.62536C35.4561 5.62536 36.3239 5.65159 39.2151 5.78273C41.8886 5.90474 43.3396 6.35062 44.3062 6.72522C45.5859 7.22127 46.4982 7.81425 47.4574 8.77214C48.4171 9.73004 49.0112 10.6423 49.5094 11.9195C49.8847 12.8831 50.332 14.3313 50.4537 16.9997C50.5851 19.8848 50.6136 20.7515 50.6136 28.0554C50.6136 35.3593 50.5851 36.226 50.4537 39.1111C50.3314 41.7795 49.8847 43.2277 49.5094 44.1913C49.0124 45.4685 48.4171 46.3779 47.4574 47.3352C46.4976 48.2931 45.5865 48.8861 44.3062 49.3822C43.3408 49.7585 41.8886 50.2032 39.2151 50.3252C36.3244 50.4564 35.4561 50.4849 28.1347 50.4849C20.8127 50.4849 19.9449 50.4564 17.0543 50.3252C14.3807 50.2021 12.9297 49.7562 11.9625 49.3816C10.6829 48.8855 9.76886 48.2926 8.80912 47.3347C7.84938 46.3768 7.25526 45.4668 6.75711 44.189C6.38179 43.2254 5.93448 41.7772 5.8128 39.1088C5.68141 36.2237 5.65513 35.357 5.65513 28.0486C5.65513 20.7401 5.68141 19.878 5.8128 16.9929C5.93505 14.3245 6.38179 12.8763 6.75711 11.9115C7.25412 10.6343 7.84938 9.72205 8.80912 8.76416C9.76886 7.80627 10.6829 7.21329 11.9625 6.7161C12.9291 6.33979 14.3807 5.89505 17.0543 5.77246C19.5839 5.65843 20.5642 5.62422 25.6748 5.61852V5.62536ZM42.7718 10.1696C42.1209 10.1696 41.4847 10.3623 40.9436 10.7232C40.4024 11.0841 39.9807 11.5971 39.7316 12.1973C39.4826 12.7975 39.4175 13.4579 39.5446 14.095C39.6716 14.7321 39.9851 15.3173 40.4455 15.7765C40.9058 16.2358 41.4922 16.5485 42.1305 16.6751C42.7689 16.8017 43.4306 16.7365 44.0318 16.4877C44.6331 16.239 45.1469 15.8178 45.5083 15.2776C45.8698 14.7374 46.0626 14.1023 46.0623 13.4527C46.0623 11.6395 44.5884 10.1685 42.7718 10.1685V10.1696ZM28.1347 14.0069C20.3579 14.0069 14.0528 20.2999 14.0528 28.0617C14.0528 35.8234 20.3579 42.1136 28.1347 42.1136C35.9114 42.1136 42.2148 35.8234 42.2148 28.0617C42.2148 20.2999 35.9114 14.0069 28.1347 14.0069ZM28.1347 18.9389C33.1824 18.9389 37.275 23.0231 37.275 28.0617C37.275 33.0997 33.1824 37.1844 28.1347 37.1844C23.0863 37.1844 18.9943 33.0997 18.9943 28.0617C18.9943 23.0231 23.0863 18.9389 28.1347 18.9389Z" fill="currentColor"/>
                <!-- <use href="/assets/icons/general/instagram0.svg#instagram"></use> -->
              </svg>
           </div>
        </a>
      </div>

    </div>
  </div>

  <Menu/>

<style>
    @font-face {
  font-family: Vollkorn;
  src: local("Vollkorn"),
       url("/assets/fonts/Vollkorn.ttf");
}


  .what{
    padding: calc(var(--bar-height) + 2em) 0.8rem;
    display: flex;
    flex-flow: column;
    align-items: center;
    gap: 1.5rem;
    background-image: var(--main);
    width: 100%;
    inline-size: 100%;
    font-family: Vollkorn, Ubuntu, sans-serif;
    font-size: 1rem;
    box-sizing: border-box;
  }




  .what *{
    box-sizing: border-box;
  }


  .what__wrapper{
    inline-size: 100%;
  }


  .what__wrapper svg{
    inline-size: 100%;
    color: var(--icons-white);
  }


  .what__top{
    inline-size: 100%;
    position: relative;
  }


  .what__top h1{
    position: absolute;
    top: 1.25rem;
    left: 50%;
    transform: translateX(-50%);
    margin: 0;
    width: 80%;
    text-align: center;
  }


  .what__avatar{
    max-inline-size: 8.75rem;
    max-block-size: 8.75rem;
    border-radius: 50%;
    border: 2px solid var(--icons-main-red);
    position: absolute;
    bottom: 0;
    left: 2rem;
    transform: translateY(50%);
    z-index: 5;
  }


  .what__avatar img{
    max-inline-size: 100%;
    border-radius: 50%;
  }


  .what__middle{
    position: relative;
    inline-size: 100%;
    block-size: 34rem;
  }

  #middle{
    transform: scaleY(105%);
  }


  .what__text{
    position: absolute;
    width: 90%;
    top: 5rem;
    left: 1.125rem;
    font-weight: 600;
    line-height: 1.5;
    margin: 0;
  }


  .what__rest{
    padding: 0 1.5rem;
    inline-size: 100%;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
  }


  .what__item{
    font-size: 1.125em;
  }


  .what__item>h2, .what__item>h3{
    background-color: var(--icons-white);
    margin: 0;
    text-align: center;
    padding: 1rem;
    inline-size: 100%;
    font-size: 1em;
    border-radius: 10px;
  }


  .what__item-inner{
    width: 100%;
    inline-size: 100%;
    padding: 0 1.3rem;
  }


  .what__item_grey{
    padding: 0.875rem;
    font-size: 1.125em;
    background-color: var(--background-grey);
    border-radius: 10px;
    font-weight: bold;
  }


  .what__item_grey *{
    margin: 0;
  }


  .what__buttons{
    padding: 1.75rem 1.125rem;
    background-color: var(--icons-white);
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    border-radius: 0 0 10px 10px;
  }

  .what__buttons::before{
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 6px;
    width: 52%;
    inline-size: 52%;
    background-color: var(--background-grey);
    border-radius: 5px;
  }


  .what__reference{
    color: var(--icons-white);
    font-weight: bold;
    padding: 0.75rem 1.125rem;
    background-color: var(--icons-main-red);
    text-decoration: none;
    text-align: center;
    border-radius: 10px;
  }


  .what__reference>span{
    display: block;
    transform: translateY(0.1em);
  }


  .what__icons{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    color: var(--background-grey);
    gap: 1.5rem;
  }


  .what__icon{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }

  .what__icon_no-text-style{
    text-decoration: none;
    color: currentColor;
  }


  #kufar_inner,
  #kufar_outer,
  #instagram_logo{
    fill: var(--background-grey);
  }


  .what__icon-name{
    text-align: center;
    font-size: 1.5em;
    font-weight: bold;
  }


@media (min-width: 32em) {

    .what__wrapper{
        max-inline-size: 80%;
    }

    .what__rest{
        padding: 0;
        max-inline-size: 70%;
        gap: 2rem 3.75rem;
    }

    .what__reference{
        transition-property: background-color, color;
        transition-duration: 600ms;
        transition-timing-function: ease;
    }

    .what__reference:hover{
        color: var(--hard-black);
        background-color: var(--background-grey);
    }

    .what__top h1{
        top: 10%;
    }

    .what__text{
        font-size: 1.2em;
        top: 50%;
        transform: translateY(-50%);
    }

    .what__avatar{
        max-inline-size: 10rem;
        max-block-size: 10rem;
    }

    .what__icons{
        flex-direction: row;
        justify-content: center;
        align-items: start;
        gap: 2.5rem;
    }

    .what__icon,
    #instagram_logo,
    #kufar_inner,
    #kufar_outer{
        transition: all 600ms ease;
    }

    .what__icon{
        gap: 2px;
    }

    .what__icon-inner{
        width: 3.4rem;
        inline-size: 3.4rem;
        block-size: 3.9rem;
    }

    .what__icon:hover{
        color: var(--icons-main-red);
    }

    .what__icon:hover #instagram_logo,
    .what__icon:hover #kufar_inner,
    .what__icon:hover #kufar_outer{
        fill: var(--icons-main-red);
    }
}


@media(min-width: 52em){
    .what{
      flex-direction: row;
      gap: 3.75rem;
      justify-content: center;
      height: 100vh;
    }

    .what__avatar{
      max-block-size: 8.75rem;
      max-inline-size: 8.75rem;
    }

    .what__wrapper{
      flex: 0 1 21.5rem;
    }

    .what__rest{
      flex: 0 2 43rem;
      display: grid;
      grid-template-columns: 1fr 1fr;
      position: relative;
    }

    .what__text{
      font-size: 1rem;
    }

    .what__item{
      max-inline-size: 20rem;
    }

    .what__item_grey{
      display: flex;
      align-items: center;
    }

    .what__icons{
      position: absolute;
      bottom: 0;
      transform: translateY(170%);
    }
}

  </style>