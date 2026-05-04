import Link from "next/link";

export default function Home() {
    const features = [
        {
            title: "Expense Tracking",
            description:
                "Split bills, groceries, and rent effortlessly without the awkward conversations.",
            icon: "💰",
        },
        {
            title: "Live Balances",
            description:
                "See exactly who owes who in real-time. No more spreadsheets required.",
            icon: "⚖️",
        },
        {
            title: "House Info",
            description:
                "Store Wi-Fi passwords, trash pickup days, and landlord info in one shared vault.",
            icon: "🏠",
        },
        {
            title: "Smart Notifications",
            description:
                "Get reminded when a bill is due or when a roommate settles up.",
            icon: "🔔",
        },
    ];

    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 px-6 py-16 text-slate-900">
            <section className="mx-auto flex w-full max-w-5xl flex-col gap-12">
                {/* Hero Section */}
                <div className="rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:p-12">
                    <div className="flex flex-col gap-4">
                        <span className="inline-flex w-fit items-center rounded-full bg-[#2983B7]/10 px-4 py-2 text-sm font-semibold text-[#2983B7]">
                            HouseTab
                        </span>
                        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-6xl">
                            Manage shared homes{" "}
                            <span className="text-[#2983B7]">
                                without the clutter.
                            </span>
                        </h1>
                        <p className="max-w-2xl text-lg leading-8 text-slate-600">
                            HouseTab helps roommates track expenses, balances,
                            and house info in one place. Simplify your living
                            situation today.
                        </p>
                    </div>

                    {/* App Store Placeholder */}
                    <div className="mt-10">
                        <div className="inline-flex flex-col gap-3">
                            <div className="flex items-center gap-4 opacity-50 grayscale">
                                <div className="flex h-14 w-40 items-center justify-center rounded-xl bg-black text-white">
                                    <span className="text-xs font-semibold">
                                        Google Play Coming Soon
                                    </span>
                                </div>
                            </div>
                            <p className="text-xs font-medium text-slate-400 uppercase tracking-widest">
                                Available shortly on Android
                            </p>
                        </div>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {features.map((feature) => (
                        <div
                            key={feature.title}
                            className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                        >
                            <div className="mb-4 text-3xl">{feature.icon}</div>
                            <h3 className="mb-2 font-bold text-slate-900">
                                {feature.title}
                            </h3>
                            <p className="text-sm leading-relaxed text-slate-500">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Legal/Footer Links */}
                <div className="grid gap-4 sm:grid-cols-2">
                    <Link
                        href="/privacy-policy"
                        className="rounded-2xl border border-slate-200 bg-white/50 p-5 transition hover:border-slate-300 hover:bg-white"
                    >
                        <h2 className="text-lg font-semibold">
                            Privacy Policy
                        </h2>
                        <p className="mt-1 text-sm text-slate-500">
                            Read how HouseTab collects and uses your
                            information.
                        </p>
                    </Link>
                    <Link
                        href="/delete-account"
                        className="rounded-2xl border border-slate-200 bg-white/50 p-5 transition hover:border-slate-300 hover:bg-white"
                    >
                        <h2 className="text-lg font-semibold">
                            Delete Account
                        </h2>
                        <p className="mt-1 text-sm text-slate-500">
                            Instructions for removing your data from our
                            servers.
                        </p>
                    </Link>
                </div>
            </section>
        </main>
    );
}
