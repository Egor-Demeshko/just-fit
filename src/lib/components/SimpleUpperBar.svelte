
<h1>Внесение мерок: </h1>

<style>
    h1{
        padding: 18px 24px;
        display: flex;
        justify-content: center;
        box-sizing: border-box;
        width: 100%;
        background-color: var(--background-main-white);
        text-align: center;
        font-family: "Ubuntu-Bold", sans-serif;
        font-size: 32px;
        margin: calc(var(--pcWidth)) 0 0; 
    }

    @media(min-width: 32em){
        h1{
            display: grid;
            grid-template-columns: 1fr auto 1fr;
            align-items: center;
            background-color: var(--background-green);
            color: var(--icons-white);
        }        
    }

    @media(min-width: 52em){
        h1{
            display: none;
        }
    }
</style>