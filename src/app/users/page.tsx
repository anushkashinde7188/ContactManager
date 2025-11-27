import db from "@/app/_data/db.json";

export default function UsersPage() {
  const users = db.users ?? [];
  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Users</h1>
      {users.length === 0 ? (
        <p className="text-gray-600">No users found.</p>
      ) : (
        <ul className="space-y-2">
          {users.map((u: any) => (
            <li key={u.id} className="border rounded p-3">
              <div className="font-medium">{u.username}</div>
              <div className="text-sm text-gray-600">{u.email}</div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
