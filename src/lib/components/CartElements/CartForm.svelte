<script>
    import { getOrders, getCartId } from "$lib/scripts/cart.js";
    import { onMount } from "svelte";
    import { getFormFields } from "$lib/scripts/formFields.js";
    import { enhance } from "$app/forms";
    import { submitPending } from "$lib/scripts/stores.js";
    import { setErrorMessage  } from "../../scripts/stores";
    import CartItem from "$lib/components/CartElements/CartItem.svelte";
    import Input from "$lib/components/CartElements/Input.svelte";
    import InputId from "$lib/components/CartElements/InputId.svelte";
    import CartBottomBar from "$lib/components/CartElements/CartBottomBar.svelte";
    import ErrorMessage from "$lib/components/ErrorMessage.svelte";

    let cartTotal = 0;
    let formElement;
    let cartId;

    /**@type {Array}*/
    let orders = [];

    /**@type {Array}*/
    /**получает totals итоговое значение по cart-item*/
    let totals = [];

    $: cartTotal = totals.reduce((sum, cur) => sum += cur, 0);
    $: orders = (cartTotal == 0) ? getOrders() : getOrders();
    /**@type {Array}*/
    let formFields = getFormFields();

    onMount( () => {
        orders = getOrders();
        cartId = getCartId();
    });

    function submitHandler({ cancel }){
        console.log("TRYING TO SUBMIT");

        if(!formElement.reportValidity()){
            
            show = "show";
            setTimeout(() => show = '', 5000);
            cancel();
        };

        submitPending.set(true);

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
                        "show": "",
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
    <h1 class="heading" aria-label="Идендификатор вашего заказа">Ваш заказ: {cartId}</h1>
    <div class="preview">

        <fieldset class="outline">
            <legend class="block-heading">Проверьте, пожалуйста, заказ</legend>

           {#if orders.length > 0}
            <ul class="items">

                    {#each orders as [id, quantity], i (id)} 
                        <CartItem {id} {quantity} bind:total={totals[i]}/> 
                    {/each}
                <li>
                    <div class="summary">
                        <span class="summary__text">Итого: {cartTotal}р.</span>
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
            <legend class="block-heading">Контактная информация: </legend>

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

