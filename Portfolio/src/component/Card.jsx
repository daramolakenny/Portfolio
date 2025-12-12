

const Card = ({title, icon, description}) => {
  return (
    <div className='bg-[#F1F1F1] rounded-md block relative p-0.5 md:max-w-[20rem] bg-no-repeat py-4'>
        <div className='item-center justify-center text-center pb-2'>
            {icon}
            <header className="text-center text-[#1A1A1A] pb-2 text-[20px] font-bold">{title}</header>
            <p className="text-[16px] px-4">
              {description}
            </p>
        </div>
    </div>
  )
}

export default Card