<script>
  import { setErrorMessage } from "$lib/scripts/stores";
  let show = '';
  $: show = $setErrorMessage.show;

    $: if(show == "show"){

      setTimeout(() => {
        show = '',
        setErrorMessage.set({"show": "",
            "title": "Сообщение",
            "message": "Сообщение"
        });
      }, 7500);
    }


</script>

<div class="error-message {show}" aria-live="polite" aria-label="Сообщение об ошибке">
    <slot name="title"><h3>{$setErrorMessage.title}</h3></slot>
    <br>
    <slot name="message" class="error-message__message"><span>{$setErrorMessage.message}</span></slot>
</div>

<style>
.error-message{
    display: none;
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
    z-index: 10;
}

.show{
    display: block;
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