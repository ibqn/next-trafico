import Image from "next/image"

export const SliderCard = ({ client }) => {
  const { name, message, image } = client

  return (
    <div>
      <p>{message}</p>
      <div>
        <Image src={image} width="60" height="60" alt="Image of client" />
        <span>{name}</span>
      </div>
    </div>
  )
}
