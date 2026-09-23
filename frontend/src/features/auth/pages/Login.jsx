import { Link } from "react-router-dom";

const Terms = () => {
  const handleReload = (e) => {
        e.preventDefault()
    }

    return (
        <div className="flex min-h-[calc(100vh-9rem)] items-center justify-center bg-white px-4 py-12 text-[#111417] transition-colors dark:bg-[#111417] dark:text-white sm:px-6">
            <section className="w-full max-w-md rounded-2xl border border-[#e4e7ec] bg-[#f5f6f7] p-6 shadow-[0_20px_55px_rgba(17,20,23,0.08)] dark:border-[#3a4048] dark:bg-[#2a2e34] dark:shadow-[0_20px_55px_rgba(0,0,0,0.2)] sm:p-9">
                <div className="mb-8">
                    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#ff6a00]">HireLens-AI</p>
                    <h1 className="text-3xl font-bold tracking-tight">Welcome back</h1>
                    <p className="mt-3 text-sm leading-6 text-[#667085] dark:text-[#a1a6ad]">Sign in to your HireLens-AI account and continue building smarter hiring workflows.</p>
                </div>

                <form className="space-y-5" onSubmit={handleReload}>
                    <div>
                        <label htmlFor="email" className="mb-2 block text-sm font-medium">Email Address</label>
                        <input id="email" type="email" placeholder="Enter your email address" className="w-full rounded-lg border border-[#d0d5dd] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#ff6a00] focus:ring-2 focus:ring-[#ff6a00]/20 dark:border-[#515861] dark:bg-[#111417] dark:placeholder:text-[#a1a6ad]" />
                    </div> 
                    <div>
                        <label htmlFor="password" className="mb-2 block text-sm font-medium">Password</label>
                        <input id="password" type="password" placeholder="Enter your password" className="w-full rounded-lg border border-[#d0d5dd] bg-white px-4 py-3 text-sm outline-none transition focus:border-[#ff6a00] focus:ring-2 focus:ring-[#ff6a00]/20 dark:border-[#515861] dark:bg-[#111417] dark:placeholder:text-[#a1a6ad]" />
                    </div>
                    <button type="submit" className="w-full rounded-lg bg-[#ff6a00] px-4 py-3 text-sm font-semibold text-white transition hover:bg-[#e85f00] focus:outline-none focus:ring-2 focus:ring-[#ff6a00] focus:ring-offset-2 focus:ring-offset-[#f5f6f7] dark:focus:ring-offset-[#2a2e34]">Sign In</button>
                    <p className="text-center text-sm text-[#667085] dark:text-[#a1a6ad]">Don't have an account? <Link to="/register" className="font-semibold text-[#ff6a00] hover:underline">Create an account</Link>.</p>
                </form>
            </section>
        </div>

    )
}

export default Terms;