export const defaultNodeColor = '#b3b3b3'
export const defaultNodeSize = 4
export const defaultLinkColor = '#666666'
export const defaultLinkWidth = 1
export const defaultBackgroundColor = '#222222'

export const defaultConfigValues = {
  spaceSize: 4096,
  nodeSizeMultiplier: 1,
  linkWidthMultiplier: 1,
  arrowSizeMultiplier: 1,
  renderLinks: true,
  arrowLinks: true,
  minOpaqueLinkDist: 50,
  maxTransparentLinkDist: 150,
  clampLinkMinOpacity: 0.25,
  simulation: {
    decay: 1000,
    gravity: 0,
    center: 0,
    repulsion: 0.1,
    repulsionTheta: 1.7,
    repulsionQuadtreeLevels: 12,
    linkSpring: 1,
    linkDistance: 2,
    linkDistRandomVariationRange: [1, 1.2],
    repulsionFromMouse: 2,
    friction: 0.85,
  },
  showFPSMonitor: false,
  pixelRatio: 2,
}
