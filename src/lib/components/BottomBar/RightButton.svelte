<a href="/contacts" role="button" aria-label="Перейти на страницу контактов">
    <svg>
        <use href="/src/lib/icons/navigation.svg#contact"></use>
    </svg>
</a>

<style>
    a{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-end;
        padding: 16px;
        background-color: inherit;
        text-decoration: none;
    }

    svg{
        display: flex;
        color: var(--background-main-white);
        fill: none;
        width: 85px;
        height: 60px;
        justify-content: flex-end;
        align-items: center;
    }

    .active,
    svg:active{
        color: var(--icons-main-red);
    }


    @media(min-width: 56em){
        a{
            display: none;
        }


    }
    
</style>