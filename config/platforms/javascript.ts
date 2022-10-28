import StyleDictionary from 'style-dictionary'
import {PlatformInitializer} from '../../types/PlatformInitializer'
import {isSource} from '../filters/isSource'

export const platformJs: PlatformInitializer = (outputFile, prefix, buildPath): StyleDictionary.Platform => ({
  prefix,
  buildPath,
  transforms: ['name/cti/camel', 'color/hex', 'color/rgbAlpha'],
  options: {
    basePxFontSize: 16
  },
  files: [
    {
      format: 'javascript/commonJs',
      destination: outputFile,
      filter: isSource
    }
  ]
})
