import { useEffect, useState } from "react"

export default function PreLoader() {
  const [show, setShow] = useState(true)

  useEffect(() => {
    const t = setTimeout(() => setShow(false), 1200)
    return () => clearTimeout(t)
  }, [])

  if (!show) return null

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
      <p style={{ color: "white" }}>Loading...</p>
    </div>
  )
}