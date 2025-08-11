import { Helmet } from "react-helmet-async";
import { useState } from "react";

const Login = () => {
  const [role, setRole] = useState("student");

  return (
    <main className="container mx-auto max-w-md py-12">
      <Helmet>
        <title>Portal Login | Lilabai T. Dhokane Senior College</title>
        <meta name="description" content="Login to the student, teacher, or admin portals of Lilabai Tulshiramji Dhokane Senior College." />
        <link rel="canonical" href="/login" />
      </Helmet>
      <h1 className="mb-6 text-3xl font-heading font-semibold">Portal Login</h1>
      <div className="rounded-lg border bg-card p-6 shadow-sm">
        <label className="text-sm font-medium">Role</label>
        <select
          className="mt-1 w-full rounded-md border bg-background p-2"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="admin">Admin</option>
        </select>
        <div className="mt-4 grid gap-3">
          <input className="w-full rounded-md border bg-background p-2" placeholder="Email" />
          <input className="w-full rounded-md border bg-background p-2" type="password" placeholder="Password" />
          <button
            className="rounded-md bg-primary px-4 py-2 font-medium text-primary-foreground hover:opacity-90"
            onClick={() => {
              const path = role === 'admin' ? '/dashboard/admin' : role === 'teacher' ? '/dashboard/teacher' : '/dashboard/student';
              window.location.href = path;
            }}
          >
            Login
          </button>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">Note: Authentication will be connected to backend in a later step.</p>
      </div>
    </main>
  );
};

export default Login;
