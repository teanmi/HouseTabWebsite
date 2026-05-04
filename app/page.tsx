import Link from "next/link";

export default function Home() {
    return (
        <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 px-6 py-16 text-slate-900">
            <section className="mx-auto flex w-full max-w-5xl flex-col gap-10 rounded-[2rem] border border-slate-200 bg-white/80 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] backdrop-blur sm:p-12">
                <div className="flex flex-col gap-4">
                    <span className="inline-flex w-fit items-center rounded-full bg-red-50 px-4 py-2 text-sm font-semibold text-red-700">
                        HouseTab
                    </span>
                    <h1 className="max-w-2xl text-4xl font-semibold tracking-tight sm:text-5xl">
                        Manage shared homes without the clutter.
                    </h1>
                    <p className="max-w-2xl text-lg leading-8 text-slate-600">
                        HouseTab helps roommates track expenses, balances, and
                        house info in one place. Use the links below to view the
                        legal pages.
                    </p>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                    <Link
                        href="/privacy-policy"
                        className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-slate-300 hover:bg-white"
                    >
                        <h2 className="text-xl font-semibold">
                            Privacy Policy
                        </h2>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                            Read how HouseTab collects and uses your
                            information.
                        </p>
                    </Link>
                    <Link
                        href="/delete-account"
                        className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-slate-300 hover:bg-white"
                    >
                        <h2 className="text-xl font-semibold">
                            Delete Account
                        </h2>
                        <p className="mt-2 text-sm leading-6 text-slate-600">
                            Open the account deletion page and use the existing
                            form.
                        </p>
                    </Link>
                </div>
            </section>
        </main>
    );
}
