import React, { Component } from 'react'

const ICON = "M 256 0 C 156.748 0 76 80.748 76 180 c 0 33.534 9.289 66.26 26.869 94.652 l 142.885 230.257 c 2.737 4.411 7.559 7.091 12.745 7.091 c 0.04 0 0.079 0 0.119 0 c 5.231 -0.041 10.063 -2.804 12.75 -7.292 L 410.611 272.22 C 427.221 244.428 436 212.539 436 180 C 436 80.748 355.252 0 256 0 Z M 384.866 256.818 L 258.272 468.186 l -129.905 -209.34 C 113.734 235.214 105.8 207.95 105.8 180 c 0 -82.71 67.49 -150.2 150.2 -150.2 S 406.1 97.29 406.1 180 C 406.1 207.121 398.689 233.688 384.866 256.818 Z"

const pinStyle ={ 
    cursor: 'pointer',
    fill: '#d00',
    stroke: 'none'
}

export class Pin extends Component {
  render() {
      const {size=20, onClick} = this.props
    return (
      <div>
          <svg height={size} viewBox = '0 0 24 24'
          style={{...pinStyle, transform:`translate(${-size/2}px,${-size}px)`}}
        onClick={onClick}>
        <path d={ICON}/>
        </svg>
      </div>
    )
  }
}

export default Pin
