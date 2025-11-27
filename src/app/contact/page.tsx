import Link from "next/link";

export default function ContactsPage() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold mb-4">Contacts</h1>
      <p className="text-gray-600 mb-4">This is the contacts index page.</p>
      <div className="flex gap-3">
        <Link className="text-blue-600 underline" href="/contact/new">Add New Contact</Link>
        <Link className="text-blue-600 underline" href="/">Go Home</Link>
      </div>
    </main>
  );
}
