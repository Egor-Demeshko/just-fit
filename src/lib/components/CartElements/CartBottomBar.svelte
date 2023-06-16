<script>
    import { submitPending } from "$lib/scripts/stores.js";
    import { isMesure, measureSMSvarificationState } from "$lib/scripts/stores.js";


    /**@type {boolean}
     * @description использует при установке компонента
     * на страницы мерок, так как там требуется сразу диактивация 
     * зеленной кнопки
    */

    let inactive = 'inactive';
    let active = 'active';
    let disabled;
    $: disabled = ($isMesure) ? true : false;


    function closeMenu(){}

    {
        /** когда форма submits мы сбрасываем стили валидации, так как
         * они работают через классы.
        */
        submitPending.subscribe( (isSubmiting) => {
            disabled = (isSubmiting) ? true : false;
        });
    }

    measureSMSvarificationState.subscribe((isVerified) => {
        if(isVerified) isMesure = false; 
    });
</script>    


<div class="before_grey" aria-live="polite">
    <a href="/" aria-label="Вернуться на главную страницу" title="Перейти на главную страницу"
        class="left">
        <svg aria-disabled = "true">
            <use href="/src/lib/icons/general.svg#cancel"></use>
        </svg>
    </a>
    <a class="center" href="/contacts" 
        aria-label="Перейти на страницу контактов для связи с менеджерами JF"
        title="Перейти на страницу контактов">
        <svg aria-disabled="true">
            <use class="message" href="/src/lib/icons/navigation.svg#message"></use>
        </svg>
    </a>
    <button class="right" disabled={disabled} aria-label="Сделать заказ">
        <svg aria-disabled="true">
            <use href="/src/lib/icons/navigation.svg#ok"></use>
        </svg>
    </button>
    <button class="ok" class:inactive on:click={closeMenu} aria-label="Закрыть окно меню">
        <svg aria-disabled>
            <use href="/src/lib/icons/navigation.svg#ok"></use>
        </svg>
    </button>
</div>

<style>
    button{
        appearance: none;
        border: none;
        cursor: pointer;
        font-size: inherit;
        font-family: inherit;
        padding: 0;
        margin: 0;
    }

    div{
        position: fixed;
        bottom: 0;
        width: 100%;
        height: var(--bar-height);
        z-index: 10;
        background-color: var(--background-grey);
        display: flex;
        color: var(--icons-white);
    }

    div *{
        box-sizing: border-box;
    }

    .before_grey::before{
        content: '';
        width: 3px;
        height: 16px;
        background-color: var(--background-grey);
        position: absolute;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);
        z-index: 10;
    }

    .left,
    .right,
    .center,
    .ok{
        max-block-size: 100%;
    }

    .right:disabled,
    .right:disabled:hover{
        background-color: var(--light-grey);
        color: var(--black);
        cursor: auto;
    }

    svg{
        height: 100%;
        width: 100%;
    }

    .center svg{
        width: 50px;
        height: 50px;
    }

    .left{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 16px;
        background-color: var(--icons-main-red);
        transition: all 600ms ease;
        color: inherit;
    }

    .left:hover, 
    .right:hover{
        background-color: var(--background-grey);
        color: var(--black);
    }

    .right{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 16px;
        background-color: var(--background-green);
        color: inherit;
        transition: all 600ms ease;
    }

    .center{
        display: flex;
        width: 100px;
        height: 100px;
        align-items: center;
        justify-content: center;
        position: absolute;
        border-radius: 50%;
        bottom: 14px;
        left: 50%;
        background-color: var(--background-grey);
        transform: translateX(-50%);
        box-shadow: var(--navigationBar-shadow);
        transition: all 600ms ease;
        color: inherit;
    }

    .center:hover{
        filter: drop-shadow(var(--orange-shadow));
    }

    .ok{
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 14px;
        background-color: var(--background-green);
    }

    .inactive{
        display: none;
    }

</style>