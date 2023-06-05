<script>
    export let previous = '';
    export let current = '';
</script>

<div class="prices">
    {#if previous}
    <div class="previous">
        <span class="text small_font">{previous}р.</span>
    </div>
    {/if}
    <div class="current">
        <span class="text normal_font">{current}р.</span>
    </div>
</div>

<style>
    .prices{
        position: absolute;
        top: 12px;
        right: 12px;
        width: 130px;
        height: 111px;
    }

    .previous{
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 0;
        left: 0;
        background-color: var(--goods-accent-orange);
        height: 57px;
        width: 57px;
        z-index: 1;
        border-radius: 50%;
    }

    .current{
        position: absolute;
        height: 95px;
        width: 95px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--icons-main-red);
        bottom: 0;
        right: 0;
        z-index: 5;
        border-radius: 50%;
    }

    .text{
        font-family: Inter, sans-serif;
        color: var(--icons-white);
        font-weight: bold;
    }

    .normal_font{
        font-size: 36px;
    }

    .small_font{
        font-size: 18px;
        text-decoration: line-through;
    }
</style>