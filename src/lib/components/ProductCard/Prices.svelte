<script>
    import { getContext } from "svelte";


    /**
     * констекст задается при получении данных на +page.svelte
     */
     const { previous, current } = getContext("prices");
</script>

<div class="prices" itemprop="offers" itemscope 
itemtype="https://schema.org/Offer">

    <meta itemprop="price" content="{current}"/>
    <meta itemprop="priceCurrency" content="BYN"/>
    <link itemprop="availability" href="https://schema.org/InStock" />
    
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
        top: 8px;
        right: 12px;
        width: 125px;
        height: 100px;
    }


    .previous{
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        top: 0;
        left: 0;
        background-color: var(--goods-accent-orange);
        height: 50px;
        width: 60px;
        z-index: 1;
        border-radius: 10px;
    }


    .current{
        position: absolute;
        height:50px;
        width: 80px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: var(--icons-main-red);
        top: 10px;
        right: 0;
        z-index: 5;
        border-radius: 10px;
    }


    .text{
        font-family: Inter, sans-serif;
        color: var(--icons-white);
        font-weight: bold;
    }


    .normal_font{
        font-size: 24px;
    }


    .small_font{
        font-size: 18px;
        text-decoration: line-through;
    }
</style>