<script>
    
</script>

<fieldset class="measurements__required">
    <legend class="measurements__required-legend">Обязательные поля</legend>
    <div class="measurements__element">
        <label for="name" class="measurements__name">Ваше Имя*</label>
        <input type="text" min="0" placeholder="Укажите как к вам обращаться"
        id="name" name="name" required>
    </div>


  <div class="measurements__element">
    <span class="measurements__name">Ваш ID на сайте*</span>
        <div class="measurements__input-wrapper">
            <span class="measurements__question"></span>
            <input class="measurements__input" type="tel" placeholder="Ваш номер телефона"
            id="phone" name="phone" required>
        </div>
    </div>


    <button type="button" name="button" class="measurements__button" id="smsButton"><span class="measurements__button_inner">
      ПОЛУЧИТЬ СМС</span>
    </button>
</fieldset>