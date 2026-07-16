<script>
  let { value = 0, prefix = '', suffix = '', duration = 1600, decimals = 0 } = $props();

  let display = $state(prefix + (0).toFixed(decimals) + suffix);
  let el = $state(null);

  const format = (n) =>
    prefix + n.toLocaleString('en-US', { minimumFractionDigits: decimals, maximumFractionDigits: decimals }) + suffix;

  $effect(() => {
    if (!el) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) {
      display = format(value);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (!entries[0].isIntersecting) return;
        io.disconnect();
        const start = performance.now();
        const tick = (now) => {
          const t = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(2, -10 * t); // easeOutExpo
          display = format(value * (t === 1 ? 1 : eased));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  });
</script>

<span bind:this={el} class="tnum">{display}</span>
