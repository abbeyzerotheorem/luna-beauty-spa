import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Container } from "@/components/ui/container"
import clientData from "@/data/client"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-primary">
      <Container className="text-center">
        <h1 className="text-9xl font-serif font-bold text-accent mb-4">404</h1>
        <h2 className="text-3xl font-serif font-semibold text-text mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Sorry, we couldn't find the page you're looking for. 
          Let's get you back to relaxation.
        </p>
        <Link href="/">
          <Button size="lg">Return Home</Button>
        </Link>
      </Container>
    </div>
  )
}
