<script>
    import BottomBar from '$lib/components/BottomBar/BottomBar.svelte';
    import Filter from '$lib/components/Filter.svelte';
    import ContactBar from '$lib/components/ContactBar.svelte';
    import Catalog from '$lib/components/Catalog.svelte';
  
    /** @type {Array}
     * @description массив товаро из базы.
    */
    export let data;

    let goods = data.locals.data.map( (value) => value.attributes); 
    let pageMeta = data.pageMeta.data[0].attributes;
    //console.log("META META META   pageMeta on page!!!", pageMeta);


 </script> 
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
    <meta property="og:title" content="Пошив мужского нижнего белья Just-Fit">
    <meta property="og:site_name" content="Just-Fit">
    <meta property="og:url" content="https://just-fit.by">
    <meta property="og:description" content="Проект Just-Fit позволяет вам заказать белье, которое будет изготовлено исключительно для. Можно до заказа выбрать цвет, резинки и много чего еще. Доставка и почтовые отправления.">
    <meta property="og:type" content="website">
    <meta property="og:image" content="https://just-fit.by/icon.svg">

 </svelte:head>   



<Filter/>

<Catalog {goods}/>

<BottomBar/>

<ContactBar/>


<style>

</style>