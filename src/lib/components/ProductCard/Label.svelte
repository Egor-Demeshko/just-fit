<script>
    export let name = "Белье.JF";
</script>

<div>
    <h3>{name}</h3>
</div>

<style>
    div{
        display: flex;
        box-sizing: border-box;
        justify-content: center;
        align-items: center;
        background-color: var(--icons-main-red);
        height: 70%;
        padding: 0.5rem;
        position: absolute;
        top: 14px;
        left: 0;
        box-shadow: var(--main-shadow);
        border-radius: 0 10px 10px 0;
    }

    
    h3{
        font-family: "Ubuntu-Bold", sans-serif;
        font-weight: bold;
        font-size: 16px;
        writing-mode: vertical-rl;
        transform: rotate(0.5turn);
        color: var(--icons-white);
        margin: 0;
    }
</style>