<div>
    <a href='/' aria-label="Перейти на главную страницу">
        <svg aria-disabled>
            <use href="/src/lib/icons/navigation.svg#ok"></use>
        </svg>
    </a>
</div>

<style>
    *{
        box-sizing: border-box;
    }


    div{
        box-sizing: border-box;
        position: fixed;
        bottom: 0;
        width: 100%;
        height: 90px;
        z-index: 10;
    }


    a{
        color: var(--icons-white);
        display: flex;
        justify-content: center;
        padding: 14px;
        background-color: var(--background-green);
        height: 100%;
        max-width: 100%;
        transition: color 600ms ease, background-color 600ms ease;
    }

    a:hover{
        color: var(--black);
        background-color: var(--background-grey);
    }

    a:active{
        color: var(--icons-white);
        background-color: var(--icons-main-red);
    }

    use{
        width: 100%;
        height: 100%;
    }


</style>