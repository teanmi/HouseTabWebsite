import Link from "next/link";
import { getDeleteAccountHtml } from "../data/delete-account";

const apiBaseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:3000";

export default function DeleteAccountPage() {
    const deleteAccountHtml = getDeleteAccountHtml(apiBaseUrl);

    return (
        <main className="min-h-screen bg-slate-100 px-4 py-8">
            <div className="mb-8 flex justify-end">
                <Link
                    href="/"
                    className="inline-flex items-center rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                >
                    Home
                </Link>
            </div>
            <iframe
                title="Delete Your HouseTab Account"
                srcDoc={deleteAccountHtml}
                className="h-[calc(100vh-4rem)] w-full rounded-3xl border-0 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]"
            />
        </main>
    );
}
