<script>
    export let show = "";

</script>

<div class="error-message" class:show aria-live="polite" aria-label="Сообщение об ошибке">
    <slot name="title"><h3>ОШИБКА</h3></slot>
    <br>
    <slot name="message" class="error-message__message"><span>Возникла неизвестная ошибка. Попробуйте запросить новый SMS код, или
        свяжитесь с менеджерами компании.</span></slot>
</div>

<style>
.error-message{
    font-family: LexendDeca, sans-serif;
    padding: 18px 24px;
    position: absolute;
    left: -150%;
    transform: translateX(-50%);
    bottom: calc(100vh/6);
    width: 80vw;
    background-color: var(--goods-light-orange);
    border-radius: 10px;
    border: 3px solid var(--goods-accent-orange);
}

.show{
    animation: showMessage normal 7s forwards ease-out;
}


  h3{
    margin: 0;
  }


@keyframes showMessage {
  0%{
    left: -250%;
  }

  15%{
    left: 50%;
  }

  75%{
    left: 50%;
  }

  100%{
    left: -250%;
  }
}
</style>