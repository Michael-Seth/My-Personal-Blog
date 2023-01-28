import Image from 'next/image'
import profilePic from "../assets/image.me.jpg"
function Logo(props: any) {
    const {renderDefault, title} = props
  return (
    <div className='flex items-center space-x-2'>
        <Image 
        className="rounded-full object-cover"
        height={50}
        width={50}
        src={profilePic}
        alt="logo"
        />
        <>{props.renderDefault(props)}</>
    </div>
  )
}

export default Logo