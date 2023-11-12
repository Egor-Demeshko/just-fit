<script>
    import BottomBar from '$lib/components/BottomBar/BottomBar.svelte';
    import ContactBar from '$lib/components/ContactBar.svelte';
    import Catalog from '$lib/components/Catalog.svelte';
    import ScrollToFilter from '$lib/components/ScrollToFilter.svelte';
    import Pagination, {paginationStore} from '$lib/components/Pagination/Pagination.svelte';
    import HTTPGood from "$lib/scripts/HTTP/HTTPGood.js";
  
    /** @type {Array}
     * @description массив товаро из базы.
    */
    export let data;
    let goods = data.locals.data.map( (value) => value.attributes); 
    let pageMeta = data.pageMeta.data[0].attributes;
    let pagination = data.locals.meta.pagination;

    if(pagination){
        paginationStore.set({
            page: pagination.page,
            pageCount: pagination.pageCount,
            pageSize: pagination.pageSize,
            total: pagination.total
        })
    }
    //console.log("META META META   pageMeta on page!!!", pageMeta);

    /**обрабатывает событие pagination_gange*/
    async function loadPartGoods({detail}){
        document.dispatchEvent( new CustomEvent("loader"));
        /*можем покинуть страницу, а запрос еще не обработан*/
        if(window.location.pathname !== "/") return;

        const result = await HTTPGood.getNextGoods(detail);

        if(result){
            sortLoadedData(result);
        }
        document.dispatchEvent( new CustomEvent("loader"));
    }

    /**обрабатывает событие pagination_all*/
    async function loadAll(){
        document.dispatchEvent( new CustomEvent("loader"));
        if(window.location.pathname !== "/") return;
        const result = await HTTPGood.getAllGoods();   
        
        if(result){
            sortLoadedData(result);
        }
        document.dispatchEvent( new CustomEvent("loader"));
    }


    function sortLoadedData({data, meta}){
        
            goods = data.map( (value) => value.attributes);
            let paginationData = meta.pagination;

            paginationStore.update( (paginationObj) => {
                /**обновляем данные в сторе, дабы поменялась отображение пагинации*/
                paginationObj.page = paginationData.page;
                paginationObj.pageCount = paginationData.pageCount;
                paginationObj.pageSize = paginationData.pageSize;
                paginationObj.total = paginationData.total;
                return paginationObj;
            });
    }

 </script> 

 <svelte:document on:pagination_gange={loadPartGoods}
 on:pagination_all={loadAll}></svelte:document>


 <svelte:head>
    <script type="application/ld+json">
        {
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Just Fit",
            "address": {
            "@type": "PostalAddress",
            "addressLocality": "Минск",
            "postalCode": "220000",
            "addressCountry": "BY",
            "streetAddress": "Пр-т Независимости"
            },
            "telephone": "+375292158632",
            "openingHoursSpecification": [
            {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday"
                ],
                "opens": "08:00",
                "closes": "20:00"
            }
            ]
        }
    </script>
    <title>{pageMeta.title}</title>
    <meta name="description" content={pageMeta.description}>
    <link rel="canonical" href="https://just-fit.by">
    <meta property="og:title" content="Изготовление мужского нижнего белья Just-Fit">
    <meta property="og:site_name" content="Just-Fit">
    <meta property="og:url" content="https://just-fit.by">
    <meta property="og:description" content="Проект Just-Fit позволяет вам заказать белье, которое будет изготовлено исключительно для. Можно до заказа выбрать цвет, резинки и много чего еще. Доставка и почтовые отправления.">
    <meta property="og:type" content="website">
    <meta property="og:image" content="https://just-fit.by/icon.svg">

 </svelte:head>   


<div>
    <Pagination/>

    <ScrollToFilter/>
    
    <Catalog {goods}/>
    
    <BottomBar/>
    
    <ContactBar/>
    
</div>

<style>
    div{
        padding-bottom: 120px;
    }
</style>