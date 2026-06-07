import { useRef, type CSSProperties } from "react";

export function ChatMock() {
  const ref = useRef<HTMLDivElement | null>(null);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width;
    const y = (e.clientY - r.top) / r.height;
    el.style.setProperty("--rx", `${(0.5 - y) * 6}deg`);
    el.style.setProperty("--ry", `${(x - 0.5) * 6}deg`);
    el.style.setProperty("--mx", `${x * 100}%`);
    el.style.setProperty("--my", `${y * 100}%`);
  };
  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
  };

  return (
    <div className="relative w-full max-w-md mx-auto [perspective:1200px]">
      {/* tight purple core glow */}
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-primary/25 blur-[90px]" />

      <div
        ref={ref}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        style={{
          transform:
            "rotateX(var(--rx, 0deg)) rotateY(var(--ry, 0deg))",
          transformStyle: "preserve-3d",
          transition: "transform 200ms cubic-bezier(0.2,0.7,0.2,1)",
        } as CSSProperties}
        className="relative rounded-2xl border border-border bg-card/80 backdrop-blur-xl shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] overflow-hidden"
      >
        {/* specular highlight following cursor */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 rounded-2xl opacity-70"
          style={{
            background:
              "radial-gradient(280px circle at var(--mx,50%) var(--my,50%), rgba(255,255,255,0.08), transparent 60%)",
          }}
        />
        {/* top inner highlight */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        {/* header */}
        <div className="relative flex items-center justify-between border-b border-border px-5 py-3">
          <div className="flex items-center gap-2">
            <span className="inline-block size-2 rounded-full bg-primary pulse-dot" />
            <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
              solens · live
            </span>
          </div>
          <span className="font-mono text-[10px] text-muted-foreground">0x4f02…8a8E</span>
        </div>

        {/* thread */}
        <div className="relative px-5 py-6 space-y-5">
          <div className="flex justify-end">
            <div className="rounded-2xl rounded-tr-sm bg-primary px-4 py-2 text-sm text-primary-foreground shadow-[0_0_24px_-6px_rgba(112,5,252,0.7)]">
              buy $100 of SOL
            </div>
          </div>

          <div className="flex gap-3">
            <div className="mt-1 flex size-6 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5">
              <span className="size-2 rounded-full bg-white" />
            </div>
            <div className="flex-1 space-y-3">
              <p className="text-sm text-foreground/80">
                Best route found via{" "}
                <span className="text-foreground font-medium">Jupiter</span>.
                Ready to execute.
              </p>

              <div className="rounded-xl border border-border bg-background/60 p-4">
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                    Jupiter · best price
                  </span>
                  <span className="rounded-full bg-primary/15 px-2 py-0.5 font-mono text-[10px] text-primary">
                    +0.4% vs avg
                  </span>
                </div>
                <div className="flex items-end justify-between">
                  <div>
                    <div className="text-2xl font-semibold tracking-tight">0.642 SOL</div>
                    <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
                      est. receipt
                    </div>
                  </div>
                  <div className="text-right text-xs text-muted-foreground space-y-0.5">
                    <div>Slippage <span className="text-foreground">0.5%</span></div>
                    <div>Fee <span className="text-foreground">$0.0002</span></div>
                  </div>
                </div>
                <button className="mt-4 w-full rounded-lg bg-primary py-2 text-xs font-medium uppercase tracking-widest text-primary-foreground hover:bg-primary/90 transition-colors">
                  Confirm swap
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* input */}
        <div className="relative border-t border-border px-5 py-3 flex items-center gap-3">
          <span className="font-mono text-xs text-muted-foreground">Ask anything about crypto…</span>
          <span className="ml-auto inline-block h-4 w-[2px] bg-primary cursor-blink" />
        </div>
      </div>
    </div>
  );
}
