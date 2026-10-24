import type { NextConfig } from 'next'
import { PHASE_DEVELOPMENT_SERVER } from 'next/constants'
/** 开发缓存与生产产物隔离，允许本地同时预览与验收。 */
export default function config(phase: string): NextConfig {
  return { devIndicators: false, distDir: phase === PHASE_DEVELOPMENT_SERVER ? '.next-dev' : '.next' }
}
