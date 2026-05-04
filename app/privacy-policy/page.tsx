import Link from "next/link";
import { policyHtml } from "../data/privacy-policy";

export default function PrivacyPolicyPage() {    return (
        <main className="min-h-screen bg-slate-50 px-6 py-10 text-slate-900">
            <article className="privacy-policy mx-auto w-full max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-12 [&_h1]:mt-8 [&_h1]:mb-3 [&_h1]:text-3xl [&_h1]:font-bold [&_h1]:tracking-tight [&_p]:mb-4 [&_p]:text-base [&_p]:leading-7 [&_p]:text-slate-700 [&_ul]:mb-4 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:my-1 [&_li]:text-base [&_li]:leading-7 [&_li]:text-slate-700 [&_a]:text-blue-600 [&_a]:underline [&_a]:underline-offset-4">
                <div className="mb-8 flex justify-end">
                    <Link
                        href="/"
                        className="inline-flex items-center rounded-full border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
                    >
                        Home
                    </Link>
                </div>
                <div dangerouslySetInnerHTML={{ __html: policyHtml }} />
            </article>
        </main>
    );
}