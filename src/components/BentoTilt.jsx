import React from 'react'

const BentoTilt = ({children, className = ''}) => {

    const [transformStyle, setTransformStyle] = React.useState('')

    const itemRef = React.useRef(null)
    const handleMouseMove = (e) => {
        if(!itemRef.current) return;
        const {left, top, width, height} = itemRef.current.getBoundingClientRect()
        const relativeX = (e.clientX - left) / width
        const relativeY = (e.clientY - top) / height

        const tiltX = (relativeY - 0.5) * 5
        const tiltY = (relativeX - 0.5) * -5

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.99, 0.99, 0.99) `
        setTransformStyle(newTransform)
    }
    const handleMouseLeave = (e) => {
        setTransformStyle('rotateX(0deg) rotateY(0deg)')
    }
    return (
        <div 
            className={`transition-all ease-in-out ${className}`} 
            ref={itemRef} 
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{transform: transformStyle}}
        >
        {children}</div>
    )
}

export default BentoTilt