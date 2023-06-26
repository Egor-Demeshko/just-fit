<script>
    export let advantages;
    let ids = advantages.ids;


</script>

<div class="pros">
    <ul class="pros__list">
        {#each ids as id}
            <li class="pros__list-item">
                <div class="pros__icon-wrapper">
                    <svg class="pros__img">
                        <use href="/lib/icons/icons.svg#{id}"/>
                    </svg>
                </div>
                <span class="pros__text">{advantages[id]}</span>
            </li>
        {/each}
    </ul>
</div>


<style>
.pros{
  font-family: Ubuntu, sans-serif;
  font-size: 1rem;
  font-weight: normal;
  padding: 2.125em 1.625em;
  color: var(--icons-white);
  background-color: var(--goods-light-orange);
  position: relative;
  border-radius: var(--card-border-radius);
}

.pros__heading{
  color: var(--hard-black);
  font-size: 1.3em;
  margin: 0;
  text-align: center;
}

.pros__list{
  list-style: none;
  padding: 0;
  margin: 0;
}

.pros__list-item{
  margin-top: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.pros__icon-wrapper{
  display: inline-block;
  text-align: center;
  padding: 0.8em;
  width: 2.1em;
  height: 2.1em;
  background-color: var(--icons-main-red);
  border-radius: var(--card-border-radius);
}

.pros__text{
  font-weight: bolder;
  text-align: left;
  font-size: 1.5em;
  font-size: var(--font-size);
  color: var(--hard-black);
}

.pros__img{
  height: 100%;
  width: 100%;
}
</style>