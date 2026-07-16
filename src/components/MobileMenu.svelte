<script>
  let { links = [] } = $props();
  let openMenu = $state(false);
</script>

<button
  class="relative z-50 flex h-10 w-10 items-center justify-center rounded-md text-paper md:hidden"
  aria-label={openMenu ? 'Close menu' : 'Open menu'}
  aria-expanded={openMenu}
  onclick={() => (openMenu = !openMenu)}
>
  <svg viewBox="0 0 24 24" class="h-6 w-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
    {#if openMenu}
      <path d="M6 6l12 12M18 6L6 18" />
    {:else}
      <path d="M4 7h16M4 12h16M4 17h16" />
    {/if}
  </svg>
</button>

{#if openMenu}
  <div class="fixed inset-0 z-40 bg-ink/95 backdrop-blur-sm md:hidden">
    <nav class="flex h-full flex-col items-center justify-center gap-8">
      {#each links as link}
        <a
          href={link.href}
          class="text-2xl font-medium text-paper transition-colors hover:text-accent"
          onclick={() => (openMenu = false)}
        >
          {link.label}
        </a>
      {/each}
      <a
        href="#book"
        class="mt-4 rounded-lg bg-accent px-6 py-3 text-lg font-semibold text-ink transition-colors hover:bg-accent-hot"
        onclick={() => (openMenu = false)}
      >
        Book a Free Waste Audit
      </a>
    </nav>
  </div>
{/if}
