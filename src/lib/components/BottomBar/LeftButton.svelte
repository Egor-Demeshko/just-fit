<script>

</script>

<a href="/measurements" aria-label="Перейти на страницу ввода мерок">
    <svg aria-disabled="true">
        <use href={`/lib/icons/navigation.svg#measurement`} />
    </svg>
</a>


<style>
    a{
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        padding: 16px;
        background-color: inherit;
        transition: all 600ms ease;
        border-radius: 10px;
        text-decoration: none;
    }

    a:hover{
        background-color: var(--icons-white);
    }

    svg{
        color: var(--icons-white);
        width: 88px;
        height: 31px;
    }

    a:hover svg,
    a:hover::after{
        color: var(--black);
    }

    .active,
    svg:active{
        color: var(--icons-main-red);
    }

    @media (max-width: 56em){
        a{
            grid-area: left;
            display: flex;
            align-items: center;
            gap: 14px;
            border-radius: 10px;
        }
    }

    @media(min-width: 71em){
        a{
            background-color: var(--goods-accent-orange);
            gap: 1rem;
        }

        a:after{
            content: "Сохранить мерки";
            display: inline-block;
            font-family: Inter, sans-serif;
            font-size: 24px;
            color: var(--icons-white);
            font-weight: bold;
        }        
    }

</style>