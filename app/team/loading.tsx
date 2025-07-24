import { Skeleton } from "@/components/ui/skeleton"

export default function TeamLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/20">
      {/* Hero Section Skeleton */}
      <section className="relative py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Skeleton className="h-12 sm:h-16 w-3/4 mx-auto mb-4 sm:mb-6" />
          <Skeleton className="h-6 w-full max-w-3xl mx-auto mb-2" />
          <Skeleton className="h-6 w-2/3 max-w-3xl mx-auto" />
        </div>
      </section>

      {/* Leadership Team Skeleton */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Skeleton className="h-8 w-64 mx-auto mb-4" />
            <Skeleton className="h-4 w-96 mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
            {[1, 2].map((i) => (
              <div key={i} className="bg-card rounded-lg p-6 border">
                <div className="text-center">
                  <Skeleton className="w-32 h-32 rounded-full mx-auto mb-4" />
                  <Skeleton className="h-6 w-32 mx-auto mb-2" />
                  <Skeleton className="h-4 w-24 mx-auto mb-4" />
                  <Skeleton className="h-4 w-full mb-2" />
                  <Skeleton className="h-4 w-3/4 mx-auto mb-4" />
                  <div className="flex justify-center space-x-2">
                    <Skeleton className="h-8 w-8 rounded" />
                    <Skeleton className="h-8 w-8 rounded" />
                    <Skeleton className="h-8 w-8 rounded" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tech Team Skeleton */}
      <section className="py-12 sm:py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <Skeleton className="h-8 w-64 mx-auto mb-4" />
            <Skeleton className="h-4 w-96 mx-auto" />
          </div>

          <div className="mb-16">
            <Skeleton className="h-6 w-48 mx-auto mb-8" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-card rounded-lg p-6 border">
                  <div className="text-center">
                    <Skeleton className="w-32 h-32 rounded-full mx-auto mb-4" />
                    <Skeleton className="h-6 w-32 mx-auto mb-2" />
                    <Skeleton className="h-4 w-24 mx-auto mb-4" />
                    <Skeleton className="h-4 w-full mb-2" />
                    <Skeleton className="h-4 w-3/4 mx-auto mb-4" />
                    <div className="flex flex-wrap gap-1 justify-center mb-4">
                      {[1, 2, 3, 4].map((j) => (
                        <Skeleton key={j} className="h-5 w-16 rounded-full" />
                      ))}
                    </div>
                    <div className="flex justify-center space-x-2">
                      <Skeleton className="h-8 w-8 rounded" />
                      <Skeleton className="h-8 w-8 rounded" />
                      <Skeleton className="h-8 w-8 rounded" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
