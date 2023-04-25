import React from 'react'
import Svg, { Path } from 'react-native-svg'

const PokemonPageImage = () => {
  return (
        <Svg width="200" height="200" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
            <rect width="200" height="200" fill="url(#pattern0)"/>
                <defs>
                    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                        <use xlink:href="#image0_1458_7" transform="scale(0.0025)"/>
                    </pattern>
                <image id="image0_1458_7" width="400" height="400" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZAAAAGQCAMAAAC3Ycb+AAAAAXNSR0IB2cksfwAAAAlwSFlzAAALEwAACxMBAJqcGAAAAwBQTFRFAAAAZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZmZm+zfHiAAAAQB0Uk5TABNEHA0EMMGSbiYBg//RTwYYxudmEjfm43IPafL83WgMChQirtZXBzaLtLaz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"/>
            </defs>
        </Svg>
  )
}

export default PokemonPageImage