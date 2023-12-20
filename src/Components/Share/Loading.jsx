export default function Loading() {
  return (
    <div className="flex items-center justify-center flex-col gap-3">
      <h3 className="text-2xl font-bold">Loading</h3>
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  );
}
