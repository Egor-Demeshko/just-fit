<script>
    import BottomBar from '$lib/components/BottomBar/BottomBar.svelte';
    import UpperBar from '$lib/components/UpperBar.svelte';
    import Filter from '$lib/components/Filter.svelte';
    import ContactBar from '$lib/components/ContactBar.svelte';
    import Catalog from '$lib/components/Catalog.svelte';
    import { setContext } from 'svelte';

    /** @type {Array}
     * @description массив товаро из базы.
    */
    export let data;

    let goods = data.data.map( (value) => value.attributes); 


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
 </svelte:head>   



<Filter/>

<Catalog {goods}/>

<BottomBar/>

<ContactBar/>


<style>

</style>