import React from 'react'

const WidthLimiter: React.FC<{ width: number, children: React.ReactNode }> = (props): JSX.Element => {
	return (
		<div style={{width: + props.width+"px"}}>
			{props.children}
		</div>
	)
}

export default WidthLimiter