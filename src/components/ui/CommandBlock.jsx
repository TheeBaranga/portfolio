function CommandBlock({ command, title, subtitle, featured = false }) {
    return (
        <div
            className={`relative overflow-hidden rounded-2xl border p-6 transition-all duration-300 hover:-translate-y-2 ${
                featured
                    ? "border-blue-500/40 bg-slate-900 shadow-[0_18px_50px_-28px_rgba(59,130,246,0.55)]"
                    : "border-slate-800 bg-slate-900/50 hover:border-blue-500/50"
            }`}
        >
            {featured && (
                <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-blue-400/70 to-transparent" />
            )}

            <p className="font-mono text-sm text-blue-400">
                &gt; {command}
                <span className="terminal-cursor">_</span>
            </p>

            <div className="mt-8 space-y-2">
                <h3 className="text-2xl font-semibold text-white">
                    {title}
                </h3>

                <p className="leading-7 text-slate-400">
                    {subtitle}
                </p>
            </div>
        </div>
    );
}

export default CommandBlock;