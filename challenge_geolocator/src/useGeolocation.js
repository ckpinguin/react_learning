import { useState } from "react"

export function useGeoLocation() {
  const [isLoading, setIsLoading] = useState(false)
  const [position, setPosition] = useState({})
  const [error, setError] = useState(null)

  function getPosition() {
    if (!navigator.geolocation)
      setError("Your browser does not support geolocation")

    setIsLoading(true)
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
        })
        setIsLoading(false)
      },
      (error) => {
        setError(error.message)
        setIsLoading(false)
      },
    )
  }

  return { position, isLoading, error, getPosition }
}
