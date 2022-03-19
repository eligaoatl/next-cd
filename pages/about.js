import Link from 'next/link'

export default function AboutPage() {
  return (
    <div>
        <h1>About this application</h1>
        <p>A common platform for CICD</p>
        <p>Version: 1.0.0</p>
        <Link href="/">Back to home closeby</Link>
    </div>
  )
}
