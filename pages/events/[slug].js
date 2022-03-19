import { useRouter } from "next/router"

export default function BuildEvent() {
  const router = useRouter()
  console.log(router)
  
  return (
    <div>
      <h1>Build Event 1: starting build</h1>
      <h3>Event ID: {router.query.slug}</h3>
      <button onClick={
        () => router.push("/about")
      }>Back to About Us</button>
    </div>
  )
}
