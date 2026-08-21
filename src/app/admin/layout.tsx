import "../globals.css";

export const metadata = {
  title: "Admin Panel | Graduate School of Medical Science MNUMS",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-muted antialiased">{children}</body>
    </html>
  );
}
