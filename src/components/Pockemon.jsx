import axios from "axios"
import { useEffect, useState } from "react"

export default function Pockemon({ data, name }) {
  const [imgURL, setImgURL] = useState()

  useEffect(() => {
    const fetchImage = async () => {
      const response = await axios.get(data.url)
      console.log(response.data.sprites.front_default);
      setImgURL(response.data.sprites.front_default)
    }
    fetchImage()
  }, [])

  return (
    <div className="pockemon-item">
      <img className="pockemon-image" src={imgURL} alt={name} />
      <p className="pockemon-name">{name}</p>
    </div>
  )
}
