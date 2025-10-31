
"use client";

import React, { useState } from "react";

type Props = {
	onSuccess?: (email: string) => void;
};

export default function SignUp({ onSuccess }: Props) {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirm, setConfirm] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);

	function validate() {
		if (!name.trim()) return "Name is required";
		if (!email.trim()) return "Email is required";
		if (!password) return "Password is required";
		if (password.length < 6) return "Password must be at least 6 characters";
		if (password !== confirm) return "Passwords do not match";
		return "";
	}

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		setError("");
		const v = validate();
		if (v) {
			setError(v);
			return;
		}

		// Demo submit - replace with real API call
		setLoading(true);
		setTimeout(() => {
			setLoading(false);
			if (onSuccess) onSuccess(email);
			else alert(`Account created for ${email}`);
			setName("");
			setEmail("");
			setPassword("");
			setConfirm("");
		}, 800);
	}

	return (
		<div className="min-h-screen flex items-center justify-center bg-gray-50 px-4"> {/* This line is actually wraps the whole signup component to center it on the screen */}
			<div className="w-full max-w-md bg-white p-6 rounded-lg shadow-sm">
				<h2 className="text-xl font-semibold text-gray-900">Create account</h2>
				<p className="text-sm text-gray-600 mt-1">Sign up to get started</p>

				{error && <div className="mt-4 text-sm text-red-600">{error}</div>}

				<form onSubmit={handleSubmit} className="mt-6 space-y-4" aria-label="Sign up form">
				<div>
					<label className="block text-sm font-medium text-gray-700">Full name</label>
					<input
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
						className="mt-1 block w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Your full name"
						required
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700">Email</label>
					<input
						type="email"
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className="mt-1 block w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="you@example.com"
						required
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700">Password</label>
					<input
						type="password"
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						className="mt-1 block w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Create a password"
						required
						minLength={6}
					/>
				</div>

				<div>
					<label className="block text-sm font-medium text-gray-700">Confirm password</label>
					<input
						type="password"
						value={confirm}
						onChange={(e) => setConfirm(e.target.value)}
						className="mt-1 block w-full px-3 py-2 border border-gray-200 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
						placeholder="Repeat your password"
						required
						minLength={6}
					/>
				</div>

				<button
					type="submit"
					disabled={loading}
					className="w-full py-2 px-4 bg-green-600 text-white rounded-md font-medium hover:bg-green-700 disabled:opacity-60"
				>
					{loading ? "Creating account..." : "Create account"}
				</button>
				</form>
			</div>
		</div>
	);
}
