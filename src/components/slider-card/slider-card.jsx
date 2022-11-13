import Image from "next/image"

export const SliderCard = ({ client }) => {
  const { name, message, image } = client

  return (
    <div className="flex h-[360px] flex-col justify-between rounded-[10px] bg-white px-[50px] pt-[60px] pb-[40px] drop-shadow-primary">
      <p className="font-light leading-[30px]">{message}</p>
      <div className="flex items-center justify-center gap-x-5">
        <div className="aspect-square h-[60px] w-[60px]">
          <Image
            src={image}
            width="60"
            height="60"
            className="rounded-full"
            alt="Image of client"
          />
        </div>

        <span className="font-semibold">{name}</span>
      </div>
    </div>
  )
}
