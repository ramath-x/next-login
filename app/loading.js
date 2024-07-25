export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="fixed inset-0 flex items-center justify-center min-h-screen bg-gray-100 opacity-70">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  );
}
