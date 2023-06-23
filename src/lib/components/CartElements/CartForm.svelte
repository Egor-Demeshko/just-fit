<script>
    import { getOrders, getCartId } from "$lib/scripts/cart.js";
    import { onMount } from "svelte";
    import { getFormFields } from "$lib/scripts/formFields.js";
    import { enhance } from "$app/forms";
    import { submitPending } from "$lib/scripts/stores.js";
    import { setErrorMessage  } from "../../scripts/stores";
    import { getGoodsForClientSide } from "$lib/scripts/getGoodsForClientSide";
    import CartItem from "$lib/components/CartElements/CartItem.svelte";
    import Input from "$lib/components/CartElements/Input.svelte";
    import InputId from "$lib/components/CartElements/InputId.svelte";
    import CartBottomBar from "$lib/components/CartElements/CartBottomBar.svelte";
    import ErrorMessage from "$lib/components/ErrorMessage.svelte";

    let cartTotal = 0;
    let formElement;
    let cartId;
    let goods;
    let gettingGoods; // будет хранить promise необходимый для получения товаров на клиентской стороне
                    //также участвует в отображении компонента

    /**@type {Array}*/
    let orders = [];
    let objOrders = {};

    /**@type {Array}*/
    /**получает totals итоговое значение по cart-item*/
    let totals = [];

    $: cartTotal = totals.reduce((sum, cur) => sum += cur, 0).toFixed(2);
    /*$: orders = (cartTotal == 0) ? getOrders() : getOrders();*/
    /**@type {Array}*/
    let formFields = getFormFields();

    onMount( () => {
        orders = getOrders();
        cartId = getCartId();   
        
        if(orders.length != 0){
            
            /**
             * получаем данные по товаром из БД.
            */
            gettingGoods = new Promise( (resolve) => {
                getGoodsForClientSide(resolve, orders);
            }).then( (data) => goods = data).catch( () => ErrorMessage.set({
                                            "show": "show",
                                            "title": "Ошибка получения корзины",
                                            "message": "Ошика получения данных. Если повторится свяжитесь с нами."
                                         }));                                 
    
    
            objOrders = Object.fromEntries(orders);
            console.log(objOrders);
            
        }
    });




    function submitHandler({ cancel, formData }){
        console.log("TRYING TO SUBMIT");

        if(!formElement.reportValidity()){
            
            ErrorMessage.set({
                "show": "show",
                "title": "Проверьте правильность ввода данных",
                "message": "Особенно убедитесь что вы указаля обязательные данные"
            })
            cancel();
        };

        /**это дисейблит сабмит баттон*/
        submitPending.set(true);

        formData.append("cartId", cartId);
        formData.append("goods", JSON.stringify(objOrders));
        formData.append("total", cartTotal);

        return ({ update, result }) => {

            submitPending.set(false);            
            {
                if(result.type == 'success'){
                    update();
                    const url = new URL('/accept', window.location.origin);
                    url.searchParams.append('id', cartId);
                    window.location.assign(url.href);

                } else if(result.type == "failure") {

                    setErrorMessage.set({
                        "show": "show",
                        "title": "Ошибка подтверждения заказа",
                        "message": "Произошла ошибка подтверждения заказа. Пожалуйста, попробуйте еще раз. Или напишите нам в мессенджер"
                    });
                }
            }
        }
    }

   
</script>


<form class="cart" id="cart" method="POST" use:enhance={submitHandler} bind:this={formElement}
aria-label="Форма ввода и проверки вашего заказа в .JF">

    { #if goods }
        <h1 class="heading" aria-label="Идендификатор вашего заказа">Ваш заказ: {cartId}</h1>
    {/if}    

    <div class="preview">

        <fieldset class="outline">
            <legend class="block-heading">Проверьте, пожалуйста, заказ</legend>
        

           { #if goods }
            <ul class="items">

                    {#each goods as { id, name, imageUrl, price }, i (id)} 
                        <CartItem bind:total={totals[i]} {name} {imageUrl} {price} {id}
                        quantity={ objOrders[id] }/> 
                    {/each}
                <li>
                    <div class="summary">
                        <span class="summary__text">Итого: { cartTotal }р.</span>
                    </div>
                </li>
            </ul>
           {:else}
            <ul class="items">
                <div class="summary">
                    <span class="summary__text">В корзине пусто</span>
                </div>
            </ul>    
            {/if}    
            
        </fieldset>
    </div>

    <InputId/>

    <div>
        <fieldset class="outline">
            <legend class="block-heading">Другая контактная информация: </legend>

            {#each formFields as fields}
                <Input {...fields}/>
            {/each}


        </fieldset>

    </div>

    <CartBottomBar />

    <ErrorMessage/>
</form>


<style>
    .cart{
        font-size: 1rem;
        display: flex;
        flex-flow: column;
        align-items: center;
        gap: 2em;
        padding: 110px 12px;
    }

    .heading{
        font-family: LexendDeca, sans-serif;
        font-size: 1.5em;
        font-weight: bold;
        margin: 0;
        text-align: center;
    }


    .preview{
        width: 100%;
    }

    .outline{
        padding: 1.625rem 0.75rem;
        margin: 0;
        display: flex;
        flex-flow: column;
        align-items: center;
        gap: 0.75em;
    }

    .outline,
    .block-heading{
        border: 1px solid var(--grey-border);
        border-radius: 10px;
    }

    .block-heading{
        padding: 4px 8px;
        font-family: LexendDeca, sans-serif;
        font-size: 0.8em;
        font-weight: bold;
        color: var(--background-grey);
    }

    /*************/
    .summary{
        width: 100%;
        box-sizing: border-box;
        background-color: var(--icons-main-red);
        padding: 1.25em;
        border-radius: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .summary__text{
        color: var(--icons-white);
        font-family: LexendDeca, sans-serif;
        font-weight: bold;
        font-size: 1em;
    }
    /*---------*/

    /********/
    .items{
        padding: 0;
        list-style: none;
        margin: 0;
        display: flex;
        flex-flow: column;
        gap: 0.8em;
    }
    /*--------*/


    @media(min-width: 52em){
        .cart{
            font-size: 1.5rem;
            padding: calc(var(--pcWidth) + 2em) 20vw 150px;
        }


        .heading{
            font-family: LexendDeca, sans-serif;
            font-size: 1.5em;
            font-weight: bold;
            margin: 0;
            text-align: center;
        }
    }
</style>

