import db from "@/app/_data/db.json";

export default function ContactsPage() {
  const contacts = db.contacts ?? [];
  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Contacts</h1>
      {contacts.length === 0 ? (
        <p className="text-gray-600">No contacts found.</p>
      ) : (
        <ul className="space-y-2">
          {contacts.map((c: any) => (
            <li key={c.id} className="border rounded p-3">
              <div className="font-medium">{c.name}</div>
              <div className="text-sm text-gray-600">{c.email}</div>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
