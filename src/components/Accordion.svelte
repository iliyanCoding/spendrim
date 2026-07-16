<script>
  let { items = [] } = $props();
  let open = $state(0);

  const toggle = (i) => {
    open = open === i ? -1 : i;
  };
</script>

<div class="divide-y divide-edge border-y border-edge">
  {#each items as item, i}
    <div>
      <button
        class="flex w-full items-center justify-between gap-6 py-5 text-left transition-colors hover:text-accent-hot"
        aria-expanded={open === i}
        onclick={() => toggle(i)}
      >
        <span class="text-base font-medium sm:text-lg">{item.q}</span>
        <svg
          class="h-5 w-5 shrink-0 text-mist transition-transform duration-300 {open === i ? 'rotate-45' : ''}"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      </button>
      <div
        class="grid transition-[grid-template-rows] duration-300 ease-out"
        style="grid-template-rows: {open === i ? '1fr' : '0fr'}"
      >
        <div class="overflow-hidden">
          <p class="max-w-2xl pb-6 text-mist leading-relaxed">{item.a}</p>
        </div>
      </div>
    </div>
  {/each}
</div>
