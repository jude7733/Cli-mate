import Navbar from "@/components/navbar"
import { Card } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-background">
      <main className="flex-1 overflow-auto p-4 md:p-6">
        <div className="bg-card rounded-lg shadow-lg p-6 flex flex-col items-center gap-4">
          <div className="flex items-center gap-4">
            <img
              src="/placeholder.svg"
              alt="Weather Icon"
              className="w-24 h-24"
              width="96"
              height="96"
              style={{ aspectRatio: "96/96", objectFit: "cover" }}
            />
            <div className="text-center">
              <div className="text-5xl font-bold">72°</div>
              <div className="text-lg text-muted-foreground">Sunny</div>
            </div>
          </div>
          <div className="text-sm text-muted-foreground">Last updated: 2:30 PM</div>
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <Card className="bg-card text-card-foreground p-4 flex flex-col items-center">
            <div className="text-lg font-bold">Tomorrow</div>
            <img
              src="/placeholder.svg"
              alt="Weather Icon"
              className="w-12 h-12 my-2"
              width="48"
              height="48"
              style={{ aspectRatio: "48/48", objectFit: "cover" }}
            />
            <div className="flex items-center gap-2 text-lg">
              <div>68°</div>
              <div className="text-muted-foreground">/</div>
              <div>52°</div>
            </div>
          </Card>
          <Card className="bg-card text-card-foreground p-4 flex flex-col items-center">
            <div className="text-lg font-bold">Thursday</div>
            <img
              src="/placeholder.svg"
              alt="Weather Icon"
              className="w-12 h-12 my-2"
              width="48"
              height="48"
              style={{ aspectRatio: "48/48", objectFit: "cover" }}
            />
            <div className="flex items-center gap-2 text-lg">
              <div>72°</div>
              <div className="text-muted-foreground">/</div>
              <div>58°</div>
            </div>
          </Card>
          <Card className="bg-card text-card-foreground p-4 flex flex-col items-center">
            <div className="text-lg font-bold">Friday</div>
            <img
              src="/placeholder.svg"
              alt="Weather Icon"
              className="w-12 h-12 my-2"
              width="48"
              height="48"
              style={{ aspectRatio: "48/48", objectFit: "cover" }}
            />
            <div className="flex items-center gap-2 text-lg">
              <div>75°</div>
              <div className="text-muted-foreground">/</div>
              <div>62°</div>
            </div>
          </Card>
          <Card className="bg-card text-card-foreground p-4 flex flex-col items-center">
            <div className="text-lg font-bold">Saturday</div>
            <img
              src="/placeholder.svg"
              alt="Weather Icon"
              className="w-12 h-12 my-2"
              width="48"
              height="48"
              style={{ aspectRatio: "48/48", objectFit: "cover" }}
            />
            <div className="flex items-center gap-2 text-lg">
              <div>78°</div>
              <div className="text-muted-foreground">/</div>
              <div>65°</div>
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}
