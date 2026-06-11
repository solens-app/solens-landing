import { useRef } from "react";
import { ArrowRight, ArrowUpRight, Check, Shield, Sparkles, Zap } from "lucide-react";
import { ParticleField } from "@/components/landing/ParticleField";
import { ChatMock } from "@/components/landing/ChatMock";

function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#" aria-label="Solens" className={`inline-flex items-center gap-2 ${className}`}>
      <span
        aria-hidden
        className="relative inline-flex size-6 items-center justify-center rounded-md bg-primary shadow-[0_0_24px_-6px_rgba(112,5,252,0.9)]"
      >
        <span className="size-2 rounded-full bg-primary-foreground" />
      </span>
      <span className="text-base font-semibold tracking-tight">Solens</span>
    </a>
  );
}

function Nav() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-6 h-16 flex items-center justify-between">
        <Logo />
        <nav className="hidden md:flex items-center gap-8 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          <a href="#features" className="hover:text-foreground transition-colors">Features</a>
          <a href="#how" className="hover:text-foreground transition-colors">How it works</a>
          <a href="#refer" className="hover:text-foreground transition-colors">Refer & earn</a>
        </nav>
        <a
          href="#cta"
          className="group inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-medium text-primary-foreground shadow-[0_0_28px_-6px_rgba(112,5,252,0.85)] hover:bg-primary/90 transition-all"
        >
          Launch Solens
          <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
        </a>
      </div>
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLElement | null>(null);
  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  return (
    <section
      ref={ref}
      onPointerMove={onMove}
      className="relative overflow-hidden pt-32 pb-24 md:pt-40 md:pb-32 border-b border-border grain"
    >
      {/* grid */}
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-60" />
      {/* particles */}
      <ParticleField />
      {/* cursor spotlight */}
      <div className="pointer-events-none absolute inset-0 spotlight" />
      {/* edge vignette */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_55%,var(--background)_95%)]" />

      <div className="relative mx-auto max-w-7xl px-6 grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
        <div className="fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-3 py-1 mb-8">
            <span className="size-1.5 rounded-full bg-primary pulse-dot" />
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Live on Solana Mainnet
            </span>
          </div>

          <h1 className="text-balance text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.02em] leading-[1.02]">
            Talk to Solana.
            <br />
            <span className="text-muted-foreground">It&rsquo;ll do the rest.</span>
          </h1>

          <p className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
            Solens turns plain English into onchain action. Swap, send, snipe launches,
            provide liquidity, hunt memecoins, place prediction trades — all from one chat.
            <span className="block mt-2 text-foreground/80">
              No dashboards. No tab-hopping. No degen tax for being new.
            </span>
          </p>

          <div className="mt-10 flex flex-col sm:flex-row sm:items-center gap-5">
            <a
              href="#cta"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-medium text-primary-foreground shadow-[0_0_40px_-8px_rgba(112,5,252,0.9)] hover:shadow-[0_0_60px_-4px_rgba(112,5,252,1)] transition-all"
            >
              Launch Solens
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <div className="flex flex-col">
              <span className="text-sm text-foreground">Free to try.</span>
              <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                Connect a wallet in 10 seconds
              </span>
            </div>
          </div>
        </div>

        <div className="lg:pl-8 fade-up" style={{ animationDelay: "120ms" }}>
          <div className="float-y">
            <ChatMock />
          </div>
        </div>
      </div>

      <div className="relative mx-auto max-w-7xl px-6 mt-24">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 border-t border-border pt-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground text-center md:text-left">
            Built for Solana · Powered by AI · Trusted by traders moving real volume
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 opacity-60">
            {["JUPITER", "RAYDIUM", "PUMP.FUN", "KALSHI", "PHANTOM"].map((p) => (
              <span key={p} className="font-mono text-xs tracking-tight text-muted-foreground hover:text-foreground transition-colors">
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Pitch() {
  return (
    <section className="border-b border-border py-28 md:py-36">
      <div className="mx-auto max-w-4xl px-6">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
          [ The pitch ]
        </span>
        <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-[-0.02em] leading-tight text-balance">
          Crypto shouldn&rsquo;t feel like a cockpit.
        </h2>
        <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-3xl">
          Most Solana apps assume you already know what a bin step is, which DEX has the best
          route, or how to read a pump.fun chart at 3 a.m. Solens doesn&rsquo;t. Tell it what you
          want — <span className="text-foreground">&ldquo;buy $100 of SOL,&rdquo;</span>{" "}
          <span className="text-foreground">&ldquo;show me trending memecoins,&rdquo;</span>{" "}
          <span className="text-foreground">&ldquo;add LP to SOL/USDC&rdquo;</span> — and it handles the
          routing, the safety checks, and the execution.
        </p>
        <p className="mt-6 text-xl text-foreground/90 font-medium">
          You stay in control. Solens does the homework.
        </p>
      </div>
    </section>
  );
}

type FeatureProps = {
  idx: string;
  title: string;
  body: string;
  className?: string;
  children?: React.ReactNode;
};

function Feature({ idx, title, body, className = "", children }: FeatureProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  };
  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      className={`group relative overflow-hidden rounded-2xl border border-border bg-card/60 backdrop-blur p-6 md:p-7 transition-all hover:border-white/20 ${className}`}
    >
      {/* top inner highlight */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
      {/* cursor spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
        style={{
          background:
            "radial-gradient(320px circle at var(--mx,50%) var(--my,50%), rgba(112,5,252,0.10), transparent 55%)",
        }}
      />
      {/* bottom accent line on hover */}
      <div className="pointer-events-none absolute inset-x-6 bottom-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="relative flex items-start justify-between mb-6">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-foreground/80">
          {idx}
        </span>
        <ArrowUpRight className="size-4 text-muted-foreground transition-all group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>
      <h3 className="relative text-xl md:text-2xl font-semibold tracking-tight">{title}</h3>
      <p className="relative mt-3 text-sm text-muted-foreground leading-relaxed">{body}</p>
      {children && <div className="relative mt-6">{children}</div>}
    </div>
  );
}

function Features() {
  return (
    <section id="features" className="border-b border-border py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
            [ Capabilities ]
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-[-0.02em] leading-tight">
            One chat. The entire Solana stack.
          </h2>
        </div>

        {/* 4-col on lg → 8 even cards in exactly 2 rows, no spans */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Feature
            idx="01 / Trade"
            title="Swap, Send, Bridge"
            body="Type the trade, hit confirm. Solens finds the best path across Jupiter, Raydium, and the rest — wallet, .sol domain, or a friend."
          >
            <div className="flex flex-wrap gap-1.5">
              {["JUPITER", "RAYDIUM", "ORCA", ".SOL", "MAYAN"].map((c) => (
                <span key={c} className="rounded-md border border-border bg-background/60 px-2 py-1 font-mono text-[10px] text-muted-foreground">
                  {c}
                </span>
              ))}
            </div>
          </Feature>

          <Feature
            idx="02 / Launch"
            title="Snipe Pump.fun & Bonk"
            body="Spin up a token or jump on launches the second liquidity hits. Solens scans Pump.fun continuously — volume, not noise."
          >
            <div className="space-y-1.5">
              {[
                { t: "$WIFEY", v: "+184%", g: true },
                { t: "$NORM", v: "+62%", g: true },
                { t: "$FOG", v: "-12%", g: false },
              ].map((r) => (
                <div key={r.t} className="flex items-center justify-between rounded-md bg-background/60 px-3 py-1.5 text-xs">
                  <span className="font-mono text-foreground">{r.t}</span>
                  <span className={`font-mono ${r.g ? "text-primary" : "text-muted-foreground"}`}>{r.v}</span>
                </div>
              ))}
            </div>
          </Feature>

          <Feature
            idx="03 / Trending"
            title="Tokens with a safety score"
            body="Every token Solens recommends comes with a risk score before you ape. Liquidity, holders, mint authority — checked and shown."
          >
            <div className="flex items-center gap-3">
              <div className="relative size-14 rounded-full border-2 border-primary/40 flex items-center justify-center">
                <span className="text-sm font-semibold">94</span>
                <span className="absolute -bottom-1 -right-1 rounded-full bg-primary px-1.5 py-0.5 font-mono text-[8px] uppercase text-primary-foreground">
                  safe
                </span>
              </div>
              <div className="text-xs text-muted-foreground leading-relaxed">
                <div>LP locked · Mint revoked</div>
                <div>Top 10 hold 18%</div>
              </div>
            </div>
          </Feature>

          <Feature
            idx="04 / Liquidity"
            title="Liquidity pools, readable"
            body="Pick a SOL/USDC pool and see TVL, APR, bin step, and current price at a glance. Add or withdraw in one tap."
          >
            <div className="grid grid-cols-3 gap-2">
              {[
                { l: "TVL", v: "$42M" },
                { l: "APR", v: "31.4%" },
                { l: "BIN", v: "20" },
              ].map((s) => (
                <div key={s.l} className="rounded-md bg-background/60 px-3 py-2">
                  <div className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground">{s.l}</div>
                  <div className="mt-0.5 text-sm font-semibold">{s.v}</div>
                </div>
              ))}
            </div>
          </Feature>

          <Feature
            idx="05 / Markets"
            title="Prediction markets via Kalshi"
            body="Trade outcomes on Bitcoin, sports, politics, and culture — directly from the chat. Solens pulls live odds and routes the order."
          >
            <div className="space-y-1.5">
              <div className="flex items-center justify-between rounded-md border border-border bg-background/60 px-3 py-2 text-xs">
                <span className="text-muted-foreground">BTC &gt; $100k by EOY</span>
                <span className="font-mono text-primary">YES · 68¢</span>
              </div>
              <div className="flex items-center justify-between rounded-md border border-border bg-background/60 px-3 py-2 text-xs">
                <span className="text-muted-foreground">Fed cuts in Q3</span>
                <span className="font-mono text-muted-foreground">NO · 41¢</span>
              </div>
            </div>
          </Feature>

          <Feature
            idx="06 / Safety"
            title="Guardrails on every trade"
            body="Slippage warnings, honeypot detection, suspicious contract flags. Solens flags problems before you sign — not after the SOL is gone."
          >
            <div className="flex items-center gap-2 rounded-md border border-primary/30 bg-primary/10 px-3 py-2">
              <Shield className="size-3.5 text-primary" />
              <span className="text-xs text-foreground">Honeypot detected · trade blocked</span>
            </div>
          </Feature>

          <Feature
            idx="07 / Portfolio"
            title="A portfolio that talks back"
            body="Solens reads your wallet and answers like a teammate who actually reads charts."
          >
            <div className="rounded-lg border border-border bg-background/60 p-3">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1.5">
                you → solens
              </div>
              <div className="text-xs text-foreground mb-2">&ldquo;what&rsquo;s underperforming?&rdquo;</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-1.5">
                solens
              </div>
              <div className="text-xs text-muted-foreground">
                <span className="text-foreground">$JTO -8%</span>,{" "}
                <span className="text-foreground">$PYTH -5%</span>,{" "}
                <span className="text-foreground">$WIF -3%</span>. Rebalance?
              </div>
            </div>
          </Feature>

          <Feature
            idx="08 / Onboard"
            title="New to crypto? Just ask."
            body="No jargon walls. Ask anything — Solens explains in plain English, then helps you act on it."
          >
            <div className="rounded-lg border border-border bg-background/60 p-3">
              <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-1.5">
                you → solens
              </div>
              <div className="text-xs text-foreground mb-2">&ldquo;what is a bin step?&rdquo;</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-primary mb-1.5">
                solens
              </div>
              <div className="text-xs text-muted-foreground">
                Price spacing between liquidity buckets in a CLMM — smaller bins = tighter quotes.
              </div>
            </div>
          </Feature>
        </div>
      </div>
    </section>
  );
}

function Differentiator() {
  const chips = ["SPL", "JUPITER", "RAYDIUM", "PUMP.FUN", "BONKBOT", "KALSHI", "PHANTOM", "SOLFLARE", "BACKPACK"];
  return (
    <section className="relative overflow-hidden border-b border-border py-32 md:py-40">
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-40" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent" />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
          [ The differentiator ]
        </span>
        <h2 className="mt-6 text-4xl md:text-6xl font-semibold tracking-[-0.025em] leading-[1.05] text-balance">
          Solana-native.
          <br />
          <span className="text-muted-foreground">Not Solana-bolted-on.</span>
        </h2>
        <p className="mt-8 max-w-2xl mx-auto text-muted-foreground leading-relaxed">
          Other AI crypto tools treat Solana as a checkbox. Solens was built around it — which is
          why it can do things they can&rsquo;t: pump.fun launches, Bonkbot-style sniping, Jupiter routing,
          Raydium LPs, SPL token everything. If it ships on Solana, Solens speaks it.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-2">
          {chips.map((c) => (
            <span
              key={c}
              className="rounded-full border border-border bg-card/60 backdrop-blur px-4 py-1.5 font-mono text-xs text-muted-foreground hover:border-primary/50 hover:text-foreground transition-colors"
            >
              {c}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      n: "01",
      t: "Connect your wallet",
      b: "Phantom, Solflare, Backpack — pick yours. Ten seconds, no email, no KYC.",
    },
    {
      n: "02",
      t: "Type what you want",
      b: '"Buy 5 SOL of WIF," "show LP options for USDC," "what\'s trending?" — plain English.',
    },
    {
      n: "03",
      t: "Confirm",
      b: "Solens handles routing, fees, and execution. You approve the final transaction.",
    },
  ];
  return (
    <section id="how" className="border-b border-border py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl mb-16">
          <span className="font-mono text-[10px] uppercase tracking-[0.3em] text-primary">
            [ How it works ]
          </span>
          <h2 className="mt-6 text-4xl md:text-5xl font-semibold tracking-[-0.02em] leading-tight">
            Three steps. Then you trade.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {steps.map((s) => (
            <div key={s.n} className="bg-background p-8 md:p-10">
              <div className="font-mono text-xs tracking-widest text-primary mb-8">{s.n}</div>
              <h3 className="text-2xl font-semibold tracking-tight">{s.t}</h3>
              <p className="mt-4 text-muted-foreground leading-relaxed">{s.b}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ReferEarn() {
  return (
    <section id="refer" className="border-b border-border py-28">
      <div className="mx-auto max-w-5xl px-6">
        <div className="relative rounded-3xl border border-white/15 bg-card/60 backdrop-blur p-10 md:p-14 overflow-hidden">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          <div className="relative flex flex-col md:flex-row md:items-center gap-10">
            <div className="flex-1">
              <div className="inline-flex items-center gap-2 mb-6">
                <Sparkles className="size-4 text-primary" />
                <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-primary">
                  Refer & Earn
                </span>
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-tight">
                Bring your group chat. Earn while you sleep.
              </h2>
              <p className="mt-5 text-muted-foreground leading-relaxed max-w-xl">
                Every friend you refer earns you a cut of their trading fees. Forever.
                Share your code once — Solens does the math.
              </p>
            </div>
            <div className="md:w-72 shrink-0">
              <div className="rounded-xl border border-border bg-background/70 p-5">
                <div className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground mb-2">
                  Your invite code
                </div>
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-2xl tracking-tight">KJN79Q</span>
                  <button className="rounded-md border border-border px-3 py-1.5 text-xs hover:border-primary/60 hover:text-primary transition-colors">
                    Copy
                  </button>
                </div>
                <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                  <Check className="size-3.5 text-primary" />
                  10% of referred fees, forever
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  const ref = useRef<HTMLElement | null>(null);
  const onMove = (e: React.PointerEvent<HTMLElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty("--mx", `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty("--my", `${((e.clientY - r.top) / r.height) * 100}%`);
  };
  return (
    <section
      id="cta"
      ref={ref}
      onPointerMove={onMove}
      className="relative overflow-hidden py-32 md:py-40"
    >
      <div className="pointer-events-none absolute inset-0 grid-overlay opacity-40" />
      <div className="pointer-events-none absolute inset-0 spotlight" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,var(--background)_90%)]" />
      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 backdrop-blur px-3 py-1 font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          <Zap className="size-3 text-primary" />
          Ready when you are
        </span>
        <h2 className="mt-8 text-5xl md:text-7xl font-semibold tracking-[-0.025em] leading-[1.02] text-balance">
          The Solana experience,
          <br />
          <span className="text-muted-foreground">finally simplified.</span>
        </h2>
        <p className="mt-8 max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
          Stop bouncing between Jupiter, Pump.fun, DEXScreener, Kalshi, and seven Telegram bots.
          Solens is all of them — in one conversation.
        </p>
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5">
          <a
            href="#"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground shadow-[0_0_60px_-6px_rgba(112,5,252,0.95)] hover:shadow-[0_0_80px_-2px_rgba(112,5,252,1)] transition-all"
          >
            Launch Solens
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <span className="font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
            No card required · Connect wallet to start
          </span>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border py-14">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <Logo />
          <p className="mt-3 font-mono text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            Solana at the speed of thought.
          </p>
        </div>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-3 font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
          <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
          <a href="#" className="hover:text-foreground transition-colors">Telegram</a>
          <a href="#" className="hover:text-foreground transition-colors">Docs</a>
          <a href="#" className="hover:text-foreground transition-colors">Security</a>
        </div>
        <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground/70">
          © 2026 Solens Labs
        </span>
      </div>
    </footer>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Pitch />
        <Features />
        <Differentiator />
        <HowItWorks />
        <ReferEarn />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default LandingPage;
