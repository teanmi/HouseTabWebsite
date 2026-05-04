"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

const apiBaseUrl =
    process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:3000";

export default function DeleteAccountPage() {
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = String(formData.get("email") || "").trim();
        const password = String(formData.get("password") || "");
        const statusEl = document.getElementById("status");
        const submitBtn = document.getElementById(
            "submitButton",
        ) as HTMLButtonElement;

        if (!statusEl || !submitBtn) return;

        statusEl.className = "status";
        statusEl.textContent = "";
        submitBtn.disabled = true;
        submitBtn.textContent = "Deleting...";

        try {
            const response = await fetch(`${apiBaseUrl}/delete-account`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email, password }),
            });

            const payload = await response.json().catch(() => ({}));

            if (!response.ok) {
                throw new Error(
                    payload.message || "We could not delete that account.",
                );
            }

            e.currentTarget.reset();
            statusEl.textContent =
                payload.message ||
                "Your account has been deleted successfully.";
            statusEl.className = "status success";
        } catch (error) {
            statusEl.textContent =
                error instanceof Error
                    ? error.message
                    : "Something went wrong.";
            statusEl.className = "status error";
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = "Delete account";
        }
    };

    return (
        <main className="min-h-screen bg-slate-100 px-4 py-8 flex items-center justify-center">
            <section className="w-full max-w-2xl bg-white rounded-3xl shadow-lg p-8 border border-slate-200">
                <style>{`
                    :root {
                        color-scheme: light;
                    }

                    .eyebrow {
                        display: inline-flex;
                        align-items: center;
                        gap: 8px;
                        padding: 8px 12px;
                        border-radius: 999px;
                        background: #fee2e2;
                        color: #b91c1c;
                        font-size: 14px;
                        font-weight: 700;
                        margin-bottom: 18px;
                    }

                    h1 {
                        margin: 0 0 12px;
                        font-size: clamp(28px, 4vw, 40px);
                        line-height: 1.1;
                        color: #0f172a;
                    }

                    p {
                        margin: 0 0 16px;
                        line-height: 1.6;
                        color: #64748b;
                    }

                    .notice {
                        border: 1px solid #dbe3f0;
                        background: #f8fafc;
                        border-radius: 18px;
                        padding: 16px;
                        margin: 24px 0;
                    }

                    .notice strong {
                        display: block;
                        margin-bottom: 8px;
                        color: #0f172a;
                    }

                    form {
                        display: grid;
                        gap: 16px;
                    }

                    label {
                        display: grid;
                        gap: 8px;
                        font-weight: 600;
                        color: #0f172a;
                    }

                    input[type='email'],
                    input[type='password'] {
                        width: 100%;
                        border: 1px solid #dbe3f0;
                        border-radius: 14px;
                        padding: 14px 16px;
                        font-size: 16px;
                        background: #fff;
                        color: #0f172a;
                    }

                    .checkbox-row {
                        display: flex;
                        gap: 10px;
                        align-items: flex-start;
                        font-size: 15px;
                        color: #64748b;
                        line-height: 1.5;
                    }

                    .actions {
                        display: flex;
                        gap: 12px;
                        flex-wrap: wrap;
                        align-items: center;
                    }

                    button {
                        appearance: none;
                        border: 0;
                        border-radius: 14px;
                        padding: 14px 18px;
                        font-size: 16px;
                        font-weight: 700;
                        cursor: pointer;
                        transition: transform 0.12s ease, background-color 0.12s ease;
                    }

                    button:hover {
                        transform: translateY(-1px);
                    }

                    button:disabled {
                        cursor: not-allowed;
                        opacity: 0.7;
                        transform: none;
                    }

                    .danger {
                        background: #ef4444;
                        color: #fff;
                    }

                    .danger:hover {
                        background: #dc2626;
                    }

                    .secondary {
                        background: #e2e8f0;
                        color: #0f172a;
                        text-decoration: none;
                        display: inline-flex;
                        align-items: center;
                    }

                    .status {
                        border-radius: 14px;
                        padding: 14px 16px;
                        display: none;
                        line-height: 1.5;
                    }

                    .status.error {
                        display: block;
                        background: #fef2f2;
                        color: #b91c1c;
                    }

                    .status.success {
                        display: block;
                        background: #ecfdf5;
                        color: #16a34a;
                    }

                    .footer-links {
                        margin-top: 18px;
                        font-size: 14px;
                        color: #0f172a;
                    }

                    .footer-links a {
                        color: #4338ca;
                    }

                    .home-button {
                        display: inline-flex;
                        align-items: center;
                        padding: 8px 16px;
                        border-radius: 999px;
                        background: transparent;
                        border: 1px solid #dbe3f0;
                        color: #1e293b;
                        font-size: 14px;
                        font-weight: 500;
                        text-decoration: none;
                        cursor: pointer;
                        transition: all 0.15s ease;
                    }

                    .home-button:hover {
                        border-color: #cbd5e1;
                        background-color: #f9fafb;
                    }

                    .home-container {
                        display: flex;
                        justify-content: flex-end;
                        margin-bottom: 18px;
                    }

                    @media (max-width: 640px) {
                        .actions {
                            flex-direction: column;
                            align-items: stretch;
                        }

                        button,
                        .secondary {
                            width: 100%;
                            justify-content: center;
                        }
                    }
                `}</style>

                <div className="home-container">
                    <Link href="/" className="home-button">
                        Home
                    </Link>
                </div>
                <div className="eyebrow">Account deletion</div>
                <h1>Delete your HouseTab account</h1>
                <p>
                    Use this page to permanently delete your HouseTab account.
                    Enter the email and password tied to the account you want
                    removed.
                </p>

                <div className="notice">
                    <strong>What happens next</strong>
                    <p>
                        Your account will be removed, your house memberships
                        will be cleaned up, and any houses you own will be
                        reassigned to another member when possible or removed if
                        no other member exists.
                    </p>
                </div>

                <div
                    id="status"
                    className="status"
                    role="status"
                    aria-live="polite"
                ></div>

                <form onSubmit={handleSubmit}>
                    <label>
                        Email address
                        <input
                            type="email"
                            name="email"
                            autoComplete="email"
                            required
                        />
                    </label>

                    <label>
                        Password
                        <input
                            type="password"
                            name="password"
                            autoComplete="current-password"
                            required
                        />
                    </label>

                    <label className="checkbox-row">
                        <input type="checkbox" name="confirm" required />
                        <span>
                            I understand that deleting my account is permanent
                            and cannot be undone.
                        </span>
                    </label>

                    <div className="actions">
                        <button
                            id="submitButton"
                            type="submit"
                            className="danger"
                        >
                            Delete account
                        </button>
                        <button
                            type="button"
                            className="secondary"
                            onClick={() => router.push("/privacy-policy")}
                        >
                            View privacy policy
                        </button>
                    </div>
                </form>

                <div className="footer-links">
                    Need help? Contact support through your app store listing or
                    the HouseTab support channel.
                </div>
            </section>
        </main>
    );
}
