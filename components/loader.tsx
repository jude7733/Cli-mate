import { Skeleton } from "./ui/skeleton";

export const Loader = () => {
  return (
    <div className="flex flex-col space-y-3 w-full h-full">
      <Skeleton className="h-80 w-full" />
      <Skeleton className="rounded-xl w-full h-96" />
      <div className="space-y-4">
        <Skeleton className="h-10 w-full" />
      </div>
    </div>
  );
}
