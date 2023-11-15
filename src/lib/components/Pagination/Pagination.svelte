<script context="module">
    import { writable } from 'svelte/store';

    /**
    page: -текущая выбранная страница,
    pageCount: -общее количество страниц в сборке,
    pageSize: - количество элементов в выборке,
    total: общее количество элементов*/
    export let paginationStore = writable({page: null, pageCount: null, pageSize: null, total: 0});
</script>

<script>
    import PaginationButton from "./PaginationButton.svelte";
    import PaginationElement from "./PaginationElement.svelte";
    

    let pageNumber, pageCount, total;
    let arrToBuild = [];

    /**обновляем массив для пагинации*/
    $: if(pageCount)
    arrToBuild = Array.from( {length: pageCount} );


    paginationStore.subscribe( (pagination) => {
        pageNumber = pagination.page;
        pageCount = pagination.pageCount;
        total = pagination.total;
    });

</script>


<div class="wrapper">
    <div class="pagination">
        <div class="pagination__elements">
            {#if arrToBuild}
                {#each arrToBuild as el, i}
                    {#if i === (pageNumber - 1)}
                        <PaginationElement number={i} active={true}/>
                    {:else}
                        <PaginationElement number={i} active={false}/>
                    {/if}
                {/each}
            {/if}
        </div>

        <PaginationButton {total}/>
    </div>
</div>
    

<style>
    .wrapper{
        text-align: center;
        padding: clamp(2rem, 3.3vw, 4rem) 0;
    }

    .pagination{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0;
        height: 2rem;
        position: relative;
    }

    .pagination__elements{
        position: absolute;
        display: flex;
        top: 0;
        right: 50%;
        transform: translateX(50%);
        justify-content: center;
        align-items: center;
        gap: .5rem
    }

    @media(min-width: 32em){
        .pagination__elements{
            transform: translateX(0);
            gap: 0;
        }
    }
</style>